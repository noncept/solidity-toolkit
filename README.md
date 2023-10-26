# Solidity Toolkit

[![CI](https://github.com/noncept/solidity-toolkit/workflows/CI/badge.svg?branch=master)](https://github.com/noncept/solidity-toolkit/actions/)
[![Coverage Status](https://codecov.io/gh/noncept/solidity-toolkit/graph/badge.svg)](https://codecov.io/gh/noncept/solidity-toolkit)
[![MIT licensed](https://img.shields.io/github/license/noncept/solidity-toolkit.svg)](https://github.com/noncept/solidity-toolkit/blob/master/LICENSE)


A toolkit for Solidity Smart Contracts development.

## Development

### Install dependencies

```bash
npm install
```

### Compile

```bash
npm run compile
```

### Test

```bash
npm test
```

### Code Coverage

```bash
npm run coverage
```

### Linter

Check Solidity files

```bash
npm run lint:sol
```

Check JS/TS files

```bash
npm run lint:js
```

Fix JS and Solidity files

```bash
npm run lint:fix
```

## Create Documentation

```bash
npm run docs
```

## Use web3 console in your browser (i.e. to use MetaMask)

By default, it takes contracts compiled with Truffle using the following command.

```bash
npm run truffle:compile
```

To use Hardhat compiled contracts adjust `./build/contracts` with `./artifacts` files in `bs-config.json`

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
