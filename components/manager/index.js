//define route and combine controller here

var LoginController = require('./controllers/login-ctrl');
var LogoutController = require('./controllers/logout-ctrl');
var authorize = require('./../common/filters/auth-filter');
var RegisterCotroller = require('./controllers/register-ctrl');
module.exports = function (router){
  'use strict';
  router.post('/manager/auth', LoginController());
  router.delete('/manager/auth', authorize(), LogoutController());
  router.post('/manager', RegisterCotroller());
};
