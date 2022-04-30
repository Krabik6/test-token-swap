const hre = require('hardhat')
const ethers = hre.ethers
const usdtArtifacts = require('../artifacts/contracts/USDToken.sol/USDToken.json')
const newTokenArtifacts = require('../artifacts/contracts/NewToken.sol/NewToken.json')
const shopArtifacts = require('../artifacts/contracts/Shop.sol/Shop.json')
async function main() {
  const [signer] = await ethers.getSigners()

  const shopAddress= '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9' //shop
  const shopContract = new ethers.Contract(
      shopAddress,
      shopArtifacts.abi,
      signer
  )

  const usdtAddress= '0xd8058efe0198ae9dD7D563e1b4938Dcbc86A1F81' //usdt
    const usdtContract = new ethers.Contract(
        usdtAddress,
        usdtArtifacts.abi,
        signer
    )

    const newTokenAddress= '0x6D544390Eb535d61e196c87d6B9c80dCD8628Acd' //newToken
    const newTokenContract = new ethers.Contract(
      newTokenAddress,
      newTokenArtifacts.abi,
      signer
  )
    
    const senderAddress = "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266"

    const _transferUsdtToShop = await shopContract.near(13)
    await _transferUsdtToShop.wait()
    
    console.log("usdt balance of shop: " + ethers.utils.formatEther(await usdtContract.balanceOf(shopAddress))) //shop
    console.log("newToken balance of user: " + ethers.utils.formatEther(await usdtContract.balanceOf(senderAddress))) //sender
    console.log("usdt balance of shop: " + ethers.utils.formatEther(await newTokenContract.balanceOf(shopAddress))) //shop
    console.log("newToken balance of user: " + ethers.utils.formatEther(await newTokenContract.balanceOf(senderAddress))) //sender
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }); 