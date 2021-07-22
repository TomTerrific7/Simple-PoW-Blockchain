const {SHA256} = require('crypto-js');
const Blockchain = require("./blochchain");

class Block {
    constructor() {
        this.blockHeight = this.blockHeight;
        this.minerReward = 1;
        this.timestamp = Date.now();
        this.nonce = Math.random(16);
         this.hash = this.blockHash()

         console.log(`Timestamp:${this.timestamp}`);
         console.log(`Hash:${this.hash}`);
         console.log(`Nonce:${this.nonce}`);


    }

    blockHash() {
        return SHA256(JSON.stringify(this.height + "" + this.minerReward + "" + this.timestamp + "" + this.nonce + ""));
    }

}

module.exports = Block;