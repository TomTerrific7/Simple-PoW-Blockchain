const Blockchain = require("./blockchain");

const db = {
    blockchain: new Blockchain(),
    utxos: [],
}

module.exports = db;