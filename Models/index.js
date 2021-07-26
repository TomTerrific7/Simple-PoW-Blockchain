const jayson = require('jayson');
const {startMining, stopMining} = require('./mine');
const {utxos} = require('./db');



// create a server
const server = new jayson.server({
    startMining: function(_, callback) {
      callback(null, 'Success!');
      startMining();
    },
    stopMining: function(_, callback) {
      callback(null, 'Success!');
      stopMining();
    },

    getBalance: function([address], callback) {
      const ourUTXOs = utxos.filter(x => {
        return x.owner === address && !x.spent;
      });
      const sum = ourUTXOs.reduce((p,c) => p + c.amount, 0);
      callback(null, sum);
    }
  });
  

  console.log("Server Up");

  server.http().listen(3000);