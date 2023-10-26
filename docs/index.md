# Solidity API

## SampleContract

_Implementation of a Sample Contract_

### WorkDone

```solidity
event WorkDone(uint256 value)
```

_Emitted after a work done._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| value | uint256 | An amount to be emitted. |

### SampleContractUnauthorizedAccount

```solidity
error SampleContractUnauthorizedAccount(address account)
```

_The caller account is not authorized to perform an operation._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| account | address | The caller account. |

### SampleContractInvalidManager

```solidity
error SampleContractInvalidManager(address manager)
```

_The manager is not a valid manager account. (eg. `address(0)`)_

### onlyManager

```solidity
modifier onlyManager()
```

_Requires that sender is the contract manager._

### constructor

```solidity
constructor(address manager_) public
```

_Create a new contract assigning provided `manager` and assigning `owner` to deployer._

### managerDoesWork

```solidity
function managerDoesWork(uint256 value) external
```

_Does work for manager.
Emits a 'WorkDone' event._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| value | uint256 | Just an amount to be emitted. |

### ownerDoesWork

```solidity
function ownerDoesWork(uint256 value) external
```

_Does work for owner.
Emits a 'WorkDone' event._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| value | uint256 | Just an amount to be emitted. |

### manager

```solidity
function manager() public view returns (address)
```

_Return the contract manager._

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | An address indicating the manager. |

### _internalWork

```solidity
function _internalWork(uint256 value) internal
```

_Low level work method.
Emits a 'WorkDone' event._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| value | uint256 | Just an amount to be emitted. |

