// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "eth-token-recover/contracts/TokenRecover.sol";

/**
 * @title SampleContract
 * @dev Implementation of a Sample Contract
 * @author Vittorio Minacori
 */
contract SampleContract is TokenRecover {
    event WorkDone(uint256 value);

    address private _creator;

    /**
     * @dev Requires that sender is the contract creator.
     */
    modifier onlyCreator() {
        require(_msgSender() == _creator, "SampleContract: Caller is not the creator");
        _;
    }

    /**
     * @dev Create a new contract assigning `creator` to `owner`.
     */
    constructor() {
        _creator = owner();
    }

    /**
     * @dev Return the contract creator.
     * @return An address indicating the creator
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
