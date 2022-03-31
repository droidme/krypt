const hre = require("hardhat");
const INITIAL_SUPPLY = 1000;

const deploy = async () => {
  const TFT = await hre.ethers.getContractFactory("MyToken");
  const token = await TFT.deploy(INITIAL_SUPPLY);
  await token.deployed();
  console.log("TFT successfully deployed to:", token.address);
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