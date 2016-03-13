var Bookshelf = require('bookshelf');
var knex = require('./knex');
module.exports = Bookshelf(knex);
