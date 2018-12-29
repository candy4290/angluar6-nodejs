(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-three-d-three-d-module"],{

/***/ "./src/app/pages/three-d/three-d-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/three-d/three-d-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ThreeDRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThreeDRoutingModule", function() { return ThreeDRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _three_d_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./three-d.component */ "./src/app/pages/three-d/three-d.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _three_d_component__WEBPACK_IMPORTED_MODULE_2__["ThreeDComponent"] }
];
var ThreeDRoutingModule = /** @class */ (function () {
    function ThreeDRoutingModule() {
    }
    ThreeDRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ThreeDRoutingModule);
    return ThreeDRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/three-d/three-d.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/three-d/three-d.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-magic-square [width]=\"400\"></app-magic-square>\n"

/***/ }),

/***/ "./src/app/pages/three-d/three-d.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/three-d/three-d.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/three-d/three-d.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/three-d/three-d.component.ts ***!
  \****************************************************/
/*! exports provided: ThreeDComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThreeDComponent", function() { return ThreeDComponent; });
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

var ThreeDComponent = /** @class */ (function () {
    // @ViewChild('3d') box: any;
    // private x = 30;
    // private y = -60;
    function ThreeDComponent() {
    }
    ThreeDComponent.prototype.ngOnInit = function () {
    };
    ThreeDComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-three-d',
            template: __webpack_require__(/*! ./three-d.component.html */ "./src/app/pages/three-d/three-d.component.html"),
            styles: [__webpack_require__(/*! ./three-d.component.scss */ "./src/app/pages/three-d/three-d.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ThreeDComponent);
    return ThreeDComponent;
}());



/***/ }),

/***/ "./src/app/pages/three-d/three-d.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/three-d/three-d.module.ts ***!
  \*************************************************/
/*! exports provided: ThreeDModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThreeDModule", function() { return ThreeDModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _three_d_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./three-d.component */ "./src/app/pages/three-d/three-d.component.ts");
/* harmony import */ var _three_d_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./three-d-routing.module */ "./src/app/pages/three-d/three-d-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ThreeDModule = /** @class */ (function () {
    function ThreeDModule() {
    }
    ThreeDModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _three_d_routing_module__WEBPACK_IMPORTED_MODULE_2__["ThreeDRoutingModule"],
            ],
            declarations: [_three_d_component__WEBPACK_IMPORTED_MODULE_1__["ThreeDComponent"]]
        })
    ], ThreeDModule);
    return ThreeDModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-three-d-three-d-module.js.map