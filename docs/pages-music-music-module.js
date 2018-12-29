(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-music-music-module"],{

/***/ "./src/app/pages/music/music-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/music/music-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: MusicRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicRoutingModule", function() { return MusicRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _music_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./music.component */ "./src/app/pages/music/music.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _music_component__WEBPACK_IMPORTED_MODULE_2__["MusicComponent"] }
];
var MusicRoutingModule = /** @class */ (function () {
    function MusicRoutingModule() {
    }
    MusicRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MusicRoutingModule);
    return MusicRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/music/music.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/music/music.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-card nzHoverable style=\"width:240px\" [nzCover]=\"coverTemplate\">\n  <button nz-button nzType=\"default\" nzShape=\"circle\" (click)=\"playPreSong()\"><i class=\"anticon anticon-step-backward\"></i></button>\n  <button nz-button nzType=\"default\" nzShape=\"circle\" nzSize=\"large\" style=\"margin-left:8px;margin-right:8px;\" (click)=\"playOrPause()\">\n    <i class=\"anticon anticon-caret-right\" *ngIf=\"paused;else played\"></i>\n    <ng-template #played>\n      <i class=\"anticon anticon-pause\"></i>\n    </ng-template>\n  </button>\n  <button nz-button nzType=\"default\" nzShape=\"circle\" (click)=\"playNextSong()\"><i class=\"anticon anticon-step-forward\"></i></button>\n</nz-card>\n<ng-template #coverTemplate>\n  <!-- <img alt=\"example\" src=\"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png\"/> -->\n  <nz-upload class=\"avatar-uploader\"\n    nzListType=\"picture-card\"\n    [nzShowUploadList]=\"false\"\n    [nzBeforeUpload]=\"beforeUpload\"\n    (nzChange)=\"handleChange($event)\">\n    <ng-container *ngIf=\"!avatarUrl\">\n      <i class=\"anticon anticon-plus\"></i>\n      <div class=\"ant-upload-text\">Upload</div>\n    </ng-container>\n    <img *ngIf=\"avatarUrl\" [src]=\"avatarUrl\" class=\"avatar\">\n  </nz-upload>\n</ng-template>\n<audio #cxxmusic loop (ended)=\"ended()\">\n  <source [src]=\"music.path\">\n  <!--<source src=\"../../../assets/mp3/冯提莫 - 佛系少女.mp3\">-->\n  Your browser does not support the audio element.\n</audio>\n"

/***/ }),

/***/ "./src/app/pages/music/music.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/music/music.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .ant-card-body {\n  background: #f0f2f5;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n:host ::ng-deep .ant-upload.ant-upload-select-picture-card {\n  /* border: 1px dashed #d9d9d9; */\n  border-width: 0;\n  width: 238px;\n  height: 298px;\n  /* border-radius: 4px; */\n  border-radius: 0;\n  background-color: #fafafa;\n  transition: border-color 0.3s ease;\n  margin: 0; }\n\n:host ::ng-deep .ant-upload.ant-upload-select-picture-card > .ant-upload {\n    padding: 0; }\n\n:host ::ng-deep .ant-upload.ant-upload-select-picture-card > .ant-upload img {\n      width: 238px;\n      height: 298px;\n      transition: -webkit-transform 1s;\n      transition: transform 1s;\n      transition: transform 1s, -webkit-transform 1s;\n      -webkit-transform-origin: 50% 0;\n              transform-origin: 50% 0; }\n\n:host ::ng-deep .ant-upload.ant-upload-select-picture-card > .ant-upload img:hover {\n        -webkit-transform: scaleY(1.2);\n                transform: scaleY(1.2);\n        -webkit-transform-origin: 50% 0;\n                transform-origin: 50% 0; }\n"

/***/ }),

/***/ "./src/app/pages/music/music.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/music/music.component.ts ***!
  \************************************************/
/*! exports provided: MusicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicComponent", function() { return MusicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "../../node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var cxx_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cxx-lib */ "../cxx-lib/src/index.ts");
/* harmony import */ var _music_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./music.service */ "./src/app/pages/music/music.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MusicComponent = /** @class */ (function () {
    function MusicComponent(message, musicService) {
        var _this = this;
        this.message = message;
        this.musicService = musicService;
        this.music = {
            name: '',
            musicer: '',
            path: ''
        };
        this.musicList = [];
        this.avatarUrl = 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png';
        this.paused = true; // 是否暂停（默认为true）
        this.beforeUpload = function (file) {
            if (!cxx_lib__WEBPACK_IMPORTED_MODULE_2__["Util"].fileCheck(_this.message, file)) {
                return false;
            }
            var uploadFile = Object.assign(file);
            cxx_lib__WEBPACK_IMPORTED_MODULE_2__["Util"].getBase64(file, function (img) {
                uploadFile.thumbUrl = img;
                _this.avatarUrl = img;
            });
            return false;
        };
        this.musicList$ = this.musicService.queryMusicList().subscribe(function (rsp) {
            _this.musicList = rsp;
            _this.music = _this.musicList[0];
            console.log(_this.music);
        }, function (error) {
        });
    }
    MusicComponent.prototype.ngOnInit = function () {
    };
    MusicComponent.prototype.ngOnDestroy = function () {
        if (this.musicList$) {
            this.musicList$.unsubscribe();
        }
    };
    MusicComponent.prototype.ngAfterViewInit = function () {
        this.audio = this.cxxmusic.nativeElement;
        this.audio.src = this.music.path;
    };
    MusicComponent.prototype.playOrPause = function () {
        this.paused = !this.paused;
        if (!this.paused) {
            this.play(this.audio);
        }
        else {
            this.pause(this.audio);
        }
    };
    /**
     *播放
     *
     * @param {*} audio
     * @memberof MusicComponent
     */
    MusicComponent.prototype.play = function (audio) {
        if (this.pauseInterval) {
            clearInterval(this.pauseInterval);
        }
        audio.volume = 1;
        audio.play();
    };
    /**
     *暂停
     *
     * @param {*} audio
     * @memberof MusicComponent
     */
    MusicComponent.prototype.pause = function (audio) {
        var _this = this;
        var v = audio.volume;
        this.pauseInterval = setInterval(function () {
            v -= 0.2;
            if (v > 0) {
                audio.volume = v;
            }
            else {
                clearInterval(_this.pauseInterval);
                audio.pause();
            }
        }, 200);
    };
    /**
     *上一首（无上一首就最后一首）
     *
     * @memberof MusicComponent
     */
    MusicComponent.prototype.playPreSong = function () {
        if (this.pauseInterval) {
            clearInterval(this.pauseInterval);
        }
        var currentOrder = this.musicList.indexOf(this.music);
        if (currentOrder > 0) {
            this.music = this.musicList[currentOrder - 1];
            this.audio.src = this.music.path;
            if (!this.paused) {
                this.audio.play();
            }
        }
        else {
            this.music = this.musicList[this.musicList.length - 1];
            this.audio.src = this.music.path;
            if (!this.paused) {
                this.audio.play();
            }
        }
    };
    /**
     *下一首（无下一首就最后一首）
     *
     * @memberof MusicComponent
     */
    MusicComponent.prototype.playNextSong = function () {
        if (this.pauseInterval) {
            clearInterval(this.pauseInterval);
        }
        var currentOrder = this.musicList.indexOf(this.music);
        if (currentOrder < this.musicList.length - 1) {
            this.music = this.musicList[currentOrder + 1];
            this.audio.src = this.music.path;
            if (!this.paused) {
                this.audio.play();
            }
        }
        else {
            this.music = this.musicList[0];
            this.audio.pause();
            this.audio.src = this.music.path;
            if (!this.paused) {
                this.audio.play();
            }
        }
    };
    MusicComponent.prototype.ended = function () {
        console.log('----+++++');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('cxxmusic'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MusicComponent.prototype, "cxxmusic", void 0);
    MusicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-music',
            template: __webpack_require__(/*! ./music.component.html */ "./src/app/pages/music/music.component.html"),
            styles: [__webpack_require__(/*! ./music.component.scss */ "./src/app/pages/music/music.component.scss")],
            animations: [cxx_lib__WEBPACK_IMPORTED_MODULE_2__["item"]]
        }),
        __metadata("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"],
            _music_service__WEBPACK_IMPORTED_MODULE_3__["MusicService"]])
    ], MusicComponent);
    return MusicComponent;
}());



/***/ }),

/***/ "./src/app/pages/music/music.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/music/music.module.ts ***!
  \*********************************************/
/*! exports provided: MusicModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicModule", function() { return MusicModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _music_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./music.component */ "./src/app/pages/music/music.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _music_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./music-routing.module */ "./src/app/pages/music/music-routing.module.ts");
/* harmony import */ var _music_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./music.service */ "./src/app/pages/music/music.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MusicModule = /** @class */ (function () {
    function MusicModule() {
    }
    MusicModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _music_routing_module__WEBPACK_IMPORTED_MODULE_3__["MusicRoutingModule"]
            ],
            declarations: [_music_component__WEBPACK_IMPORTED_MODULE_1__["MusicComponent"]],
            providers: [_music_service__WEBPACK_IMPORTED_MODULE_4__["MusicService"]]
        })
    ], MusicModule);
    return MusicModule;
}());



/***/ }),

/***/ "./src/app/pages/music/music.service.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/music/music.service.ts ***!
  \**********************************************/
/*! exports provided: MusicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicService", function() { return MusicService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MusicService = /** @class */ (function () {
    function MusicService(http) {
        this.http = http;
    }
    /**
     *查询音乐列表
     *
     * @memberof MusicService
     */
    MusicService.prototype.queryMusicList = function () {
        return this.http.post('http://localhost:8081/musicList', {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (rsp) {
            return rsp['rtnData'].musicList;
        }));
    };
    MusicService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MusicService);
    return MusicService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-music-music-module.js.map