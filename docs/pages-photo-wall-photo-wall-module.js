(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-photo-wall-photo-wall-module"],{

/***/ "./src/app/pages/photo-wall/photo-wall-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/photo-wall/photo-wall-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: PhotoWallRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoWallRoutingModule", function() { return PhotoWallRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _photo_wall_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./photo-wall.component */ "./src/app/pages/photo-wall/photo-wall.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _photo_wall_component__WEBPACK_IMPORTED_MODULE_2__["PhotoWallComponent"] }
];
var PhotoWallRoutingModule = /** @class */ (function () {
    function PhotoWallRoutingModule() {
    }
    PhotoWallRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PhotoWallRoutingModule);
    return PhotoWallRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/photo-wall/photo-wall.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/photo-wall/photo-wall.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@listAnim]=\"imgs?imgs.length:''\" class=\"container\">\n  <div nz-col *ngFor=\"let img of imgs\" class=\"flip\"\n  libDrag\n  [dragData]=\"img\"\n  [draggedClass]=\"'drag-start'\"\n  libDrop\n  [appDraggable]=\"true\"\n  [dropData]=\"img\"\n  [dragEnterClass]=\"'drag-enter'\"\n  (dropped)=\"changeOrder($event)\"\n  >\n    <div [@rotate]=\"img.frontOrBack\" class=\"front\">\n      <img [src]=\"img.url\" style=\"height:188px;width:150px;\">\n      <div class=\"front-shadow\">\n        <i class=\"anticon anticon-retweet\" (click)=\"rotate(img)\"></i>\n        <span class=\"preview\">\n          <i nz-icon type=\"eye\" theme=\"outline\" (click)=\"preview(modalContent, img)\"></i>\n          <i nz-icon type=\"delete\" theme=\"outline\" style=\"margin-left:4px;\" (click)=\"delete(img)\"></i>\n        </span>\n      </div>\n    </div>\n    <nz-card [@rotate]=\"img.relativeFrontOrBack\" class=\"back\">\n      <i class=\"anticon anticon-retweet\" (click)=\"rotate(img)\"></i>\n      <p>背后的故事</p>\n    </nz-card>\n  </div>\n  <div nz-col class=\"flip\">\n    <div style=\"width:150px;height:188px\">\n      <nz-upload [nzListType]=\"'picture-card'\" [nzShowUploadList]=\"false\"\n      nzAction=\"photo/upload/\"\n      (nzChange)=\"handleChange($event)\"\n      nzName=\"files\">\n        <i nz-icon type=\"plus\" theme=\"outline\"></i>\n        <div class=\"ant-upload-text\">上传</div>\n      </nz-upload>\n    </div>\n  </div>\n</div>\n\n<ng-template #modalContent>\n  <img [src]=\"previewImage\" [ngStyle]=\"{ 'width': '100%' }\" />\n</ng-template>\n"

/***/ }),

/***/ "./src/app/pages/photo-wall/photo-wall.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/photo-wall/photo-wall.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .anticon-retweet {\n  position: absolute;\n  right: 8px;\n  color: aqua;\n  cursor: pointer; }\n  :host ::ng-deep .anticon-retweet:hover {\n    color: aquamarine; }\n  :host ::ng-deep .ant-card-body {\n  padding: 0; }\n  .container {\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-evenly; }\n  .flip {\n  position: relative;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  margin-top: 8px;\n  border: 2px solid #fff; }\n  .front,\n.back {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  width: 150px;\n  height: 188px; }\n  @-webkit-keyframes cool {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  25% {\n    -webkit-transform: rotate(8deg);\n            transform: rotate(8deg); }\n  75% {\n    -webkit-transform: rotate(-8deg);\n            transform: rotate(-8deg); }\n  100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); } }\n  @keyframes cool {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  25% {\n    -webkit-transform: rotate(8deg);\n            transform: rotate(8deg); }\n  75% {\n    -webkit-transform: rotate(-8deg);\n            transform: rotate(-8deg); }\n  100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); } }\n  .front {\n  z-index: 2; }\n  .front:hover {\n    -webkit-animation: cool 500ms ease;\n            animation: cool 500ms ease; }\n  .front:hover .preview {\n      opacity: 1; }\n  .front-shadow {\n  opacity: 0;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  width: 150px;\n  height: 188px;\n  background: rgba(0, 0, 0, 0.3);\n  z-index: 3 !important; }\n  .front-shadow .preview {\n    font-size: 16px;\n    color: #fff;\n    position: absolute;\n    left: calc(50% - 18px);\n    top: calc(50% - 12px);\n    opacity: 0;\n    cursor: pointer; }\n  .front-shadow:hover {\n    cursor: pointer;\n    opacity: 1; }\n  .drag-start {\n  opacity: 0.5;\n  border: 2px dashed #ff525b; }\n  .drag-enter {\n  border: 2px dashed green; }\n  :host ::ng-deep .ant-upload.ant-upload-select-picture-card {\n  width: 100%;\n  height: 100%; }\n  :host ::ng-deep .ant-upload.ant-upload-select-picture-card {\n  width: 100%;\n  height: 100%; }\n  :host ::ng-deep .ant-upload.ant-upload-select-picture-card > .ant-upload {\n    padding: 0; }\n  :host ::ng-deep .ant-upload.ant-upload-select-picture-card > .ant-upload img {\n      width: 150px;\n      height: 188px; }\n"

/***/ }),

/***/ "./src/app/pages/photo-wall/photo-wall.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/photo-wall/photo-wall.component.ts ***!
  \**********************************************************/
/*! exports provided: PhotoWallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoWallComponent", function() { return PhotoWallComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var cxx_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cxx-lib */ "../cxx-lib/src/index.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "../../node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _photo_wall_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./photo-wall.service */ "./src/app/pages/photo-wall/photo-wall.service.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PhotoWallComponent = /** @class */ (function () {
    function PhotoWallComponent(modal, msg, phototWallService, appService) {
        var _this = this;
        this.modal = modal;
        this.msg = msg;
        this.phototWallService = phototWallService;
        this.appService = appService;
        this.imgs = [];
        this.frontOrBack = 'front';
        this.relativeFrontOrBack = 'back';
        this.beforeUploadBankcard = function (file) {
            var isJPG = file.type === 'image/jpeg';
            if (!isJPG) {
                _this.msg.error('You can only upload JPG file!');
            }
            var isLt2M = file.size / 1024 / 1024 < 2;
            if (!isLt2M) {
                _this.msg.error('Image must smaller than 2MB!');
            }
            return isJPG && isLt2M;
        };
    }
    PhotoWallComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.phototWallService.getPhotoList().subscribe(function (res) {
            res.forEach(function (item) {
                item.frontOrBack = 'front';
                item.relativeFrontOrBack = 'back';
                item.url = _this.appService.defaultUrl + item.path;
            });
            _this.imgs = res;
        });
    };
    PhotoWallComponent.prototype.ngOnDestroy = function () {
        if (this.getPhotoList$) {
            this.getPhotoList$.unsubscribe();
        }
        if (this.deletePhotoById$) {
            this.deletePhotoById$.unsubscribe();
        }
        if (this.changeOrder$) {
            this.changeOrder$.unsubscribe();
        }
    };
    /**
     *旋转
     *
     * @memberof PhotoWallComponent
     */
    PhotoWallComponent.prototype.rotate = function (img) {
        if (img.frontOrBack === 'front') {
            img.frontOrBack = 'back';
            img.relativeFrontOrBack = 'front';
        }
        else {
            img.frontOrBack = 'front';
            img.relativeFrontOrBack = 'back';
        }
    };
    PhotoWallComponent.prototype.preview = function (tplContent, img) {
        var _this = this;
        this.previewImage = img.url;
        this._modalService = this.modal.create({
            nzContent: tplContent,
            nzClosable: true,
            nzWidth: document.body.clientWidth - 48,
            nzFooter: null,
            nzOnCancel: function () { return _this._modalService.close; }
        });
    };
    PhotoWallComponent.prototype.handleChange = function (info) {
        if (info.file.status === 'uploading') {
            return;
        }
        if (info.file.status === 'done') {
            this.imgs.push({
                frontOrBack: 'front',
                relativeFrontOrBack: 'back',
                url: this.appService.defaultUrl + info.file.response.path,
                path: info.file.response.path,
                id: info.file.response.id,
                name: info.file.response.name
            });
        }
    };
    PhotoWallComponent.prototype.delete = function (img) {
        var _this = this;
        this.deletePhotoById$ = this.phototWallService.deletePhotoById(img.id, img.path).subscribe(function (rsp) {
            _this.imgs = [].concat(_this.imgs.filter(function (item) { return item.id !== img.id; }));
        }, function (error) {
            _this.msg.error('删除失败！');
        });
    };
    PhotoWallComponent.prototype.changeOrder = function (event) {
        var _this = this;
        var dragData = event.dragData;
        var dropData = event.dropData;
        this.changeOrder$ = this.phototWallService.changeOrder(dragData, dropData).subscribe(function (rsp) {
            _this.ngOnInit();
        });
    };
    PhotoWallComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-photo-wall',
            template: __webpack_require__(/*! ./photo-wall.component.html */ "./src/app/pages/photo-wall/photo-wall.component.html"),
            styles: [__webpack_require__(/*! ./photo-wall.component.scss */ "./src/app/pages/photo-wall/photo-wall.component.scss")],
            animations: [cxx_lib__WEBPACK_IMPORTED_MODULE_1__["listAnimm"], cxx_lib__WEBPACK_IMPORTED_MODULE_1__["rotateAnimm"]]
        }),
        __metadata("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzModalService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"],
            _photo_wall_service__WEBPACK_IMPORTED_MODULE_3__["PhotoWallService"],
            _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]])
    ], PhotoWallComponent);
    return PhotoWallComponent;
}());



/***/ }),

/***/ "./src/app/pages/photo-wall/photo-wall.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/photo-wall/photo-wall.module.ts ***!
  \*******************************************************/
/*! exports provided: PhotoWallModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoWallModule", function() { return PhotoWallModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _photo_wall_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./photo-wall.component */ "./src/app/pages/photo-wall/photo-wall.component.ts");
/* harmony import */ var _photo_wall_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./photo-wall-routing.module */ "./src/app/pages/photo-wall/photo-wall-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _photo_wall_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./photo-wall.service */ "./src/app/pages/photo-wall/photo-wall.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PhotoWallModule = /** @class */ (function () {
    function PhotoWallModule() {
    }
    PhotoWallModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _photo_wall_routing_module__WEBPACK_IMPORTED_MODULE_2__["PhotoWallRoutingModule"]
            ],
            declarations: [_photo_wall_component__WEBPACK_IMPORTED_MODULE_1__["PhotoWallComponent"]],
            providers: [_photo_wall_service__WEBPACK_IMPORTED_MODULE_4__["PhotoWallService"]]
        })
    ], PhotoWallModule);
    return PhotoWallModule;
}());



/***/ }),

/***/ "./src/app/pages/photo-wall/photo-wall.service.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/photo-wall/photo-wall.service.ts ***!
  \********************************************************/
/*! exports provided: PhotoWallService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoWallService", function() { return PhotoWallService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PhotoWallService = /** @class */ (function () {
    function PhotoWallService(http, app) {
        this.http = http;
        this.app = app;
    }
    /**
     *图片列表查询
     *
     * @memberof PhotoWallService
     */
    PhotoWallService.prototype.getPhotoList = function () {
        return this.http.post("photo/list", {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (rsp) { return rsp.photoList; }));
    };
    /**
     *根据编号删除图片
     *
     * @param {*} id
     * @returns
     * @memberof PhotoWallService
     */
    PhotoWallService.prototype.deletePhotoById = function (id, path) {
        var req = {
            id: id,
            path: path
        };
        return this.http.post('photo/deleteById', req);
    };
    PhotoWallService.prototype.changeOrder = function (dragData, dropData) {
        var req = {
            dragData: dragData,
            dropData: dropData
        };
        return this.http.post('photo/changeOrder', req);
    };
    PhotoWallService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]])
    ], PhotoWallService);
    return PhotoWallService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-photo-wall-photo-wall-module.js.map