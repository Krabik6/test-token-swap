// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract USDToken is ERC20 {
    constructor() ERC20("USDToken", "USDT") {
        _mint(0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266, 1000 * 10 ** decimals());
    }

    function approvel(
        address owner,
        address spender,
        uint256 amount)
         external{
        _approve(owner, spender, amount);
    }
}

        // _approve(owner, spender, amount);
