const jayson = require('jayson');
const {startMining, stopMining} = require('./mine');

// create a server
const server = new jayson.server({
    startMining: function(_, callback) {
      callback(null, 'Success!');
      startMining();
    },
    stopMining: function(_, callback) {
      callback(null, 'Success!');
      stopMining();
    }
  });

  console.log("Server Up");

  server.http().listen(3000);