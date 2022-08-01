// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Chakra is ERC20 {
    constructor() ERC20("Chakra", "CHKR") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }
}