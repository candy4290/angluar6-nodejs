var fs = require('fs');
var express = require('express');
var path = require('path'); // 路径模块
var mutipart = require('connect-multiparty');
var mutipartMiddeware = mutipart({uploadDir:path.join(__dirname, '../public/images')});
var router = express.Router();
var result = require('../model/result');var result = require('../model/result');

/* 上传文件至静态文件夹&存库 */
router.post('/uploadImg', mutipartMiddeware, function(req, res) {
  // console.log(req.files);
  var photo = req.files.upload;
  res.json({
    url: 'http://localhost:8081/' + photo.path.slice(photo.path.indexOf('public/images') + 7),
    uploaded: 1,
    fileName: photo.name
  });
});
module.exports = router;
