var mysql = require('mysql');
var mysql_config = {
    host: 'localhost',
    user:'root',
    password:'1qaz@WSX',
    database:'cxx'
};
function handleDisconnection() {
   var connection = mysql.createConnection(mysql_config);
    connection.connect(function(err) {
        if(err) {
            setTimeout('handleDisconnection()', 2000);
        }
    });

    connection.on('error', function(err) {
        logger.error('db error', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST') {
            logger.error('db error执行重连:'+err.message);
            handleDisconnection();
        } else {
            throw err;
        }
    });
    exports.connection = connection;
}
exports.handleDisconnection =  handleDisconnection;
