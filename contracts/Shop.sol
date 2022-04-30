// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./NewToken.sol";
import "./USDToken.sol";



contract Shop {
    USDToken public USDT;
    NewToken public NT;
    address payable public owner;
    // event Bought(uint _amount, address indexed _buyer);
    // event Sold(uint _amount, address indexed _seller);
    

    constructor() {
        USDT = new USDToken();
        NT = new NewToken();
        owner = payable(msg.sender);
    }

    address public contractAddr = (address(this));

    
    // }
    function contractNTaddr()  view public returns(uint){
        return NT.balanceOf(contractAddr);
    }

    function contractUSDTaddr() view public returns(uint){
       return USDT.balanceOf(contractAddr);
    }

    // function reallyAddrUsdt() view public returns(address){
    //    return USDT(address(this));
    // }

    function senderNTaddr()  view public returns(uint){
        return NT.balanceOf(owner);
    }

    function senderUSDTaddr() view public returns(uint){
       return USDT.balanceOf(owner);
    }

    // function approvel(
    //     address owner,
    //     address spender,
    //     uint256 amount)
    //      public  {
    //     USDT.approve(owner, spender, amount);
    // }

    function near(
        // address from,
        // address to,
        uint256 amount
    ) public  {
        USDT.approvel(owner, contractAddr, amount);
        USDT.transferFrom(owner, contractAddr, amount);
        uint tokensToBuy =  amount;  

        // require(tokensToBuy > 0, "not enough funds!");
        // require(tokenBalance() >= tokensToBuy, "not enough tokens!");
        NT.mint(owner, tokensToBuy);

        // emit Bought(tokensToBuy, msg.sender);
    }

    function tokenBalance() public view returns(uint) {
        return NT.balanceOf(address(this));
    }
} 

