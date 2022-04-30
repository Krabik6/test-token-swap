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
    function NTbalanceOfContract()  view public returns(uint){
        return NT.balanceOf(contractAddr);
    }

    function USDTbalanceOfContract() view public returns(uint){
       return USDT.balanceOf(contractAddr);
    }

    function NTbalanceOfUser()  view public returns(uint){
        return NT.balanceOf(owner);
    }

    function USDTbalanceOfUser() view public returns(uint){
       return USDT.balanceOf(owner);
    }

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

