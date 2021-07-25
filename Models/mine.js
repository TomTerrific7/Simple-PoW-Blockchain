const db = require ('./db');
const Block = require('./block');
const TARGET_DIFFICULTY = BigInt("0x0" + "F".repeat(63));


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

    while(BigInt('0x' + block.blockHash()) >= TARGET_DIFFICULTY) {
        block.nonce++;
    }
    db.blockchain.addBlock(block);

    console.log(`mined block #${db.blockchain.blockHeight()}`)
    console.log(`Nonce:${block.nonce}`);
    console.log(`Hash:${block.blockHash()}`)
    

    setTimeout(mine, 5000);
}

module.exports= {
    startMining,
    stopMining
};