#!/usr/bin/env bash

for contract in "SampleContract"
do
  npx hardhat flatten contracts/$contract.sol > dist/$contract.dist.sol
done
