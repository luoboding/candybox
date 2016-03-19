var parse = require('co-body');
var moment = require('moment');
var ManagerModel = require('./../models/manager-model');
var ManagerAuthModel = require('./../models/manager-auth-model');
var co = require('co');

module.exports = function () {
  'use strict';
  return function *LoginController() {

    var post = yield parse(this);

    if (!post.hasOwnProperty("username") || !post.hasOwnProperty('password')) {
      this.throw(400, '参数错误');
    }
    var username = post.username;
    var password = post.password;
    var condition = {
      username: username,
      password: password
    };

    var userRequestGenerator = co(function *() {
      return  yield ManagerModel.where(condition).fetch();
    });
    var result = yield userRequestGenerator;
    if (!result) {
      return this.throw(404);
    }
    var user = result.toJSON();
    var token = ManagerAuthModel.generateToken(user.id);
    var expireTime = ManagerAuthModel.getExpireTime();
    var auth = {
      manager_id: user.id,
      access_token: token,
      expire_time: expireTime
    };

    var authSaveGenerator = co(function *() {
      return  yield new ManagerAuthModel().save(auth);
    });
    this.body = yield authSaveGenerator;
  };
};
