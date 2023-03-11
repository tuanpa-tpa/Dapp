// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Transactions {
    uint256 transactionCounter;

    event Transfer(
        address from,
        address receiver,
        string message,
        string keyword,
        uint amount,
        uint256 timestamp
    );
    struct TransferStruct {
        address sender;
        address receiver;
        string message;
        string keyword;
        uint amount;
        uint256 timestamp;
    }

    TransferStruct[] transactions;

    function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public {
        transactionCounter += 1;
        transactions.push(TransferStruct(msg.sender, receiver, message, keyword, amount, block.timestamp));
        emit Transfer(msg.sender, receiver, message, keyword, amount, block.timestamp);
    }

    function getAllTransactions() public view returns(TransferStruct[] memory) {
        return transactions;
    }

    function getTransactionCount() public view returns(uint256) {
        return transactionCounter;
    }
}