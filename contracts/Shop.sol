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
        return NT.balanceOf(address(this));
    }

    function contractUSDTaddr(address _addr) view public returns(uint){
       return USDT.balanceOf(_addr);
    }

    // function reallyAddrUsdt() view public returns(address){
    //    return USDT(address(this));
    // }

    function senderNTaddr()  view public returns(uint){
        return NT.balanceOf(address(msg.sender));
    }

    function senderUSDTaddr() view public returns(uint){
       return USDT.balanceOf(address(msg.sender));
    }

    function near(uint _amount) public  {
        USDT.transfer(address(this), _amount);
        uint tokensToBuy =  _amount;  
        // require(tokensToBuy > 0, "not enough funds!");
        // NT._mint(msg.sender, tokensToBuy);
        // require(tokenBalance() >= tokensToBuy, "not enough tokens!");
        NT.mint(msg.sender, tokensToBuy);

        // NT.transfer(msg.sender, tokensToBuy);
        // emit Bought(tokensToBuy, msg.sender);
    }

    function tokenBalance() public view returns(uint) {
        return NT.balanceOf(address(this));
    }
} 