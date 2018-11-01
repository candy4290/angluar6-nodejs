var fs = require('fs');
var express = require('express');
var path = require('path'); // 路径模块
var mutipart = require('connect-multiparty');
var mutipartMiddeware = mutipart({uploadDir:path.join(__dirname, '../public/images')});
var router = express.Router();
var photoDAO = require('../dao/photoDAO');
var result = require('../model/result');

//设置跨域访问
router.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, No-Cache, X-Requested-With, If-Modified-Since, Pragma, Last-Modified, Cache-Control, Expires, Content-Type, X-E4M-With');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    // res.header("Content-Type", "application/json;charset=utf-8;x-requested-with;application/x-www-form-urlencoded");
    if (req.method === 'OPTIONS') {
        res.status(200).end();
    } else {
        next();
    }
});

/* 查询照片列表 */
router.post('/list', function (req, res) {
    photoDAO.list(function (photos) {
        res.json(result.createResult(true, {photoList: photos}));
    });
});

/* 上传文件至静态文件夹&存库 */
router.post('/upload', mutipartMiddeware, function(req, res) {
    var photo = req.files.files;
    photoDAO.add(photo, function (data) {
        res.json(result.createResult(true, data))
    })
});

/* 根据id删除 */
router.post('/deleteById', function(req, res) {
    var id = req.body.id;
    photoDAO.delete(id, function (success) {
        if (success) {
            fs.unlink(path.join(__dirname, '../public/') + req.body.path, function(error) {
                res.json(result.createResult(success, null));
            });
        } else {
            res.json(result.createResult(success, null));
        }
    });
});

/* */
router.post('/changeOrder', function(req, res) {
    const dragData = req.body.dragData;
    const dropData = req.body.dropData;
    photoDAO.update(dragData, dropData, function(success) {});
    photoDAO.update(dropData, dragData, function(success) {});
    res.json(result.createResult(true, null));
})

module.exports = router;