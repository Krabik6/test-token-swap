const hre = require('hardhat')
const ethers = hre.ethers
const shopArtifacts = require('../artifacts/contracts/Shop.sol/Shop.json')

async function main() {
  const [signer] = await ethers.getSigners()

  const Erc = await ethers.getContractFactory('Shop', signer)
  const addre = await Erc.deploy()
  
  const shopAddress= '0x8A791620dd6260079BF849Dc5567aDC3F2FdC318'
    
    const shopContract = new ethers.Contract(
        shopAddress,
        shopArtifacts.abi,
        signer
    )

    const _setGreet = await shopContract.setGreet('777')
    await _setGreet.wait()

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }); 