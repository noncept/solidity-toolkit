const { BN, expectEvent } = require('@openzeppelin/test-helpers');
const { expect } = require('chai');

const { expectRevertCustomError } = require('./helpers/customError');

const { shouldBehaveLikeTokenRecover } = require('eth-token-recover/test/TokenRecover.behavior');

const SampleContract = artifacts.require('$SampleContract');

contract('SampleContract', function ([creator, newOwner, anotherAccount]) {
  const value = new BN(1000);

  beforeEach(async function () {
    this.contract = await SampleContract.new({ from: creator });
  });

  it('message sender should be contract creator', async function () {
    const contractCreator = await this.contract.creator();
    expect(creator).to.equal(contractCreator);
  });

  it('message sender should be contract owner', async function () {
    const contractOwner = await this.contract.owner();
    expect(creator).to.equal(contractOwner);
  });

  context('calling the creatorDoesWork function', function () {
    describe('if creator is calling', function () {
      it('emits a WorkDone event', async function () {
        const receipt = await this.contract.creatorDoesWork(value, { from: creator });

        await expectEvent.inTransaction(receipt.tx, SampleContract, 'WorkDone', {
          value,
        });
      });
    });

    describe('if another account is calling', function () {
      it('reverts', async function () {
        await expectRevertCustomError(
          this.contract.creatorDoesWork(value, { from: anotherAccount }),
          'SampleContractUnauthorizedAccount',
          [anotherAccount],
        );
      });
    });
  });

  context('calling the ownerDoesWork function', function () {
    beforeEach(async function () {
      await this.contract.transferOwnership(newOwner, { from: creator });
    });

    describe('if owner is calling', function () {
      it('emits a WorkDone event', async function () {
        const receipt = await this.contract.ownerDoesWork(value, { from: newOwner });

        await expectEvent.inTransaction(receipt.tx, SampleContract, 'WorkDone', {
          value,
        });
      });
    });

    describe('if another account is calling', function () {
      it('reverts', async function () {
        await expectRevertCustomError(
          this.contract.ownerDoesWork(value, { from: anotherAccount }),
          'OwnableUnauthorizedAccount',
          [anotherAccount],
        );
      });
    });
  });

  context('testing internal methods', function () {
    describe('calling _internalWork', function () {
      it('emits a WorkDone event', async function () {
        const receipt = await this.contract.$_internalWork(value, { from: creator });

        await expectEvent.inTransaction(receipt.tx, SampleContract, 'WorkDone', {
          value,
        });
      });
    });
  });

  context('like a TokenRecover', function () {
    beforeEach(async function () {
      this.instance = this.contract;
    });

    shouldBehaveLikeTokenRecover(creator, anotherAccount);
  });
});
