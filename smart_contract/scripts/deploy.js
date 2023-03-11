const hre = require("hardhat");

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 60;

  const lockedAmount = hre.ethers.utils.parseEther("0.001");

  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transaction = await Transactions.deploy();

  await transaction.deployed();

  console.log(
    `ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`
  );
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
