(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/shared/components/magic-square/magic-square.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/magic-square/magic-square.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"box\" #3d (mousedown)=\"mousedown($event)\" [ngStyle]=\"divStyle\">\n  <div [ngStyle]=\"div1\"><img src=\"assets/imgs/1.jpg\" draggable=\"false\" /></div>\n  <div [ngStyle]=\"div2\"><img src=\"assets/imgs/2.jpg\" draggable=\"false\" /></div>\n  <div [ngStyle]=\"div3\"><img src=\"assets/imgs/3.jpg\" draggable=\"false\" /></div>\n  <div [ngStyle]=\"div4\"><img src=\"assets/imgs/4.jpg\" draggable=\"false\" /></div>\n  <div [ngStyle]=\"div5\"><img src=\"assets/imgs/5.jpg\" draggable=\"false\" /></div>\n  <div [ngStyle]=\"div6\"><img src=\"assets/imgs/6.jpg\" draggable=\"false\" /></div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/magic-square/magic-square.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/magic-square/magic-square.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n#box {\n  position: absolute;\n  /*给父级设置3d空间*/\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  /*设置景深*/\n  /*perspective: 800px;*/\n  -webkit-transform: perspective(8000px) rotateY(-60deg) rotateX(30deg);\n          transform: perspective(8000px) rotateY(-60deg) rotateX(30deg); }\n#box div {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  opacity: 0.7; }\n/*前面*/\n#box div:nth-child(1) {\n  background: palegreen; }\n/*后面*/\n#box div:nth-child(2) {\n  background: palevioletred; }\n/*左面*/\n#box div:nth-child(3) {\n  background: plum; }\n/*右面*/\n#box div:nth-child(4) {\n  background: peru; }\n/*上面*/\n#box div:nth-child(5) {\n  background: palegoldenrod; }\n/*下面*/\n#box div:nth-child(6) {\n  background: paleturquoise; }\nimg {\n  width: 100%;\n  height: 100%; }\n"

/***/ }),

/***/ "./src/app/shared/components/magic-square/magic-square.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/magic-square/magic-square.component.ts ***!
  \**************************************************************************/
/*! exports provided: MagicSquareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagicSquareComponent", function() { return MagicSquareComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MagicSquareComponent = /** @class */ (function () {
    function MagicSquareComponent() {
        this.x = 30;
        this.y = -60;
    }
    Object.defineProperty(MagicSquareComponent.prototype, "width", {
        set: function (value) {
            if (typeof value === 'undefined') {
                return;
            }
            this.setStyleMap(value);
        },
        enumerable: true,
        configurable: true
    });
    MagicSquareComponent.prototype.ngOnInit = function () {
    };
    MagicSquareComponent.prototype.mousedown = function (ev) {
        var event = window.event || ev;
        var disY = event.clientX - this.y;
        var disX = event.clientY - this.x;
        document.onmousemove = function (ev2) {
            var event2 = window.event || ev2;
            // 计算偏移角度
            this.x = event2['clientY'] - disX;
            this.y = event2['clientX'] - disY;
            this.box.nativeElement.style.transform = 'perspective(800px) rotateY(' + this.y + 'deg) rotateX(' + this.x + 'deg)';
        }.bind(this);
        document.onmouseup = function () {
            document.onmousemove = null;
        };
    };
    MagicSquareComponent.prototype.setStyleMap = function (width) {
        if (width === void 0) { width = 200; }
        this.divStyle = {
            width: width + 'px',
            height: width + 'px',
            top: 200 + 'px',
            right: 200 + 'px'
        };
        this.div1 = {
            transform: "translateZ(" + width / 2 + "px)"
        };
        this.div2 = {
            transform: "translateZ(-" + width / 2 + "px)"
        };
        this.div3 = {
            transform: "translateX(-" + width / 2 + "px) rotateY(90deg)"
        };
        this.div4 = {
            transform: "translateX(" + width / 2 + "px) rotateY(90deg)"
        };
        this.div5 = {
            transform: "translateY(-" + width / 2 + "px) rotateX(90deg)"
        };
        this.div6 = {
            transform: "translateY(" + width / 2 + "px) rotateX(90deg)"
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], MagicSquareComponent.prototype, "width", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('3d'),
        __metadata("design:type", Object)
    ], MagicSquareComponent.prototype, "box", void 0);
    MagicSquareComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-magic-square',
            template: __webpack_require__(/*! ./magic-square.component.html */ "./src/app/shared/components/magic-square/magic-square.component.html"),
            styles: [__webpack_require__(/*! ./magic-square.component.scss */ "./src/app/shared/components/magic-square/magic-square.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MagicSquareComponent);
    return MagicSquareComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/magic-square/magic-square.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared/components/magic-square/magic-square.module.ts ***!
  \***********************************************************************/
/*! exports provided: MagicSquareModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagicSquareModule", function() { return MagicSquareModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _magic_square_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./magic-square.component */ "./src/app/shared/components/magic-square/magic-square.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MagicSquareModule = /** @class */ (function () {
    function MagicSquareModule() {
    }
    MagicSquareModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            exports: [
                _magic_square_component__WEBPACK_IMPORTED_MODULE_2__["MagicSquareComponent"]
            ],
            declarations: [_magic_square_component__WEBPACK_IMPORTED_MODULE_2__["MagicSquareComponent"]]
        })
    ], MagicSquareModule);
    return MagicSquareModule;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: Url, SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Url", function() { return Url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "../../node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_magic_square_magic_square_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/magic-square/magic-square.module */ "./src/app/shared/components/magic-square/magic-square.module.ts");
/* harmony import */ var cxx_lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! cxx-lib */ "../cxx-lib/src/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var Url = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('SettingsUrl');
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function (url) {
        return {
            ngModule: SharedModule_1,
            providers: [
                { provide: Url, useValue: url }
            ]
        };
    };
    SharedModule = SharedModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _components_magic_square_magic_square_module__WEBPACK_IMPORTED_MODULE_5__["MagicSquareModule"],
                cxx_lib__WEBPACK_IMPORTED_MODULE_6__["DirectiveModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
    var SharedModule_1;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map