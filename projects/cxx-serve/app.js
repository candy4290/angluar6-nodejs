var createError = require('http-errors');
var express = require('express'); // 加载express模块
var path = require('path'); // 路径模块
var cookieParser = require('cookie-parser'); // 这就是一个解析cookie的工具。通过req.cookies可以取到传过来的cookie,并把它们转成对象
var logger = require('morgan'); // 再控制台中，显示req请求的信息

// 路由信息（接口地址），存放routes的根目录
var photoRouter = require('./routes/photo');

var app = express();

// view engine setup 模版引擎
app.set('views', path.join(__dirname, 'views')); // 设置视图根目录
app.set('view engine', 'pug'); // 设置视图格式

// 载入中间件
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); // 静态服务器目录

// 配置路由 （‘自定义路径’，上面设置的接口地址）
app.use('/photo', photoRouter);


// 错误处理 catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
