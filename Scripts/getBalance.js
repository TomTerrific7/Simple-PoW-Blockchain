const client = require('./client');
const {PUBLIC_KEY} = require('../Models/keypair')
const {argv} = require('yargs');
const {address} = require('argv');

console.log(argv)


client.request('getBalance', [PUBLIC_KEY], function(err, response) {
  if(err) throw err;
  console.log(response.result); // Success!
});