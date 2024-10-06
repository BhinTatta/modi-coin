// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ModiCoin is ERC20 {
    constructor() ERC20("ModiCoin", "MDC") {
        _mint(msg.sender, 100 * 10**18); // Reduced to 100 tokens
    }
}