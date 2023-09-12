require('@nomiclabs/hardhat-truffle5');
require('solidity-coverage');
require('solidity-docgen');
require('hardhat-exposed');

module.exports = {
  defaultNetwork: 'hardhat',
  solidity: {
    version: '0.8.21',
    settings: {
      evmVersion: 'shanghai',
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  exposed: {
    exclude: [],
  },
  docgen: {
    outputDir: 'analysis/docs',
    exclude: ['mocks'],
  },
};
