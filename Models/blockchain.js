const block = require('./block');

class Blockchain {
    constructor() {
        this.chain = [];
    }

    addBlock(block) {
        this.chain.push(block);
    
    }

    blockHeight() {
        return this.chain.length
    }


}

module.exports = Blockchain;