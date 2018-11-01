var mysql = require('mysql');
var mysqlConf = require('../conf/mysqlConf');
var photoSqlMap = require('./photoSqlMap');
var pool = mysql.createPool(mysqlConf.mysql);

module.exports = {
    list: function (callback) {
        pool.query(photoSqlMap.list, function (error, result) {
            if (error) throw error;
            callback(result);
        })
    },
    add: function (photo, callback) {
        pool.query(photoSqlMap.add, [photo.originalFilename, photo.path.slice(photo.path.indexOf('public/images') + 7), photo.size], function(error, result) {
            if (error) throw error;
            callback({id:result.insertId, path: photo.path.slice(photo.path.indexOf('public/images') + 7), name: photo.originalFilename, size: photo.size});
        })
    },
    delete: function(id, callback) {
        pool.query(photoSqlMap.delete, id, function(error, result) {
            if (error) throw error;
            callback(result.affectedRows > 0);
        })
    },
    update: function(dragData, dropData, callback) {
      var promise = new Promise(function(resolve, reject) {
        pool.query(photoSqlMap.update, [dragData.name, dragData.path, dragData.size, dropData.id], function(error, result) {
          if (error) throw error;
          resolve(result);
        });
      })
      var promise1 = new Promise(function(resolve, reject) {
        pool.query(photoSqlMap.update, [dropData.name, dropData.path, dropData.size, dragData.id], function(error, result) {
          if (error) throw error;
          resolve(result);
        });
      })
      Promise.all([promise, promise1]).then(function(data) {
        callback(data);
      });
    }
}
