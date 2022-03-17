const hre = require("hardhat");

const deploy = async () => {
  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy();
  await transactions.deployed();
  console.log("Transactions successfully deployed to:", transactions.address);
}


const main = async () => {
  try {
    await deploy();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main();