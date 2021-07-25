const Blockchain = require("./blockchain");

const db = {
    blockchain: new Blockchain()
}

module.exports = db;