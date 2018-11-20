var userSqlMap = require('./userSqlMap');
var pool = require('../conf/connectPool');

module.exports = {
  login: function (name, psw, callback) {
    pool.instance.query(userSqlMap.select,[name, psw], function (error, result) {
      if (error) throw error;
      callback(result);
    })
  },
  changePsw: function (name, psw, id, callback) {
    pool.instance.query(userSqlMap.update, [name, psw, id],function (error, result) {
      if (error) throw error;
      callback(result);
    })
  }

}
