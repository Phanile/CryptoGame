import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import * as dotenv from 'dotenv'

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    polygon: {
      url : 'https://polygon-rpc.com',
      accounts : process.env.PRIVATE_KEY != undefined ? [process.env.PRIVATE_KEY] : []
    }
  },
  etherscan : {
    apiKey : process.env.POLYGONSCAN_API_KEY
  }
};

export default config;
