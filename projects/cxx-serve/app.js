var createError = require('http-errors');
var express = require('express'); // 加载express模块
var path = require('path'); // 路径模块
// var cookieParser = require('cookie-parser'); // 这就是一个解析cookie的工具。通过req.cookies可以取到传过来的cookie,并把它们转成对象
// var session = require('express-session');
var logger = require('morgan'); // 再控制台中，显示req请求的信息

// 路由信息（接口地址），存放routes的根目录
var photoRouter = require('./routes/photo');
var userRouter = require('./routes/user');
var imgRouter = require('./routes/uploadImg');
var imgRouterCdkEditor = require('./routes/uploadImgCkeditor');

var app = express();

// var signStr = 'cxx';

// view engine setup 模版引擎
app.set('views', path.join(__dirname, 'views')); // 设置视图根目录
app.set('view engine', 'pug'); // 设置视图格式

// 载入中间件
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser(signStr));
app.use(express.static(path.join(__dirname, 'public'))); // 静态服务器目录
// app.use(session({
//   name: 'JSESSIONID',
//   secret: signStr,
//   resave: true, //(是否允许)当客户端并行发送多个请求时，其中一个请求在另一个请求结束时对session进行修改覆盖并保存。
//   rolling: true, //强制在每个响应中重设cookie的过期时间，并重新开始计时
//   saveUninitialized: true, //初始化session时是否保存到存储。默认为true， 但是(后续版本)有可能默认失效，所以最好手动添加。
//   cookie: {
//     maxAge: 500 * 1000 // 过期时间，单位毫秒
//   }
// }));


// 设置跨域访问
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Headers', 'Origin, No-Cache, X-Requested-With, If-Modified-Since, Pragma, Last-Modified, Cache-Control, Expires, Content-Type, X-E4M-With');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Credentials",true)
  if (req.method === 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});

// 用户端若登录状态过期或未登录则自动抛出错误
// app.use(function(req, res, next) {
//   let url = req.originalUrl;
//   req.session.touch(); //刷新session过期时间
//   if (url !== '/user/login' && !req.session) {
//     res.status(401).send('登录状态已过期');
//     return;
//   }
//   next();
// });

// 配置路由 （‘自定义路径’，上面设置的接口地址）
app.use('/photo', photoRouter);
app.use('/user', userRouter);
app.use('/imgs', imgRouter);
app.use('/imgs-cdkeditor', imgRouterCdkEditor);

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
