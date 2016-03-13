var parse = require('co-body');
module.exports = function () {
  'use strict';
  return function*() {
    var post = yield parse(this);
    console.log('post:', post);
    return this.body = "<h1>Hello! This is my home page!</h1>";
  }
};
