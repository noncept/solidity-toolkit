// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import {TokenRecover} from "eth-token-recover/contracts/TokenRecover.sol";

/**
 * @title SampleContract
 * @dev Implementation of a Sample Contract
 * @author Vittorio Minacori
 */
contract SampleContract is TokenRecover {
    address private _creator;

    /**
     * @dev The caller account is not authorized to perform an operation.
     * @param account The caller account.
     */
    error SampleContractUnauthorizedAccount(address account);

    /**
     * @dev Emitted after a work done.
     * @param value An amount to be emitted.
     */
    event WorkDone(uint256 value);

    /**
     * @dev Requires that sender is the contract creator.
     */
    modifier onlyCreator() {
        if (creator() != _msgSender()) {
            revert SampleContractUnauthorizedAccount(_msgSender());
        }
        _;
    }

    /**
     * @dev Create a new contract assigning `_creator` to deployer.
     */
    constructor() TokenRecover(_msgSender()) {
        _creator = _msgSender();
    }

    /**
     * @dev Return the contract creator.
     * @return An address indicating the creator.
     */
    function creator() public view returns (address) {
        return _creator;
    }

    /**
     * @dev Does work for creator.
     * Emits a 'WorkDone' event.
     * @param value Just an amount to be emitted.
     */
    function creatorDoesWork(uint256 value) public onlyCreator {
        _internalWork(value);
    }

    /**
     * @dev Does work for owner.
     * Emits a 'WorkDone' event.
     * @param value Just an amount to be emitted.
     */
    function ownerDoesWork(uint256 value) public onlyOwner {
        _internalWork(value);
    }

    /**
     * @dev Low level work method.
     * Emits a 'WorkDone' event.
     * @param value Just an amount to be emitted.
     */
    function _internalWork(uint256 value) internal {
        emit WorkDone(value);
    }
}
