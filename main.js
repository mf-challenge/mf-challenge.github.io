(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".small-logo {\r\n    width: 40px;\r\n    height: 40px;\r\n    margin: 1px auto;\r\n}\r\n\r\n.navbar {\r\n    min-height: 60px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<!--\n<nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" href=\"#\">\n                <i class=\"fa d-inline fa-lg fa-cloud\"></i>\n                <a href=\"#\" class=\"navbar-left\">\n                    <img class=\"small-logo\" src=\"./assets/img/total-rewards-orange.png\">\n                </a>\n                <span>Rewards and Recognitions</span>\n            </a>\n      </div>\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\"><a href=\"#\">Home</a></li>\n        \n        <li><a href=\"#\">Page 1</a></li>\n        <li><a href=\"#\">Page 2</a></li>\n        <li><a href=\"#\">Page 3</a></li>\n      </ul>\n    </div>\n  </nav>\n-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ux_aspects_ux_aspects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ux-aspects/ux-aspects */ "./node_modules/@ux-aspects/ux-aspects/fesm5/ux-aspects-ux-aspects.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "./node_modules/ngx-bootstrap/accordion/index.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/index.js");
/* harmony import */ var _directive_transaction_list_transaction_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./directive/transaction-list/transaction-list.component */ "./src/app/directive/transaction-list/transaction-list.component.ts");
/* harmony import */ var _directive_account_summary_account_summary_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./directive/account-summary/account-summary.component */ "./src/app/directive/account-summary/account-summary.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _directive_transaction_list_transaction_list_component__WEBPACK_IMPORTED_MODULE_12__["TransactionListComponent"],
                _directive_account_summary_account_summary_component__WEBPACK_IMPORTED_MODULE_13__["AccountSummaryComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _ux_aspects_ux_aspects__WEBPACK_IMPORTED_MODULE_5__["DateTimePickerModule"],
                _ux_aspects_ux_aspects__WEBPACK_IMPORTED_MODULE_5__["CheckboxModule"],
                _ux_aspects_ux_aspects__WEBPACK_IMPORTED_MODULE_5__["PopoverModule"],
                ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_8__["AccordionModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _ux_aspects_ux_aspects__WEBPACK_IMPORTED_MODULE_5__["TimePickerModule"],
                _ux_aspects_ux_aspects__WEBPACK_IMPORTED_MODULE_5__["PageHeaderModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_11__["BsDropdownModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AuthGuard = /** @class */ (function () {
    function AuthGuard() {
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        return true;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/directive/account-summary/account-summary.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/directive/account-summary/account-summary.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/directive/account-summary/account-summary.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/directive/account-summary/account-summary.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-view-demo\">\n    <ul class=\"card-view card-hover\">\n        <li class=\"card  bottom outline\">\n            <div class=\"container-fluid\">\n                <div class=\"row\">\n                    <div class=\"col-xs-8\">\n                        <strong>Account Summary</strong>\n                        <p class=\"m-b-nil\">73a90acaae2b1ccc0e969709665bc62f</p>\n                        <small>Jul 14, 2013</small>\n                    </div>\n                    <div class=\"col-xs-4 text-right\">\n                        <p class=\"m-b-nil chart-alternate1\"><i class=\"hpe-icon hpe-ascend\"></i> 3000</p>\n                    </div>\n                </div>\n            </div>\n        </li>\n        <li class=\"card\">\n            <div class=\"container-fluid\">\n                <div class=\"row\">\n                    <div class=\"col-xs-8\">\n                        <strong>Awards this year</strong>\n                        <p class=\"m-b-nil\">73a90acaae2b1ccc0e969709665bc62f</p>\n                        <small>Jul 16, 2013</small>\n                    </div>\n                    <div class=\"col-xs-4 text-right\">\n                        <p class=\"m-b-nil\"><i class=\"hpe-icon hpe-descend\"></i> 5000</p>\n                    </div>\n                </div>\n            </div>\n        </li>\n        <li class=\"card\">\n            <div class=\"container-fluid\">\n                <div class=\"row\">\n                    <div class=\"col-xs-8\">\n                        <strong>Reedeemed this year</strong>\n                        <p class=\"m-b-nil\">73a90acaae2b1ccc0e969709665bc62f</p>\n                        <small>Jul 18, 2013</small>\n                    </div>\n                    <div class=\"col-xs-4 text-right\">\n                        <p class=\"m-b-nil chart-alternate1\"><i class=\"hpe-icon hpe-ascend\"></i> 2000</p>\n                    </div>\n                </div>\n            </div>\n        </li>\n        <li class=\"card\">\n            <div class=\"container-fluid\">\n                <div class=\"row\">\n                    <div class=\"col-xs-8\">\n                        <strong>Reedeemed this year</strong>\n                        <p class=\"m-b-nil\">73a90acaae2b1ccc0e969709665bc62f</p>\n                        <small>Jul 18, 2013</small>\n                    </div>\n                    <div class=\"col-xs-4 text-right\">\n                        <p class=\"m-b-nil chart-alternate1\"><i class=\"hpe-icon hpe-ascend\"></i> 2000</p>\n                    </div>\n                </div>\n            </div>\n        </li>\n        <li class=\"card\">\n            <div class=\"container-fluid\">\n                <div class=\"row\">\n                    <div class=\"col-xs-8\">\n                        <strong>Reedeemed this year</strong>\n                        <p class=\"m-b-nil\">73a90acaae2b1ccc0e969709665bc62f</p>\n                        <small>Jul 18, 2013</small>\n                    </div>\n                    <div class=\"col-xs-4 text-right\">\n                        <p class=\"m-b-nil chart-alternate1\"><i class=\"hpe-icon hpe-ascend\"></i> 2000</p>\n                    </div>\n                </div>\n            </div>\n        </li>\n        <li class=\"card\">\n            <div class=\"container-fluid\">\n                <div class=\"row\">\n                    <div class=\"col-xs-8\">\n                        <strong>Reedeemed this year</strong>\n                        <p class=\"m-b-nil\">73a90acaae2b1ccc0e969709665bc62f</p>\n                        <small>Jul 18, 2013</small>\n                    </div>\n                    <div class=\"col-xs-4 text-right\">\n                        <p class=\"m-b-nil chart-alternate1\"><i class=\"hpe-icon hpe-ascend\"></i> 2000</p>\n                    </div>\n                </div>\n            </div>\n        </li>\n    </ul>\n</div>"

/***/ }),

/***/ "./src/app/directive/account-summary/account-summary.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/directive/account-summary/account-summary.component.ts ***!
  \************************************************************************/
/*! exports provided: AccountSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountSummaryComponent", function() { return AccountSummaryComponent; });
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

var AccountSummaryComponent = /** @class */ (function () {
    function AccountSummaryComponent() {
    }
    AccountSummaryComponent.prototype.ngOnInit = function () {
    };
    AccountSummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account-summary',
            template: __webpack_require__(/*! ./account-summary.component.html */ "./src/app/directive/account-summary/account-summary.component.html"),
            styles: [__webpack_require__(/*! ./account-summary.component.css */ "./src/app/directive/account-summary/account-summary.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AccountSummaryComponent);
    return AccountSummaryComponent;
}());



/***/ }),

/***/ "./src/app/directive/transaction-list/transaction-list.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/directive/transaction-list/transaction-list.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\r\n    margin-right: 0px;\r\n    margin-left: 0px;\r\n}\r\n\r\n.date-time-picker-popover {\r\n    max-width: none;\r\n}\r\n\r\n.date-time-picker-popover .popover-content {\r\n    padding: 0;\r\n}"

/***/ }),

/***/ "./src/app/directive/transaction-list/transaction-list.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/directive/transaction-list/transaction-list.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"row\">\n    <div class=\"col-md-12\"><div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n            Transactions\n        </div>\n        <div class=\"panel-body\">\n\n            <div class=\"row\">\n                <div class=\"col-sm-5 col-xs-5\">\n                    <div class=\"input-group date m-nil\">\n                        <span class=\"input-group-btn\">\n                            <button class=\"btn button-secondary\" aria-label=\"Show Date Picker\" (click)=\"popover.show()\">\n                                <i class=\"hpe-icon hpe-calendar\" aria-hidden=\"true\"></i>\n                            </button>\n                        </span>\n                        <input type=\"text\" #input #popover=\"ux-popover\"\n                            [ngModel]=\"date | date:'dd MMMM yyyy HH:mm'\"\n                            [uxPopover]=\"popoverTemplate\"\n                            placement=\"bottom\"\n                            popoverClass=\"date-time-picker-popover\"\n                            class=\"form-control\"\n                            aria-label=\"Selected date\"\n                            (keydown.enter)=\"popover.show()\">\n                    </div>\n            \n                    <p class=\"m-t\">Selected date is:\n                        <em>{{ date | date:'dd MMMM yyyy HH:mm' }} {{ timezone?.name }}</em>\n                    </p>\n                </div>\n                <div class=\"col-sm-5 col-xs-5\">\n                    <div class=\"input-group date m-nil\">\n                        <span class=\"input-group-btn\">\n                            <button class=\"btn button-secondary\" aria-label=\"Show Date Picker\" (click)=\"popover.show()\">\n                                <i class=\"hpe-icon hpe-calendar\" aria-hidden=\"true\"></i>\n                            </button>\n                        </span>\n                        <input type=\"text\" #input #popover=\"ux-popover\"\n                            [ngModel]=\"date | date:'dd MMMM yyyy HH:mm'\"\n                            [uxPopover]=\"popoverTemplate\"\n                            placement=\"bottom\"\n                            popoverClass=\"date-time-picker-popover\"\n                            class=\"form-control\"\n                            aria-label=\"Selected date\"\n                            (keydown.enter)=\"popover.show()\">\n                    </div>\n            \n                    <p class=\"m-t\">Selected date is:\n                        <em>{{ date | date:'dd MMMM yyyy HH:mm' }} {{ timezone?.name }}</em>\n                    </p>\n                </div>\n                <div class=\"col-sm-2 col-xs-2\">\n                    <div class=\"input-group date m-nil\">\n                        <span class=\"input-group-btn\">\n                            <button class=\"btn button-secondary\" aria-label=\"Show Date Picker\" (click)=\"popover.show()\">\n                                <i class=\"hpe-icon  hpe-search\" aria-hidden=\"true\"></i>\n                            </button>\n                        </span>\n                    </div>\n                </div>\n            </div>\n\n            <table class=\"table table-hover\">\n                <thead>\n                    <tr>\n                        <th>#</th>\n                        <th>Data</th>\n                        <th>User</th>\n                        <th>Value</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td>1</td>\n                        <td>156</td>\n                        <td>Felicity</td>\n                        <td class=\"chart-alternate1\">\n                        <i class=\"hpe-icon hpe-ascend\"></i>\n                        40%</td>\n                    </tr>\n                    <tr>\n                        <td>2</td>\n                        <td>226</td>\n                        <td>Jacob</td>\n                        <td>\n                        <i class=\"hpe-icon hpe-descend\"></i>\n                        -20%</td>\n                    </tr>\n                    <tr>\n                        <td>3</td>\n                        <td>52</td>\n                        <td>David</td>\n                        <td class=\"chart-alternate1\">\n                        <i class=\"hpe-icon hpe-ascend\"></i>\n                        26%</td>\n                    </tr>\n                    <tr>\n                        <td>4</td>\n                        <td>461</td>\n                        <td>Richard</td>\n                        <td>\n                        <i class=\"hpe-icon hpe-descend\"></i>\n                        -23%</td>\n                    </tr>\n                    <tr>\n                        <td>5</td>\n                        <td>119</td>\n                        <td>Victoria</td>\n                        <td class=\"chart-alternate1\">\n                        <i class=\"hpe-icon hpe-ascend\"></i>\n                        16%</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div></div>\n  </div>"

/***/ }),

/***/ "./src/app/directive/transaction-list/transaction-list.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/directive/transaction-list/transaction-list.component.ts ***!
  \**************************************************************************/
/*! exports provided: TransactionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionListComponent", function() { return TransactionListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_observable_fromEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/observable/fromEvent */ "./node_modules/rxjs-compat/_esm5/observable/fromEvent.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TransactionListComponent = /** @class */ (function () {
    function TransactionListComponent() {
        this.date = new Date();
        this.timezone = { name: 'GMT', offset: 0 };
        this.showTime = true;
        this.showTimezones = true;
        this.showMeridians = true;
        this.showSpinners = true;
    }
    TransactionListComponent.prototype.ngOnInit = function () {
    };
    TransactionListComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.subscription = Object(rxjs_observable_fromEvent__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.dateInput.nativeElement, 'input')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(500))
            .subscribe(function (event) { return _this.parse(_this.dateInput.nativeElement.value); });
    };
    TransactionListComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    TransactionListComponent.prototype.parse = function (value) {
        // try and parse the date
        var date = new Date(value);
        // check if the date is valid
        if (!isNaN(date.getDate())) {
            this.date = date;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('input'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TransactionListComponent.prototype, "dateInput", void 0);
    TransactionListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transaction-list',
            template: __webpack_require__(/*! ./transaction-list.component.html */ "./src/app/directive/transaction-list/transaction-list.component.html"),
            styles: [__webpack_require__(/*! ./transaction-list.component.css */ "./src/app/directive/transaction-list/transaction-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TransactionListComponent);
    return TransactionListComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ux-page-header header=\"My Page\" \n  [crumbs]=\"crumbs\" \n  [items]=\"items\" \n  [condensed]=\"condensed\" \n  [iconMenus]=\"iconMenus\">\n</ux-page-header>\n\n<app-account-summary></app-account-summary>\n<app-transaction-list></app-transaction-list>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.condensed = true;
        this.crumbs = [
            {
                title: 'Archive',
                onClick: function () { }
            },
            {
                title: '2017',
                onClick: function () { }
            }
        ];
        this.items = [
            {
                icon: 'hpe-home',
                title: 'Home'
            },
            {
                icon: 'hpe-analytics',
                title: 'Analytics',
                children: [
                    {
                        title: 'Bar Charts'
                    },
                    {
                        title: 'Pie Charts',
                        children: [
                            {
                                title: 'Daily View'
                            },
                            {
                                title: 'Weekly View'
                            },
                            {
                                title: 'Monthly View'
                            }
                        ]
                    }
                ]
            }
        ];
        this.iconMenus = [
            {
                icon: 'hpe-payment-mastercard',
                label: 'Notifications. 3 new items.',
                dropdown: [
                    {
                        icon: 'hpe-payment-mastercard',
                        title: 'You have 3100 points',
                        subtitle: 'Now',
                        divider: true
                    }
                ]
            }, {
                icon: 'hpe-notification',
                label: 'Notifications. 3 new items.',
                badge: 3,
                dropdown: [
                    {
                        icon: 'hpe-chat',
                        title: 'You have 16 messages',
                        subtitle: '4 minutes ago',
                        divider: true
                    },
                    {
                        icon: 'hpe-social-twitter',
                        title: '3 New Followers',
                        subtitle: '12 minutes ago',
                        divider: true
                    },
                    {
                        icon: 'hpe-cloud',
                        title: 'Server Rebooted',
                        subtitle: '22 minutes ago'
                    }
                ]
            },
            {
                icon: 'hpe-actions',
                label: 'Actions',
                dropdown: [
                    {
                        header: true,
                        title: 'John Doe',
                        divider: true
                    },
                    {
                        icon: 'hpe-user-settings',
                        title: 'Settings'
                    },
                    {
                        icon: 'hpe-logout',
                        title: 'Log Out'
                    },
                    {
                        title: 'Show Tips'
                    }
                ]
            }
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.form-control {\r\n    min-height: 41px;\r\n    background: #fff;\r\n    box-shadow: none !important;\r\n    border-color: #e3e3e3;\r\n}\r\n.form-control:focus {\r\n    border-color: #70c5c0;\r\n}\r\n.form-control, .btn {        \r\n    border-radius: 2px;\r\n}\r\n.app-login-form {\r\n    width: 350px;\r\n    margin: 0 auto;\r\n    padding: 100px 0 30px;\t\t\r\n}\r\n.app-login-form form {\r\n    color: #7a7a7a;\r\n    border-radius: 2px;\r\n    margin-bottom: 15px;\r\n    font-size: 13px;\r\n    background: #ececec;\r\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n    padding: 30px;\t\r\n    position: relative;\t\r\n}\r\n.app-login-form h2 {\r\n    font-size: 22px;\r\n    margin: 35px 0 25px;\r\n}\r\n.app-login-form .avatar {\r\n    position: absolute;\r\n    margin: 0 auto;\r\n    left: 0;\r\n    right: 0;\r\n    top: -50px;\r\n    width: 95px;\r\n    height: 95px;\r\n    border-radius: 50%;\r\n    z-index: 9;\r\n    background: #70c5c0;\r\n    padding: 15px;\r\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);\r\n}\r\n.app-login-form .avatar img {\r\n    width: 100%;\r\n}\r\n.app-login-form input[type=\"checkbox\"] {\r\n    margin-top: 2px;\r\n}\r\n.app-login-form .btn {        \r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    background: #70c5c0;\r\n    border: none;\r\n    margin-bottom: 20px;\r\n}\r\n.app-login-form .btn:hover, .app-login-form .btn:focus {\r\n    background: #50b8b3;\r\n    outline: none !important;\r\n}\r\n.app-login-form a {\r\n    color: #fff;\r\n    text-decoration: underline;\r\n}\r\n.app-login-form a:hover {\r\n    text-decoration: none;\r\n}\r\n.app-login-form form a {\r\n    color: #7a7a7a;\r\n    text-decoration: none;\r\n}\r\n.app-login-form form a:hover {\r\n    text-decoration: underline;\r\n}\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row gradient-background\">\n  <div class=\"col-md-6 col-md-offset-3\">\n      <div class=\"app-login-form\">\n    <form action=\"/examples/actions/confirmation.php\" method=\"post\">\n      <div class=\"avatar\">\n        <img src=\"./assets/img/total-rewards-orange.png\" alt=\"Avatar\">\n      </div>\n          <h2 class=\"text-center\">Login</h2>   \n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" name=\"username\" placeholder=\"Username\" required=\"required\">\n          </div>\n      <div class=\"form-group\">\n              <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" required=\"required\">\n          </div>        \n          <div class=\"form-group\">\n              <button type=\"button\" [routerLink]=\"['/home']\" class=\"btn btn-primary btn-lg btn-block\">Sign in</button>\n          </div>\n      <div class=\"clearfix\">\n              <label class=\"pull-left checkbox-inline\"><input type=\"checkbox\"> Remember me</label>\n              <a href=\"#\" class=\"pull-right\" >Forgot Password?</a>\n          </div>\n      </form>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
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

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\Projects\git-private\RnR\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map