var express = require('express');
var router = express.Router();
var userDAO = require('../dao/userDAO');
var result = require('../model/result');

/* 登录 */
router.post('/login', function (req, res) {
  // req.secret = 'cxx';
  // res.cookie('JSESSIONID', 'gtx', {signed: true, maxAge: 30, httpOnly: true});
  var name = req.body.name;
  var psw = req.body.psw;
  userDAO.login(name, psw, function (user) {
    if (user.length > 0) {
      res.json(result.createResult(true, null));
    } else {
      res.json(result.createResult(false, '用户名或密码错误'));
    }
  });
});

router.post('/changePsw', function (req, res) {
  var name = req.body.name;
  var psw = req.body.psw;
  var id = req.body.id;
  userDAO.changePsw(name, psw, id, function (user) {
    res.json(resu.createResult(true, {user}));
  })
});

module.exports = router;
