//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract NewToken is ERC20 {
    constructor() ERC20("NewToken", "NT") {}

    function mint(address account, uint256 amount) external {
    _mint(account, amount);
}
}