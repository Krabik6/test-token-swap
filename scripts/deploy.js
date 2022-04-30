const hre = require('hardhat')
const ethers = hre.ethers

async function main() {
  const [signer] = await ethers.getSigners()

  const Shop = await ethers.getContractFactory('Shop', signer)
  const shop = await Shop.deploy()
  await shop.deployed()

  console.log("shop address: " + shop.address)
  console.log("USDT address: " + await shop.USDT()) //я хзчто еото
  console.log("NewToken address: " +await shop.NT()) //я хзчто еото
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }); 