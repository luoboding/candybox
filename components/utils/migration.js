var knex = require('./knex');

module.exports = {
  up: function (knex, Promise) {
    return knex.schema.createTable('manager', function(table) {
      table.increments('id').primary();
      table.string('username');
      table.string('password');
    }).createTable('manager_auth', function(table) {
      table.increments('id').primary();
      table.integer('manager_id').unique().references('manager.id');
      table.string('access_token');
      table.integer('expire_time');
    });
  },
  down: function () {
    return knex.schema.dropTable('manager')
    .dropTable('manager_auth');
  }
};
