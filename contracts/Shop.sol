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

    
    // }

    function near() public  {
        uint tokensToBuy =  1;  
        require(tokensToBuy > 0, "not enough funds!");
        // NT._mint(msg.sender, tokensToBuy);
        require(tokenBalance() >= tokensToBuy, "not enough tokens!");
        NT.mint(msg.sender, 1);

        // NT.transfer(msg.sender, tokensToBuy);
        // emit Bought(tokensToBuy, msg.sender);
    }

    function tokenBalance() public view returns(uint) {
        return NT.balanceOf(address(this));
    }
} 