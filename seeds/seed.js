var moment = require('moment');
exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('manager_auth').del(),
    knex('manager').del(),

    // Inserts seed entries
    knex('manager').insert({
      id: 1,
      username: 'admin',
      password: '123456'
    }),

    knex('manager_auth').insert({
      id: 1,
      manager_id: 1,
      access_token: 'kfdkdssff',
      expire_time: parseInt((moment().valueOf()) / 1000)
    })
  );
};
