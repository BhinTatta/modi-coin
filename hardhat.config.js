require("@nomicfoundation/hardhat-ethers");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200, // Typically, you want more than 1 run for optimized contract deployment
      },
    },
  },
  networks: {
    sepolia: {
      url: process.env.INFURA_API_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
      chainId: 11155111,
      gasPrice: "auto", // Let Hardhat estimate the gas price
    },
  },
};
