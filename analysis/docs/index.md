# Solidity API

## SampleContract

_Implementation of a Sample Contract_

### SampleContractUnauthorizedAccount

```solidity
error SampleContractUnauthorizedAccount(address account)
```

_The caller account is not authorized to perform an operation._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| account | address | The caller account. |

### WorkDone

```solidity
event WorkDone(uint256 value)
```

_Emitted after a work done._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| value | uint256 | An amount to be emitted. |

### onlyCreator

```solidity
modifier onlyCreator()
```

_Requires that sender is the contract creator._

### constructor

```solidity
constructor() public
```

_Create a new contract assigning `_creator` to deployer._

### creator

```solidity
function creator() public view returns (address)
```

_Return the contract creator._

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | An address indicating the creator. |

### creatorDoesWork

```solidity
function creatorDoesWork(uint256 value) public
```

_Does work for creator.
Emits a 'WorkDone' event._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| value | uint256 | Just an amount to be emitted. |

### ownerDoesWork

```solidity
function ownerDoesWork(uint256 value) public
```

_Does work for owner.
Emits a 'WorkDone' event._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| value | uint256 | Just an amount to be emitted. |

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

