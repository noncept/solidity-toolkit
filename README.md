# Solidity Toolkit

[![CI](https://github.com/noncept/solidity-toolkit/workflows/CI/badge.svg?branch=master)](https://github.com/noncept/solidity-toolkit/actions/)
[![Coverage Status](https://codecov.io/gh/noncept/solidity-toolkit/graph/badge.svg)](https://codecov.io/gh/noncept/solidity-toolkit)
[![MIT licensed](https://img.shields.io/github/license/noncept/solidity-toolkit.svg)](https://github.com/noncept/solidity-toolkit/blob/master/LICENSE)


A toolkit for Solidity Smart Contracts development.

## Install

```bash
git clone https://github.com/noncept/solidity-toolkit.git
```

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

Check Solidity files.

```bash
npm run lint:sol
```

Check JS/TS files.

```bash
npm run lint:js
```

Fix JS and Solidity files.

```bash
npm run lint:fix
```

## Create Documentation

```bash
npm run docs
```

- [Example Documentation](https://github.com/noncept/solidity-toolkit/blob/master/docs/index.md)

## Use web3 console in your browser (i.e. to use MetaMask)

```bash
npm run dev
```

Read how to interact with your Smart Contracts [here](https://github.com/noncept/solidity-toolkit/blob/master/web-console/README.md).

## Flattener

This allows to flatten the code into a single file.

Edit `scripts/flat.sh` to add your contracts.

```bash
npm run flat
```

- [Example flattened code](https://github.com/noncept/solidity-toolkit/blob/master/dist/SampleContract.dist.sol)

## Analysis

> [!IMPORTANT]
> It is better to analyze the flattened code to have a bigger overview on the entire codebase. So run the flattener first.

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

- [Example inheritance graph](https://github.com/noncept/solidity-toolkit/blob/master/analysis/inheritance-tree/SampleContract.png)

The `graph` command outputs a DOT-formatted graph of the control flow.

- [Example control flow](https://github.com/noncept/solidity-toolkit/blob/master/analysis/control-flow/SampleContract.png)

The `mdreport` command creates a markdown description report with tables comprising information about the system's files, contracts and their functions.

- [Example description table](https://github.com/noncept/solidity-toolkit/blob/master/analysis/description-table/SampleContract.md)

The `sol2uml` generates UML class diagram from Solidity contracts.

- [Example UML diagram](https://github.com/noncept/solidity-toolkit/blob/master/analysis/uml/SampleContract.svg)

## License

Code released under the [MIT License](https://github.com/noncept/solidity-toolkit/blob/master/LICENSE).
