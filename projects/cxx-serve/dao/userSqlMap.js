var userSqlMap = {
  select: 'select * from user where name = ? and psw = ?',
  update: 'update user set name = ?, psw = ? where id = ?'
};

module.exports = userSqlMap;
