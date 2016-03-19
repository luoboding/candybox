var bookshelf = require('./../../utils/bookshelf.js');
var ManagerModel = require('./manager-model');
var moment = require('moment');
var jwt = require('jsonwebtoken');
var md5 = require('blueimp-md5');
var ManagerAuthModel = bookshelf.Model.extend({
  tableName: 'manager_auth',
  manager: function () {
    return this.belongsTo(ManagerModel);
  }
}, {
  generateToken: function (userId) {
    return jwt.sign({
        id: userId
    }, 'cAndYbOx');
  },

  verifyToken: function (token, id) {
    var user = jwt.verify(token, 'cAndYbOx');
    return user.id == id;
  },

  getExpireTime: function () {
    return parseInt((moment().valueOf()) / 1000) + 60*24*3600; //two mounth later
  }

});

module.exports = ManagerAuthModel;
