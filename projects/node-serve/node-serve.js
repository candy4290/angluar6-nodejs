//express_demo.js 文件
var fs = require('fs');
var jdbc = require('./jdbc');
var express = require('express');
var mutipart = require('connect-multiparty');
// var multer  = require('multer');
var app = express();
var mutipartMiddeware = mutipart();
var bodyParser = require('body-parser');
// 创建 application/x-www-form-urlencoded 编码解析
app.use(express.static('imgs'));
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(multer({ dest: '/tmp/'}).array('image'));
app.use(bodyParser.json({ limit: '1mb' }));  //这里指定参数使用 json 格式
app.use(mutipart({uploadDir: './imgs'}));
jdbc.handleDisconnection();
//设置跨域访问
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Headers', 'Origin, No-Cache, X-Requested-With, If-Modified-Since, Pragma, Last-Modified, Cache-Control, Expires, Content-Type, X-E4M-With');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8;x-requested-with;application/x-www-form-urlencoded");
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
});
app.post('/musicList', function (req, res) {
  jdbc.connection.query('SELECT * from mp3s', function (error, results, fields) {
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
});
app.post('/photos', function(req, res) {
  jdbc.connection.query('select * from photos', function(err, results, fields) {
    if(err) {

    } else {
      const result = {
        rtnCode: '000000',
        rtnData: {
          list: results
        },
        rtnMsg: 'SUCCESS'
      };
      res.end(JSON.stringify(result));
    }
  })
})
app.post('/deletePhoto', function(req, res) {
  const result = {
    rtnCode: '000000',
    rtnData: null,
    rtnMsg: 'SUCCESS'
  };
  jdbc.connection.query('delete from photos where id = ?', [req.body.id], function(err, data) {
    if (err) {
      console.log('删除数据失败');
    } else {
      fs.unlink('./imgs/' + req.body.path, function(error) {
        if (!error) {
          res.end(JSON.stringify(result));
        }
      });
    }
  })
})

app.post('/upload', mutipartMiddeware, function(req, res) {
  const photo = req.files.files;
  const result = {
    rtnCode: '000000',
    rtnData: {
      path: photo.path.slice(5),
      id: null
    },
    rtnMsg: 'SUCCESS'
  };
  jdbc.connection.query('insert into photos set ?', {name: photo.originalFilename, path: photo.path.slice(5), size: photo.size}, function(err, data) {
    result.rtnData.id = data.insertId;
    if (err) {
      console.log('查询数据失败');
    } else {
      res.end(JSON.stringify(result));
    }
  })
});

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://localhost:8081", host, port)

})
