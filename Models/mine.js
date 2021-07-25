const db = require ('./db');
const Block = require("./block");

let mining = false;

function startMining() {
    mining = true;
    mine();
}

function stopMining() {
    mining = false;
}

function mine(){
    if(!mining) return;
    db.blockchain.addBlock(new Block());

    console.log(`mined block #${db.blockchain.blockHeight()}`)
    

    setTimeout(mine, 5000);
}

module.exports= {
    startMining,
    stopMining
};