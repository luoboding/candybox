
exports.up = function (knex, Promise) {
  return knex.schema.createTable('manager', function(table) {
    table.increments('id').primary();
    table.string('username').comment('用户名');
    table.string('password').comment('密码');
  }).createTable('manager_auth', function(table) {
    table.increments('id').primary();
    table.integer('manager_id').unsigned().references('manager.id').comment('令牌所对应的用户');
    table.string('access_token').comment('用户登录令牌');
    table.integer('expire_time').comment('令牌过期时间');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('manager')
  .dropTable('manager_auth');
};
