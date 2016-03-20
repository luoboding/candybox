// this is a global header filter;
// if it doesn't contain access_token must give 401 error;
var ManageAuthModel = require('./../../manager/models/manager-auth-model');
var co = require('co');
module.exports = function () {
  'use strict';
  return function *(next) {

    var accessToken = this.request.get('x-auth-token');
    //we get token, must verify it
    var condition = {
      "access_token": accessToken
    };
    
    var userAuthRequestGenerator = co(function *() {
      return  yield ManageAuthModel.where(condition).fetch();
    });

    var result = yield userAuthRequestGenerator;
    if (!result) {
      return this.throw(401);
    }
    yield next;
  };
};
