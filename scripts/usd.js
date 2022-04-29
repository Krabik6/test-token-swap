const hre = require('hardhat')
const ethers = hre.ethers
const usdtArtifacts = require('../artifacts/contracts/USDToken.sol/USDToken.json')
const newArtifacts = require('../artifacts/contracts/NewToken.sol/NewToken.json')
const shopArtifacts = require('../artifacts/contracts/Shop.sol/Shop.json')
async function main() {
  const [signer] = await ethers.getSigners()

//   const Erc = await ethers.getContractFactory('USDToken', signer)
//   const addr = await Erc.address
  const usdtAddress= '0x5f3f1dBD7B74C6B46e8c44f98792A1dAf8d69154' //usdt
//     console.log(addr)
    const usdtContract = new ethers.Contract(
        usdtAddress,
        usdtArtifacts.abi,
        signer
    )

    const newAddress= '0xb7278A61aa25c888815aFC32Ad3cC52fF24fE575' //newToken
//     console.log(addr)
    const newContract = new ethers.Contract(
        newAddress,
        newArtifacts.abi,
        signer
    )

    const shopAddress= '0x1291Be112d480055DaFd8a610b7d1e203891C274' //shop
//     console.log(addr)
    const shopContract = new ethers.Contract(
        shopAddress,
        shopArtifacts.abi,
        signer
    )

    

    // const _setGreet = await usdtContract.transfer("0xf5059a5D33d5853360D16C683c16e67980206f36", 123)
    // await _setGreet.wait()
    console.log(ethers.utils.formatEther(await usdtContract.balanceOf("0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266"))) //sender
    console.log(ethers.utils.formatEther(await usdtContract.balanceOf("0x5f3f1dBD7B74C6B46e8c44f98792A1dAf8d69154"))) //usdt
    console.log(ethers.utils.formatEther(await usdtContract.balanceOf("0xb7278A61aa25c888815aFC32Ad3cC52fF24fE575"))) //newToken

    console.log(signer.address)

    console.log(ethers.utils.formatEther(await newContract.balanceOf("0x1291Be112d480055DaFd8a610b7d1e203891C274"))) //shop
    console.log(ethers.utils.formatEther(await newContract.totalSupply()))
    console.log("--------------------------------")
    
    const _transfer = await shopContract.near(13)
    await _transfer.wait()
    console.log(ethers.utils.formatEther(await usdtContract.balanceOf("0x1291Be112d480055DaFd8a610b7d1e203891C274"))) //shop
    console.log(ethers.utils.formatEther(await newContract.balanceOf("0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266"))) //sender
   
//     contract address: 0xa85233C63b9Ee964Add6F2cffe00Fd84eb32338f
// USDT address: 0x763e69d24a03c0c8B256e470D9fE9e0753504D07
// NewToken address: 0x46682cA783d96a4A65390211934D5714CDb788E4
// -------------------------------
// Erc deployed to: 0xa85233C63b9Ee964Add6F2cffe00Fd84eb32338f
// USDT deployed to: 0x4A679253410272dd5232B3Ff7cF5dbB88f295319
// NT deployed to: 0x7a2088a1bFc9d81c55368AE168C2C02570cB814F

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }); 