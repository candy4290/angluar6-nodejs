// 数据库连接池，instance是单例的，不管在什么地方导入该文件，都只会创建一个连接池
var mysql = require('mysql');
var mysqlConf = require('../conf/mysqlConf');
var pool = mysql.createPool(mysqlConf.mysql);
module.exports = {
  instance: pool
}
