(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orders-orders-module"],{

/***/ "./src/app/orders/order-list/order-list.component.css":
/*!************************************************************!*\
  !*** ./src/app/orders/order-list/order-list.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy9vcmRlci1saXN0L29yZGVyLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/orders/order-list/order-list.component.html":
/*!*************************************************************!*\
  !*** ./src/app/orders/order-list/order-list.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  order-list works!\n</p>\n"

/***/ }),

/***/ "./src/app/orders/order-list/order-list.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/orders/order-list/order-list.component.ts ***!
  \***********************************************************/
/*! exports provided: OrderListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderListComponent", function() { return OrderListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrderListComponent = /** @class */ (function () {
    function OrderListComponent() {
    }
    OrderListComponent.prototype.ngOnInit = function () {
    };
    OrderListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-list',
            template: __webpack_require__(/*! ./order-list.component.html */ "./src/app/orders/order-list/order-list.component.html"),
            styles: [__webpack_require__(/*! ./order-list.component.css */ "./src/app/orders/order-list/order-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OrderListComponent);
    return OrderListComponent;
}());



/***/ }),

/***/ "./src/app/orders/orders-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/orders/orders-routing.module.ts ***!
  \*************************************************/
/*! exports provided: OrdersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersRoutingModule", function() { return OrdersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _order_list_order_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-list/order-list.component */ "./src/app/orders/order-list/order-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _order_list_order_list_component__WEBPACK_IMPORTED_MODULE_2__["OrderListComponent"]
    }
];
var OrdersRoutingModule = /** @class */ (function () {
    function OrdersRoutingModule() {
    }
    OrdersRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], OrdersRoutingModule);
    return OrdersRoutingModule;
}());



/***/ }),

/***/ "./src/app/orders/orders.module.ts":
/*!*****************************************!*\
  !*** ./src/app/orders/orders.module.ts ***!
  \*****************************************/
/*! exports provided: OrdersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersModule", function() { return OrdersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _orders_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orders-routing.module */ "./src/app/orders/orders-routing.module.ts");
/* harmony import */ var _order_list_order_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-list/order-list.component */ "./src/app/orders/order-list/order-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var OrdersModule = /** @class */ (function () {
    function OrdersModule() {
    }
    OrdersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_order_list_order_list_component__WEBPACK_IMPORTED_MODULE_3__["OrderListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _orders_routing_module__WEBPACK_IMPORTED_MODULE_2__["OrdersRoutingModule"]
            ]
        })
    ], OrdersModule);
    return OrdersModule;
}());



/***/ })

}]);
//# sourceMappingURL=orders-orders-module.js.map