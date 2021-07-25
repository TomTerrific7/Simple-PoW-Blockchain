const jayson = require('jayson');


// create a client
const client = jayson.client.http({
  port: 3000
});

module.exports = client;