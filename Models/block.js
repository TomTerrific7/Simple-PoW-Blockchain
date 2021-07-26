const SHA256 = require('crypto-js/sha256');
const merkleTree = require('./merkleTree');






class Block {
    constructor() {
        
        this.timestamp = Date.now();
        this.nonce = 0;
        this.transactions = [];
        this.merkleTree = [];

        console.log(`Timestamp:${this.timestamp}`);
        
    }

    addTransaction(tx) {
        this.transactions.push(tx);
        
        
    }

    blockHash() {
        return SHA256(this.timestamp + "" + this.nonce + "" + JSON.stringify(this.transactions)).toString();
    }

    execute() {
        this.transactions.forEach(x => x.execute());

    }

    
    
}

module.exports = Block;