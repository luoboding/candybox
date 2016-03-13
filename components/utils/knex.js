var Knex = require('knex');
var knex = Knex({
  client: 'mysql',
  connection: {
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'candybox',
    charset  : 'utf8'
  },
  migrations: {
   tableName: 'migrations'
 }
});

module.exports = knex;
