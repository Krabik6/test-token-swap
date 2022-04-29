const hre = require('hardhat')
const ethers = hre.ethers
const usdtArtifacts = require('../artifacts/contracts/USDToken.sol/USDToken.json')
const newArtifacts = require('../artifacts/contracts/NewToken.sol/NewToken.json')

async function main() {
  const [signer] = await ethers.getSigners()

//   const Erc = await ethers.getContractFactory('USDToken', signer)
//   const addr = await Erc.address
  const shopAddress= '0x95401dc811bb5740090279Ba06cfA8fcF6113778' //usdt
//     console.log(addr)
    const shopContract = new ethers.Contract(
        shopAddress,
        usdtArtifacts.abi,
        signer
    )

    const newAddress= '0x998abeb3E57409262aE5b751f60747921B33613E' //newToken
//     console.log(addr)
    const newContract = new ethers.Contract(
        newAddress,
        newArtifacts.abi,
        signer
    )

    

    const _setGreet = await shopContract.transfer("0xf5059a5D33d5853360D16C683c16e67980206f36", 123)
    await _setGreet.wait()
    console.log(ethers.utils.formatEther(await shopContract.balanceOf("0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266"))) //sender
    console.log(ethers.utils.formatEther(await shopContract.balanceOf("0x95401dc811bb5740090279Ba06cfA8fcF6113778"))) //usdt
    console.log(ethers.utils.formatEther(await shopContract.balanceOf("0x998abeb3E57409262aE5b751f60747921B33613E"))) //newToken
    console.log(signer.address)

    console.log(ethers.utils.formatEther(await newContract.balanceOf("0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266")))
    console.log(ethers.utils.formatEther(await newContract.balanceOf("0xf5059a5D33d5853360D16C683c16e67980206f36")))
    console.log(ethers.utils.formatEther(await shopContract.balanceOf("0xf5059a5D33d5853360D16C683c16e67980206f36")))
    console.log(await newContract.totalSupply())
   
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