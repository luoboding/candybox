var bookshelf = require('./../../utils/bookshelf.js');
var ManageAuthModel = require('./manager-auth-model');

var ManagerModel = bookshelf.Model.extend({
  tableName: 'manager',
  manageAuth: function () {
    return this.hasMany(ManageAuthModel);
  }
}, {
  //custom method here
});

module.exports = ManagerModel;
