const hre = require('hardhat')
const ethers = hre.ethers

async function main() {
  const [signer] = await ethers.getSigners()

  const Erc = await ethers.getContractFactory('Shop', signer)
  const erc = await Erc.deploy()
  await erc.deployed()

  const USDT = await ethers.getContractFactory('USDToken', signer)
  const usdt = await USDT.deploy()
  await usdt.deployed()

  const NT = await ethers.getContractFactory('NewToken', signer)
  const nt = await NT.deploy()
  await nt.deployed()
  console.log("contract address: " + erc.address)
  console.log("USDT address: " + await erc.USDT()) //я хзчто еото
  console.log("NewToken address: " +await erc.NT()) //я хзчто еото
  console.log("-------------------------------")
  console.log("Erc deployed to: " + erc.address)
  console.log("USDT deployed to: " + usdt.address)
  console.log("NT deployed to: " + nt.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }); 