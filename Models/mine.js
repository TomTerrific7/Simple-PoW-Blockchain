const db = require ('./db');
const Transaction = require('./Transaction');
const UTXO = require('./UTXO');
const Block = require('./block');
const {PUBLIC_KEY} = require('./keypair');
const { SHA256 } = require('crypto-js');
const TARGET_DIFFICULTY = BigInt("0x0" + "F".repeat(63));
const BLOCK_REWARD = 10;




let mining = false;

function startMining() {
    mining = true;
    mine();
}

function stopMining() {
    mining = false;
}

function mine() {
    if(!mining) return;
    
    const block = new Block();

    // add transactions from the mempool.

    const coinbaseUTXO = new UTXO(PUBLIC_KEY, BLOCK_REWARD);
    const coinbaseTX = new Transaction([], [coinbaseUTXO]);
    block.addTransaction(coinbaseTX);

    while(BigInt('0x' + block.blockHash()) >= TARGET_DIFFICULTY) {
        block.nonce++;
    }

    block.merkleTree.push(SHA256(new Transaction())),
    console.log(`Merkle:${block.merkleTree.push(SHA256(new Transaction()))}`);

   

    

    

    block.execute();
    
    
    db.blockchain.addBlock(block);

    console.log(`mined block #${db.blockchain.blockHeight()}`)
    console.log(`Nonce:${block.nonce}`);
    console.log(`Hash:${block.blockHash()}`);
    
    
    

    

    setTimeout(mine, 5000);
}

module.exports= {
    startMining,
    stopMining
};