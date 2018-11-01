var photoSqlMap = {
    list: 'select * from photos',
    add: 'insert into photos(name, path, size) values(?, ?, ?)',
    delete: 'delete from photos where id = ?',
    update: 'update photos set name = ?, path = ?, size = ? where id = ?'
};

module.exports = photoSqlMap;