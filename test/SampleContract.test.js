const { BN, constants, expectEvent } = require('@openzeppelin/test-helpers');
const { expectRevertCustomError } = require('./helpers/customError');

const { expect } = require('chai');

const { shouldBehaveLikeTokenRecover } = require('eth-token-recover/test/TokenRecover.behavior');

const SampleContract = artifacts.require('$SampleContract');

contract('SampleContract', function ([owner, manager, anotherAccount]) {
  const value = new BN(1000);

  describe('creating valid contract', function () {
    it('rejects zero address for manager', async function () {
      await expectRevertCustomError(SampleContract.new(constants.ZERO_ADDRESS), 'SampleContractInvalidManager', [
        constants.ZERO_ADDRESS,
      ]);
    });
  });

  describe('once deployed', function () {
    beforeEach(async function () {
      this.contract = await SampleContract.new(manager, { from: owner });
    });

    it('deployer should be contract owner', async function () {
      expect(await this.contract.owner()).to.equal(owner);
    });

    it('manager should be set as provided', async function () {
      expect(await this.contract.manager()).to.equal(manager);
    });

    context('calling the ownerDoesWork function', function () {
      describe('if owner is calling', function () {
        it('emits a WorkDone event', async function () {
          const receipt = await this.contract.ownerDoesWork(value, { from: owner });

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

    context('calling the managerDoesWork function', function () {
      describe('if manager is calling', function () {
        it('emits a WorkDone event', async function () {
          const receipt = await this.contract.managerDoesWork(value, { from: manager });

          await expectEvent.inTransaction(receipt.tx, SampleContract, 'WorkDone', {
            value,
          });
        });
      });

      describe('if another account is calling', function () {
        it('reverts', async function () {
          await expectRevertCustomError(
            this.contract.managerDoesWork(value, { from: anotherAccount }),
            'SampleContractUnauthorizedAccount',
            [anotherAccount],
          );
        });
      });
    });

    context('testing internal methods', function () {
      describe('calling _internalWork', function () {
        it('emits a WorkDone event', async function () {
          const receipt = await this.contract.$_internalWork(value);

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

      shouldBehaveLikeTokenRecover(owner, anotherAccount);
    });
  });
});
