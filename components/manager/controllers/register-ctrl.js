var co = require('co');
var parse = require('co-body');
var ManagerModel = require('./../models/manager-model');

module.exports = function () {

  'use strict';
  return function *() {

    var post = yield parse(this);
    if (!post.hasOwnProperty("username") || !post.hasOwnProperty("password")) {
       this.response.status = 400;
       this.response.body = {
         "error": "参数错误"
       };
       return;
    }

    var username = post.username;
    var password = post.password;
    //did username exist?
    var usernameCheckGenerator = co(function *(){
      return yield ManagerModel.where({
        username: username
      }).fetch();
    });

    var result = yield usernameCheckGenerator;
    if (result) {
      this.response.status = 400;
      this.response.body = {
        "error": "用户名已经存在"
      };
      return;
    }
    var registerGenerator = co(function *() {
      return yield new ManagerModel().save({
        username: username,
        password: password
      });
    });
    yield registerGenerator;
    this.response.status = 204;
  };

};
