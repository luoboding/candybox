var parse = require('co-body');
var ManagerModel = require('./../models/manager-model');

module.exports = function () {
  'use strict';
  return function*() {
    var self = this;
    var post = yield parse(this);
    var username = post.username;
    var password = post.password;
    var condition = {
      username: username,
      password: password
    };
    ManagerModel.where(condition).fetch().then(function (manager) {
      if (manager) {
        console.log('manager', manager.toJSON());
      } else {
        console.log('manager not ok');
      }
    }, function (error) {
      console.log('error', error);
    });

    this.status = 200;
    return this;
  };
};
