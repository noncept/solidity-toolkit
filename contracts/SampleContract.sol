// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import {TokenRecover} from "eth-token-recover/contracts/TokenRecover.sol";

/**
 * @title SampleContract
 * @dev Implementation of a Sample Contract
 * @author Vittorio Minacori
 */
contract SampleContract is TokenRecover {
    // store the manager address
    address private immutable _manager;

    /**
     * @dev Emitted after a work done.
     * @param value An amount to be emitted.
     */
    event WorkDone(uint256 value);

    /**
     * @dev The caller account is not authorized to perform an operation.
     * @param account The caller account.
     */
    error SampleContractUnauthorizedAccount(address account);

    /**
     * @dev The manager is not a valid manager account. (eg. `address(0)`)
     */
    error SampleContractInvalidManager(address manager);

    /**
     * @dev Requires that sender is the contract manager.
     */
    modifier onlyManager() {
        if (manager() != _msgSender()) {
            revert SampleContractUnauthorizedAccount(_msgSender());
        }
        _;
    }

    /**
     * @dev Create a new contract assigning provided `manager` and assigning `owner` to deployer.
     */
    constructor(address manager_) TokenRecover(_msgSender()) {
        if (manager_ == address(0)) {
            revert SampleContractInvalidManager(manager_);
        }

        _manager = manager_;
    }

    /**
     * @dev Does work for manager.
     * Emits a 'WorkDone' event.
     * @param value Just an amount to be emitted.
     */
    function managerDoesWork(uint256 value) external onlyManager {
        _internalWork(value);
    }

    /**
     * @dev Does work for owner.
     * Emits a 'WorkDone' event.
     * @param value Just an amount to be emitted.
     */
    function ownerDoesWork(uint256 value) external onlyOwner {
        _internalWork(value);
    }

    /**
     * @dev Return the contract manager.
     * @return An address indicating the manager.
     */
    function manager() public view returns (address) {
        return _manager;
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
