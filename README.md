# Solidity Toolkit

[![CI](https://github.com/noncept/solidity-toolkit/workflows/CI/badge.svg?branch=master)](https://github.com/noncept/solidity-toolkit/actions/)
[![Coverage Status](https://coveralls.io/repos/github/noncept/solidity-toolkit/badge.svg?branch=master)](https://coveralls.io/github/noncept/solidity-toolkit?branch=master)
[![MIT licensed](https://img.shields.io/github/license/noncept/solidity-toolkit.svg)](https://github.com/noncept/solidity-toolkit/blob/master/LICENSE)


A toolkit for Solidity Smart Contracts development.


## Development

### Install dependencies

```bash
npm install
```

## Usage

Open the Hardhat console

```bash
npm run hardhat:console
```

### Compile

```bash
npm run hardhat:compile
```

### Test

```bash
npm run hardhat:test
```

### Code Coverage

```bash
npm run coverage
```

## Linter

Use Solhint

```bash
npm run lint:sol
```

Use ESLint

```bash
npm run lint:js
```

Use Prettier and fix .js and .sol

```bash
npm run lint:fix
```

## Use web3 console in your browser (i.e. to use MetaMask)

By default, it takes contracts compiled with Truffle.

To use Hardhat compiled contracts change `./build/contracts` with `./artifacts` in `bs-config.json`

```bash
npm run dev
```

Read how to interact with your Smart Contracts [here](./web-console/README.md).

## Flattener

This allows to flatten the code into a single file

Edit `scripts/flat.sh` to add your contracts

```bash
npm run flat
```

## Analysis

Note: it is better to analyze the flattened code to have a bigger overview on the entire codebase. So run the flattener first.

### Describe

The `describe` command shows a summary of the contracts and methods in the files provided

```bash
surya describe dist/SampleContract.dist.sol
```

### Dependencies

The `dependencies` command outputs the c3-linearization of a given contract's inheirtance graph. Contracts will be listed starting with most-derived, ie. if the same function is defined in more than one contract, the solidity compiler will use the definition in whichever contract is listed first.

```bash
surya dependencies SampleContract dist/SampleContract.dist.sol
```
### Generate Report

Edit `scripts/analyze.sh` to add your contracts

```bash
npm run analyze
```

The `inheritance` command outputs a DOT-formatted graph of the inheritance tree.

The `graph` command outputs a DOT-formatted graph of the control flow.

The `mdreport` command creates a markdown description report with tables comprising information about the system's files, contracts and their functions.

The `sol2uml` generates UML class diagram from Solidity contracts.

## License

Code released under the [MIT License](https://github.com/noncept/solidity-toolkit/blob/master/LICENSE).
