const client = require('./client');


// invoke "add"
client.request('startMining', [], function(err, response) {
  if(err) throw err;
  console.log(response.result); // Success!
});