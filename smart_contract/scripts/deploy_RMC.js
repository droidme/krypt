const hre = require("hardhat");
const INITIAL_SUPPLY = 100;

const deploy = async () => {
  const RMC = await hre.ethers.getContractFactory("MyToken");
  const token = await RMC.deploy(INITIAL_SUPPLY);
  await token.deployed();
  console.log("RMC successfully deployed to:", token.address);
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