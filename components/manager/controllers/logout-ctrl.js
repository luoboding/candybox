var parse = require('co-body');
var moment = require('moment');
var ManagerModel = require('./../models/manager-model');
var ManagerAuthModel = require('./../models/manager-auth-model');
var co = require('co');

module.exports = function () {
  'use strict';
  return function *() {

    var accessToken = this.request.get('x-auth-token');

    var condition = {
      "access_token": accessToken
    };

    var destroyGenerator = co(function *() {
      return yield ManagerAuthModel.where(condition).destroy();
    });
    this.response.status = 204;
  };
};
