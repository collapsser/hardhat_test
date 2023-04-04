require("@nomiclabs/hardhat-waffle");
require('@openzeppelin/hardhat-upgrades');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    },
    paths: {
      artifacts: "./artifacts",
      sources: "./contracts",
      cache: "./cache",
      tests: "./test",
      // 将 node_modules 中的合约文件路径加入配置
      "node_modules/@openzeppelin/contracts-upgradeable/access": "./node_modules/@openzeppelin/contracts-upgradeable/access"
    }
  }
}