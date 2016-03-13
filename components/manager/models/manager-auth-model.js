var bookshelf = require('./../../utils/bookshelf.js');
var ManagerModel = require('./manager-model');
var ManagerAuthModel = bookshelf.Model.extend({
  tableName: 'manager_auth',
  manager: function () {
    return this.belongsTo(ManagerModel);
  }
});

module.exports = ManagerAuthModel;
