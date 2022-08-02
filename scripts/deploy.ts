import { ethers, run } from "hardhat";
import { Chakra__factory, FogCity__factory } from "../typechain-types";

async function main() {
  const [signer] = await ethers.getSigners();

  const chakraToken = await new Chakra__factory(signer).deploy();

  await chakraToken.deployed();

  console.log('Chakra deployed to: ', chakraToken.address);

  const fogCityCollection = await new FogCity__factory(signer).deploy();

  await fogCityCollection.deployed();

  console.log('fogCityCollection deployed to: ', fogCityCollection.address);

  await fogCityCollection.safeMint(signer.address, '');

  await run('verify:verify', {
    address: chakraToken.address,
    contract: 'contracts/Chakra.sol:Chakra'
  });

  await run('verify:verify', {
    address: fogCityCollection.address,
    contract: 'contracts/FogCity.sol:FogCity'
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
