//define route and combine controller here
var route = require('koa-route');
var LoginController = require('./controllers/login-ctrl');

module.exports = function (app){
  'use strict';
  app.use(route.post('/manager', LoginController()));
};
