var Knex = require('knex');
var config = require('./../../knexfile.js');
var knex = Knex(config.dev);
module.exports = knex;
