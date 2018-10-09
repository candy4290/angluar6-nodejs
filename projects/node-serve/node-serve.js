//express_demo.js 文件
var express = require('express');
var mysql      = require('mysql');
// var multer  = require('multer');
var app = express();
var bodyParser = require('body-parser');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1qaz@WSX',
  port: '3306',
  database : 'Cxx'
});

connection.connect();
// 创建 application/x-www-form-urlencoded 编码解析
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(multer({ dest: '/tmp/'}).array('image'));
app.use(bodyParser.json({ limit: '1mb' }));  //这里指定参数使用 json 格式
//设置跨域访问
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8;x-requested-with");
  if (req.method === 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});
app.get('/', function (req, res) {
  // 输出 JSON 格式
  console.log('asdfasdf');
  res.end(JSON.stringify(req.body));
})
app.post('/musicList', function (req, res) {
  connection.query('SELECT * from mp3s', function (error, results, fields) {
    if (error) throw error;
    // 输出 JSON 格式
    const result = {
      rtnCode: '000000',
      rtnData: {
        musicList: results
      },
      rtnMsg: 'SUCCESS'
    };
    res.end(JSON.stringify(result));
  });
})

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://localhost:8081", host, port)

})
