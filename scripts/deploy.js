// 引用 可升级插件
import { ethers } from "ethers";
const { ethers, upgrades } = require("hardhat");

async function main() {
  // 获取 MyContract合约
  const MyContract = await ethers.getContractFactory("MyContract");
  // 部署, 传入初始化 storageValue 的值
  const myContract = await upgrades.deployProxy(
    MyContract, // 要部署的合约
    [666],  // 初始化参数
    { initializer: 'initialize' } // 指定初始化函数名称
  );

  await myContract.deployed();

  // 输出 MyContract合约地址
  console.log("MyContract deployed to:", myContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
