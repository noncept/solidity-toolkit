## Sūrya's Description Report

### Files Description Table


|  File Name  |  SHA-1 Hash  |
|-------------|--------------|
| dist/SampleContract.dist.sol | dc40c754aea502ad881159c7c1871c5a844ece78 |


### Contracts Description Table


|  Contract  |         Type        |       Bases      |                  |                 |
|:----------:|:-------------------:|:----------------:|:----------------:|:---------------:|
|     └      |  **Function Name**  |  **Visibility**  |  **Mutability**  |  **Modifiers**  |
||||||
| **Context** | Implementation |  |||
| └ | _msgSender | Internal 🔒 |   | |
| └ | _msgData | Internal 🔒 |   | |
| └ | _contextSuffixLength | Internal 🔒 |   | |
||||||
| **Ownable** | Implementation | Context |||
| └ | <Constructor> | Public ❗️ | 🛑  |NO❗️ |
| └ | owner | Public ❗️ |   |NO❗️ |
| └ | _checkOwner | Internal 🔒 |   | |
| └ | renounceOwnership | Public ❗️ | 🛑  | onlyOwner |
| └ | transferOwnership | Public ❗️ | 🛑  | onlyOwner |
| └ | _transferOwnership | Internal 🔒 | 🛑  | |
||||||
| **IERC165** | Interface |  |||
| └ | supportsInterface | External ❗️ |   |NO❗️ |
||||||
| **IERC721** | Interface | IERC165 |||
| └ | balanceOf | External ❗️ |   |NO❗️ |
| └ | ownerOf | External ❗️ |   |NO❗️ |
| └ | safeTransferFrom | External ❗️ | 🛑  |NO❗️ |
| └ | safeTransferFrom | External ❗️ | 🛑  |NO❗️ |
| └ | transferFrom | External ❗️ | 🛑  |NO❗️ |
| └ | approve | External ❗️ | 🛑  |NO❗️ |
| └ | setApprovalForAll | External ❗️ | 🛑  |NO❗️ |
| └ | getApproved | External ❗️ |   |NO❗️ |
| └ | isApprovedForAll | External ❗️ |   |NO❗️ |
||||||
| **IERC20** | Interface |  |||
| └ | totalSupply | External ❗️ |   |NO❗️ |
| └ | balanceOf | External ❗️ |   |NO❗️ |
| └ | transfer | External ❗️ | 🛑  |NO❗️ |
| └ | allowance | External ❗️ |   |NO❗️ |
| └ | approve | External ❗️ | 🛑  |NO❗️ |
| └ | transferFrom | External ❗️ | 🛑  |NO❗️ |
||||||
| **RecoverERC20** | Implementation |  |||
| └ | _recoverERC20 | Internal 🔒 | 🛑  | |
||||||
| **RecoverERC721** | Implementation |  |||
| └ | _recoverERC721 | Internal 🔒 | 🛑  | |
||||||
| **TokenRecover** | Implementation | Ownable, RecoverERC20, RecoverERC721 |||
| └ | <Constructor> | Public ❗️ | 🛑  | Ownable |
| └ | recoverERC20 | Public ❗️ | 🛑  | onlyOwner |
| └ | recoverERC721 | Public ❗️ | 🛑  | onlyOwner |
||||||
| **SampleContract** | Implementation | TokenRecover |||
| └ | <Constructor> | Public ❗️ | 🛑  | TokenRecover |
| └ | managerDoesWork | External ❗️ | 🛑  | onlyManager |
| └ | ownerDoesWork | External ❗️ | 🛑  | onlyOwner |
| └ | manager | Public ❗️ |   |NO❗️ |
| └ | _internalWork | Internal 🔒 | 🛑  | |
| └ | _onlyManager | Internal 🔒 |   | |


### Legend

|  Symbol  |  Meaning  |
|:--------:|-----------|
|    🛑    | Function can modify state |
|    💵    | Function is payable |
