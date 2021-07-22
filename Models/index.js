const Blockchain = require("./blochchain");
const Block = require("./block");

const db = {
    blockchain: new Blockchain()
}

function mine(){
    db.blockchain.addBlock(new Block());

    console.log(`mined block #${db.blockchain.blockHeight()}`)
    

    setTimeout(mine, 5000);
}

mine();