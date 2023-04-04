pragma solidity ^0.8.18;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract MyContract is Initializable {
    int storageValue;

    // modifier(修饰器) initializer 可以确保initialize只会被调用一次
    function initialize(int initValue) public initializer {
        storageValue = initValue;
    }

    function setValue(int newValue) public {
        storageValue = newValue + 1;
    }

    function getValue() public view returns (int) {
        return storageValue;
    }
}
