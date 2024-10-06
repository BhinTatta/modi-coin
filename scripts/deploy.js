const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("\nDeploying with account:", deployer.address);

  const balance = await hre.ethers.provider.getBalance(deployer.address);
  console.log(
    "Account balance:",
    hre.ethers.formatEther(balance),
    "SepoliaETH"
  );

  const ModiCoin = await hre.ethers.getContractFactory("ModiCoin");

  console.log("\nDeploying ModiCoin...");
  const token = await ModiCoin.deploy();

  console.log("Waiting for deployment...");
  await token.waitForDeployment();

  console.log("\n✅ Token deployed successfully at:", await token.getAddress());

  const tokenBalance = await token.balanceOf(deployer.address);
  console.log(
    "Token balance:",
    hre.ethers.formatUnits(tokenBalance, 18),
    "MDC"
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
