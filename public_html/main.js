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
		var e = new Error("Cannot find module '" + req + "'");
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
/* harmony import */ var _services_afterlogin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/afterlogin.service */ "./src/app/services/afterlogin.service.ts");
/* harmony import */ var _services_beforelogin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/beforelogin.service */ "./src/app/services/beforelogin.service.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_users_users_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/users/users.component */ "./src/app/components/users/users.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_password_request_reset_request_reset_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/password/request-reset/request-reset.component */ "./src/app/components/password/request-reset/request-reset.component.ts");
/* harmony import */ var _components_password_response_reset_response_reset_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/password/response-reset/response-reset.component */ "./src/app/components/password/response-reset/response-reset.component.ts");
/* harmony import */ var _components_signup_confrim_signup_confrim_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/signup-confrim/signup-confrim.component */ "./src/app/components/signup-confrim/signup-confrim.component.ts");
/* harmony import */ var _components_roles_roles_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/roles/roles.component */ "./src/app/components/roles/roles.component.ts");
/* harmony import */ var _components_permissions_permissions_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/permissions/permissions.component */ "./src/app/components/permissions/permissions.component.ts");
/* harmony import */ var _components_attendance_attendance_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/attendance/attendance.component */ "./src/app/components/attendance/attendance.component.ts");
/* harmony import */ var _components_location_map_location_map_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/location-map/location-map.component */ "./src/app/components/location-map/location-map.component.ts");
/* harmony import */ var _components_location_location_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/location/location.component */ "./src/app/components/location/location.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var appRoutes = [
    {
        path: '',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        canActivate: [_services_beforelogin_service__WEBPACK_IMPORTED_MODULE_3__["BeforeloginService"]]
    },
    {
        path: '',
        component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
        canActivate: [_services_afterlogin_service__WEBPACK_IMPORTED_MODULE_2__["AfterloginService"]]
    },
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
        canActivate: [_services_beforelogin_service__WEBPACK_IMPORTED_MODULE_3__["BeforeloginService"]]
    },
    {
        path: 'dashboard',
        component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
        canActivate: [_services_afterlogin_service__WEBPACK_IMPORTED_MODULE_2__["AfterloginService"]]
    },
    {
        path: 'reset-password',
        component: _components_password_request_reset_request_reset_component__WEBPACK_IMPORTED_MODULE_9__["RequestResetComponent"],
        canActivate: [_services_beforelogin_service__WEBPACK_IMPORTED_MODULE_3__["BeforeloginService"]]
    },
    {
        path: 'reset-password-submit',
        component: _components_password_response_reset_response_reset_component__WEBPACK_IMPORTED_MODULE_10__["ResponseResetComponent"],
        canActivate: [_services_beforelogin_service__WEBPACK_IMPORTED_MODULE_3__["BeforeloginService"]]
    },
    {
        path: 'signup',
        component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"],
        canActivate: [_services_beforelogin_service__WEBPACK_IMPORTED_MODULE_3__["BeforeloginService"]]
    },
    {
        path: 'signup/activate',
        component: _components_signup_confrim_signup_confrim_component__WEBPACK_IMPORTED_MODULE_11__["SignupConfrimComponent"],
    },
    {
        path: 'users',
        component: _components_users_users_component__WEBPACK_IMPORTED_MODULE_6__["UsersComponent"],
        canActivate: [_services_afterlogin_service__WEBPACK_IMPORTED_MODULE_2__["AfterloginService"]]
    },
    {
        path: 'roles',
        component: _components_roles_roles_component__WEBPACK_IMPORTED_MODULE_12__["RolesComponent"],
        canActivate: [_services_afterlogin_service__WEBPACK_IMPORTED_MODULE_2__["AfterloginService"]]
    },
    {
        path: 'permissions',
        component: _components_permissions_permissions_component__WEBPACK_IMPORTED_MODULE_13__["PermissionsComponent"],
        canActivate: [_services_afterlogin_service__WEBPACK_IMPORTED_MODULE_2__["AfterloginService"]]
    },
    {
        path: 'attendance',
        component: _components_attendance_attendance_component__WEBPACK_IMPORTED_MODULE_14__["AttendanceComponent"],
        canActivate: [_services_afterlogin_service__WEBPACK_IMPORTED_MODULE_2__["AfterloginService"]]
    },
    {
        path: 'location',
        component: _components_location_location_component__WEBPACK_IMPORTED_MODULE_16__["LocationComponent"],
        canActivate: [_services_afterlogin_service__WEBPACK_IMPORTED_MODULE_2__["AfterloginService"]]
    },
    {
        path: 'locationMap',
        component: _components_location_map_location_map_component__WEBPACK_IMPORTED_MODULE_15__["LocationMapComponent"],
        canActivate: [_services_afterlogin_service__WEBPACK_IMPORTED_MODULE_2__["AfterloginService"]]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)
            ],
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<ng-snotify></ng-snotify>\n<router-outlet></router-outlet>\n"

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
        this.title = 'RoleManagmentFrontend';
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
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_afterlogin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/afterlogin.service */ "./src/app/services/afterlogin.service.ts");
/* harmony import */ var _services_beforelogin_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/beforelogin.service */ "./src/app/services/beforelogin.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/nav/nav.component */ "./src/app/components/nav/nav.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_password_request_reset_request_reset_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/password/request-reset/request-reset.component */ "./src/app/components/password/request-reset/request-reset.component.ts");
/* harmony import */ var _components_password_response_reset_response_reset_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/password/response-reset/response-reset.component */ "./src/app/components/password/response-reset/response-reset.component.ts");
/* harmony import */ var _components_users_users_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/users/users.component */ "./src/app/components/users/users.component.ts");
/* harmony import */ var _components_signup_confrim_signup_confrim_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/signup-confrim/signup-confrim.component */ "./src/app/components/signup-confrim/signup-confrim.component.ts");
/* harmony import */ var _components_roles_roles_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/roles/roles.component */ "./src/app/components/roles/roles.component.ts");
/* harmony import */ var _components_permissions_permissions_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/permissions/permissions.component */ "./src/app/components/permissions/permissions.component.ts");
/* harmony import */ var _components_attendance_attendance_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/attendance/attendance.component */ "./src/app/components/attendance/attendance.component.ts");
/* harmony import */ var _components_location_map_location_map_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/location-map/location-map.component */ "./src/app/components/location-map/location-map.component.ts");
/* harmony import */ var _components_location_location_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/location/location.component */ "./src/app/components/location/location.component.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_11__["NavComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_15__["SignupComponent"],
                _components_password_request_reset_request_reset_component__WEBPACK_IMPORTED_MODULE_16__["RequestResetComponent"],
                _components_password_response_reset_response_reset_component__WEBPACK_IMPORTED_MODULE_17__["ResponseResetComponent"],
                _components_users_users_component__WEBPACK_IMPORTED_MODULE_18__["UsersComponent"],
                _components_signup_confrim_signup_confrim_component__WEBPACK_IMPORTED_MODULE_19__["SignupConfrimComponent"],
                _components_roles_roles_component__WEBPACK_IMPORTED_MODULE_20__["RolesComponent"],
                _components_permissions_permissions_component__WEBPACK_IMPORTED_MODULE_21__["PermissionsComponent"],
                _components_attendance_attendance_component__WEBPACK_IMPORTED_MODULE_22__["AttendanceComponent"],
                _components_location_map_location_map_component__WEBPACK_IMPORTED_MODULE_23__["LocationMapComponent"],
                _components_location_location_component__WEBPACK_IMPORTED_MODULE_24__["LocationComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ng_snotify__WEBPACK_IMPORTED_MODULE_2__["SnotifyModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
            ],
            providers: [
                _services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"],
                _services_afterlogin_service__WEBPACK_IMPORTED_MODULE_7__["AfterloginService"],
                _services_beforelogin_service__WEBPACK_IMPORTED_MODULE_8__["BeforeloginService"],
                { provide: 'SnotifyToastConfig', useValue: ng_snotify__WEBPACK_IMPORTED_MODULE_2__["ToastDefaults"] },
                ng_snotify__WEBPACK_IMPORTED_MODULE_2__["SnotifyService"],
                _services_data_service__WEBPACK_IMPORTED_MODULE_25__["DataService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/attendance/attendance.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/attendance/attendance.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/attendance/attendance.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/attendance/attendance.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  attendance works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/attendance/attendance.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/attendance/attendance.component.ts ***!
  \***************************************************************/
/*! exports provided: AttendanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendanceComponent", function() { return AttendanceComponent; });
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

var AttendanceComponent = /** @class */ (function () {
    function AttendanceComponent() {
    }
    AttendanceComponent.prototype.ngOnInit = function () {
    };
    AttendanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-attendance',
            template: __webpack_require__(/*! ./attendance.component.html */ "./src/app/components/attendance/attendance.component.html"),
            styles: [__webpack_require__(/*! ./attendance.component.css */ "./src/app/components/attendance/attendance.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AttendanceComponent);
    return AttendanceComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*!\r\n\r\n =========================================================\r\n * Paper Dashboard - v1.1.2\r\n =========================================================\r\n\r\n * Product Page: http://www.creative-tim.com/product/paper-dashboard\r\n * Copyright 2017 Creative Tim (http://www.creative-tim.com)\r\n * Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard/blob/master/LICENSE.md)\r\n\r\n =========================================================\r\n\r\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\r\n\r\n */\r\n/*      light colors - used for select dropdown         */\r\n.ct-blue {\r\n  stroke: #7A9E9F !important; }\r\n.ct-azure {\r\n  stroke: #68B3C8 !important; }\r\n.ct-green {\r\n  stroke: #7AC29A !important; }\r\n.ct-orange {\r\n  stroke: #F3BB45 !important; }\r\n.ct-red {\r\n  stroke: #EB5E28 !important; }\r\nh1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6, p, .navbar, .brand, a, .td-name, td {\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-family: 'Muli', \"Helvetica\", Arial, sans-serif; }\r\nh1, .h1, h2, .h2, h3, .h3, h4, .h4 {\r\n  font-weight: 400;\r\n  margin: 30px 0 15px; }\r\nh1, .h1 {\r\n  font-size: 3.2em; }\r\nh2, .h2 {\r\n  font-size: 2.6em; }\r\nh3, .h3 {\r\n  font-size: 1.825em;\r\n  line-height: 1.4;\r\n  margin: 20px 0 10px; }\r\nh4, .h4 {\r\n  font-size: 1.5em;\r\n  font-weight: 600;\r\n  line-height: 1.2em; }\r\nh5, .h5 {\r\n  font-size: 1.25em;\r\n  font-weight: 400;\r\n  line-height: 1.4em;\r\n  margin-bottom: 15px; }\r\nh6, .h6 {\r\n  font-size: 0.9em;\r\n  font-weight: 600;\r\n  text-transform: uppercase; }\r\np {\r\n  font-size: 16px;\r\n  line-height: 1.4em; }\r\nh1 small, h2 small, h3 small, h4 small, h5 small, h6 small, .h1 small, .h2 small, .h3 small, .h4 small, .h5 small, .h6 small, h1 .small, h2 .small, h3 .small, h4 .small, h5 .small, h6 .small, .h1 .small, .h2 .small, .h3 .small, .h4 .small, .h5 .small, .h6 .small {\r\n  color: #9A9A9A;\r\n  font-weight: 300;\r\n  line-height: 1.4em; }\r\nh1 small, h2 small, h3 small, h1 .small, h2 .small, h3 .small {\r\n  font-size: 60%; }\r\n.title-uppercase {\r\n  text-transform: uppercase; }\r\nblockquote {\r\n  font-style: italic; }\r\nblockquote small {\r\n  font-style: normal; }\r\n.text-muted {\r\n  color: #DDDDDD; }\r\n.text-primary, .text-primary:hover {\r\n  color: #427C89; }\r\n.text-info, .text-info:hover {\r\n  color: #3091B2; }\r\n.text-success, .text-success:hover {\r\n  color: #42A084; }\r\n.text-warning, .text-warning:hover {\r\n  color: #BB992F; }\r\n.text-danger, .text-danger:hover {\r\n  color: #B33C12; }\r\n.glyphicon {\r\n  line-height: 1; }\r\nstrong {\r\n  color: #403D39; }\r\n.icon-primary {\r\n  color: #7A9E9F; }\r\n.icon-info {\r\n  color: #68B3C8; }\r\n.icon-success {\r\n  color: #7AC29A; }\r\n.icon-warning {\r\n  color: #F3BB45; }\r\n.icon-danger {\r\n  color: #EB5E28; }\r\n.chart-legend .text-primary, .chart-legend .text-primary:hover {\r\n  color: #7A9E9F; }\r\n.chart-legend .text-info, .chart-legend .text-info:hover {\r\n  color: #68B3C8; }\r\n.chart-legend .text-success, .chart-legend .text-success:hover {\r\n  color: #7AC29A; }\r\n.chart-legend .text-warning, .chart-legend .text-warning:hover {\r\n  color: #F3BB45; }\r\n.chart-legend .text-danger, .chart-legend .text-danger:hover {\r\n  color: #EB5E28; }\r\n/*     General overwrite     */\r\nbody {\r\n  color: #66615b;\r\n  font-size: 14px;\r\n  font-family: 'Muli', Arial, sans-serif; }\r\nbody .wrapper {\r\n    min-height: 100vh;\r\n    position: relative; }\r\na {\r\n  color: #68B3C8; }\r\na:hover, a:focus {\r\n    color: #3091B2;\r\n    text-decoration: none; }\r\na:focus, a:active,\r\nbutton::-moz-focus-inner,\r\ninput::-moz-focus-inner,\r\nselect::-moz-focus-inner,\r\ninput[type=\"file\"] > input[type=\"button\"]::-moz-focus-inner {\r\n  outline: 0 !important; }\r\n.ui-slider-handle:focus,\r\n.navbar-toggle,\r\ninput:focus,\r\nbutton:focus {\r\n  outline: 0 !important; }\r\n/*           Animations              */\r\n.form-control,\r\n.input-group-addon,\r\n.tagsinput,\r\n.navbar,\r\n.navbar .alert {\r\n  transition: all 300ms linear; }\r\n.sidebar .nav a,\r\n.table > tbody > tr .td-actions .btn {\r\n  transition: all 150ms ease-in; }\r\n.btn {\r\n  transition: all 100ms ease-in; }\r\n.fa {\r\n  width: 21px;\r\n  text-align: center; }\r\n.fa-base {\r\n  font-size: 1.25em !important; }\r\n.margin-top {\r\n  margin-top: 50px; }\r\nhr {\r\n  border-color: #F1EAE0; }\r\n.wrapper {\r\n  position: relative;\r\n  top: 0;\r\n  height: 100vh; }\r\n.sidebar {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 1;\r\n  background-size: cover;\r\n  background-position: center center; }\r\n.sidebar .sidebar-wrapper {\r\n    position: relative;\r\n    max-height: none;\r\n    min-height: 100%;\r\n    overflow: hidden;\r\n    width: 260px;\r\n    z-index: 4;\r\n    box-shadow: inset -1px 0px 0px 0px #DDDDDD; }\r\n.sidebar .sidebar-background {\r\n    position: absolute;\r\n    z-index: 1;\r\n    height: 100%;\r\n    width: 100%;\r\n    display: block;\r\n    top: 0;\r\n    left: 0;\r\n    background-size: cover;\r\n    background-position: center center; }\r\n.sidebar,\r\n.off-canvas-sidebar {\r\n  width: 260px;\r\n  display: block;\r\n  font-weight: 200; }\r\n.sidebar .logo,\r\n  .off-canvas-sidebar .logo {\r\n    padding: 18px 0px;\r\n    margin: 0 20px; }\r\n.sidebar .logo p,\r\n    .off-canvas-sidebar .logo p {\r\n      float: left;\r\n      font-size: 20px;\r\n      margin: 10px 10px;\r\n      line-height: 20px; }\r\n.sidebar .logo .simple-text,\r\n    .off-canvas-sidebar .logo .simple-text {\r\n      text-transform: uppercase;\r\n      padding: 4px 0px;\r\n      display: block;\r\n      font-size: 18px;\r\n      text-align: center;\r\n      font-weight: 400;\r\n      line-height: 30px; }\r\n.sidebar .nav,\r\n  .off-canvas-sidebar .nav {\r\n    margin-top: 20px; }\r\n.sidebar .nav li > a,\r\n    .off-canvas-sidebar .nav li > a {\r\n      margin: 10px 0px;\r\n      padding-left: 25px;\r\n      padding-right: 25px;\r\n      opacity: .7; }\r\n.sidebar .nav li:hover > a,\r\n    .off-canvas-sidebar .nav li:hover > a {\r\n      opacity: 1; }\r\n.sidebar .nav li.active > a,\r\n    .off-canvas-sidebar .nav li.active > a {\r\n      color: #7A9E9F;\r\n      opacity: 1; }\r\n.sidebar .nav li.active > a:before,\r\n      .off-canvas-sidebar .nav li.active > a:before {\r\n        border-right: 17px solid #DDDDDD;\r\n        border-top: 17px solid transparent;\r\n        border-bottom: 17px solid transparent;\r\n        content: \"\";\r\n        display: inline-block;\r\n        position: absolute;\r\n        right: 0;\r\n        top: 8px; }\r\n.sidebar .nav li.active > a:after,\r\n      .off-canvas-sidebar .nav li.active > a:after {\r\n        border-right: 17px solid #f4f3ef;\r\n        border-top: 17px solid transparent;\r\n        border-bottom: 17px solid transparent;\r\n        content: \"\";\r\n        display: inline-block;\r\n        position: absolute;\r\n        right: -1px;\r\n        top: 8px; }\r\n.sidebar .nav p,\r\n    .off-canvas-sidebar .nav p {\r\n      margin: 0;\r\n      line-height: 30px;\r\n      font-size: 12px;\r\n      font-weight: 600;\r\n      text-transform: uppercase; }\r\n.sidebar .nav i,\r\n    .off-canvas-sidebar .nav i {\r\n      font-size: 24px;\r\n      float: left;\r\n      margin-right: 15px;\r\n      line-height: 30px;\r\n      width: 30px;\r\n      text-align: center; }\r\n.sidebar:after, .sidebar:before,\r\n  .off-canvas-sidebar:after,\r\n  .off-canvas-sidebar:before {\r\n    display: block;\r\n    content: \"\";\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 2;\r\n    background: #FFFFFF; }\r\n.sidebar:after, .sidebar:before, .sidebar[data-background-color=\"white\"]:after, .sidebar[data-background-color=\"white\"]:before,\r\n  .off-canvas-sidebar:after,\r\n  .off-canvas-sidebar:before,\r\n  .off-canvas-sidebar[data-background-color=\"white\"]:after,\r\n  .off-canvas-sidebar[data-background-color=\"white\"]:before {\r\n    background-color: #FFFFFF; }\r\n.sidebar .logo, .sidebar[data-background-color=\"white\"] .logo,\r\n  .off-canvas-sidebar .logo,\r\n  .off-canvas-sidebar[data-background-color=\"white\"] .logo {\r\n    border-bottom: 1px solid rgba(102, 97, 91, 0.3); }\r\n.sidebar .logo p, .sidebar[data-background-color=\"white\"] .logo p,\r\n    .off-canvas-sidebar .logo p,\r\n    .off-canvas-sidebar[data-background-color=\"white\"] .logo p {\r\n      color: #66615B; }\r\n.sidebar .logo .simple-text, .sidebar[data-background-color=\"white\"] .logo .simple-text,\r\n    .off-canvas-sidebar .logo .simple-text,\r\n    .off-canvas-sidebar[data-background-color=\"white\"] .logo .simple-text {\r\n      color: #66615B; }\r\n.sidebar .nav li:not(.active) > a, .sidebar[data-background-color=\"white\"] .nav li:not(.active) > a,\r\n  .off-canvas-sidebar .nav li:not(.active) > a,\r\n  .off-canvas-sidebar[data-background-color=\"white\"] .nav li:not(.active) > a {\r\n    color: #66615B; }\r\n.sidebar .nav .divider, .sidebar[data-background-color=\"white\"] .nav .divider,\r\n  .off-canvas-sidebar .nav .divider,\r\n  .off-canvas-sidebar[data-background-color=\"white\"] .nav .divider {\r\n    background-color: rgba(102, 97, 91, 0.2); }\r\n.sidebar[data-background-color=\"black\"]:after, .sidebar[data-background-color=\"black\"]:before,\r\n  .off-canvas-sidebar[data-background-color=\"black\"]:after,\r\n  .off-canvas-sidebar[data-background-color=\"black\"]:before {\r\n    background-color: #212120; }\r\n.sidebar[data-background-color=\"black\"] .logo,\r\n  .off-canvas-sidebar[data-background-color=\"black\"] .logo {\r\n    border-bottom: 1px solid rgba(255, 255, 255, 0.3); }\r\n.sidebar[data-background-color=\"black\"] .logo p,\r\n    .off-canvas-sidebar[data-background-color=\"black\"] .logo p {\r\n      color: #FFFFFF; }\r\n.sidebar[data-background-color=\"black\"] .logo .simple-text,\r\n    .off-canvas-sidebar[data-background-color=\"black\"] .logo .simple-text {\r\n      color: #FFFFFF; }\r\n.sidebar[data-background-color=\"black\"] .nav li:not(.active) > a,\r\n  .off-canvas-sidebar[data-background-color=\"black\"] .nav li:not(.active) > a {\r\n    color: #FFFFFF; }\r\n.sidebar[data-background-color=\"black\"] .nav .divider,\r\n  .off-canvas-sidebar[data-background-color=\"black\"] .nav .divider {\r\n    background-color: rgba(255, 255, 255, 0.2); }\r\n.sidebar[data-active-color=\"primary\"] .nav li.active > a,\r\n  .off-canvas-sidebar[data-active-color=\"primary\"] .nav li.active > a {\r\n    color: #7A9E9F;\r\n    opacity: 1; }\r\n.sidebar[data-active-color=\"info\"] .nav li.active > a,\r\n  .off-canvas-sidebar[data-active-color=\"info\"] .nav li.active > a {\r\n    color: #68B3C8;\r\n    opacity: 1; }\r\n.sidebar[data-active-color=\"success\"] .nav li.active > a,\r\n  .off-canvas-sidebar[data-active-color=\"success\"] .nav li.active > a {\r\n    color: #7AC29A;\r\n    opacity: 1; }\r\n.sidebar[data-active-color=\"warning\"] .nav li.active > a,\r\n  .off-canvas-sidebar[data-active-color=\"warning\"] .nav li.active > a {\r\n    color: #F3BB45;\r\n    opacity: 1; }\r\n.sidebar[data-active-color=\"danger\"] .nav li.active > a,\r\n  .off-canvas-sidebar[data-active-color=\"danger\"] .nav li.active > a {\r\n    color: #EB5E28;\r\n    opacity: 1; }\r\n.main-panel {\r\n  background-color: #f4f3ef;\r\n  position: relative;\r\n  z-index: 2;\r\n  float: right;\r\n  width: calc(100% - 260px);\r\n  min-height: 100%; }\r\n.main-panel > .content {\r\n    padding: 30px 15px;\r\n    min-height: calc(100% - 123px); }\r\n.main-panel > .footer {\r\n    border-top: 1px solid rgba(0, 0, 0, 0.1); }\r\n.main-panel .navbar {\r\n    margin-bottom: 0; }\r\n.sidebar,\r\n.main-panel {\r\n  overflow: auto;\r\n  max-height: 100%;\r\n  height: 100%;\r\n  transition-property: top,bottom;\r\n  transition-duration: .2s,.2s;\r\n  transition-timing-function: linear,linear;\r\n  -webkit-overflow-scrolling: touch; }\r\n.btn,\r\n.navbar .navbar-nav > li > a.btn {\r\n  border-radius: 20px;\r\n  box-sizing: border-box;\r\n  border-width: 2px;\r\n  background-color: transparent;\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  padding: 7px 18px;\r\n  border-color: #66615B;\r\n  color: #66615B;\r\n  transition: all 150ms linear; }\r\n.btn:hover, .btn:focus, .btn:active, .btn.active, .open > .btn.dropdown-toggle,\r\n  .navbar .navbar-nav > li > a.btn:hover,\r\n  .navbar .navbar-nav > li > a.btn:focus,\r\n  .navbar .navbar-nav > li > a.btn:active,\r\n  .navbar .navbar-nav > li > a.btn.active, .open >\r\n  .navbar .navbar-nav > li > a.btn.dropdown-toggle {\r\n    background-color: #66615B;\r\n    color: rgba(255, 255, 255, 0.7);\r\n    border-color: #66615B; }\r\n.btn:hover .caret, .btn:focus .caret, .btn:active .caret, .btn.active .caret, .open > .btn.dropdown-toggle .caret,\r\n    .navbar .navbar-nav > li > a.btn:hover .caret,\r\n    .navbar .navbar-nav > li > a.btn:focus .caret,\r\n    .navbar .navbar-nav > li > a.btn:active .caret,\r\n    .navbar .navbar-nav > li > a.btn.active .caret, .open >\r\n    .navbar .navbar-nav > li > a.btn.dropdown-toggle .caret {\r\n      border-top-color: rgba(255, 255, 255, 0.7); }\r\n.btn.disabled, .btn.disabled:hover, .btn.disabled:focus, .btn.disabled.focus, .btn.disabled:active, .btn.disabled.active, .btn:disabled, .btn:disabled:hover, .btn:disabled:focus, .btn:disabled.focus, .btn:disabled:active, .btn:disabled.active, .btn[disabled], .btn[disabled]:hover, .btn[disabled]:focus, .btn[disabled].focus, .btn[disabled]:active, .btn[disabled].active, fieldset[disabled] .btn, fieldset[disabled] .btn:hover, fieldset[disabled] .btn:focus, fieldset[disabled] .btn.focus, fieldset[disabled] .btn:active, fieldset[disabled] .btn.active,\r\n  .navbar .navbar-nav > li > a.btn.disabled,\r\n  .navbar .navbar-nav > li > a.btn.disabled:hover,\r\n  .navbar .navbar-nav > li > a.btn.disabled:focus,\r\n  .navbar .navbar-nav > li > a.btn.disabled.focus,\r\n  .navbar .navbar-nav > li > a.btn.disabled:active,\r\n  .navbar .navbar-nav > li > a.btn.disabled.active,\r\n  .navbar .navbar-nav > li > a.btn:disabled,\r\n  .navbar .navbar-nav > li > a.btn:disabled:hover,\r\n  .navbar .navbar-nav > li > a.btn:disabled:focus,\r\n  .navbar .navbar-nav > li > a.btn:disabled.focus,\r\n  .navbar .navbar-nav > li > a.btn:disabled:active,\r\n  .navbar .navbar-nav > li > a.btn:disabled.active,\r\n  .navbar .navbar-nav > li > a.btn[disabled],\r\n  .navbar .navbar-nav > li > a.btn[disabled]:hover,\r\n  .navbar .navbar-nav > li > a.btn[disabled]:focus,\r\n  .navbar .navbar-nav > li > a.btn[disabled].focus,\r\n  .navbar .navbar-nav > li > a.btn[disabled]:active,\r\n  .navbar .navbar-nav > li > a.btn[disabled].active, fieldset[disabled]\r\n  .navbar .navbar-nav > li > a.btn, fieldset[disabled]\r\n  .navbar .navbar-nav > li > a.btn:hover, fieldset[disabled]\r\n  .navbar .navbar-nav > li > a.btn:focus, fieldset[disabled]\r\n  .navbar .navbar-nav > li > a.btn.focus, fieldset[disabled]\r\n  .navbar .navbar-nav > li > a.btn:active, fieldset[disabled]\r\n  .navbar .navbar-nav > li > a.btn.active {\r\n    background-color: transparent;\r\n    border-color: #66615B; }\r\n.btn.btn-fill,\r\n  .navbar .navbar-nav > li > a.btn.btn-fill {\r\n    color: #FFFFFF;\r\n    background-color: #66615B;\r\n    opacity: 1;\r\n    filter: alpha(opacity=100); }\r\n.btn.btn-fill:hover, .btn.btn-fill:focus, .btn.btn-fill:active, .btn.btn-fill.active, .open > .btn.btn-fill.dropdown-toggle,\r\n    .navbar .navbar-nav > li > a.btn.btn-fill:hover,\r\n    .navbar .navbar-nav > li > a.btn.btn-fill:focus,\r\n    .navbar .navbar-nav > li > a.btn.btn-fill:active,\r\n    .navbar .navbar-nav > li > a.btn.btn-fill.active, .open >\r\n    .navbar .navbar-nav > li > a.btn.btn-fill.dropdown-toggle {\r\n      background-color: #403D39;\r\n      color: #FFFFFF;\r\n      border-color: #403D39; }\r\n.btn.btn-fill .caret,\r\n    .navbar .navbar-nav > li > a.btn.btn-fill .caret {\r\n      border-top-color: #FFFFFF; }\r\n.btn.btn-simple:hover, .btn.btn-simple:focus, .btn.btn-simple:active, .btn.btn-simple.active, .open > .btn.btn-simple.dropdown-toggle,\r\n  .navbar .navbar-nav > li > a.btn.btn-simple:hover,\r\n  .navbar .navbar-nav > li > a.btn.btn-simple:focus,\r\n  .navbar .navbar-nav > li > a.btn.btn-simple:active,\r\n  .navbar .navbar-nav > li > a.btn.btn-simple.active, .open >\r\n  .navbar .navbar-nav > li > a.btn.btn-simple.dropdown-toggle {\r\n    background-color: transparent;\r\n    color: #403D39; }\r\n.btn.btn-simple .caret,\r\n  .navbar .navbar-nav > li > a.btn.btn-simple .caret {\r\n    border-top-color: #FFFFFF; }\r\n.btn .caret,\r\n  .navbar .navbar-nav > li > a.btn .caret {\r\n    border-top-color: #66615B; }\r\n.btn:hover, .btn:focus,\r\n  .navbar .navbar-nav > li > a.btn:hover,\r\n  .navbar .navbar-nav > li > a.btn:focus {\r\n    outline: 0 !important; }\r\n.btn:active, .btn.active, .open > .btn.dropdown-toggle,\r\n  .navbar .navbar-nav > li > a.btn:active,\r\n  .navbar .navbar-nav > li > a.btn.active, .open >\r\n  .navbar .navbar-nav > li > a.btn.dropdown-toggle {\r\n    box-shadow: none;\r\n    outline: 0 !important; }\r\n.btn.btn-icon,\r\n  .navbar .navbar-nav > li > a.btn.btn-icon {\r\n    padding: 7px; }\r\n.btn-group .btn + .btn,\r\n.btn-group .btn + .btn-group,\r\n.btn-group .btn-group + .btn,\r\n.btn-group .btn-group + .btn-group {\r\n  margin-left: -2px; }\r\n.navbar .navbar-nav > li > a.btn-primary, .btn-primary {\r\n  border-color: #7A9E9F;\r\n  color: #7A9E9F; }\r\n.navbar .navbar-nav > li > a.btn-primary:hover, .navbar .navbar-nav > li > a.btn-primary:focus, .navbar .navbar-nav > li > a.btn-primary:active, .navbar .navbar-nav > li > a.btn-primary.active, .open > .navbar .navbar-nav > li > a.btn-primary.dropdown-toggle, .btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open > .btn-primary.dropdown-toggle {\r\n    background-color: #7A9E9F;\r\n    color: rgba(255, 255, 255, 0.7);\r\n    border-color: #7A9E9F; }\r\n.navbar .navbar-nav > li > a.btn-primary:hover .caret, .navbar .navbar-nav > li > a.btn-primary:focus .caret, .navbar .navbar-nav > li > a.btn-primary:active .caret, .navbar .navbar-nav > li > a.btn-primary.active .caret, .open > .navbar .navbar-nav > li > a.btn-primary.dropdown-toggle .caret, .btn-primary:hover .caret, .btn-primary:focus .caret, .btn-primary:active .caret, .btn-primary.active .caret, .open > .btn-primary.dropdown-toggle .caret {\r\n      border-top-color: rgba(255, 255, 255, 0.7); }\r\n.navbar .navbar-nav > li > a.btn-primary.disabled, .navbar .navbar-nav > li > a.btn-primary.disabled:hover, .navbar .navbar-nav > li > a.btn-primary.disabled:focus, .navbar .navbar-nav > li > a.btn-primary.disabled.focus, .navbar .navbar-nav > li > a.btn-primary.disabled:active, .navbar .navbar-nav > li > a.btn-primary.disabled.active, .navbar .navbar-nav > li > a.btn-primary:disabled, .navbar .navbar-nav > li > a.btn-primary:disabled:hover, .navbar .navbar-nav > li > a.btn-primary:disabled:focus, .navbar .navbar-nav > li > a.btn-primary:disabled.focus, .navbar .navbar-nav > li > a.btn-primary:disabled:active, .navbar .navbar-nav > li > a.btn-primary:disabled.active, .navbar .navbar-nav > li > a.btn-primary[disabled], .navbar .navbar-nav > li > a.btn-primary[disabled]:hover, .navbar .navbar-nav > li > a.btn-primary[disabled]:focus, .navbar .navbar-nav > li > a.btn-primary[disabled].focus, .navbar .navbar-nav > li > a.btn-primary[disabled]:active, .navbar .navbar-nav > li > a.btn-primary[disabled].active, fieldset[disabled] .navbar .navbar-nav > li > a.btn-primary, fieldset[disabled] .navbar .navbar-nav > li > a.btn-primary:hover, fieldset[disabled] .navbar .navbar-nav > li > a.btn-primary:focus, fieldset[disabled] .navbar .navbar-nav > li > a.btn-primary.focus, fieldset[disabled] .navbar .navbar-nav > li > a.btn-primary:active, fieldset[disabled] .navbar .navbar-nav > li > a.btn-primary.active, .btn-primary.disabled, .btn-primary.disabled:hover, .btn-primary.disabled:focus, .btn-primary.disabled.focus, .btn-primary.disabled:active, .btn-primary.disabled.active, .btn-primary:disabled, .btn-primary:disabled:hover, .btn-primary:disabled:focus, .btn-primary:disabled.focus, .btn-primary:disabled:active, .btn-primary:disabled.active, .btn-primary[disabled], .btn-primary[disabled]:hover, .btn-primary[disabled]:focus, .btn-primary[disabled].focus, .btn-primary[disabled]:active, .btn-primary[disabled].active, fieldset[disabled] .btn-primary, fieldset[disabled] .btn-primary:hover, fieldset[disabled] .btn-primary:focus, fieldset[disabled] .btn-primary.focus, fieldset[disabled] .btn-primary:active, fieldset[disabled] .btn-primary.active {\r\n    background-color: transparent;\r\n    border-color: #7A9E9F; }\r\n.navbar .navbar-nav > li > a.btn-primary.btn-fill, .btn-primary.btn-fill {\r\n    color: #FFFFFF;\r\n    background-color: #7A9E9F;\r\n    opacity: 1;\r\n    filter: alpha(opacity=100); }\r\n.navbar .navbar-nav > li > a.btn-primary.btn-fill:hover, .navbar .navbar-nav > li > a.btn-primary.btn-fill:focus, .navbar .navbar-nav > li > a.btn-primary.btn-fill:active, .navbar .navbar-nav > li > a.btn-primary.btn-fill.active, .open > .navbar .navbar-nav > li > a.btn-primary.btn-fill.dropdown-toggle, .btn-primary.btn-fill:hover, .btn-primary.btn-fill:focus, .btn-primary.btn-fill:active, .btn-primary.btn-fill.active, .open > .btn-primary.btn-fill.dropdown-toggle {\r\n      background-color: #427C89;\r\n      color: #FFFFFF;\r\n      border-color: #427C89; }\r\n.navbar .navbar-nav > li > a.btn-primary.btn-fill .caret, .btn-primary.btn-fill .caret {\r\n      border-top-color: #FFFFFF; }\r\n.navbar .navbar-nav > li > a.btn-primary.btn-simple:hover, .navbar .navbar-nav > li > a.btn-primary.btn-simple:focus, .navbar .navbar-nav > li > a.btn-primary.btn-simple:active, .navbar .navbar-nav > li > a.btn-primary.btn-simple.active, .open > .navbar .navbar-nav > li > a.btn-primary.btn-simple.dropdown-toggle, .btn-primary.btn-simple:hover, .btn-primary.btn-simple:focus, .btn-primary.btn-simple:active, .btn-primary.btn-simple.active, .open > .btn-primary.btn-simple.dropdown-toggle {\r\n    background-color: transparent;\r\n    color: #427C89; }\r\n.navbar .navbar-nav > li > a.btn-primary.btn-simple .caret, .btn-primary.btn-simple .caret {\r\n    border-top-color: #FFFFFF; }\r\n.navbar .navbar-nav > li > a.btn-primary .caret, .btn-primary .caret {\r\n    border-top-color: #7A9E9F; }\r\n.navbar .navbar-nav > li > a.btn-success, .btn-success {\r\n  border-color: #7AC29A;\r\n  color: #7AC29A; }\r\n.navbar .navbar-nav > li > a.btn-success:hover, .navbar .navbar-nav > li > a.btn-success:focus, .navbar .navbar-nav > li > a.btn-success:active, .navbar .navbar-nav > li > a.btn-success.active, .open > .navbar .navbar-nav > li > a.btn-success.dropdown-toggle, .btn-success:hover, .btn-success:focus, .btn-success:active, .btn-success.active, .open > .btn-success.dropdown-toggle {\r\n    background-color: #7AC29A;\r\n    color: rgba(255, 255, 255, 0.7);\r\n    border-color: #7AC29A; }\r\n.navbar .navbar-nav > li > a.btn-success:hover .caret, .navbar .navbar-nav > li > a.btn-success:focus .caret, .navbar .navbar-nav > li > a.btn-success:active .caret, .navbar .navbar-nav > li > a.btn-success.active .caret, .open > .navbar .navbar-nav > li > a.btn-success.dropdown-toggle .caret, .btn-success:hover .caret, .btn-success:focus .caret, .btn-success:active .caret, .btn-success.active .caret, .open > .btn-success.dropdown-toggle .caret {\r\n      border-top-color: rgba(255, 255, 255, 0.7); }\r\n.navbar .navbar-nav > li > a.btn-success.disabled, .navbar .navbar-nav > li > a.btn-success.disabled:hover, .navbar .navbar-nav > li > a.btn-success.disabled:focus, .navbar .navbar-nav > li > a.btn-success.disabled.focus, .navbar .navbar-nav > li > a.btn-success.disabled:active, .navbar .navbar-nav > li > a.btn-success.disabled.active, .navbar .navbar-nav > li > a.btn-success:disabled, .navbar .navbar-nav > li > a.btn-success:disabled:hover, .navbar .navbar-nav > li > a.btn-success:disabled:focus, .navbar .navbar-nav > li > a.btn-success:disabled.focus, .navbar .navbar-nav > li > a.btn-success:disabled:active, .navbar .navbar-nav > li > a.btn-success:disabled.active, .navbar .navbar-nav > li > a.btn-success[disabled], .navbar .navbar-nav > li > a.btn-success[disabled]:hover, .navbar .navbar-nav > li > a.btn-success[disabled]:focus, .navbar .navbar-nav > li > a.btn-success[disabled].focus, .navbar .navbar-nav > li > a.btn-success[disabled]:active, .navbar .navbar-nav > li > a.btn-success[disabled].active, fieldset[disabled] .navbar .navbar-nav > li > a.btn-success, fieldset[disabled] .navbar .navbar-nav > li > a.btn-success:hover, fieldset[disabled] .navbar .navbar-nav > li > a.btn-success:focus, fieldset[disabled] .navbar .navbar-nav > li > a.btn-success.focus, fieldset[disabled] .navbar .navbar-nav > li > a.btn-success:active, fieldset[disabled] .navbar .navbar-nav > li > a.btn-success.active, .btn-success.disabled, .btn-success.disabled:hover, .btn-success.disabled:focus, .btn-success.disabled.focus, .btn-success.disabled:active, .btn-success.disabled.active, .btn-success:disabled, .btn-success:disabled:hover, .btn-success:disabled:focus, .btn-success:disabled.focus, .btn-success:disabled:active, .btn-success:disabled.active, .btn-success[disabled], .btn-success[disabled]:hover, .btn-success[disabled]:focus, .btn-success[disabled].focus, .btn-success[disabled]:active, .btn-success[disabled].active, fieldset[disabled] .btn-success, fieldset[disabled] .btn-success:hover, fieldset[disabled] .btn-success:focus, fieldset[disabled] .btn-success.focus, fieldset[disabled] .btn-success:active, fieldset[disabled] .btn-success.active {\r\n    background-color: transparent;\r\n    border-color: #7AC29A; }\r\n.navbar .navbar-nav > li > a.btn-success.btn-fill, .btn-success.btn-fill {\r\n    color: #FFFFFF;\r\n    background-color: #7AC29A;\r\n    opacity: 1;\r\n    filter: alpha(opacity=100); }\r\n.navbar .navbar-nav > li > a.btn-success.btn-fill:hover, .navbar .navbar-nav > li > a.btn-success.btn-fill:focus, .navbar .navbar-nav > li > a.btn-success.btn-fill:active, .navbar .navbar-nav > li > a.btn-success.btn-fill.active, .open > .navbar .navbar-nav > li > a.btn-success.btn-fill.dropdown-toggle, .btn-success.btn-fill:hover, .btn-success.btn-fill:focus, .btn-success.btn-fill:active, .btn-success.btn-fill.active, .open > .btn-success.btn-fill.dropdown-toggle {\r\n      background-color: #42A084;\r\n      color: #FFFFFF;\r\n      border-color: #42A084; }\r\n.navbar .navbar-nav > li > a.btn-success.btn-fill .caret, .btn-success.btn-fill .caret {\r\n      border-top-color: #FFFFFF; }\r\n.navbar .navbar-nav > li > a.btn-success.btn-simple:hover, .navbar .navbar-nav > li > a.btn-success.btn-simple:focus, .navbar .navbar-nav > li > a.btn-success.btn-simple:active, .navbar .navbar-nav > li > a.btn-success.btn-simple.active, .open > .navbar .navbar-nav > li > a.btn-success.btn-simple.dropdown-toggle, .btn-success.btn-simple:hover, .btn-success.btn-simple:focus, .btn-success.btn-simple:active, .btn-success.btn-simple.active, .open > .btn-success.btn-simple.dropdown-toggle {\r\n    background-color: transparent;\r\n    color: #42A084; }\r\n.navbar .navbar-nav > li > a.btn-success.btn-simple .caret, .btn-success.btn-simple .caret {\r\n    border-top-color: #FFFFFF; }\r\n.navbar .navbar-nav > li > a.btn-success .caret, .btn-success .caret {\r\n    border-top-color: #7AC29A; }\r\n.navbar .navbar-nav > li > a.btn-info, .btn-info {\r\n  border-color: #68B3C8;\r\n  color: #68B3C8; }\r\n.navbar .navbar-nav > li > a.btn-info:hover, .navbar .navbar-nav > li > a.btn-info:focus, .navbar .navbar-nav > li > a.btn-info:active, .navbar .navbar-nav > li > a.btn-info.active, .open > .navbar .navbar-nav > li > a.btn-info.dropdown-toggle, .btn-info:hover, .btn-info:focus, .btn-info:active, .btn-info.active, .open > .btn-info.dropdown-toggle {\r\n    background-color: #68B3C8;\r\n    color: rgba(255, 255, 255, 0.7);\r\n    border-color: #68B3C8; }\r\n.navbar .navbar-nav > li > a.btn-info:hover .caret, .navbar .navbar-nav > li > a.btn-info:focus .caret, .navbar .navbar-nav > li > a.btn-info:active .caret, .navbar .navbar-nav > li > a.btn-info.active .caret, .open > .navbar .navbar-nav > li > a.btn-info.dropdown-toggle .caret, .btn-info:hover .caret, .btn-info:focus .caret, .btn-info:active .caret, .btn-info.active .caret, .open > .btn-info.dropdown-toggle .caret {\r\n      border-top-color: rgba(255, 255, 255, 0.7); }\r\n.navbar .navbar-nav > li > a.btn-info.disabled, .navbar .navbar-nav > li > a.btn-info.disabled:hover, .navbar .navbar-nav > li > a.btn-info.disabled:focus, .navbar .navbar-nav > li > a.btn-info.disabled.focus, .navbar .navbar-nav > li > a.btn-info.disabled:active, .navbar .navbar-nav > li > a.btn-info.disabled.active, .navbar .navbar-nav > li > a.btn-info:disabled, .navbar .navbar-nav > li > a.btn-info:disabled:hover, .navbar .navbar-nav > li > a.btn-info:disabled:focus, .navbar .navbar-nav > li > a.btn-info:disabled.focus, .navbar .navbar-nav > li > a.btn-info:disabled:active, .navbar .navbar-nav > li > a.btn-info:disabled.active, .navbar .navbar-nav > li > a.btn-info[disabled], .navbar .navbar-nav > li > a.btn-info[disabled]:hover, .navbar .navbar-nav > li > a.btn-info[disabled]:focus, .navbar .navbar-nav > li > a.btn-info[disabled].focus, .navbar .navbar-nav > li > a.btn-info[disabled]:active, .navbar .navbar-nav > li > a.btn-info[disabled].active, fieldset[disabled] .navbar .navbar-nav > li > a.btn-info, fieldset[disabled] .navbar .navbar-nav > li > a.btn-info:hover, fieldset[disabled] .navbar .navbar-nav > li > a.btn-info:focus, fieldset[disabled] .navbar .navbar-nav > li > a.btn-info.focus, fieldset[disabled] .navbar .navbar-nav > li > a.btn-info:active, fieldset[disabled] .navbar .navbar-nav > li > a.btn-info.active, .btn-info.disabled, .btn-info.disabled:hover, .btn-info.disabled:focus, .btn-info.disabled.focus, .btn-info.disabled:active, .btn-info.disabled.active, .btn-info:disabled, .btn-info:disabled:hover, .btn-info:disabled:focus, .btn-info:disabled.focus, .btn-info:disabled:active, .btn-info:disabled.active, .btn-info[disabled], .btn-info[disabled]:hover, .btn-info[disabled]:focus, .btn-info[disabled].focus, .btn-info[disabled]:active, .btn-info[disabled].active, fieldset[disabled] .btn-info, fieldset[disabled] .btn-info:hover, fieldset[disabled] .btn-info:focus, fieldset[disabled] .btn-info.focus, fieldset[disabled] .btn-info:active, fieldset[disabled] .btn-info.active {\r\n    background-color: transparent;\r\n    border-color: #68B3C8; }\r\n.navbar .navbar-nav > li > a.btn-info.btn-fill, .btn-info.btn-fill {\r\n    color: #FFFFFF;\r\n    background-color: #68B3C8;\r\n    opacity: 1;\r\n    filter: alpha(opacity=100); }\r\n.navbar .navbar-nav > li > a.btn-info.btn-fill:hover, .navbar .navbar-nav > li > a.btn-info.btn-fill:focus, .navbar .navbar-nav > li > a.btn-info.btn-fill:active, .navbar .navbar-nav > li > a.btn-info.btn-fill.active, .open > .navbar .navbar-nav > li > a.btn-info.btn-fill.dropdown-toggle, .btn-info.btn-fill:hover, .btn-info.btn-fill:focus, .btn-info.btn-fill:active, .btn-info.btn-fill.active, .open > .btn-info.btn-fill.dropdown-toggle {\r\n      background-color: #3091B2;\r\n      color: #FFFFFF;\r\n      border-color: #3091B2; }\r\n.navbar .navbar-nav > li > a.btn-info.btn-fill .caret, .btn-info.btn-fill .caret {\r\n      border-top-color: #FFFFFF; }\r\n.navbar .navbar-nav > li > a.btn-info.btn-simple:hover, .navbar .navbar-nav > li > a.btn-info.btn-simple:focus, .navbar .navbar-nav > li > a.btn-info.btn-simple:active, .navbar .navbar-nav > li > a.btn-info.btn-simple.active, .open > .navbar .navbar-nav > li > a.btn-info.btn-simple.dropdown-toggle, .btn-info.btn-simple:hover, .btn-info.btn-simple:focus, .btn-info.btn-simple:active, .btn-info.btn-simple.active, .open > .btn-info.btn-simple.dropdown-toggle {\r\n    background-color: transparent;\r\n    color: #3091B2; }\r\n.navbar .navbar-nav > li > a.btn-info.btn-simple .caret, .btn-info.btn-simple .caret {\r\n    border-top-color: #FFFFFF; }\r\n.navbar .navbar-nav > li > a.btn-info .caret, .btn-info .caret {\r\n    border-top-color: #68B3C8; }\r\n.navbar .navbar-nav > li > a.btn-warning, .btn-warning {\r\n  border-color: #F3BB45;\r\n  color: #F3BB45; }\r\n.navbar .navbar-nav > li > a.btn-warning:hover, .navbar .navbar-nav > li > a.btn-warning:focus, .navbar .navbar-nav > li > a.btn-warning:active, .navbar .navbar-nav > li > a.btn-warning.active, .open > .navbar .navbar-nav > li > a.btn-warning.dropdown-toggle, .btn-warning:hover, .btn-warning:focus, .btn-warning:active, .btn-warning.active, .open > .btn-warning.dropdown-toggle {\r\n    background-color: #F3BB45;\r\n    color: rgba(255, 255, 255, 0.7);\r\n    border-color: #F3BB45; }\r\n.navbar .navbar-nav > li > a.btn-warning:hover .caret, .navbar .navbar-nav > li > a.btn-warning:focus .caret, .navbar .navbar-nav > li > a.btn-warning:active .caret, .navbar .navbar-nav > li > a.btn-warning.active .caret, .open > .navbar .navbar-nav > li > a.btn-warning.dropdown-toggle .caret, .btn-warning:hover .caret, .btn-warning:focus .caret, .btn-warning:active .caret, .btn-warning.active .caret, .open > .btn-warning.dropdown-toggle .caret {\r\n      border-top-color: rgba(255, 255, 255, 0.7); }\r\n.navbar .navbar-nav > li > a.btn-warning.disabled, .navbar .navbar-nav > li > a.btn-warning.disabled:hover, .navbar .navbar-nav > li > a.btn-warning.disabled:focus, .navbar .navbar-nav > li > a.btn-warning.disabled.focus, .navbar .navbar-nav > li > a.btn-warning.disabled:active, .navbar .navbar-nav > li > a.btn-warning.disabled.active, .navbar .navbar-nav > li > a.btn-warning:disabled, .navbar .navbar-nav > li > a.btn-warning:disabled:hover, .navbar .navbar-nav > li > a.btn-warning:disabled:focus, .navbar .navbar-nav > li > a.btn-warning:disabled.focus, .navbar .navbar-nav > li > a.btn-warning:disabled:active, .navbar .navbar-nav > li > a.btn-warning:disabled.active, .navbar .navbar-nav > li > a.btn-warning[disabled], .navbar .navbar-nav > li > a.btn-warning[disabled]:hover, .navbar .navbar-nav > li > a.btn-warning[disabled]:focus, .navbar .navbar-nav > li > a.btn-warning[disabled].focus, .navbar .navbar-nav > li > a.btn-warning[disabled]:active, .navbar .navbar-nav > li > a.btn-warning[disabled].active, fieldset[disabled] .navbar .navbar-nav > li > a.btn-warning, fieldset[disabled] .navbar .navbar-nav > li > a.btn-warning:hover, fieldset[disabled] .navbar .navbar-nav > li > a.btn-warning:focus, fieldset[disabled] .navbar .navbar-nav > li > a.btn-warning.focus, fieldset[disabled] .navbar .navbar-nav > li > a.btn-warning:active, fieldset[disabled] .navbar .navbar-nav > li > a.btn-warning.active, .btn-warning.disabled, .btn-warning.disabled:hover, .btn-warning.disabled:focus, .btn-warning.disabled.focus, .btn-warning.disabled:active, .btn-warning.disabled.active, .btn-warning:disabled, .btn-warning:disabled:hover, .btn-warning:disabled:focus, .btn-warning:disabled.focus, .btn-warning:disabled:active, .btn-warning:disabled.active, .btn-warning[disabled], .btn-warning[disabled]:hover, .btn-warning[disabled]:focus, .btn-warning[disabled].focus, .btn-warning[disabled]:active, .btn-warning[disabled].active, fieldset[disabled] .btn-warning, fieldset[disabled] .btn-warning:hover, fieldset[disabled] .btn-warning:focus, fieldset[disabled] .btn-warning.focus, fieldset[disabled] .btn-warning:active, fieldset[disabled] .btn-warning.active {\r\n    background-color: transparent;\r\n    border-color: #F3BB45; }\r\n.navbar .navbar-nav > li > a.btn-warning.btn-fill, .btn-warning.btn-fill {\r\n    color: #FFFFFF;\r\n    background-color: #F3BB45;\r\n    opacity: 1;\r\n    filter: alpha(opacity=100); }\r\n.navbar .navbar-nav > li > a.btn-warning.btn-fill:hover, .navbar .navbar-nav > li > a.btn-warning.btn-fill:focus, .navbar .navbar-nav > li > a.btn-warning.btn-fill:active, .navbar .navbar-nav > li > a.btn-warning.btn-fill.active, .open > .navbar .navbar-nav > li > a.btn-warning.btn-fill.dropdown-toggle, .btn-warning.btn-fill:hover, .btn-warning.btn-fill:focus, .btn-warning.btn-fill:active, .btn-warning.btn-fill.active, .open > .btn-warning.btn-fill.dropdown-toggle {\r\n      background-color: #BB992F;\r\n      color: #FFFFFF;\r\n      border-color: #BB992F; }\r\n.navbar .navbar-nav > li > a.btn-warning.btn-fill .caret, .btn-warning.btn-fill .caret {\r\n      border-top-color: #FFFFFF; }\r\n.navbar .navbar-nav > li > a.btn-warning.btn-simple:hover, .navbar .navbar-nav > li > a.btn-warning.btn-simple:focus, .navbar .navbar-nav > li > a.btn-warning.btn-simple:active, .navbar .navbar-nav > li > a.btn-warning.btn-simple.active, .open > .navbar .navbar-nav > li > a.btn-warning.btn-simple.dropdown-toggle, .btn-warning.btn-simple:hover, .btn-warning.btn-simple:focus, .btn-warning.btn-simple:active, .btn-warning.btn-simple.active, .open > .btn-warning.btn-simple.dropdown-toggle {\r\n    background-color: transparent;\r\n    color: #BB992F; }\r\n.navbar .navbar-nav > li > a.btn-warning.btn-simple .caret, .btn-warning.btn-simple .caret {\r\n    border-top-color: #FFFFFF; }\r\n.navbar .navbar-nav > li > a.btn-warning .caret, .btn-warning .caret {\r\n    border-top-color: #F3BB45; }\r\n.navbar .navbar-nav > li > a.btn-danger, .btn-danger {\r\n  border-color: #EB5E28;\r\n  color: #EB5E28; }\r\n.navbar .navbar-nav > li > a.btn-danger:hover, .navbar .navbar-nav > li > a.btn-danger:focus, .navbar .navbar-nav > li > a.btn-danger:active, .navbar .navbar-nav > li > a.btn-danger.active, .open > .navbar .navbar-nav > li > a.btn-danger.dropdown-toggle, .btn-danger:hover, .btn-danger:focus, .btn-danger:active, .btn-danger.active, .open > .btn-danger.dropdown-toggle {\r\n    background-color: #EB5E28;\r\n    color: rgba(255, 255, 255, 0.7);\r\n    border-color: #EB5E28; }\r\n.navbar .navbar-nav > li > a.btn-danger:hover .caret, .navbar .navbar-nav > li > a.btn-danger:focus .caret, .navbar .navbar-nav > li > a.btn-danger:active .caret, .navbar .navbar-nav > li > a.btn-danger.active .caret, .open > .navbar .navbar-nav > li > a.btn-danger.dropdown-toggle .caret, .btn-danger:hover .caret, .btn-danger:focus .caret, .btn-danger:active .caret, .btn-danger.active .caret, .open > .btn-danger.dropdown-toggle .caret {\r\n      border-top-color: rgba(255, 255, 255, 0.7); }\r\n.navbar .navbar-nav > li > a.btn-danger.disabled, .navbar .navbar-nav > li > a.btn-danger.disabled:hover, .navbar .navbar-nav > li > a.btn-danger.disabled:focus, .navbar .navbar-nav > li > a.btn-danger.disabled.focus, .navbar .navbar-nav > li > a.btn-danger.disabled:active, .navbar .navbar-nav > li > a.btn-danger.disabled.active, .navbar .navbar-nav > li > a.btn-danger:disabled, .navbar .navbar-nav > li > a.btn-danger:disabled:hover, .navbar .navbar-nav > li > a.btn-danger:disabled:focus, .navbar .navbar-nav > li > a.btn-danger:disabled.focus, .navbar .navbar-nav > li > a.btn-danger:disabled:active, .navbar .navbar-nav > li > a.btn-danger:disabled.active, .navbar .navbar-nav > li > a.btn-danger[disabled], .navbar .navbar-nav > li > a.btn-danger[disabled]:hover, .navbar .navbar-nav > li > a.btn-danger[disabled]:focus, .navbar .navbar-nav > li > a.btn-danger[disabled].focus, .navbar .navbar-nav > li > a.btn-danger[disabled]:active, .navbar .navbar-nav > li > a.btn-danger[disabled].active, fieldset[disabled] .navbar .navbar-nav > li > a.btn-danger, fieldset[disabled] .navbar .navbar-nav > li > a.btn-danger:hover, fieldset[disabled] .navbar .navbar-nav > li > a.btn-danger:focus, fieldset[disabled] .navbar .navbar-nav > li > a.btn-danger.focus, fieldset[disabled] .navbar .navbar-nav > li > a.btn-danger:active, fieldset[disabled] .navbar .navbar-nav > li > a.btn-danger.active, .btn-danger.disabled, .btn-danger.disabled:hover, .btn-danger.disabled:focus, .btn-danger.disabled.focus, .btn-danger.disabled:active, .btn-danger.disabled.active, .btn-danger:disabled, .btn-danger:disabled:hover, .btn-danger:disabled:focus, .btn-danger:disabled.focus, .btn-danger:disabled:active, .btn-danger:disabled.active, .btn-danger[disabled], .btn-danger[disabled]:hover, .btn-danger[disabled]:focus, .btn-danger[disabled].focus, .btn-danger[disabled]:active, .btn-danger[disabled].active, fieldset[disabled] .btn-danger, fieldset[disabled] .btn-danger:hover, fieldset[disabled] .btn-danger:focus, fieldset[disabled] .btn-danger.focus, fieldset[disabled] .btn-danger:active, fieldset[disabled] .btn-danger.active {\r\n    background-color: transparent;\r\n    border-color: #EB5E28; }\r\n.navbar .navbar-nav > li > a.btn-danger.btn-fill, .btn-danger.btn-fill {\r\n    color: #FFFFFF;\r\n    background-color: #EB5E28;\r\n    opacity: 1;\r\n    filter: alpha(opacity=100); }\r\n.navbar .navbar-nav > li > a.btn-danger.btn-fill:hover, .navbar .navbar-nav > li > a.btn-danger.btn-fill:focus, .navbar .navbar-nav > li > a.btn-danger.btn-fill:active, .navbar .navbar-nav > li > a.btn-danger.btn-fill.active, .open > .navbar .navbar-nav > li > a.btn-danger.btn-fill.dropdown-toggle, .btn-danger.btn-fill:hover, .btn-danger.btn-fill:focus, .btn-danger.btn-fill:active, .btn-danger.btn-fill.active, .open > .btn-danger.btn-fill.dropdown-toggle {\r\n      background-color: #B33C12;\r\n      color: #FFFFFF;\r\n      border-color: #B33C12; }\r\n.navbar .navbar-nav > li > a.btn-danger.btn-fill .caret, .btn-danger.btn-fill .caret {\r\n      border-top-color: #FFFFFF; }\r\n.navbar .navbar-nav > li > a.btn-danger.btn-simple:hover, .navbar .navbar-nav > li > a.btn-danger.btn-simple:focus, .navbar .navbar-nav > li > a.btn-danger.btn-simple:active, .navbar .navbar-nav > li > a.btn-danger.btn-simple.active, .open > .navbar .navbar-nav > li > a.btn-danger.btn-simple.dropdown-toggle, .btn-danger.btn-simple:hover, .btn-danger.btn-simple:focus, .btn-danger.btn-simple:active, .btn-danger.btn-simple.active, .open > .btn-danger.btn-simple.dropdown-toggle {\r\n    background-color: transparent;\r\n    color: #B33C12; }\r\n.navbar .navbar-nav > li > a.btn-danger.btn-simple .caret, .btn-danger.btn-simple .caret {\r\n    border-top-color: #FFFFFF; }\r\n.navbar .navbar-nav > li > a.btn-danger .caret, .btn-danger .caret {\r\n    border-top-color: #EB5E28; }\r\n.btn-neutral {\r\n  border-color: #FFFFFF;\r\n  color: #FFFFFF; }\r\n.btn-neutral:hover, .btn-neutral:focus, .btn-neutral:active, .btn-neutral.active, .open > .btn-neutral.dropdown-toggle {\r\n    background-color: #FFFFFF;\r\n    color: rgba(255, 255, 255, 0.7);\r\n    border-color: #FFFFFF; }\r\n.btn-neutral:hover .caret, .btn-neutral:focus .caret, .btn-neutral:active .caret, .btn-neutral.active .caret, .open > .btn-neutral.dropdown-toggle .caret {\r\n      border-top-color: rgba(255, 255, 255, 0.7); }\r\n.btn-neutral.disabled, .btn-neutral.disabled:hover, .btn-neutral.disabled:focus, .btn-neutral.disabled.focus, .btn-neutral.disabled:active, .btn-neutral.disabled.active, .btn-neutral:disabled, .btn-neutral:disabled:hover, .btn-neutral:disabled:focus, .btn-neutral:disabled.focus, .btn-neutral:disabled:active, .btn-neutral:disabled.active, .btn-neutral[disabled], .btn-neutral[disabled]:hover, .btn-neutral[disabled]:focus, .btn-neutral[disabled].focus, .btn-neutral[disabled]:active, .btn-neutral[disabled].active, fieldset[disabled] .btn-neutral, fieldset[disabled] .btn-neutral:hover, fieldset[disabled] .btn-neutral:focus, fieldset[disabled] .btn-neutral.focus, fieldset[disabled] .btn-neutral:active, fieldset[disabled] .btn-neutral.active {\r\n    background-color: transparent;\r\n    border-color: #FFFFFF; }\r\n.btn-neutral.btn-fill {\r\n    color: #FFFFFF;\r\n    background-color: #FFFFFF;\r\n    opacity: 1;\r\n    filter: alpha(opacity=100); }\r\n.btn-neutral.btn-fill:hover, .btn-neutral.btn-fill:focus, .btn-neutral.btn-fill:active, .btn-neutral.btn-fill.active, .open > .btn-neutral.btn-fill.dropdown-toggle {\r\n      background-color: #FFFFFF;\r\n      color: #FFFFFF;\r\n      border-color: #FFFFFF; }\r\n.btn-neutral.btn-fill .caret {\r\n      border-top-color: #FFFFFF; }\r\n.btn-neutral.btn-simple:hover, .btn-neutral.btn-simple:focus, .btn-neutral.btn-simple:active, .btn-neutral.btn-simple.active, .open > .btn-neutral.btn-simple.dropdown-toggle {\r\n    background-color: transparent;\r\n    color: #FFFFFF; }\r\n.btn-neutral.btn-simple .caret {\r\n    border-top-color: #FFFFFF; }\r\n.btn-neutral .caret {\r\n    border-top-color: #FFFFFF; }\r\n.btn-neutral:hover, .btn-neutral:focus {\r\n    color: #66615B; }\r\n.btn-neutral:active, .btn-neutral.active, .open > .btn-neutral.dropdown-toggle {\r\n    background-color: #FFFFFF;\r\n    color: #66615B; }\r\n.btn-neutral.btn-fill {\r\n    color: #66615B; }\r\n.btn-neutral.btn-fill:hover, .btn-neutral.btn-fill:focus {\r\n    color: #403D39; }\r\n.btn-neutral.btn-simple:active, .btn-neutral.btn-simple.active {\r\n    background-color: transparent; }\r\n.btn:disabled, .btn[disabled], .btn.disabled {\r\n  opacity: 0.5;\r\n  filter: alpha(opacity=50); }\r\n.btn-simple {\r\n  border: 0;\r\n  padding: 7px 18px; }\r\n.btn-simple.btn-icon {\r\n    padding: 7px; }\r\n.btn-lg {\r\n  font-size: 18px;\r\n  border-radius: 50px;\r\n  padding: 11px 30px;\r\n  font-weight: 400; }\r\n.btn-lg.btn-simple {\r\n    padding: 13px 30px; }\r\n.btn-sm {\r\n  font-size: 12px;\r\n  border-radius: 26px;\r\n  padding: 4px 10px; }\r\n.btn-sm.btn-simple {\r\n    padding: 6px 10px; }\r\n.btn-xs {\r\n  font-size: 12px;\r\n  border-radius: 26px;\r\n  padding: 2px 5px; }\r\n.btn-xs.btn-simple {\r\n    padding: 4px 5px; }\r\n.btn-wd {\r\n  min-width: 140px; }\r\n.btn-group.select {\r\n  width: 100%; }\r\n.btn-group.select .btn {\r\n  text-align: left; }\r\n.btn-group.select .caret {\r\n  position: absolute;\r\n  top: 50%;\r\n  margin-top: -1px;\r\n  right: 8px; }\r\n.form-control::-moz-placeholder {\r\n  color: #DDDDDD;\r\n  opacity: 1;\r\n  filter: alpha(opacity=100); }\r\n.form-control:-moz-placeholder {\r\n  color: #DDDDDD;\r\n  opacity: 1;\r\n  filter: alpha(opacity=100); }\r\n.form-control::-webkit-input-placeholder {\r\n  color: #DDDDDD;\r\n  opacity: 1;\r\n  filter: alpha(opacity=100); }\r\n.form-control:-ms-input-placeholder {\r\n  color: #DDDDDD;\r\n  opacity: 1;\r\n  filter: alpha(opacity=100); }\r\n.form-control {\r\n  background-color: #fffcf5;\r\n  border: medium none;\r\n  border-radius: 4px;\r\n  color: #66615b;\r\n  font-size: 14px;\r\n  transition: background-color 0.3s ease 0s;\r\n  padding: 7px 18px;\r\n  height: 40px;\r\n  box-shadow: none; }\r\n.form-control:focus {\r\n    background-color: #FFFFFF;\r\n    box-shadow: none;\r\n    outline: 0 !important; }\r\n.has-success .form-control, .has-error .form-control, .has-success .form-control:focus, .has-error .form-control:focus {\r\n    box-shadow: none; }\r\n.has-success .form-control {\r\n    background-color: #ABF3CB;\r\n    color: #7AC29A; }\r\n.has-success .form-control.border-input {\r\n      border: 1px solid #7AC29A; }\r\n.has-success .form-control:focus {\r\n    background-color: #FFFFFF; }\r\n.has-error .form-control {\r\n    background-color: #FFC0A4;\r\n    color: #EB5E28; }\r\n.has-error .form-control.border-input {\r\n      border: 1px solid #EB5E28; }\r\n.has-error .form-control:focus {\r\n    background-color: #FFFFFF; }\r\n.form-control + .form-control-feedback {\r\n    border-radius: 6px;\r\n    font-size: 14px;\r\n    margin-top: -7px;\r\n    position: absolute;\r\n    right: 10px;\r\n    top: 50%;\r\n    vertical-align: middle; }\r\n.form-control.border-input {\r\n    border: 1px solid #CCC5B9; }\r\n.open .form-control {\r\n    border-bottom-color: transparent; }\r\n.input-lg {\r\n  height: 55px;\r\n  padding: 11px 30px; }\r\n.has-error .form-control-feedback, .has-error .control-label {\r\n  color: #EB5E28; }\r\n.has-success .form-control-feedback, .has-success .control-label {\r\n  color: #7AC29A; }\r\n.input-group-addon {\r\n  background-color: #fffcf5;\r\n  border: medium none;\r\n  border-radius: 4px; }\r\n.has-success .input-group-addon, .has-error .input-group-addon {\r\n    background-color: #FFFFFF; }\r\n.has-error .form-control:focus + .input-group-addon {\r\n    color: #EB5E28; }\r\n.has-success .form-control:focus + .input-group-addon {\r\n    color: #7AC29A; }\r\n.form-control:focus + .input-group-addon, .form-control:focus ~ .input-group-addon {\r\n    background-color: #FFFFFF; }\r\n.border-input .input-group-addon {\r\n  border: solid 1px #CCC5B9; }\r\n.input-group {\r\n  margin-bottom: 15px; }\r\n.input-group[disabled] .input-group-addon {\r\n  background-color: #E3E3E3; }\r\n.input-group .form-control:first-child,\r\n.input-group-addon:first-child,\r\n.input-group-btn:first-child > .dropdown-toggle,\r\n.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle) {\r\n  border-right: 0 none; }\r\n.input-group .form-control:last-child,\r\n.input-group-addon:last-child,\r\n.input-group-btn:last-child > .dropdown-toggle,\r\n.input-group-btn:first-child > .btn:not(:first-child) {\r\n  border-left: 0 none; }\r\n.form-control[disabled], .form-control[readonly], fieldset[disabled] .form-control {\r\n  background-color: #E3E3E3;\r\n  cursor: not-allowed;\r\n  color: #9A9A9A;\r\n  opacity: 1;\r\n  filter: alpha(opacity=100); }\r\n.form-control[disabled]::-moz-placeholder {\r\n  color: #9A9A9A;\r\n  opacity: 1;\r\n  filter: alpha(opacity=100); }\r\n.form-control[disabled]:-moz-placeholder {\r\n  color: #DDDDDD;\r\n  opacity: 1;\r\n  filter: alpha(opacity=100); }\r\n.form-control[disabled]::-webkit-input-placeholder {\r\n  color: #DDDDDD;\r\n  opacity: 1;\r\n  filter: alpha(opacity=100); }\r\n.form-control[disabled]:-ms-input-placeholder {\r\n  color: #DDDDDD;\r\n  opacity: 1;\r\n  filter: alpha(opacity=100); }\r\n.input-group-btn .btn {\r\n  border-width: 1px;\r\n  padding: 9px 18px; }\r\n.input-group-btn .btn-default:not(.btn-fill) {\r\n  border-color: #DDDDDD; }\r\n.input-group-btn:last-child > .btn {\r\n  margin-left: 0; }\r\ntextarea.form-control {\r\n  max-width: 100%;\r\n  padding: 10px 18px;\r\n  resize: none; }\r\n.alert {\r\n  border: 0;\r\n  border-radius: 0;\r\n  color: #FFFFFF;\r\n  padding: 10px 15px;\r\n  font-size: 14px; }\r\n.container .alert {\r\n    border-radius: 4px; }\r\n.navbar .alert {\r\n    border-radius: 0;\r\n    left: 0;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 85px;\r\n    width: 100%;\r\n    z-index: 3; }\r\n.navbar:not(.navbar-transparent) .alert {\r\n    top: 70px; }\r\n.alert span[data-notify=\"icon\"] {\r\n    font-size: 30px;\r\n    display: block;\r\n    left: 15px;\r\n    position: absolute;\r\n    top: 50%;\r\n    margin-top: -20px; }\r\n.alert .close ~ span {\r\n    display: block;\r\n    max-width: 89%; }\r\n.alert[data-notify=\"container\"] {\r\n    padding: 10px 10px 10px 20px;\r\n    border-radius: 4px; }\r\n.alert.alert-with-icon {\r\n    padding-left: 65px; }\r\n.alert-info {\r\n  background-color: #7CE4FE;\r\n  color: #3091B2; }\r\n.alert-success {\r\n  background-color: #8EF3C5;\r\n  color: #42A084; }\r\n.alert-warning {\r\n  background-color: #FFE28C;\r\n  color: #BB992F; }\r\n.alert-danger {\r\n  background-color: #FF8F5E;\r\n  color: #B33C12; }\r\n.table thead tr > th,\r\n.table thead tr > td,\r\n.table tbody tr > th,\r\n.table tbody tr > td,\r\n.table tfoot tr > th,\r\n.table tfoot tr > td {\r\n  border-top: 1px solid #CCC5B9; }\r\n.table > thead > tr > th {\r\n  border-bottom-width: 0;\r\n  font-size: 1.25em;\r\n  font-weight: 300; }\r\n.table .radio,\r\n.table .checkbox {\r\n  margin-top: 0;\r\n  margin-bottom: 22px;\r\n  padding: 0;\r\n  width: 15px; }\r\n.table > thead > tr > th,\r\n.table > tbody > tr > th,\r\n.table > tfoot > tr > th,\r\n.table > thead > tr > td,\r\n.table > tbody > tr > td,\r\n.table > tfoot > tr > td {\r\n  padding: 12px;\r\n  vertical-align: middle; }\r\n.table .th-description {\r\n  max-width: 150px; }\r\n.table .td-price {\r\n  font-size: 26px;\r\n  font-weight: 300;\r\n  margin-top: 5px;\r\n  text-align: right; }\r\n.table .td-total {\r\n  font-weight: 600;\r\n  font-size: 1.25em;\r\n  padding-top: 20px;\r\n  text-align: right; }\r\n.table .td-actions .btn.btn-sm, .table .td-actions .btn.btn-xs {\r\n  padding-left: 3px;\r\n  padding-right: 3px; }\r\n.table > tbody > tr {\r\n  position: relative; }\r\n.table-striped tbody > tr:nth-of-type(2n+1) {\r\n  background-color: #fff; }\r\n.table-striped tbody > tr:nth-of-type(2n) {\r\n  background-color: #FFFCF5; }\r\n.table-striped > thead > tr > th,\r\n.table-striped > tbody > tr > th,\r\n.table-striped > tfoot > tr > th,\r\n.table-striped > thead > tr > td,\r\n.table-striped > tbody > tr > td,\r\n.table-striped > tfoot > tr > td {\r\n  padding: 15px 8px; }\r\n/*      Checkbox and radio         */\r\n.checkbox,\r\n.radio {\r\n  margin-bottom: 12px;\r\n  padding-left: 30px;\r\n  position: relative;\r\n  transition: color,opacity 0.25s linear;\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n  line-height: 1.5;\r\n  color: #66615b;\r\n  cursor: pointer; }\r\n.checkbox .icons,\r\n  .radio .icons {\r\n    color: #66615b;\r\n    display: block;\r\n    height: 20px;\r\n    left: 0;\r\n    position: absolute;\r\n    top: 0;\r\n    width: 20px;\r\n    text-align: center;\r\n    line-height: 21px;\r\n    font-size: 20px;\r\n    cursor: pointer;\r\n    transition: color,opacity 0.15s linear;\r\n    opacity: .50; }\r\n.checkbox.checked .icons,\r\n  .radio.checked .icons {\r\n    opacity: 1; }\r\n.checkbox input,\r\n  .radio input {\r\n    outline: none !important;\r\n    display: none; }\r\n.checkbox label,\r\n.radio label {\r\n  padding-left: 10px; }\r\n.checkbox .icons .first-icon,\r\n.radio .icons .first-icon,\r\n.checkbox .icons .second-icon,\r\n.radio .icons .second-icon {\r\n  display: inline-table;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  background-color: transparent;\r\n  margin: 0;\r\n  opacity: 1;\r\n  filter: alpha(opacity=100); }\r\n.checkbox .icons .second-icon,\r\n.radio .icons .second-icon {\r\n  opacity: 0;\r\n  filter: alpha(opacity=0); }\r\n.checkbox:hover,\r\n.radio:hover {\r\n  transition: color 0.2s linear; }\r\n.checkbox:hover .first-icon,\r\n.radio:hover .first-icon {\r\n  opacity: 0;\r\n  filter: alpha(opacity=0); }\r\n.checkbox:hover .second-icon,\r\n.radio:hover .second-icon {\r\n  opacity: 1;\r\n  filter: alpha(opacity=100); }\r\n.checkbox.checked .first-icon,\r\n.radio.checked .first-icon {\r\n  opacity: 0;\r\n  filter: alpha(opacity=0); }\r\n.checkbox.checked .second-icon,\r\n.radio.checked .second-icon {\r\n  opacity: 1;\r\n  filter: alpha(opacity=100);\r\n  transition: color 0.2s linear; }\r\n.checkbox.disabled,\r\n.radio.disabled {\r\n  cursor: default;\r\n  color: #DDDDDD; }\r\n.checkbox.disabled .icons,\r\n.radio.disabled .icons {\r\n  color: #DDDDDD; }\r\n.checkbox.disabled .first-icon,\r\n.radio.disabled .first-icon {\r\n  opacity: 1;\r\n  filter: alpha(opacity=100); }\r\n.checkbox.disabled .second-icon,\r\n.radio.disabled .second-icon {\r\n  opacity: 0;\r\n  filter: alpha(opacity=0); }\r\n.checkbox.disabled.checked .icons,\r\n.radio.disabled.checked .icons {\r\n  color: #DDDDDD; }\r\n.checkbox.disabled.checked .first-icon,\r\n.radio.disabled.checked .first-icon {\r\n  opacity: 0;\r\n  filter: alpha(opacity=0); }\r\n.checkbox.disabled.checked .second-icon,\r\n.radio.disabled.checked .second-icon {\r\n  opacity: 1;\r\n  color: #DDDDDD;\r\n  filter: alpha(opacity=100); }\r\n.nav > li > a:hover,\r\n.nav > li > a:focus {\r\n  background-color: transparent; }\r\n.navbar {\r\n  border: 0;\r\n  border-radius: 0;\r\n  font-size: 16px;\r\n  z-index: 3; }\r\n.navbar .navbar-brand {\r\n    font-weight: 600;\r\n    margin: 5px 0px;\r\n    padding: 20px 15px;\r\n    font-size: 20px; }\r\n.navbar .navbar-nav > li > a {\r\n    line-height: 1.42857;\r\n    margin: 15px 0px;\r\n    padding: 10px 15px; }\r\n.navbar .navbar-nav > li > a i,\r\n    .navbar .navbar-nav > li > a p {\r\n      display: inline-block;\r\n      margin: 0; }\r\n.navbar .navbar-nav > li > a i {\r\n      position: relative;\r\n      top: 1px; }\r\n.navbar .navbar-nav > li > a.btn {\r\n    margin: 15px 3px;\r\n    padding: 7px 18px; }\r\n.navbar .btn {\r\n    margin: 15px 3px;\r\n    font-size: 14px; }\r\n.navbar .btn-simple {\r\n    font-size: 16px; }\r\n.navbar-nav > li > .dropdown-menu {\r\n  border-radius: 6px;\r\n  margin-top: -5px; }\r\n.navbar-default {\r\n  background-color: #f4f3ef;\r\n  border-bottom: 1px solid #DDDDDD; }\r\n.navbar-default .brand {\r\n    color: #66615b !important; }\r\n.navbar-default .navbar-nav > li > a:not(.btn) {\r\n    color: #9A9A9A; }\r\n.navbar-default .navbar-nav > .active > a,\r\n  .navbar-default .navbar-nav > .active > a:not(.btn):hover,\r\n  .navbar-default .navbar-nav > .active > a:not(.btn):focus,\r\n  .navbar-default .navbar-nav > li > a:not(.btn):hover,\r\n  .navbar-default .navbar-nav > li > a:not(.btn):focus {\r\n    background-color: transparent;\r\n    border-radius: 3px;\r\n    color: #68B3C8;\r\n    opacity: 1;\r\n    filter: alpha(opacity=100); }\r\n.navbar-default .navbar-nav > .dropdown > a:hover .caret,\r\n  .navbar-default .navbar-nav > .dropdown > a:focus .caret {\r\n    border-bottom-color: #68B3C8;\r\n    border-top-color: #68B3C8; }\r\n.navbar-default .navbar-nav > .open > a,\r\n  .navbar-default .navbar-nav > .open > a:hover,\r\n  .navbar-default .navbar-nav > .open > a:focus {\r\n    background-color: transparent;\r\n    color: #68B3C8; }\r\n.navbar-default .navbar-nav .navbar-toggle:hover, .navbar-default .navbar-nav .navbar-toggle:focus {\r\n    background-color: transparent; }\r\n.navbar-default:not(.navbar-transparent) .btn-default:hover {\r\n    color: #68B3C8;\r\n    border-color: #68B3C8; }\r\n.navbar-default:not(.navbar-transparent) .btn-neutral, .navbar-default:not(.navbar-transparent) .btn-neutral:hover, .navbar-default:not(.navbar-transparent) .btn-neutral:active {\r\n    color: #9A9A9A; }\r\n.navbar-form {\r\n  box-shadow: none; }\r\n.navbar-form .form-control {\r\n    border-radius: 0;\r\n    border: 0;\r\n    padding: 0;\r\n    background-color: transparent;\r\n    height: 22px;\r\n    font-size: 16px;\r\n    line-height: 1.4em;\r\n    color: #E3E3E3; }\r\n.navbar-transparent .navbar-form .form-control, [class*=\"navbar-ct\"] .navbar-form .form-control {\r\n    color: #FFFFFF;\r\n    border: 0;\r\n    border-bottom: 1px solid rgba(255, 255, 255, 0.6); }\r\n.navbar-ct-primary {\r\n  background-color: #8ECFD5; }\r\n.navbar-ct-info {\r\n  background-color: #7CE4FE; }\r\n.navbar-ct-success {\r\n  background-color: #8EF3C5; }\r\n.navbar-ct-warning {\r\n  background-color: #FFE28C; }\r\n.navbar-ct-danger {\r\n  background-color: #FF8F5E; }\r\n.navbar-transparent {\r\n  padding-top: 15px;\r\n  background-color: transparent;\r\n  border-bottom: 1px solid transparent; }\r\n.navbar-toggle {\r\n  margin-top: 19px;\r\n  margin-bottom: 19px;\r\n  border: 0; }\r\n.navbar-toggle .icon-bar {\r\n    background-color: #FFFFFF; }\r\n.navbar-toggle .navbar-collapse,\r\n  .navbar-toggle .navbar-form {\r\n    border-color: transparent; }\r\n.navbar-toggle.navbar-default .navbar-toggle:hover, .navbar-toggle.navbar-default .navbar-toggle:focus {\r\n    background-color: transparent; }\r\n.navbar-transparent .navbar-brand, [class*=\"navbar-ct\"] .navbar-brand {\r\n  opacity: 0.9;\r\n  filter: alpha(opacity=90); }\r\n.navbar-transparent .navbar-brand:focus, .navbar-transparent .navbar-brand:hover, [class*=\"navbar-ct\"] .navbar-brand:focus, [class*=\"navbar-ct\"] .navbar-brand:hover {\r\n    background-color: transparent;\r\n    opacity: 1;\r\n    filter: alpha(opacity=100); }\r\n.navbar-transparent .navbar-brand:not([class*=\"text\"]), [class*=\"navbar-ct\"] .navbar-brand:not([class*=\"text\"]) {\r\n  color: #FFFFFF; }\r\n.navbar-transparent .navbar-nav > li > a:not(.btn), [class*=\"navbar-ct\"] .navbar-nav > li > a:not(.btn) {\r\n  color: #FFFFFF;\r\n  border-color: #FFFFFF;\r\n  opacity: 0.8;\r\n  filter: alpha(opacity=80); }\r\n.navbar-transparent .navbar-nav > .active > a:not(.btn),\r\n.navbar-transparent .navbar-nav > .active > a:hover:not(.btn),\r\n.navbar-transparent .navbar-nav > .active > a:focus:not(.btn),\r\n.navbar-transparent .navbar-nav > li > a:hover:not(.btn),\r\n.navbar-transparent .navbar-nav > li > a:focus:not(.btn), [class*=\"navbar-ct\"] .navbar-nav > .active > a:not(.btn),\r\n[class*=\"navbar-ct\"] .navbar-nav > .active > a:hover:not(.btn),\r\n[class*=\"navbar-ct\"] .navbar-nav > .active > a:focus:not(.btn),\r\n[class*=\"navbar-ct\"] .navbar-nav > li > a:hover:not(.btn),\r\n[class*=\"navbar-ct\"] .navbar-nav > li > a:focus:not(.btn) {\r\n  background-color: transparent;\r\n  border-radius: 3px;\r\n  color: #FFFFFF;\r\n  opacity: 1;\r\n  filter: alpha(opacity=100); }\r\n.navbar-transparent .navbar-nav .nav > li > a.btn:hover, [class*=\"navbar-ct\"] .navbar-nav .nav > li > a.btn:hover {\r\n  background-color: transparent; }\r\n.navbar-transparent .navbar-nav > .dropdown > a .caret,\r\n.navbar-transparent .navbar-nav > .dropdown > a:hover .caret,\r\n.navbar-transparent .navbar-nav > .dropdown > a:focus .caret, [class*=\"navbar-ct\"] .navbar-nav > .dropdown > a .caret,\r\n[class*=\"navbar-ct\"] .navbar-nav > .dropdown > a:hover .caret,\r\n[class*=\"navbar-ct\"] .navbar-nav > .dropdown > a:focus .caret {\r\n  border-bottom-color: #FFFFFF;\r\n  border-top-color: #FFFFFF; }\r\n.navbar-transparent .navbar-nav > .open > a,\r\n.navbar-transparent .navbar-nav > .open > a:hover,\r\n.navbar-transparent .navbar-nav > .open > a:focus, [class*=\"navbar-ct\"] .navbar-nav > .open > a,\r\n[class*=\"navbar-ct\"] .navbar-nav > .open > a:hover,\r\n[class*=\"navbar-ct\"] .navbar-nav > .open > a:focus {\r\n  background-color: transparent;\r\n  color: #FFFFFF;\r\n  opacity: 1;\r\n  filter: alpha(opacity=100); }\r\n.navbar-transparent .btn-default, [class*=\"navbar-ct\"] .btn-default {\r\n  color: #FFFFFF;\r\n  border-color: #FFFFFF; }\r\n.navbar-transparent .btn-default.btn-fill, [class*=\"navbar-ct\"] .btn-default.btn-fill {\r\n  color: #9A9A9A;\r\n  background-color: #FFFFFF;\r\n  opacity: 0.9;\r\n  filter: alpha(opacity=90); }\r\n.navbar-transparent .btn-default.btn-fill:hover,\r\n.navbar-transparent .btn-default.btn-fill:focus,\r\n.navbar-transparent .btn-default.btn-fill:active,\r\n.navbar-transparent .btn-default.btn-fill.active,\r\n.navbar-transparent .open .dropdown-toggle.btn-fill.btn-default, [class*=\"navbar-ct\"] .btn-default.btn-fill:hover,\r\n[class*=\"navbar-ct\"] .btn-default.btn-fill:focus,\r\n[class*=\"navbar-ct\"] .btn-default.btn-fill:active,\r\n[class*=\"navbar-ct\"] .btn-default.btn-fill.active,\r\n[class*=\"navbar-ct\"] .open .dropdown-toggle.btn-fill.btn-default {\r\n  border-color: #FFFFFF;\r\n  opacity: 1;\r\n  filter: alpha(opacity=100); }\r\n.footer {\r\n  background-attachment: fixed;\r\n  position: relative;\r\n  line-height: 20px; }\r\n.footer nav ul {\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    font-weight: normal; }\r\n.footer nav ul li {\r\n      display: inline-block;\r\n      padding: 10px 15px;\r\n      margin: 15px 3px;\r\n      line-height: 20px;\r\n      text-align: center; }\r\n.footer nav ul a:not(.btn) {\r\n      color: #66615b;\r\n      display: block;\r\n      margin-bottom: 3px; }\r\n.footer nav ul a:not(.btn):focus, .footer nav ul a:not(.btn):hover {\r\n        color: #403D39; }\r\n.footer .copyright {\r\n    color: #66615b;\r\n    padding: 10px 15px;\r\n    font-size: 14px;\r\n    white-space: nowrap;\r\n    margin: 15px 3px;\r\n    line-height: 20px;\r\n    text-align: center; }\r\n.footer .heart {\r\n    color: #EB5E28; }\r\n.dropdown-menu {\r\n  background-color: #FFFCF5;\r\n  border: 0 none;\r\n  border-radius: 6px;\r\n  display: block;\r\n  margin-top: 10px;\r\n  padding: 0px;\r\n  position: absolute;\r\n  visibility: hidden;\r\n  z-index: 9000;\r\n  opacity: 0;\r\n  filter: alpha(opacity=0);\r\n  box-shadow: 0 2px rgba(17, 16, 15, 0.1), 0 2px 10px rgba(17, 16, 15, 0.1); }\r\n.open .dropdown-menu {\r\n    opacity: 1;\r\n    filter: alpha(opacity=100);\r\n    visibility: visible; }\r\n.dropdown-menu .divider {\r\n    background-color: #F1EAE0;\r\n    margin: 0px; }\r\n.dropdown-menu .dropdown-header {\r\n    color: #9A9A9A;\r\n    font-size: 12px;\r\n    padding: 10px 15px; }\r\n.select .dropdown-menu {\r\n    border-radius: 0 0 10px 10px;\r\n    box-shadow: none;\r\n    -webkit-transform-origin: 50% -40px;\r\n    transform-origin: 50% -40px;\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n    transition: all 150ms linear;\r\n    margin-top: -20px; }\r\n.select.open .dropdown-menu {\r\n    margin-top: -1px; }\r\n.dropdown-menu > li > a {\r\n    color: #66615b;\r\n    font-size: 14px;\r\n    padding: 10px 15px;\r\n    transition: none; }\r\n.dropdown-menu > li > a img {\r\n      margin-top: -3px; }\r\n.dropdown-menu > li > a:focus {\r\n    outline: 0 !important; }\r\n.btn-group.select .dropdown-menu {\r\n    min-width: 100%; }\r\n.dropdown-menu > li:first-child > a {\r\n    border-top-left-radius: 6px;\r\n    border-top-right-radius: 6px; }\r\n.dropdown-menu > li:last-child > a {\r\n    border-bottom-left-radius: 6px;\r\n    border-bottom-right-radius: 6px; }\r\n.select .dropdown-menu > li:first-child > a {\r\n    border-radius: 0;\r\n    border-bottom: 0 none; }\r\n.dropdown-menu > li > a:hover,\r\n  .dropdown-menu > li > a:focus {\r\n    background-color: #66615B;\r\n    color: rgba(255, 255, 255, 0.7);\r\n    opacity: 1;\r\n    text-decoration: none; }\r\n.dropdown-menu.dropdown-primary > li > a:hover, .dropdown-menu.dropdown-primary > li > a:focus {\r\n    background-color: #7A9E9F; }\r\n.dropdown-menu.dropdown-info > li > a:hover, .dropdown-menu.dropdown-info > li > a:focus {\r\n    background-color: #68B3C8; }\r\n.dropdown-menu.dropdown-success > li > a:hover, .dropdown-menu.dropdown-success > li > a:focus {\r\n    background-color: #7AC29A; }\r\n.dropdown-menu.dropdown-warning > li > a:hover, .dropdown-menu.dropdown-warning > li > a:focus {\r\n    background-color: #F3BB45; }\r\n.dropdown-menu.dropdown-danger > li > a:hover, .dropdown-menu.dropdown-danger > li > a:focus {\r\n    background-color: #EB5E28; }\r\n.btn-group.select {\r\n  overflow: hidden; }\r\n.btn-group.select.open {\r\n  overflow: visible; }\r\n.card {\r\n  border-radius: 6px;\r\n  box-shadow: 0 2px 2px rgba(204, 197, 185, 0.5);\r\n  background-color: #FFFFFF;\r\n  color: #252422;\r\n  margin-bottom: 20px;\r\n  position: relative;\r\n  z-index: 1; }\r\n.card .image {\r\n    width: 100%;\r\n    overflow: hidden;\r\n    height: 260px;\r\n    border-radius: 6px 6px 0 0;\r\n    position: relative;\r\n    -webkit-transform-style: preserve-3d;\r\n    transform-style: preserve-3d; }\r\n.card .image img {\r\n      width: 100%; }\r\n.card .content {\r\n    padding: 15px 15px 10px 15px; }\r\n.card .header {\r\n    padding: 20px 20px 0; }\r\n.card .description {\r\n    font-size: 16px;\r\n    color: #66615b; }\r\n.card h6 {\r\n    font-size: 12px;\r\n    margin: 0; }\r\n.card .category,\r\n  .card label {\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    color: #9A9A9A;\r\n    margin-bottom: 0px; }\r\n.card .category i,\r\n    .card label i {\r\n      font-size: 16px; }\r\n.card label {\r\n    font-size: 15px;\r\n    margin-bottom: 5px; }\r\n.card .title {\r\n    margin: 0;\r\n    color: #252422;\r\n    font-weight: 300; }\r\n.card .avatar {\r\n    width: 50px;\r\n    height: 50px;\r\n    overflow: hidden;\r\n    border-radius: 50%;\r\n    margin-right: 5px; }\r\n.card .footer {\r\n    padding: 0;\r\n    line-height: 30px; }\r\n.card .footer .legend {\r\n      padding: 5px 0; }\r\n.card .footer hr {\r\n      margin-top: 5px;\r\n      margin-bottom: 5px; }\r\n.card .stats {\r\n    color: #a9a9a9;\r\n    font-weight: 300; }\r\n.card .stats i {\r\n      margin-right: 2px;\r\n      min-width: 15px;\r\n      display: inline-block; }\r\n.card .footer div {\r\n    display: inline-block; }\r\n.card .author {\r\n    font-size: 12px;\r\n    font-weight: 600;\r\n    text-transform: uppercase; }\r\n.card .author i {\r\n    font-size: 14px; }\r\n.card.card-separator:after {\r\n    height: 100%;\r\n    right: -15px;\r\n    top: 0;\r\n    width: 1px;\r\n    background-color: #DDDDDD;\r\n    content: \"\";\r\n    position: absolute; }\r\n.card .ct-chart {\r\n    margin: 30px 0 30px;\r\n    height: 245px; }\r\n.card .table tbody td:first-child,\r\n  .card .table thead th:first-child {\r\n    padding-left: 15px; }\r\n.card .table tbody td:last-child,\r\n  .card .table thead th:last-child {\r\n    padding-right: 15px; }\r\n.card .alert {\r\n    border-radius: 4px;\r\n    position: relative; }\r\n.card .alert.alert-with-icon {\r\n      padding-left: 65px; }\r\n.card .icon-big {\r\n    font-size: 3em;\r\n    min-height: 64px; }\r\n.card .numbers {\r\n    font-size: 2em;\r\n    text-align: right; }\r\n.card .numbers p {\r\n      margin: 0; }\r\n.card ul.team-members li {\r\n    padding: 10px 0px; }\r\n.card ul.team-members li:not(:last-child) {\r\n      border-bottom: 1px solid #F1EAE0; }\r\n.card-user .image {\r\n  border-radius: 8px 8px 0 0;\r\n  height: 150px;\r\n  position: relative;\r\n  overflow: hidden; }\r\n.card-user .image img {\r\n    width: 100%; }\r\n.card-user .image-plain {\r\n  height: 0;\r\n  margin-top: 110px; }\r\n.card-user .author {\r\n  text-align: center;\r\n  text-transform: none;\r\n  margin-top: -65px; }\r\n.card-user .author .title {\r\n    color: #403D39; }\r\n.card-user .author .title small {\r\n      color: #ccc5b9; }\r\n.card-user .avatar {\r\n  width: 100px;\r\n  height: 100px;\r\n  border-radius: 50%;\r\n  position: relative;\r\n  margin-bottom: 15px; }\r\n.card-user .avatar.border-white {\r\n    border: 5px solid #FFFFFF; }\r\n.card-user .avatar.border-gray {\r\n    border: 5px solid #ccc5b9; }\r\n.card-user .title {\r\n  font-weight: 600;\r\n  line-height: 24px; }\r\n.card-user .description {\r\n  margin-top: 10px; }\r\n.card-user .content {\r\n  min-height: 200px; }\r\n.card-user.card-plain .avatar {\r\n  height: 190px;\r\n  width: 190px; }\r\n.card-map .map {\r\n  height: 500px;\r\n  padding-top: 20px; }\r\n.card-map .map > div {\r\n    height: 100%; }\r\n.card-user .footer,\r\n.card-price .footer {\r\n  padding: 5px 15px 10px; }\r\n.card-user hr,\r\n.card-price hr {\r\n  margin: 5px 15px; }\r\n.card-plain {\r\n  background-color: transparent;\r\n  box-shadow: none;\r\n  border-radius: 0; }\r\n.card-plain .image {\r\n    border-radius: 4px; }\r\n.ct-label {\r\n  fill: rgba(0, 0, 0, 0.4);\r\n  color: rgba(0, 0, 0, 0.4);\r\n  font-size: 0.9em;\r\n  line-height: 1; }\r\n.ct-chart-line .ct-label,\r\n.ct-chart-bar .ct-label {\r\n  display: block;\r\n  display: flex; }\r\n.ct-label.ct-horizontal.ct-start {\r\n  align-items: flex-end;\r\n  justify-content: flex-start;\r\n  text-align: left;\r\n  text-anchor: start; }\r\n.ct-label.ct-horizontal.ct-end {\r\n  align-items: flex-start;\r\n  justify-content: flex-start;\r\n  text-align: left;\r\n  text-anchor: start; }\r\n.ct-label.ct-vertical.ct-start {\r\n  align-items: flex-end;\r\n  justify-content: flex-end;\r\n  text-align: right;\r\n  text-anchor: end; }\r\n.ct-label.ct-vertical.ct-end {\r\n  align-items: flex-end;\r\n  justify-content: flex-start;\r\n  text-align: left;\r\n  text-anchor: start; }\r\n.ct-chart-bar .ct-label.ct-horizontal.ct-start {\r\n  align-items: flex-end;\r\n  justify-content: center;\r\n  text-align: center;\r\n  text-anchor: start; }\r\n.ct-chart-bar .ct-label.ct-horizontal.ct-end {\r\n  align-items: flex-start;\r\n  justify-content: center;\r\n  text-align: center;\r\n  text-anchor: start; }\r\n.ct-chart-bar.ct-horizontal-bars .ct-label.ct-horizontal.ct-start {\r\n  align-items: flex-end;\r\n  justify-content: flex-start;\r\n  text-align: left;\r\n  text-anchor: start; }\r\n.ct-chart-bar.ct-horizontal-bars .ct-label.ct-horizontal.ct-end {\r\n  align-items: flex-start;\r\n  justify-content: flex-start;\r\n  text-align: left;\r\n  text-anchor: start; }\r\n.ct-chart-bar.ct-horizontal-bars .ct-label.ct-vertical.ct-start {\r\n  align-items: center;\r\n  justify-content: flex-end;\r\n  text-align: right;\r\n  text-anchor: end; }\r\n.ct-chart-bar.ct-horizontal-bars .ct-label.ct-vertical.ct-end {\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n  text-align: left;\r\n  text-anchor: end; }\r\n.ct-grid {\r\n  stroke: rgba(0, 0, 0, 0.2);\r\n  stroke-width: 1px;\r\n  stroke-dasharray: 2px; }\r\n.ct-point {\r\n  stroke-width: 10px;\r\n  stroke-linecap: round; }\r\n.ct-line {\r\n  fill: none;\r\n  stroke-width: 4px; }\r\n.ct-area {\r\n  stroke: none;\r\n  fill-opacity: 0.7; }\r\n.ct-bar {\r\n  fill: none;\r\n  stroke-width: 10px; }\r\n.ct-slice-donut {\r\n  fill: none;\r\n  stroke-width: 60px; }\r\n.ct-series-a .ct-point, .ct-series-a .ct-line, .ct-series-a .ct-bar, .ct-series-a .ct-slice-donut {\r\n  stroke: #68B3C8; }\r\n.ct-series-a .ct-slice-pie, .ct-series-a .ct-area {\r\n  fill: #68B3C8; }\r\n.ct-series-b .ct-point, .ct-series-b .ct-line, .ct-series-b .ct-bar, .ct-series-b .ct-slice-donut {\r\n  stroke: #F3BB45; }\r\n.ct-series-b .ct-slice-pie, .ct-series-b .ct-area {\r\n  fill: #F3BB45; }\r\n.ct-series-c .ct-point, .ct-series-c .ct-line, .ct-series-c .ct-bar, .ct-series-c .ct-slice-donut {\r\n  stroke: #EB5E28; }\r\n.ct-series-c .ct-slice-pie, .ct-series-c .ct-area {\r\n  fill: #EB5E28; }\r\n.ct-series-d .ct-point, .ct-series-d .ct-line, .ct-series-d .ct-bar, .ct-series-d .ct-slice-donut {\r\n  stroke: #7AC29A; }\r\n.ct-series-d .ct-slice-pie, .ct-series-d .ct-area {\r\n  fill: #7AC29A; }\r\n.ct-series-e .ct-point, .ct-series-e .ct-line, .ct-series-e .ct-bar, .ct-series-e .ct-slice-donut {\r\n  stroke: #7A9E9F; }\r\n.ct-series-e .ct-slice-pie, .ct-series-e .ct-area {\r\n  fill: #7A9E9F; }\r\n.ct-series-f .ct-point, .ct-series-f .ct-line, .ct-series-f .ct-bar, .ct-series-f .ct-slice-donut {\r\n  stroke: rgba(104, 179, 200, 0.8); }\r\n.ct-series-f .ct-slice-pie, .ct-series-f .ct-area {\r\n  fill: rgba(104, 179, 200, 0.8); }\r\n.ct-series-g .ct-point, .ct-series-g .ct-line, .ct-series-g .ct-bar, .ct-series-g .ct-slice-donut {\r\n  stroke: rgba(122, 194, 154, 0.8); }\r\n.ct-series-g .ct-slice-pie, .ct-series-g .ct-area {\r\n  fill: rgba(122, 194, 154, 0.8); }\r\n.ct-series-h .ct-point, .ct-series-h .ct-line, .ct-series-h .ct-bar, .ct-series-h .ct-slice-donut {\r\n  stroke: rgba(243, 187, 69, 0.8); }\r\n.ct-series-h .ct-slice-pie, .ct-series-h .ct-area {\r\n  fill: rgba(243, 187, 69, 0.8); }\r\n.ct-series-i .ct-point, .ct-series-i .ct-line, .ct-series-i .ct-bar, .ct-series-i .ct-slice-donut {\r\n  stroke: rgba(235, 94, 40, 0.8); }\r\n.ct-series-i .ct-slice-pie, .ct-series-i .ct-area {\r\n  fill: rgba(235, 94, 40, 0.8); }\r\n.ct-series-j .ct-point, .ct-series-j .ct-line, .ct-series-j .ct-bar, .ct-series-j .ct-slice-donut {\r\n  stroke: rgba(122, 158, 159, 0.8); }\r\n.ct-series-j .ct-slice-pie, .ct-series-j .ct-area {\r\n  fill: rgba(122, 158, 159, 0.8); }\r\n.ct-series-k .ct-point, .ct-series-k .ct-line, .ct-series-k .ct-bar, .ct-series-k .ct-slice-donut {\r\n  stroke: rgba(104, 179, 200, 0.6); }\r\n.ct-series-k .ct-slice-pie, .ct-series-k .ct-area {\r\n  fill: rgba(104, 179, 200, 0.6); }\r\n.ct-series-l .ct-point, .ct-series-l .ct-line, .ct-series-l .ct-bar, .ct-series-l .ct-slice-donut {\r\n  stroke: rgba(122, 194, 154, 0.6); }\r\n.ct-series-l .ct-slice-pie, .ct-series-l .ct-area {\r\n  fill: rgba(122, 194, 154, 0.6); }\r\n.ct-series-m .ct-point, .ct-series-m .ct-line, .ct-series-m .ct-bar, .ct-series-m .ct-slice-donut {\r\n  stroke: rgba(243, 187, 69, 0.6); }\r\n.ct-series-m .ct-slice-pie, .ct-series-m .ct-area {\r\n  fill: rgba(243, 187, 69, 0.6); }\r\n.ct-series-n .ct-point, .ct-series-n .ct-line, .ct-series-n .ct-bar, .ct-series-n .ct-slice-donut {\r\n  stroke: rgba(235, 94, 40, 0.6); }\r\n.ct-series-n .ct-slice-pie, .ct-series-n .ct-area {\r\n  fill: rgba(235, 94, 40, 0.6); }\r\n.ct-series-o .ct-point, .ct-series-o .ct-line, .ct-series-o .ct-bar, .ct-series-o .ct-slice-donut {\r\n  stroke: rgba(122, 158, 159, 0.6); }\r\n.ct-series-o .ct-slice-pie, .ct-series-o .ct-area {\r\n  fill: rgba(122, 158, 159, 0.6); }\r\n.ct-square {\r\n  display: block;\r\n  position: relative;\r\n  width: 100%; }\r\n.ct-square:before {\r\n    display: block;\r\n    float: left;\r\n    content: \"\";\r\n    width: 0;\r\n    height: 0;\r\n    padding-bottom: 100%; }\r\n.ct-square:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both; }\r\n.ct-square > svg {\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0; }\r\n.ct-minor-second {\r\n  display: block;\r\n  position: relative;\r\n  width: 100%; }\r\n.ct-minor-second:before {\r\n    display: block;\r\n    float: left;\r\n    content: \"\";\r\n    width: 0;\r\n    height: 0;\r\n    padding-bottom: 93.75%; }\r\n.ct-minor-second:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both; }\r\n.ct-minor-second > svg {\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0; }\r\n.ct-major-second {\r\n  display: block;\r\n  position: relative;\r\n  width: 100%; }\r\n.ct-major-second:before {\r\n    display: block;\r\n    float: left;\r\n    content: \"\";\r\n    width: 0;\r\n    height: 0;\r\n    padding-bottom: 88.88889%; }\r\n.ct-major-second:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both; }\r\n.ct-major-second > svg {\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0; }\r\n.ct-minor-third {\r\n  display: block;\r\n  position: relative;\r\n  width: 100%; }\r\n.ct-minor-third:before {\r\n    display: block;\r\n    float: left;\r\n    content: \"\";\r\n    width: 0;\r\n    height: 0;\r\n    padding-bottom: 83.33333%; }\r\n.ct-minor-third:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both; }\r\n.ct-minor-third > svg {\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0; }\r\n.ct-major-third {\r\n  display: block;\r\n  position: relative;\r\n  width: 100%; }\r\n.ct-major-third:before {\r\n    display: block;\r\n    float: left;\r\n    content: \"\";\r\n    width: 0;\r\n    height: 0;\r\n    padding-bottom: 80%; }\r\n.ct-major-third:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both; }\r\n.ct-major-third > svg {\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0; }\r\n.ct-perfect-fourth {\r\n  display: block;\r\n  position: relative;\r\n  width: 100%; }\r\n.ct-perfect-fourth:before {\r\n    display: block;\r\n    float: left;\r\n    content: \"\";\r\n    width: 0;\r\n    height: 0;\r\n    padding-bottom: 75%; }\r\n.ct-perfect-fourth:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both; }\r\n.ct-perfect-fourth > svg {\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0; }\r\n.ct-perfect-fifth {\r\n  display: block;\r\n  position: relative;\r\n  width: 100%; }\r\n.ct-perfect-fifth:before {\r\n    display: block;\r\n    float: left;\r\n    content: \"\";\r\n    width: 0;\r\n    height: 0;\r\n    padding-bottom: 66.66667%; }\r\n.ct-perfect-fifth:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both; }\r\n.ct-perfect-fifth > svg {\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0; }\r\n.ct-minor-sixth {\r\n  display: block;\r\n  position: relative;\r\n  width: 100%; }\r\n.ct-minor-sixth:before {\r\n    display: block;\r\n    float: left;\r\n    content: \"\";\r\n    width: 0;\r\n    height: 0;\r\n    padding-bottom: 62.5%; }\r\n.ct-minor-sixth:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both; }\r\n.ct-minor-sixth > svg {\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0; }\r\n.ct-golden-section {\r\n  display: block;\r\n  position: relative;\r\n  width: 100%; }\r\n.ct-golden-section:before {\r\n    display: block;\r\n    float: left;\r\n    content: \"\";\r\n    width: 0;\r\n    height: 0;\r\n    padding-bottom: 61.8047%; }\r\n.ct-golden-section:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both; }\r\n.ct-golden-section > svg {\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0; }\r\n.ct-major-sixth {\r\n  display: block;\r\n  position: relative;\r\n  width: 100%; }\r\n.ct-major-sixth:before {\r\n    display: block;\r\n    float: left;\r\n    content: \"\";\r\n    width: 0;\r\n    height: 0;\r\n    padding-bottom: 60%; }\r\n.ct-major-sixth:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both; }\r\n.ct-major-sixth > svg {\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0; }\r\n.ct-minor-seventh {\r\n  display: block;\r\n  position: relative;\r\n  width: 100%; }\r\n.ct-minor-seventh:before {\r\n    display: block;\r\n    float: left;\r\n    content: \"\";\r\n    width: 0;\r\n    height: 0;\r\n    padding-bottom: 56.25%; }\r\n.ct-minor-seventh:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both; }\r\n.ct-minor-seventh > svg {\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0; }\r\n.ct-major-seventh {\r\n  display: block;\r\n  position: relative;\r\n  width: 100%; }\r\n.ct-major-seventh:before {\r\n    display: block;\r\n    float: left;\r\n    content: \"\";\r\n    width: 0;\r\n    height: 0;\r\n    padding-bottom: 53.33333%; }\r\n.ct-major-seventh:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both; }\r\n.ct-major-seventh > svg {\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0; }\r\n.ct-octave {\r\n  display: block;\r\n  position: relative;\r\n  width: 100%; }\r\n.ct-octave:before {\r\n    display: block;\r\n    float: left;\r\n    content: \"\";\r\n    width: 0;\r\n    height: 0;\r\n    padding-bottom: 50%; }\r\n.ct-octave:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both; }\r\n.ct-octave > svg {\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0; }\r\n.ct-major-tenth {\r\n  display: block;\r\n  position: relative;\r\n  width: 100%; }\r\n.ct-major-tenth:before {\r\n    display: block;\r\n    float: left;\r\n    content: \"\";\r\n    width: 0;\r\n    height: 0;\r\n    padding-bottom: 40%; }\r\n.ct-major-tenth:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both; }\r\n.ct-major-tenth > svg {\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0; }\r\n.ct-major-eleventh {\r\n  display: block;\r\n  position: relative;\r\n  width: 100%; }\r\n.ct-major-eleventh:before {\r\n    display: block;\r\n    float: left;\r\n    content: \"\";\r\n    width: 0;\r\n    height: 0;\r\n    padding-bottom: 37.5%; }\r\n.ct-major-eleventh:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both; }\r\n.ct-major-eleventh > svg {\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0; }\r\n.ct-major-twelfth {\r\n  display: block;\r\n  position: relative;\r\n  width: 100%; }\r\n.ct-major-twelfth:before {\r\n    display: block;\r\n    float: left;\r\n    content: \"\";\r\n    width: 0;\r\n    height: 0;\r\n    padding-bottom: 33.33333%; }\r\n.ct-major-twelfth:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both; }\r\n.ct-major-twelfth > svg {\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0; }\r\n.ct-double-octave {\r\n  display: block;\r\n  position: relative;\r\n  width: 100%; }\r\n.ct-double-octave:before {\r\n    display: block;\r\n    float: left;\r\n    content: \"\";\r\n    width: 0;\r\n    height: 0;\r\n    padding-bottom: 25%; }\r\n.ct-double-octave:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both; }\r\n.ct-double-octave > svg {\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0; }\r\n@media (min-width: 992px) {\r\n  .navbar {\r\n    min-height: 75px; }\r\n\r\n  .navbar-form {\r\n    margin-top: 21px;\r\n    margin-bottom: 21px;\r\n    padding-left: 5px;\r\n    padding-right: 5px; }\r\n\r\n  .navbar-search-form {\r\n    display: none; }\r\n\r\n  .navbar-nav > li > .dropdown-menu,\r\n  .dropdown .dropdown-menu {\r\n    -webkit-transform: translate3d(0px, -40px, 0px);\r\n            transform: translate3d(0px, -40px, 0px);\r\n    transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1) 0s, opacity 0.3s ease 0s, height 0s linear 0.35s; }\r\n\r\n  .navbar-nav > li.open > .dropdown-menu, .dropdown.open .dropdown-menu {\r\n    -webkit-transform: translate3d(0px, 0px, 0px);\r\n            transform: translate3d(0px, 0px, 0px); }\r\n\r\n  .navbar-nav > li > .dropdown-menu:before {\r\n    border-bottom: 11px solid #F1EAE0;\r\n    border-left: 11px solid transparent;\r\n    border-right: 11px solid transparent;\r\n    content: \"\";\r\n    display: inline-block;\r\n    position: absolute;\r\n    right: 12px;\r\n    top: -11px; }\r\n\r\n  .navbar-nav > li > .dropdown-menu:after {\r\n    border-bottom: 11px solid #FFFCF5;\r\n    border-left: 11px solid transparent;\r\n    border-right: 11px solid transparent;\r\n    content: \"\";\r\n    display: inline-block;\r\n    position: absolute;\r\n    right: 12px;\r\n    top: -10px; }\r\n\r\n  .navbar-nav.navbar-left > li > .dropdown-menu:before {\r\n    right: auto;\r\n    left: 12px; }\r\n\r\n  .navbar-nav.navbar-left > li > .dropdown-menu:after {\r\n    right: auto;\r\n    left: 12px; }\r\n\r\n  .navbar .navbar-header {\r\n    margin-left: 10px; }\r\n\r\n  .footer:not(.footer-big) nav > ul li:first-child {\r\n    margin-left: 0; }\r\n\r\n  body > .navbar-collapse.collapse {\r\n    display: none !important; }\r\n\r\n  .card form [class*=\"col-\"] {\r\n    padding: 6px; }\r\n  .card form [class*=\"col-\"]:first-child {\r\n    padding-left: 15px; }\r\n  .card form [class*=\"col-\"]:last-child {\r\n    padding-right: 15px; } }\r\n/*          Changes for small display      */\r\n@media (max-width: 991px) {\r\n  .sidebar {\r\n    display: none; }\r\n\r\n  .main-panel {\r\n    width: 100%; }\r\n\r\n  .navbar-transparent {\r\n    padding-top: 15px;\r\n    background-color: rgba(0, 0, 0, 0.45); }\r\n\r\n  body {\r\n    position: relative; }\r\n\r\n  h6 {\r\n    font-size: 1em; }\r\n\r\n  .wrapper {\r\n    -webkit-transform: translate3d(0px, 0, 0);\r\n    transform: translate3d(0px, 0, 0);\r\n    transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1);\r\n    left: 0;\r\n    background-color: white; }\r\n\r\n  .navbar .container {\r\n    left: 0;\r\n    width: 100%;\r\n    transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1);\r\n    position: relative; }\r\n\r\n  .navbar .navbar-collapse.collapse,\r\n  .navbar .navbar-collapse.collapse.in,\r\n  .navbar .navbar-collapse.collapsing {\r\n    display: none !important; }\r\n\r\n  .navbar-nav > li {\r\n    float: none;\r\n    position: relative;\r\n    display: block; }\r\n\r\n  .off-canvas-sidebar {\r\n    position: fixed;\r\n    display: block;\r\n    top: 0;\r\n    height: 100%;\r\n    width: 230px;\r\n    right: 0;\r\n    z-index: 1032;\r\n    visibility: visible;\r\n    background-color: #999;\r\n    overflow-y: visible;\r\n    border-top: none;\r\n    text-align: left;\r\n    padding-right: 0px;\r\n    padding-left: 0;\r\n    -webkit-transform: translate3d(230px, 0, 0);\r\n    transform: translate3d(230px, 0, 0);\r\n    transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1); }\r\n    .off-canvas-sidebar .sidebar-wrapper {\r\n      position: relative;\r\n      z-index: 3;\r\n      overflow-y: scroll;\r\n      height: 100%;\r\n      box-shadow: inset 1px 0px 0px 0px #DDDDDD; }\r\n    .off-canvas-sidebar .nav {\r\n      margin-top: 0;\r\n      padding: 10px 15px 0; }\r\n      .off-canvas-sidebar .nav > li > a {\r\n        margin: 0px 0px;\r\n        color: #66615B;\r\n        text-transform: uppercase;\r\n        font-weight: 600;\r\n        font-size: 12px;\r\n        line-height: 1.4em;\r\n        padding: 10px 0; }\r\n        .off-canvas-sidebar .nav > li > a:hover, .off-canvas-sidebar .nav > li > a.active {\r\n          color: #403D39; }\r\n        .off-canvas-sidebar .nav > li > a p,\r\n        .off-canvas-sidebar .nav > li > a .notification,\r\n        .off-canvas-sidebar .nav > li > a .caret {\r\n          display: inline-block; }\r\n        .off-canvas-sidebar .nav > li > a .caret {\r\n          float: right;\r\n          position: relative;\r\n          top: 12px; }\r\n        .off-canvas-sidebar .nav > li > a i {\r\n          font-size: 18px;\r\n          margin-right: 10px;\r\n          line-height: 26px; }\r\n      .off-canvas-sidebar .nav > li.active > a:before {\r\n        border-right: none;\r\n        border-left: 12px solid #DDDDDD;\r\n        border-top: 12px solid transparent;\r\n        border-bottom: 12px solid transparent;\r\n        right: auto;\r\n        margin-left: -15px;\r\n        left: 0px;\r\n        top: 10px; }\r\n      .off-canvas-sidebar .nav > li.active > a:after {\r\n        border-right: none;\r\n        border-left: 12px solid #f4f3ef;\r\n        border-top: 12px solid transparent;\r\n        border-bottom: 12px solid transparent;\r\n        right: auto;\r\n        margin-left: -15px;\r\n        left: -1px;\r\n        top: 10px; }\r\n    .off-canvas-sidebar::after {\r\n      top: 0;\r\n      left: 0;\r\n      height: 100%;\r\n      width: 100%;\r\n      position: absolute;\r\n      background-color: #f4f3ef;\r\n      background-image: linear-gradient(to bottom, transparent 0%, rgba(112, 112, 112, 0) 60%, rgba(186, 186, 186, 0.15) 100%);\r\n      display: block;\r\n      content: \"\";\r\n      z-index: 1; }\r\n    .off-canvas-sidebar.has-image::after {\r\n      top: 0;\r\n      left: 0;\r\n      height: 100%;\r\n      width: 100%;\r\n      position: absolute;\r\n      background-color: rgba(17, 17, 17, 0.8);\r\n      display: block;\r\n      content: \"\";\r\n      z-index: 1; }\r\n    .off-canvas-sidebar .logo {\r\n      position: relative;\r\n      z-index: 4;\r\n      padding-top: 11px;\r\n      padding-bottom: 11px; }\r\n    .off-canvas-sidebar .divider {\r\n      height: 1px;\r\n      margin: 10px 0; }\r\n\r\n  .nav-open .navbar-collapse {\r\n    -webkit-transform: translate3d(0px, 0, 0);\r\n    transform: translate3d(0px, 0, 0); }\r\n\r\n  .nav-open .navbar .container {\r\n    left: -230px; }\r\n\r\n  .nav-open .wrapper {\r\n    left: 0;\r\n    -webkit-transform: translate3d(-230px, 0, 0);\r\n    transform: translate3d(-230px, 0, 0); }\r\n\r\n  .navbar-toggle .icon-bar {\r\n    display: block;\r\n    position: relative;\r\n    background: #fff;\r\n    width: 24px;\r\n    height: 2px;\r\n    border-radius: 1px;\r\n    margin: 0 auto; }\r\n\r\n  .navbar-header .navbar-toggle {\r\n    margin: 10px 15px 10px 0;\r\n    width: 40px;\r\n    height: 40px; }\r\n\r\n  .bar1,\r\n  .bar2,\r\n  .bar3 {\r\n    outline: 1px solid transparent; }\r\n\r\n  .bar1 {\r\n    top: 0px;\r\n    -webkit-animation: topbar-back 500ms linear 0s;\r\n    animation: topbar-back 500ms 0s;\r\n    -webkit-animation-fill-mode: forwards;\r\n    animation-fill-mode: forwards; }\r\n\r\n  .bar2 {\r\n    opacity: 1; }\r\n\r\n  .bar3 {\r\n    bottom: 0px;\r\n    -webkit-animation: bottombar-back 500ms linear 0s;\r\n    animation: bottombar-back 500ms 0s;\r\n    -webkit-animation-fill-mode: forwards;\r\n    animation-fill-mode: forwards; }\r\n\r\n  .toggled .bar1 {\r\n    top: 6px;\r\n    -webkit-animation: topbar-x 500ms linear 0s;\r\n    animation: topbar-x 500ms 0s;\r\n    -webkit-animation-fill-mode: forwards;\r\n    animation-fill-mode: forwards; }\r\n\r\n  .toggled .bar2 {\r\n    opacity: 0; }\r\n\r\n  .toggled .bar3 {\r\n    bottom: 6px;\r\n    -webkit-animation: bottombar-x 500ms linear 0s;\r\n    animation: bottombar-x 500ms 0s;\r\n    -webkit-animation-fill-mode: forwards;\r\n    animation-fill-mode: forwards; }\r\n\r\n  @keyframes topbar-x {\r\n    0% {\r\n      top: 0px;\r\n      -webkit-transform: rotate(0deg);\r\n              transform: rotate(0deg); }\r\n    45% {\r\n      top: 6px;\r\n      -webkit-transform: rotate(145deg);\r\n              transform: rotate(145deg); }\r\n    75% {\r\n      -webkit-transform: rotate(130deg);\r\n              transform: rotate(130deg); }\r\n    100% {\r\n      -webkit-transform: rotate(135deg);\r\n              transform: rotate(135deg); } }\r\n  @-webkit-keyframes topbar-x {\r\n    0% {\r\n      top: 0px;\r\n      -webkit-transform: rotate(0deg); }\r\n    45% {\r\n      top: 6px;\r\n      -webkit-transform: rotate(145deg); }\r\n    75% {\r\n      -webkit-transform: rotate(130deg); }\r\n    100% {\r\n      -webkit-transform: rotate(135deg); } }\r\n  @keyframes topbar-back {\r\n    0% {\r\n      top: 6px;\r\n      -webkit-transform: rotate(135deg);\r\n              transform: rotate(135deg); }\r\n    45% {\r\n      -webkit-transform: rotate(-10deg);\r\n              transform: rotate(-10deg); }\r\n    75% {\r\n      -webkit-transform: rotate(5deg);\r\n              transform: rotate(5deg); }\r\n    100% {\r\n      top: 0px;\r\n      -webkit-transform: rotate(0);\r\n              transform: rotate(0); } }\r\n  @-webkit-keyframes topbar-back {\r\n    0% {\r\n      top: 6px;\r\n      -webkit-transform: rotate(135deg); }\r\n    45% {\r\n      -webkit-transform: rotate(-10deg); }\r\n    75% {\r\n      -webkit-transform: rotate(5deg); }\r\n    100% {\r\n      top: 0px;\r\n      -webkit-transform: rotate(0); } }\r\n  @keyframes bottombar-x {\r\n    0% {\r\n      bottom: 0px;\r\n      -webkit-transform: rotate(0deg);\r\n              transform: rotate(0deg); }\r\n    45% {\r\n      bottom: 6px;\r\n      -webkit-transform: rotate(-145deg);\r\n              transform: rotate(-145deg); }\r\n    75% {\r\n      -webkit-transform: rotate(-130deg);\r\n              transform: rotate(-130deg); }\r\n    100% {\r\n      -webkit-transform: rotate(-135deg);\r\n              transform: rotate(-135deg); } }\r\n  @-webkit-keyframes bottombar-x {\r\n    0% {\r\n      bottom: 0px;\r\n      -webkit-transform: rotate(0deg); }\r\n    45% {\r\n      bottom: 6px;\r\n      -webkit-transform: rotate(-145deg); }\r\n    75% {\r\n      -webkit-transform: rotate(-130deg); }\r\n    100% {\r\n      -webkit-transform: rotate(-135deg); } }\r\n  @keyframes bottombar-back {\r\n    0% {\r\n      bottom: 6px;\r\n      -webkit-transform: rotate(-135deg);\r\n              transform: rotate(-135deg); }\r\n    45% {\r\n      -webkit-transform: rotate(10deg);\r\n              transform: rotate(10deg); }\r\n    75% {\r\n      -webkit-transform: rotate(-5deg);\r\n              transform: rotate(-5deg); }\r\n    100% {\r\n      bottom: 0px;\r\n      -webkit-transform: rotate(0);\r\n              transform: rotate(0); } }\r\n  @-webkit-keyframes bottombar-back {\r\n    0% {\r\n      bottom: 6px;\r\n      -webkit-transform: rotate(-135deg); }\r\n    45% {\r\n      -webkit-transform: rotate(10deg); }\r\n    75% {\r\n      -webkit-transform: rotate(-5deg); }\r\n    100% {\r\n      bottom: 0px;\r\n      -webkit-transform: rotate(0); } }\r\n  @-webkit-keyframes fadeIn {\r\n    0% {\r\n      opacity: 0; }\r\n    100% {\r\n      opacity: 1; } }\r\n  @keyframes fadeIn {\r\n    0% {\r\n      opacity: 0; }\r\n    100% {\r\n      opacity: 1; } }\r\n  .dropdown-menu .divider {\r\n    background-color: rgba(229, 229, 229, 0.15); }\r\n\r\n  .navbar-nav {\r\n    margin: 1px 0; }\r\n\r\n  .dropdown-menu {\r\n    display: none; }\r\n    .dropdown-menu > li > a:hover, .dropdown-menu > li > a:focus {\r\n      background-color: transparent; }\r\n\r\n  .navbar-fixed-top {\r\n    -webkit-backface-visibility: hidden; }\r\n\r\n  #bodyClick {\r\n    height: 100%;\r\n    width: 100%;\r\n    position: fixed;\r\n    opacity: 0;\r\n    top: 0;\r\n    left: auto;\r\n    right: 230px;\r\n    content: \"\";\r\n    z-index: 9999;\r\n    overflow-x: hidden; }\r\n\r\n  .form-control + .form-control-feedback {\r\n    margin-top: -8px; }\r\n\r\n  .navbar-toggle:hover, .navbar-toggle:focus {\r\n    background-color: transparent !important; }\r\n\r\n  .btn.dropdown-toggle {\r\n    margin-bottom: 0; }\r\n\r\n  .media-post .author {\r\n    width: 20%;\r\n    float: none !important;\r\n    display: block;\r\n    margin: 0 auto 10px; }\r\n\r\n  .media-post .media-body {\r\n    width: 100%; }\r\n\r\n  .navbar-collapse.collapse {\r\n    height: 100% !important; }\r\n\r\n  .navbar-collapse.collapse.in {\r\n    display: block; }\r\n\r\n  .navbar-header .collapse, .navbar-toggle {\r\n    display: block !important; }\r\n\r\n  .navbar-header {\r\n    float: none; }\r\n\r\n  .navbar-nav .open .dropdown-menu {\r\n    position: static;\r\n    float: none;\r\n    width: auto;\r\n    margin-top: 0;\r\n    background-color: transparent;\r\n    border: 0;\r\n    box-shadow: none; }\r\n\r\n  .main-panel > .content {\r\n    padding-left: 0;\r\n    padding-right: 0; }\r\n\r\n  .nav .open > a, .nav .open > a:focus, .nav .open > a:hover {\r\n    background-color: transparent; }\r\n\r\n  .footer .copyright {\r\n    padding: 0px 15px;\r\n    width: 100%; } }\r\n@media (min-width: 992px) {\r\n  .table-full-width {\r\n    margin-left: -15px;\r\n    margin-right: -15px; }\r\n\r\n  .table-responsive {\r\n    overflow: visible; } }\r\n@media (max-width: 991px) {\r\n  .table-responsive {\r\n    width: 100%;\r\n    margin-bottom: 15px;\r\n    border: 1px solid #dddddd;\r\n    overflow-x: scroll;\r\n    overflow-y: hidden;\r\n    -ms-overflow-style: -ms-autohiding-scrollbar;\r\n    -webkit-overflow-scrolling: touch; } }\r\n@font-face {\r\n\tfont-family: 'themify';\r\n\tsrc:url('/assets/fonts/themify.eot?-fvbane');\r\n\tsrc:url('/assets/fonts/themify.eot?#iefix-fvbane') format('embedded-opentype'),\r\n\t\turl('/assets/fonts/themify.woff?-fvbane') format('woff'),\r\n\t\turl('/assets/fonts/themify.ttf?-fvbane') format('truetype'),\r\n\t\turl('/assets/fonts/themify.svg?-fvbane#themify') format('svg');\r\n\tfont-weight: normal;\r\n\tfont-style: normal;\r\n}\r\n[class^=\"ti-\"], [class*=\" ti-\"] {\r\n\tfont-family: 'themify';\r\n\tspeak: none;\r\n\tfont-style: normal;\r\n\tfont-weight: bold;\r\n\tfont-variant: normal;\r\n\ttext-transform: none;\r\n\tline-height: 1.42857;\r\n\r\n\t/* Better Font Rendering =========== */\r\n\t-webkit-font-smoothing: antialiased;\r\n\t-moz-osx-font-smoothing: grayscale;\r\n}\r\n.ti-wand:before {\r\n\tcontent: \"\\e600\";\r\n}\r\n.ti-volume:before {\r\n\tcontent: \"\\e601\";\r\n}\r\n.ti-user:before {\r\n\tcontent: \"\\e602\";\r\n}\r\n.ti-unlock:before {\r\n\tcontent: \"\\e603\";\r\n}\r\n.ti-unlink:before {\r\n\tcontent: \"\\e604\";\r\n}\r\n.ti-trash:before {\r\n\tcontent: \"\\e605\";\r\n}\r\n.ti-thought:before {\r\n\tcontent: \"\\e606\";\r\n}\r\n.ti-target:before {\r\n\tcontent: \"\\e607\";\r\n}\r\n.ti-tag:before {\r\n\tcontent: \"\\e608\";\r\n}\r\n.ti-tablet:before {\r\n\tcontent: \"\\e609\";\r\n}\r\n.ti-star:before {\r\n\tcontent: \"\\e60a\";\r\n}\r\n.ti-spray:before {\r\n\tcontent: \"\\e60b\";\r\n}\r\n.ti-signal:before {\r\n\tcontent: \"\\e60c\";\r\n}\r\n.ti-shopping-cart:before {\r\n\tcontent: \"\\e60d\";\r\n}\r\n.ti-shopping-cart-full:before {\r\n\tcontent: \"\\e60e\";\r\n}\r\n.ti-settings:before {\r\n\tcontent: \"\\e60f\";\r\n}\r\n.ti-search:before {\r\n\tcontent: \"\\e610\";\r\n}\r\n.ti-zoom-in:before {\r\n\tcontent: \"\\e611\";\r\n}\r\n.ti-zoom-out:before {\r\n\tcontent: \"\\e612\";\r\n}\r\n.ti-cut:before {\r\n\tcontent: \"\\e613\";\r\n}\r\n.ti-ruler:before {\r\n\tcontent: \"\\e614\";\r\n}\r\n.ti-ruler-pencil:before {\r\n\tcontent: \"\\e615\";\r\n}\r\n.ti-ruler-alt:before {\r\n\tcontent: \"\\e616\";\r\n}\r\n.ti-bookmark:before {\r\n\tcontent: \"\\e617\";\r\n}\r\n.ti-bookmark-alt:before {\r\n\tcontent: \"\\e618\";\r\n}\r\n.ti-reload:before {\r\n\tcontent: \"\\e619\";\r\n}\r\n.ti-plus:before {\r\n\tcontent: \"\\e61a\";\r\n}\r\n.ti-pin:before {\r\n\tcontent: \"\\e61b\";\r\n}\r\n.ti-pencil:before {\r\n\tcontent: \"\\e61c\";\r\n}\r\n.ti-pencil-alt:before {\r\n\tcontent: \"\\e61d\";\r\n}\r\n.ti-paint-roller:before {\r\n\tcontent: \"\\e61e\";\r\n}\r\n.ti-paint-bucket:before {\r\n\tcontent: \"\\e61f\";\r\n}\r\n.ti-na:before {\r\n\tcontent: \"\\e620\";\r\n}\r\n.ti-mobile:before {\r\n\tcontent: \"\\e621\";\r\n}\r\n.ti-minus:before {\r\n\tcontent: \"\\e622\";\r\n}\r\n.ti-medall:before {\r\n\tcontent: \"\\e623\";\r\n}\r\n.ti-medall-alt:before {\r\n\tcontent: \"\\e624\";\r\n}\r\n.ti-marker:before {\r\n\tcontent: \"\\e625\";\r\n}\r\n.ti-marker-alt:before {\r\n\tcontent: \"\\e626\";\r\n}\r\n.ti-arrow-up:before {\r\n\tcontent: \"\\e627\";\r\n}\r\n.ti-arrow-right:before {\r\n\tcontent: \"\\e628\";\r\n}\r\n.ti-arrow-left:before {\r\n\tcontent: \"\\e629\";\r\n}\r\n.ti-arrow-down:before {\r\n\tcontent: \"\\e62a\";\r\n}\r\n.ti-lock:before {\r\n\tcontent: \"\\e62b\";\r\n}\r\n.ti-location-arrow:before {\r\n\tcontent: \"\\e62c\";\r\n}\r\n.ti-link:before {\r\n\tcontent: \"\\e62d\";\r\n}\r\n.ti-layout:before {\r\n\tcontent: \"\\e62e\";\r\n}\r\n.ti-layers:before {\r\n\tcontent: \"\\e62f\";\r\n}\r\n.ti-layers-alt:before {\r\n\tcontent: \"\\e630\";\r\n}\r\n.ti-key:before {\r\n\tcontent: \"\\e631\";\r\n}\r\n.ti-import:before {\r\n\tcontent: \"\\e632\";\r\n}\r\n.ti-image:before {\r\n\tcontent: \"\\e633\";\r\n}\r\n.ti-heart:before {\r\n\tcontent: \"\\e634\";\r\n}\r\n.ti-heart-broken:before {\r\n\tcontent: \"\\e635\";\r\n}\r\n.ti-hand-stop:before {\r\n\tcontent: \"\\e636\";\r\n}\r\n.ti-hand-open:before {\r\n\tcontent: \"\\e637\";\r\n}\r\n.ti-hand-drag:before {\r\n\tcontent: \"\\e638\";\r\n}\r\n.ti-folder:before {\r\n\tcontent: \"\\e639\";\r\n}\r\n.ti-flag:before {\r\n\tcontent: \"\\e63a\";\r\n}\r\n.ti-flag-alt:before {\r\n\tcontent: \"\\e63b\";\r\n}\r\n.ti-flag-alt-2:before {\r\n\tcontent: \"\\e63c\";\r\n}\r\n.ti-eye:before {\r\n\tcontent: \"\\e63d\";\r\n}\r\n.ti-export:before {\r\n\tcontent: \"\\e63e\";\r\n}\r\n.ti-exchange-vertical:before {\r\n\tcontent: \"\\e63f\";\r\n}\r\n.ti-desktop:before {\r\n\tcontent: \"\\e640\";\r\n}\r\n.ti-cup:before {\r\n\tcontent: \"\\e641\";\r\n}\r\n.ti-crown:before {\r\n\tcontent: \"\\e642\";\r\n}\r\n.ti-comments:before {\r\n\tcontent: \"\\e643\";\r\n}\r\n.ti-comment:before {\r\n\tcontent: \"\\e644\";\r\n}\r\n.ti-comment-alt:before {\r\n\tcontent: \"\\e645\";\r\n}\r\n.ti-close:before {\r\n\tcontent: \"\\e646\";\r\n}\r\n.ti-clip:before {\r\n\tcontent: \"\\e647\";\r\n}\r\n.ti-angle-up:before {\r\n\tcontent: \"\\e648\";\r\n}\r\n.ti-angle-right:before {\r\n\tcontent: \"\\e649\";\r\n}\r\n.ti-angle-left:before {\r\n\tcontent: \"\\e64a\";\r\n}\r\n.ti-angle-down:before {\r\n\tcontent: \"\\e64b\";\r\n}\r\n.ti-check:before {\r\n\tcontent: \"\\e64c\";\r\n}\r\n.ti-check-box:before {\r\n\tcontent: \"\\e64d\";\r\n}\r\n.ti-camera:before {\r\n\tcontent: \"\\e64e\";\r\n}\r\n.ti-announcement:before {\r\n\tcontent: \"\\e64f\";\r\n}\r\n.ti-brush:before {\r\n\tcontent: \"\\e650\";\r\n}\r\n.ti-briefcase:before {\r\n\tcontent: \"\\e651\";\r\n}\r\n.ti-bolt:before {\r\n\tcontent: \"\\e652\";\r\n}\r\n.ti-bolt-alt:before {\r\n\tcontent: \"\\e653\";\r\n}\r\n.ti-blackboard:before {\r\n\tcontent: \"\\e654\";\r\n}\r\n.ti-bag:before {\r\n\tcontent: \"\\e655\";\r\n}\r\n.ti-move:before {\r\n\tcontent: \"\\e656\";\r\n}\r\n.ti-arrows-vertical:before {\r\n\tcontent: \"\\e657\";\r\n}\r\n.ti-arrows-horizontal:before {\r\n\tcontent: \"\\e658\";\r\n}\r\n.ti-fullscreen:before {\r\n\tcontent: \"\\e659\";\r\n}\r\n.ti-arrow-top-right:before {\r\n\tcontent: \"\\e65a\";\r\n}\r\n.ti-arrow-top-left:before {\r\n\tcontent: \"\\e65b\";\r\n}\r\n.ti-arrow-circle-up:before {\r\n\tcontent: \"\\e65c\";\r\n}\r\n.ti-arrow-circle-right:before {\r\n\tcontent: \"\\e65d\";\r\n}\r\n.ti-arrow-circle-left:before {\r\n\tcontent: \"\\e65e\";\r\n}\r\n.ti-arrow-circle-down:before {\r\n\tcontent: \"\\e65f\";\r\n}\r\n.ti-angle-double-up:before {\r\n\tcontent: \"\\e660\";\r\n}\r\n.ti-angle-double-right:before {\r\n\tcontent: \"\\e661\";\r\n}\r\n.ti-angle-double-left:before {\r\n\tcontent: \"\\e662\";\r\n}\r\n.ti-angle-double-down:before {\r\n\tcontent: \"\\e663\";\r\n}\r\n.ti-zip:before {\r\n\tcontent: \"\\e664\";\r\n}\r\n.ti-world:before {\r\n\tcontent: \"\\e665\";\r\n}\r\n.ti-wheelchair:before {\r\n\tcontent: \"\\e666\";\r\n}\r\n.ti-view-list:before {\r\n\tcontent: \"\\e667\";\r\n}\r\n.ti-view-list-alt:before {\r\n\tcontent: \"\\e668\";\r\n}\r\n.ti-view-grid:before {\r\n\tcontent: \"\\e669\";\r\n}\r\n.ti-uppercase:before {\r\n\tcontent: \"\\e66a\";\r\n}\r\n.ti-upload:before {\r\n\tcontent: \"\\e66b\";\r\n}\r\n.ti-underline:before {\r\n\tcontent: \"\\e66c\";\r\n}\r\n.ti-truck:before {\r\n\tcontent: \"\\e66d\";\r\n}\r\n.ti-timer:before {\r\n\tcontent: \"\\e66e\";\r\n}\r\n.ti-ticket:before {\r\n\tcontent: \"\\e66f\";\r\n}\r\n.ti-thumb-up:before {\r\n\tcontent: \"\\e670\";\r\n}\r\n.ti-thumb-down:before {\r\n\tcontent: \"\\e671\";\r\n}\r\n.ti-text:before {\r\n\tcontent: \"\\e672\";\r\n}\r\n.ti-stats-up:before {\r\n\tcontent: \"\\e673\";\r\n}\r\n.ti-stats-down:before {\r\n\tcontent: \"\\e674\";\r\n}\r\n.ti-split-v:before {\r\n\tcontent: \"\\e675\";\r\n}\r\n.ti-split-h:before {\r\n\tcontent: \"\\e676\";\r\n}\r\n.ti-smallcap:before {\r\n\tcontent: \"\\e677\";\r\n}\r\n.ti-shine:before {\r\n\tcontent: \"\\e678\";\r\n}\r\n.ti-shift-right:before {\r\n\tcontent: \"\\e679\";\r\n}\r\n.ti-shift-left:before {\r\n\tcontent: \"\\e67a\";\r\n}\r\n.ti-shield:before {\r\n\tcontent: \"\\e67b\";\r\n}\r\n.ti-notepad:before {\r\n\tcontent: \"\\e67c\";\r\n}\r\n.ti-server:before {\r\n\tcontent: \"\\e67d\";\r\n}\r\n.ti-quote-right:before {\r\n\tcontent: \"\\e67e\";\r\n}\r\n.ti-quote-left:before {\r\n\tcontent: \"\\e67f\";\r\n}\r\n.ti-pulse:before {\r\n\tcontent: \"\\e680\";\r\n}\r\n.ti-printer:before {\r\n\tcontent: \"\\e681\";\r\n}\r\n.ti-power-off:before {\r\n\tcontent: \"\\e682\";\r\n}\r\n.ti-plug:before {\r\n\tcontent: \"\\e683\";\r\n}\r\n.ti-pie-chart:before {\r\n\tcontent: \"\\e684\";\r\n}\r\n.ti-paragraph:before {\r\n\tcontent: \"\\e685\";\r\n}\r\n.ti-panel:before {\r\n\tcontent: \"\\e686\";\r\n}\r\n.ti-package:before {\r\n\tcontent: \"\\e687\";\r\n}\r\n.ti-music:before {\r\n\tcontent: \"\\e688\";\r\n}\r\n.ti-music-alt:before {\r\n\tcontent: \"\\e689\";\r\n}\r\n.ti-mouse:before {\r\n\tcontent: \"\\e68a\";\r\n}\r\n.ti-mouse-alt:before {\r\n\tcontent: \"\\e68b\";\r\n}\r\n.ti-money:before {\r\n\tcontent: \"\\e68c\";\r\n}\r\n.ti-microphone:before {\r\n\tcontent: \"\\e68d\";\r\n}\r\n.ti-menu:before {\r\n\tcontent: \"\\e68e\";\r\n}\r\n.ti-menu-alt:before {\r\n\tcontent: \"\\e68f\";\r\n}\r\n.ti-map:before {\r\n\tcontent: \"\\e690\";\r\n}\r\n.ti-map-alt:before {\r\n\tcontent: \"\\e691\";\r\n}\r\n.ti-loop:before {\r\n\tcontent: \"\\e692\";\r\n}\r\n.ti-location-pin:before {\r\n\tcontent: \"\\e693\";\r\n}\r\n.ti-list:before {\r\n\tcontent: \"\\e694\";\r\n}\r\n.ti-light-bulb:before {\r\n\tcontent: \"\\e695\";\r\n}\r\n.ti-Italic:before {\r\n\tcontent: \"\\e696\";\r\n}\r\n.ti-info:before {\r\n\tcontent: \"\\e697\";\r\n}\r\n.ti-infinite:before {\r\n\tcontent: \"\\e698\";\r\n}\r\n.ti-id-badge:before {\r\n\tcontent: \"\\e699\";\r\n}\r\n.ti-hummer:before {\r\n\tcontent: \"\\e69a\";\r\n}\r\n.ti-home:before {\r\n\tcontent: \"\\e69b\";\r\n}\r\n.ti-help:before {\r\n\tcontent: \"\\e69c\";\r\n}\r\n.ti-headphone:before {\r\n\tcontent: \"\\e69d\";\r\n}\r\n.ti-harddrives:before {\r\n\tcontent: \"\\e69e\";\r\n}\r\n.ti-harddrive:before {\r\n\tcontent: \"\\e69f\";\r\n}\r\n.ti-gift:before {\r\n\tcontent: \"\\e6a0\";\r\n}\r\n.ti-game:before {\r\n\tcontent: \"\\e6a1\";\r\n}\r\n.ti-filter:before {\r\n\tcontent: \"\\e6a2\";\r\n}\r\n.ti-files:before {\r\n\tcontent: \"\\e6a3\";\r\n}\r\n.ti-file:before {\r\n\tcontent: \"\\e6a4\";\r\n}\r\n.ti-eraser:before {\r\n\tcontent: \"\\e6a5\";\r\n}\r\n.ti-envelope:before {\r\n\tcontent: \"\\e6a6\";\r\n}\r\n.ti-download:before {\r\n\tcontent: \"\\e6a7\";\r\n}\r\n.ti-direction:before {\r\n\tcontent: \"\\e6a8\";\r\n}\r\n.ti-direction-alt:before {\r\n\tcontent: \"\\e6a9\";\r\n}\r\n.ti-dashboard:before {\r\n\tcontent: \"\\e6aa\";\r\n}\r\n.ti-control-stop:before {\r\n\tcontent: \"\\e6ab\";\r\n}\r\n.ti-control-shuffle:before {\r\n\tcontent: \"\\e6ac\";\r\n}\r\n.ti-control-play:before {\r\n\tcontent: \"\\e6ad\";\r\n}\r\n.ti-control-pause:before {\r\n\tcontent: \"\\e6ae\";\r\n}\r\n.ti-control-forward:before {\r\n\tcontent: \"\\e6af\";\r\n}\r\n.ti-control-backward:before {\r\n\tcontent: \"\\e6b0\";\r\n}\r\n.ti-cloud:before {\r\n\tcontent: \"\\e6b1\";\r\n}\r\n.ti-cloud-up:before {\r\n\tcontent: \"\\e6b2\";\r\n}\r\n.ti-cloud-down:before {\r\n\tcontent: \"\\e6b3\";\r\n}\r\n.ti-clipboard:before {\r\n\tcontent: \"\\e6b4\";\r\n}\r\n.ti-car:before {\r\n\tcontent: \"\\e6b5\";\r\n}\r\n.ti-calendar:before {\r\n\tcontent: \"\\e6b6\";\r\n}\r\n.ti-book:before {\r\n\tcontent: \"\\e6b7\";\r\n}\r\n.ti-bell:before {\r\n\tcontent: \"\\e6b8\";\r\n}\r\n.ti-basketball:before {\r\n\tcontent: \"\\e6b9\";\r\n}\r\n.ti-bar-chart:before {\r\n\tcontent: \"\\e6ba\";\r\n}\r\n.ti-bar-chart-alt:before {\r\n\tcontent: \"\\e6bb\";\r\n}\r\n.ti-back-right:before {\r\n\tcontent: \"\\e6bc\";\r\n}\r\n.ti-back-left:before {\r\n\tcontent: \"\\e6bd\";\r\n}\r\n.ti-arrows-corner:before {\r\n\tcontent: \"\\e6be\";\r\n}\r\n.ti-archive:before {\r\n\tcontent: \"\\e6bf\";\r\n}\r\n.ti-anchor:before {\r\n\tcontent: \"\\e6c0\";\r\n}\r\n.ti-align-right:before {\r\n\tcontent: \"\\e6c1\";\r\n}\r\n.ti-align-left:before {\r\n\tcontent: \"\\e6c2\";\r\n}\r\n.ti-align-justify:before {\r\n\tcontent: \"\\e6c3\";\r\n}\r\n.ti-align-center:before {\r\n\tcontent: \"\\e6c4\";\r\n}\r\n.ti-alert:before {\r\n\tcontent: \"\\e6c5\";\r\n}\r\n.ti-alarm-clock:before {\r\n\tcontent: \"\\e6c6\";\r\n}\r\n.ti-agenda:before {\r\n\tcontent: \"\\e6c7\";\r\n}\r\n.ti-write:before {\r\n\tcontent: \"\\e6c8\";\r\n}\r\n.ti-window:before {\r\n\tcontent: \"\\e6c9\";\r\n}\r\n.ti-widgetized:before {\r\n\tcontent: \"\\e6ca\";\r\n}\r\n.ti-widget:before {\r\n\tcontent: \"\\e6cb\";\r\n}\r\n.ti-widget-alt:before {\r\n\tcontent: \"\\e6cc\";\r\n}\r\n.ti-wallet:before {\r\n\tcontent: \"\\e6cd\";\r\n}\r\n.ti-video-clapper:before {\r\n\tcontent: \"\\e6ce\";\r\n}\r\n.ti-video-camera:before {\r\n\tcontent: \"\\e6cf\";\r\n}\r\n.ti-vector:before {\r\n\tcontent: \"\\e6d0\";\r\n}\r\n.ti-themify-logo:before {\r\n\tcontent: \"\\e6d1\";\r\n}\r\n.ti-themify-favicon:before {\r\n\tcontent: \"\\e6d2\";\r\n}\r\n.ti-themify-favicon-alt:before {\r\n\tcontent: \"\\e6d3\";\r\n}\r\n.ti-support:before {\r\n\tcontent: \"\\e6d4\";\r\n}\r\n.ti-stamp:before {\r\n\tcontent: \"\\e6d5\";\r\n}\r\n.ti-split-v-alt:before {\r\n\tcontent: \"\\e6d6\";\r\n}\r\n.ti-slice:before {\r\n\tcontent: \"\\e6d7\";\r\n}\r\n.ti-shortcode:before {\r\n\tcontent: \"\\e6d8\";\r\n}\r\n.ti-shift-right-alt:before {\r\n\tcontent: \"\\e6d9\";\r\n}\r\n.ti-shift-left-alt:before {\r\n\tcontent: \"\\e6da\";\r\n}\r\n.ti-ruler-alt-2:before {\r\n\tcontent: \"\\e6db\";\r\n}\r\n.ti-receipt:before {\r\n\tcontent: \"\\e6dc\";\r\n}\r\n.ti-pin2:before {\r\n\tcontent: \"\\e6dd\";\r\n}\r\n.ti-pin-alt:before {\r\n\tcontent: \"\\e6de\";\r\n}\r\n.ti-pencil-alt2:before {\r\n\tcontent: \"\\e6df\";\r\n}\r\n.ti-palette:before {\r\n\tcontent: \"\\e6e0\";\r\n}\r\n.ti-more:before {\r\n\tcontent: \"\\e6e1\";\r\n}\r\n.ti-more-alt:before {\r\n\tcontent: \"\\e6e2\";\r\n}\r\n.ti-microphone-alt:before {\r\n\tcontent: \"\\e6e3\";\r\n}\r\n.ti-magnet:before {\r\n\tcontent: \"\\e6e4\";\r\n}\r\n.ti-line-double:before {\r\n\tcontent: \"\\e6e5\";\r\n}\r\n.ti-line-dotted:before {\r\n\tcontent: \"\\e6e6\";\r\n}\r\n.ti-line-dashed:before {\r\n\tcontent: \"\\e6e7\";\r\n}\r\n.ti-layout-width-full:before {\r\n\tcontent: \"\\e6e8\";\r\n}\r\n.ti-layout-width-default:before {\r\n\tcontent: \"\\e6e9\";\r\n}\r\n.ti-layout-width-default-alt:before {\r\n\tcontent: \"\\e6ea\";\r\n}\r\n.ti-layout-tab:before {\r\n\tcontent: \"\\e6eb\";\r\n}\r\n.ti-layout-tab-window:before {\r\n\tcontent: \"\\e6ec\";\r\n}\r\n.ti-layout-tab-v:before {\r\n\tcontent: \"\\e6ed\";\r\n}\r\n.ti-layout-tab-min:before {\r\n\tcontent: \"\\e6ee\";\r\n}\r\n.ti-layout-slider:before {\r\n\tcontent: \"\\e6ef\";\r\n}\r\n.ti-layout-slider-alt:before {\r\n\tcontent: \"\\e6f0\";\r\n}\r\n.ti-layout-sidebar-right:before {\r\n\tcontent: \"\\e6f1\";\r\n}\r\n.ti-layout-sidebar-none:before {\r\n\tcontent: \"\\e6f2\";\r\n}\r\n.ti-layout-sidebar-left:before {\r\n\tcontent: \"\\e6f3\";\r\n}\r\n.ti-layout-placeholder:before {\r\n\tcontent: \"\\e6f4\";\r\n}\r\n.ti-layout-menu:before {\r\n\tcontent: \"\\e6f5\";\r\n}\r\n.ti-layout-menu-v:before {\r\n\tcontent: \"\\e6f6\";\r\n}\r\n.ti-layout-menu-separated:before {\r\n\tcontent: \"\\e6f7\";\r\n}\r\n.ti-layout-menu-full:before {\r\n\tcontent: \"\\e6f8\";\r\n}\r\n.ti-layout-media-right-alt:before {\r\n\tcontent: \"\\e6f9\";\r\n}\r\n.ti-layout-media-right:before {\r\n\tcontent: \"\\e6fa\";\r\n}\r\n.ti-layout-media-overlay:before {\r\n\tcontent: \"\\e6fb\";\r\n}\r\n.ti-layout-media-overlay-alt:before {\r\n\tcontent: \"\\e6fc\";\r\n}\r\n.ti-layout-media-overlay-alt-2:before {\r\n\tcontent: \"\\e6fd\";\r\n}\r\n.ti-layout-media-left-alt:before {\r\n\tcontent: \"\\e6fe\";\r\n}\r\n.ti-layout-media-left:before {\r\n\tcontent: \"\\e6ff\";\r\n}\r\n.ti-layout-media-center-alt:before {\r\n\tcontent: \"\\e700\";\r\n}\r\n.ti-layout-media-center:before {\r\n\tcontent: \"\\e701\";\r\n}\r\n.ti-layout-list-thumb:before {\r\n\tcontent: \"\\e702\";\r\n}\r\n.ti-layout-list-thumb-alt:before {\r\n\tcontent: \"\\e703\";\r\n}\r\n.ti-layout-list-post:before {\r\n\tcontent: \"\\e704\";\r\n}\r\n.ti-layout-list-large-image:before {\r\n\tcontent: \"\\e705\";\r\n}\r\n.ti-layout-line-solid:before {\r\n\tcontent: \"\\e706\";\r\n}\r\n.ti-layout-grid4:before {\r\n\tcontent: \"\\e707\";\r\n}\r\n.ti-layout-grid3:before {\r\n\tcontent: \"\\e708\";\r\n}\r\n.ti-layout-grid2:before {\r\n\tcontent: \"\\e709\";\r\n}\r\n.ti-layout-grid2-thumb:before {\r\n\tcontent: \"\\e70a\";\r\n}\r\n.ti-layout-cta-right:before {\r\n\tcontent: \"\\e70b\";\r\n}\r\n.ti-layout-cta-left:before {\r\n\tcontent: \"\\e70c\";\r\n}\r\n.ti-layout-cta-center:before {\r\n\tcontent: \"\\e70d\";\r\n}\r\n.ti-layout-cta-btn-right:before {\r\n\tcontent: \"\\e70e\";\r\n}\r\n.ti-layout-cta-btn-left:before {\r\n\tcontent: \"\\e70f\";\r\n}\r\n.ti-layout-column4:before {\r\n\tcontent: \"\\e710\";\r\n}\r\n.ti-layout-column3:before {\r\n\tcontent: \"\\e711\";\r\n}\r\n.ti-layout-column2:before {\r\n\tcontent: \"\\e712\";\r\n}\r\n.ti-layout-accordion-separated:before {\r\n\tcontent: \"\\e713\";\r\n}\r\n.ti-layout-accordion-merged:before {\r\n\tcontent: \"\\e714\";\r\n}\r\n.ti-layout-accordion-list:before {\r\n\tcontent: \"\\e715\";\r\n}\r\n.ti-ink-pen:before {\r\n\tcontent: \"\\e716\";\r\n}\r\n.ti-info-alt:before {\r\n\tcontent: \"\\e717\";\r\n}\r\n.ti-help-alt:before {\r\n\tcontent: \"\\e718\";\r\n}\r\n.ti-headphone-alt:before {\r\n\tcontent: \"\\e719\";\r\n}\r\n.ti-hand-point-up:before {\r\n\tcontent: \"\\e71a\";\r\n}\r\n.ti-hand-point-right:before {\r\n\tcontent: \"\\e71b\";\r\n}\r\n.ti-hand-point-left:before {\r\n\tcontent: \"\\e71c\";\r\n}\r\n.ti-hand-point-down:before {\r\n\tcontent: \"\\e71d\";\r\n}\r\n.ti-gallery:before {\r\n\tcontent: \"\\e71e\";\r\n}\r\n.ti-face-smile:before {\r\n\tcontent: \"\\e71f\";\r\n}\r\n.ti-face-sad:before {\r\n\tcontent: \"\\e720\";\r\n}\r\n.ti-credit-card:before {\r\n\tcontent: \"\\e721\";\r\n}\r\n.ti-control-skip-forward:before {\r\n\tcontent: \"\\e722\";\r\n}\r\n.ti-control-skip-backward:before {\r\n\tcontent: \"\\e723\";\r\n}\r\n.ti-control-record:before {\r\n\tcontent: \"\\e724\";\r\n}\r\n.ti-control-eject:before {\r\n\tcontent: \"\\e725\";\r\n}\r\n.ti-comments-smiley:before {\r\n\tcontent: \"\\e726\";\r\n}\r\n.ti-brush-alt:before {\r\n\tcontent: \"\\e727\";\r\n}\r\n.ti-youtube:before {\r\n\tcontent: \"\\e728\";\r\n}\r\n.ti-vimeo:before {\r\n\tcontent: \"\\e729\";\r\n}\r\n.ti-twitter:before {\r\n\tcontent: \"\\e72a\";\r\n}\r\n.ti-time:before {\r\n\tcontent: \"\\e72b\";\r\n}\r\n.ti-tumblr:before {\r\n\tcontent: \"\\e72c\";\r\n}\r\n.ti-skype:before {\r\n\tcontent: \"\\e72d\";\r\n}\r\n.ti-share:before {\r\n\tcontent: \"\\e72e\";\r\n}\r\n.ti-share-alt:before {\r\n\tcontent: \"\\e72f\";\r\n}\r\n.ti-rocket:before {\r\n\tcontent: \"\\e730\";\r\n}\r\n.ti-pinterest:before {\r\n\tcontent: \"\\e731\";\r\n}\r\n.ti-new-window:before {\r\n\tcontent: \"\\e732\";\r\n}\r\n.ti-microsoft:before {\r\n\tcontent: \"\\e733\";\r\n}\r\n.ti-list-ol:before {\r\n\tcontent: \"\\e734\";\r\n}\r\n.ti-linkedin:before {\r\n\tcontent: \"\\e735\";\r\n}\r\n.ti-layout-sidebar-2:before {\r\n\tcontent: \"\\e736\";\r\n}\r\n.ti-layout-grid4-alt:before {\r\n\tcontent: \"\\e737\";\r\n}\r\n.ti-layout-grid3-alt:before {\r\n\tcontent: \"\\e738\";\r\n}\r\n.ti-layout-grid2-alt:before {\r\n\tcontent: \"\\e739\";\r\n}\r\n.ti-layout-column4-alt:before {\r\n\tcontent: \"\\e73a\";\r\n}\r\n.ti-layout-column3-alt:before {\r\n\tcontent: \"\\e73b\";\r\n}\r\n.ti-layout-column2-alt:before {\r\n\tcontent: \"\\e73c\";\r\n}\r\n.ti-instagram:before {\r\n\tcontent: \"\\e73d\";\r\n}\r\n.ti-google:before {\r\n\tcontent: \"\\e73e\";\r\n}\r\n.ti-github:before {\r\n\tcontent: \"\\e73f\";\r\n}\r\n.ti-flickr:before {\r\n\tcontent: \"\\e740\";\r\n}\r\n.ti-facebook:before {\r\n\tcontent: \"\\e741\";\r\n}\r\n.ti-dropbox:before {\r\n\tcontent: \"\\e742\";\r\n}\r\n.ti-dribbble:before {\r\n\tcontent: \"\\e743\";\r\n}\r\n.ti-apple:before {\r\n\tcontent: \"\\e744\";\r\n}\r\n.ti-android:before {\r\n\tcontent: \"\\e745\";\r\n}\r\n.ti-save:before {\r\n\tcontent: \"\\e746\";\r\n}\r\n.ti-save-alt:before {\r\n\tcontent: \"\\e747\";\r\n}\r\n.ti-yahoo:before {\r\n\tcontent: \"\\e748\";\r\n}\r\n.ti-wordpress:before {\r\n\tcontent: \"\\e749\";\r\n}\r\n.ti-vimeo-alt:before {\r\n\tcontent: \"\\e74a\";\r\n}\r\n.ti-twitter-alt:before {\r\n\tcontent: \"\\e74b\";\r\n}\r\n.ti-tumblr-alt:before {\r\n\tcontent: \"\\e74c\";\r\n}\r\n.ti-trello:before {\r\n\tcontent: \"\\e74d\";\r\n}\r\n.ti-stack-overflow:before {\r\n\tcontent: \"\\e74e\";\r\n}\r\n.ti-soundcloud:before {\r\n\tcontent: \"\\e74f\";\r\n}\r\n.ti-sharethis:before {\r\n\tcontent: \"\\e750\";\r\n}\r\n.ti-sharethis-alt:before {\r\n\tcontent: \"\\e751\";\r\n}\r\n.ti-reddit:before {\r\n\tcontent: \"\\e752\";\r\n}\r\n.ti-pinterest-alt:before {\r\n\tcontent: \"\\e753\";\r\n}\r\n.ti-microsoft-alt:before {\r\n\tcontent: \"\\e754\";\r\n}\r\n.ti-linux:before {\r\n\tcontent: \"\\e755\";\r\n}\r\n.ti-jsfiddle:before {\r\n\tcontent: \"\\e756\";\r\n}\r\n.ti-joomla:before {\r\n\tcontent: \"\\e757\";\r\n}\r\n.ti-html5:before {\r\n\tcontent: \"\\e758\";\r\n}\r\n.ti-flickr-alt:before {\r\n\tcontent: \"\\e759\";\r\n}\r\n.ti-email:before {\r\n\tcontent: \"\\e75a\";\r\n}\r\n.ti-drupal:before {\r\n\tcontent: \"\\e75b\";\r\n}\r\n.ti-dropbox-alt:before {\r\n\tcontent: \"\\e75c\";\r\n}\r\n.ti-css3:before {\r\n\tcontent: \"\\e75d\";\r\n}\r\n.ti-rss:before {\r\n\tcontent: \"\\e75e\";\r\n}\r\n.ti-rss-alt:before {\r\n\tcontent: \"\\e75f\";\r\n}\r\n@font-face {\r\n\tfont-family: 'themify';\r\n\tsrc:url('/assets/fonts/themify.eot?-fvbane');\r\n\tsrc:url('/assets/fonts/themify.eot?#iefix-fvbane') format('embedded-opentype'),\r\n\t\turl('/assets/fonts/themify.woff?-fvbane') format('woff'),\r\n\t\turl('/assets/fonts/themify.ttf?-fvbane') format('truetype'),\r\n\t\turl('/assets/fonts/themify.svg?-fvbane#themify') format('svg');\r\n\tfont-weight: normal;\r\n\tfont-style: normal;\r\n}\r\n[class^=\"ti-\"], [class*=\" ti-\"] {\r\n\tfont-family: 'themify';\r\n\tspeak: none;\r\n\tfont-style: normal;\r\n\tfont-weight: bold;\r\n\tfont-variant: normal;\r\n\ttext-transform: none;\r\n\tline-height: 1.42857;\r\n\r\n\t/* Better Font Rendering =========== */\r\n\t-webkit-font-smoothing: antialiased;\r\n\t-moz-osx-font-smoothing: grayscale;\r\n}\r\n.ti-wand:before {\r\n\tcontent: \"\\e600\";\r\n}\r\n.ti-volume:before {\r\n\tcontent: \"\\e601\";\r\n}\r\n.ti-user:before {\r\n\tcontent: \"\\e602\";\r\n}\r\n.ti-unlock:before {\r\n\tcontent: \"\\e603\";\r\n}\r\n.ti-unlink:before {\r\n\tcontent: \"\\e604\";\r\n}\r\n.ti-trash:before {\r\n\tcontent: \"\\e605\";\r\n}\r\n.ti-thought:before {\r\n\tcontent: \"\\e606\";\r\n}\r\n.ti-target:before {\r\n\tcontent: \"\\e607\";\r\n}\r\n.ti-tag:before {\r\n\tcontent: \"\\e608\";\r\n}\r\n.ti-tablet:before {\r\n\tcontent: \"\\e609\";\r\n}\r\n.ti-star:before {\r\n\tcontent: \"\\e60a\";\r\n}\r\n.ti-spray:before {\r\n\tcontent: \"\\e60b\";\r\n}\r\n.ti-signal:before {\r\n\tcontent: \"\\e60c\";\r\n}\r\n.ti-shopping-cart:before {\r\n\tcontent: \"\\e60d\";\r\n}\r\n.ti-shopping-cart-full:before {\r\n\tcontent: \"\\e60e\";\r\n}\r\n.ti-settings:before {\r\n\tcontent: \"\\e60f\";\r\n}\r\n.ti-search:before {\r\n\tcontent: \"\\e610\";\r\n}\r\n.ti-zoom-in:before {\r\n\tcontent: \"\\e611\";\r\n}\r\n.ti-zoom-out:before {\r\n\tcontent: \"\\e612\";\r\n}\r\n.ti-cut:before {\r\n\tcontent: \"\\e613\";\r\n}\r\n.ti-ruler:before {\r\n\tcontent: \"\\e614\";\r\n}\r\n.ti-ruler-pencil:before {\r\n\tcontent: \"\\e615\";\r\n}\r\n.ti-ruler-alt:before {\r\n\tcontent: \"\\e616\";\r\n}\r\n.ti-bookmark:before {\r\n\tcontent: \"\\e617\";\r\n}\r\n.ti-bookmark-alt:before {\r\n\tcontent: \"\\e618\";\r\n}\r\n.ti-reload:before {\r\n\tcontent: \"\\e619\";\r\n}\r\n.ti-plus:before {\r\n\tcontent: \"\\e61a\";\r\n}\r\n.ti-pin:before {\r\n\tcontent: \"\\e61b\";\r\n}\r\n.ti-pencil:before {\r\n\tcontent: \"\\e61c\";\r\n}\r\n.ti-pencil-alt:before {\r\n\tcontent: \"\\e61d\";\r\n}\r\n.ti-paint-roller:before {\r\n\tcontent: \"\\e61e\";\r\n}\r\n.ti-paint-bucket:before {\r\n\tcontent: \"\\e61f\";\r\n}\r\n.ti-na:before {\r\n\tcontent: \"\\e620\";\r\n}\r\n.ti-mobile:before {\r\n\tcontent: \"\\e621\";\r\n}\r\n.ti-minus:before {\r\n\tcontent: \"\\e622\";\r\n}\r\n.ti-medall:before {\r\n\tcontent: \"\\e623\";\r\n}\r\n.ti-medall-alt:before {\r\n\tcontent: \"\\e624\";\r\n}\r\n.ti-marker:before {\r\n\tcontent: \"\\e625\";\r\n}\r\n.ti-marker-alt:before {\r\n\tcontent: \"\\e626\";\r\n}\r\n.ti-arrow-up:before {\r\n\tcontent: \"\\e627\";\r\n}\r\n.ti-arrow-right:before {\r\n\tcontent: \"\\e628\";\r\n}\r\n.ti-arrow-left:before {\r\n\tcontent: \"\\e629\";\r\n}\r\n.ti-arrow-down:before {\r\n\tcontent: \"\\e62a\";\r\n}\r\n.ti-lock:before {\r\n\tcontent: \"\\e62b\";\r\n}\r\n.ti-location-arrow:before {\r\n\tcontent: \"\\e62c\";\r\n}\r\n.ti-link:before {\r\n\tcontent: \"\\e62d\";\r\n}\r\n.ti-layout:before {\r\n\tcontent: \"\\e62e\";\r\n}\r\n.ti-layers:before {\r\n\tcontent: \"\\e62f\";\r\n}\r\n.ti-layers-alt:before {\r\n\tcontent: \"\\e630\";\r\n}\r\n.ti-key:before {\r\n\tcontent: \"\\e631\";\r\n}\r\n.ti-import:before {\r\n\tcontent: \"\\e632\";\r\n}\r\n.ti-image:before {\r\n\tcontent: \"\\e633\";\r\n}\r\n.ti-heart:before {\r\n\tcontent: \"\\e634\";\r\n}\r\n.ti-heart-broken:before {\r\n\tcontent: \"\\e635\";\r\n}\r\n.ti-hand-stop:before {\r\n\tcontent: \"\\e636\";\r\n}\r\n.ti-hand-open:before {\r\n\tcontent: \"\\e637\";\r\n}\r\n.ti-hand-drag:before {\r\n\tcontent: \"\\e638\";\r\n}\r\n.ti-folder:before {\r\n\tcontent: \"\\e639\";\r\n}\r\n.ti-flag:before {\r\n\tcontent: \"\\e63a\";\r\n}\r\n.ti-flag-alt:before {\r\n\tcontent: \"\\e63b\";\r\n}\r\n.ti-flag-alt-2:before {\r\n\tcontent: \"\\e63c\";\r\n}\r\n.ti-eye:before {\r\n\tcontent: \"\\e63d\";\r\n}\r\n.ti-export:before {\r\n\tcontent: \"\\e63e\";\r\n}\r\n.ti-exchange-vertical:before {\r\n\tcontent: \"\\e63f\";\r\n}\r\n.ti-desktop:before {\r\n\tcontent: \"\\e640\";\r\n}\r\n.ti-cup:before {\r\n\tcontent: \"\\e641\";\r\n}\r\n.ti-crown:before {\r\n\tcontent: \"\\e642\";\r\n}\r\n.ti-comments:before {\r\n\tcontent: \"\\e643\";\r\n}\r\n.ti-comment:before {\r\n\tcontent: \"\\e644\";\r\n}\r\n.ti-comment-alt:before {\r\n\tcontent: \"\\e645\";\r\n}\r\n.ti-close:before {\r\n\tcontent: \"\\e646\";\r\n}\r\n.ti-clip:before {\r\n\tcontent: \"\\e647\";\r\n}\r\n.ti-angle-up:before {\r\n\tcontent: \"\\e648\";\r\n}\r\n.ti-angle-right:before {\r\n\tcontent: \"\\e649\";\r\n}\r\n.ti-angle-left:before {\r\n\tcontent: \"\\e64a\";\r\n}\r\n.ti-angle-down:before {\r\n\tcontent: \"\\e64b\";\r\n}\r\n.ti-check:before {\r\n\tcontent: \"\\e64c\";\r\n}\r\n.ti-check-box:before {\r\n\tcontent: \"\\e64d\";\r\n}\r\n.ti-camera:before {\r\n\tcontent: \"\\e64e\";\r\n}\r\n.ti-announcement:before {\r\n\tcontent: \"\\e64f\";\r\n}\r\n.ti-brush:before {\r\n\tcontent: \"\\e650\";\r\n}\r\n.ti-briefcase:before {\r\n\tcontent: \"\\e651\";\r\n}\r\n.ti-bolt:before {\r\n\tcontent: \"\\e652\";\r\n}\r\n.ti-bolt-alt:before {\r\n\tcontent: \"\\e653\";\r\n}\r\n.ti-blackboard:before {\r\n\tcontent: \"\\e654\";\r\n}\r\n.ti-bag:before {\r\n\tcontent: \"\\e655\";\r\n}\r\n.ti-move:before {\r\n\tcontent: \"\\e656\";\r\n}\r\n.ti-arrows-vertical:before {\r\n\tcontent: \"\\e657\";\r\n}\r\n.ti-arrows-horizontal:before {\r\n\tcontent: \"\\e658\";\r\n}\r\n.ti-fullscreen:before {\r\n\tcontent: \"\\e659\";\r\n}\r\n.ti-arrow-top-right:before {\r\n\tcontent: \"\\e65a\";\r\n}\r\n.ti-arrow-top-left:before {\r\n\tcontent: \"\\e65b\";\r\n}\r\n.ti-arrow-circle-up:before {\r\n\tcontent: \"\\e65c\";\r\n}\r\n.ti-arrow-circle-right:before {\r\n\tcontent: \"\\e65d\";\r\n}\r\n.ti-arrow-circle-left:before {\r\n\tcontent: \"\\e65e\";\r\n}\r\n.ti-arrow-circle-down:before {\r\n\tcontent: \"\\e65f\";\r\n}\r\n.ti-angle-double-up:before {\r\n\tcontent: \"\\e660\";\r\n}\r\n.ti-angle-double-right:before {\r\n\tcontent: \"\\e661\";\r\n}\r\n.ti-angle-double-left:before {\r\n\tcontent: \"\\e662\";\r\n}\r\n.ti-angle-double-down:before {\r\n\tcontent: \"\\e663\";\r\n}\r\n.ti-zip:before {\r\n\tcontent: \"\\e664\";\r\n}\r\n.ti-world:before {\r\n\tcontent: \"\\e665\";\r\n}\r\n.ti-wheelchair:before {\r\n\tcontent: \"\\e666\";\r\n}\r\n.ti-view-list:before {\r\n\tcontent: \"\\e667\";\r\n}\r\n.ti-view-list-alt:before {\r\n\tcontent: \"\\e668\";\r\n}\r\n.ti-view-grid:before {\r\n\tcontent: \"\\e669\";\r\n}\r\n.ti-uppercase:before {\r\n\tcontent: \"\\e66a\";\r\n}\r\n.ti-upload:before {\r\n\tcontent: \"\\e66b\";\r\n}\r\n.ti-underline:before {\r\n\tcontent: \"\\e66c\";\r\n}\r\n.ti-truck:before {\r\n\tcontent: \"\\e66d\";\r\n}\r\n.ti-timer:before {\r\n\tcontent: \"\\e66e\";\r\n}\r\n.ti-ticket:before {\r\n\tcontent: \"\\e66f\";\r\n}\r\n.ti-thumb-up:before {\r\n\tcontent: \"\\e670\";\r\n}\r\n.ti-thumb-down:before {\r\n\tcontent: \"\\e671\";\r\n}\r\n.ti-text:before {\r\n\tcontent: \"\\e672\";\r\n}\r\n.ti-stats-up:before {\r\n\tcontent: \"\\e673\";\r\n}\r\n.ti-stats-down:before {\r\n\tcontent: \"\\e674\";\r\n}\r\n.ti-split-v:before {\r\n\tcontent: \"\\e675\";\r\n}\r\n.ti-split-h:before {\r\n\tcontent: \"\\e676\";\r\n}\r\n.ti-smallcap:before {\r\n\tcontent: \"\\e677\";\r\n}\r\n.ti-shine:before {\r\n\tcontent: \"\\e678\";\r\n}\r\n.ti-shift-right:before {\r\n\tcontent: \"\\e679\";\r\n}\r\n.ti-shift-left:before {\r\n\tcontent: \"\\e67a\";\r\n}\r\n.ti-shield:before {\r\n\tcontent: \"\\e67b\";\r\n}\r\n.ti-notepad:before {\r\n\tcontent: \"\\e67c\";\r\n}\r\n.ti-server:before {\r\n\tcontent: \"\\e67d\";\r\n}\r\n.ti-quote-right:before {\r\n\tcontent: \"\\e67e\";\r\n}\r\n.ti-quote-left:before {\r\n\tcontent: \"\\e67f\";\r\n}\r\n.ti-pulse:before {\r\n\tcontent: \"\\e680\";\r\n}\r\n.ti-printer:before {\r\n\tcontent: \"\\e681\";\r\n}\r\n.ti-power-off:before {\r\n\tcontent: \"\\e682\";\r\n}\r\n.ti-plug:before {\r\n\tcontent: \"\\e683\";\r\n}\r\n.ti-pie-chart:before {\r\n\tcontent: \"\\e684\";\r\n}\r\n.ti-paragraph:before {\r\n\tcontent: \"\\e685\";\r\n}\r\n.ti-panel:before {\r\n\tcontent: \"\\e686\";\r\n}\r\n.ti-package:before {\r\n\tcontent: \"\\e687\";\r\n}\r\n.ti-music:before {\r\n\tcontent: \"\\e688\";\r\n}\r\n.ti-music-alt:before {\r\n\tcontent: \"\\e689\";\r\n}\r\n.ti-mouse:before {\r\n\tcontent: \"\\e68a\";\r\n}\r\n.ti-mouse-alt:before {\r\n\tcontent: \"\\e68b\";\r\n}\r\n.ti-money:before {\r\n\tcontent: \"\\e68c\";\r\n}\r\n.ti-microphone:before {\r\n\tcontent: \"\\e68d\";\r\n}\r\n.ti-menu:before {\r\n\tcontent: \"\\e68e\";\r\n}\r\n.ti-menu-alt:before {\r\n\tcontent: \"\\e68f\";\r\n}\r\n.ti-map:before {\r\n\tcontent: \"\\e690\";\r\n}\r\n.ti-map-alt:before {\r\n\tcontent: \"\\e691\";\r\n}\r\n.ti-loop:before {\r\n\tcontent: \"\\e692\";\r\n}\r\n.ti-location-pin:before {\r\n\tcontent: \"\\e693\";\r\n}\r\n.ti-list:before {\r\n\tcontent: \"\\e694\";\r\n}\r\n.ti-light-bulb:before {\r\n\tcontent: \"\\e695\";\r\n}\r\n.ti-Italic:before {\r\n\tcontent: \"\\e696\";\r\n}\r\n.ti-info:before {\r\n\tcontent: \"\\e697\";\r\n}\r\n.ti-infinite:before {\r\n\tcontent: \"\\e698\";\r\n}\r\n.ti-id-badge:before {\r\n\tcontent: \"\\e699\";\r\n}\r\n.ti-hummer:before {\r\n\tcontent: \"\\e69a\";\r\n}\r\n.ti-home:before {\r\n\tcontent: \"\\e69b\";\r\n}\r\n.ti-help:before {\r\n\tcontent: \"\\e69c\";\r\n}\r\n.ti-headphone:before {\r\n\tcontent: \"\\e69d\";\r\n}\r\n.ti-harddrives:before {\r\n\tcontent: \"\\e69e\";\r\n}\r\n.ti-harddrive:before {\r\n\tcontent: \"\\e69f\";\r\n}\r\n.ti-gift:before {\r\n\tcontent: \"\\e6a0\";\r\n}\r\n.ti-game:before {\r\n\tcontent: \"\\e6a1\";\r\n}\r\n.ti-filter:before {\r\n\tcontent: \"\\e6a2\";\r\n}\r\n.ti-files:before {\r\n\tcontent: \"\\e6a3\";\r\n}\r\n.ti-file:before {\r\n\tcontent: \"\\e6a4\";\r\n}\r\n.ti-eraser:before {\r\n\tcontent: \"\\e6a5\";\r\n}\r\n.ti-envelope:before {\r\n\tcontent: \"\\e6a6\";\r\n}\r\n.ti-download:before {\r\n\tcontent: \"\\e6a7\";\r\n}\r\n.ti-direction:before {\r\n\tcontent: \"\\e6a8\";\r\n}\r\n.ti-direction-alt:before {\r\n\tcontent: \"\\e6a9\";\r\n}\r\n.ti-dashboard:before {\r\n\tcontent: \"\\e6aa\";\r\n}\r\n.ti-control-stop:before {\r\n\tcontent: \"\\e6ab\";\r\n}\r\n.ti-control-shuffle:before {\r\n\tcontent: \"\\e6ac\";\r\n}\r\n.ti-control-play:before {\r\n\tcontent: \"\\e6ad\";\r\n}\r\n.ti-control-pause:before {\r\n\tcontent: \"\\e6ae\";\r\n}\r\n.ti-control-forward:before {\r\n\tcontent: \"\\e6af\";\r\n}\r\n.ti-control-backward:before {\r\n\tcontent: \"\\e6b0\";\r\n}\r\n.ti-cloud:before {\r\n\tcontent: \"\\e6b1\";\r\n}\r\n.ti-cloud-up:before {\r\n\tcontent: \"\\e6b2\";\r\n}\r\n.ti-cloud-down:before {\r\n\tcontent: \"\\e6b3\";\r\n}\r\n.ti-clipboard:before {\r\n\tcontent: \"\\e6b4\";\r\n}\r\n.ti-car:before {\r\n\tcontent: \"\\e6b5\";\r\n}\r\n.ti-calendar:before {\r\n\tcontent: \"\\e6b6\";\r\n}\r\n.ti-book:before {\r\n\tcontent: \"\\e6b7\";\r\n}\r\n.ti-bell:before {\r\n\tcontent: \"\\e6b8\";\r\n}\r\n.ti-basketball:before {\r\n\tcontent: \"\\e6b9\";\r\n}\r\n.ti-bar-chart:before {\r\n\tcontent: \"\\e6ba\";\r\n}\r\n.ti-bar-chart-alt:before {\r\n\tcontent: \"\\e6bb\";\r\n}\r\n.ti-back-right:before {\r\n\tcontent: \"\\e6bc\";\r\n}\r\n.ti-back-left:before {\r\n\tcontent: \"\\e6bd\";\r\n}\r\n.ti-arrows-corner:before {\r\n\tcontent: \"\\e6be\";\r\n}\r\n.ti-archive:before {\r\n\tcontent: \"\\e6bf\";\r\n}\r\n.ti-anchor:before {\r\n\tcontent: \"\\e6c0\";\r\n}\r\n.ti-align-right:before {\r\n\tcontent: \"\\e6c1\";\r\n}\r\n.ti-align-left:before {\r\n\tcontent: \"\\e6c2\";\r\n}\r\n.ti-align-justify:before {\r\n\tcontent: \"\\e6c3\";\r\n}\r\n.ti-align-center:before {\r\n\tcontent: \"\\e6c4\";\r\n}\r\n.ti-alert:before {\r\n\tcontent: \"\\e6c5\";\r\n}\r\n.ti-alarm-clock:before {\r\n\tcontent: \"\\e6c6\";\r\n}\r\n.ti-agenda:before {\r\n\tcontent: \"\\e6c7\";\r\n}\r\n.ti-write:before {\r\n\tcontent: \"\\e6c8\";\r\n}\r\n.ti-window:before {\r\n\tcontent: \"\\e6c9\";\r\n}\r\n.ti-widgetized:before {\r\n\tcontent: \"\\e6ca\";\r\n}\r\n.ti-widget:before {\r\n\tcontent: \"\\e6cb\";\r\n}\r\n.ti-widget-alt:before {\r\n\tcontent: \"\\e6cc\";\r\n}\r\n.ti-wallet:before {\r\n\tcontent: \"\\e6cd\";\r\n}\r\n.ti-video-clapper:before {\r\n\tcontent: \"\\e6ce\";\r\n}\r\n.ti-video-camera:before {\r\n\tcontent: \"\\e6cf\";\r\n}\r\n.ti-vector:before {\r\n\tcontent: \"\\e6d0\";\r\n}\r\n.ti-themify-logo:before {\r\n\tcontent: \"\\e6d1\";\r\n}\r\n.ti-themify-favicon:before {\r\n\tcontent: \"\\e6d2\";\r\n}\r\n.ti-themify-favicon-alt:before {\r\n\tcontent: \"\\e6d3\";\r\n}\r\n.ti-support:before {\r\n\tcontent: \"\\e6d4\";\r\n}\r\n.ti-stamp:before {\r\n\tcontent: \"\\e6d5\";\r\n}\r\n.ti-split-v-alt:before {\r\n\tcontent: \"\\e6d6\";\r\n}\r\n.ti-slice:before {\r\n\tcontent: \"\\e6d7\";\r\n}\r\n.ti-shortcode:before {\r\n\tcontent: \"\\e6d8\";\r\n}\r\n.ti-shift-right-alt:before {\r\n\tcontent: \"\\e6d9\";\r\n}\r\n.ti-shift-left-alt:before {\r\n\tcontent: \"\\e6da\";\r\n}\r\n.ti-ruler-alt-2:before {\r\n\tcontent: \"\\e6db\";\r\n}\r\n.ti-receipt:before {\r\n\tcontent: \"\\e6dc\";\r\n}\r\n.ti-pin2:before {\r\n\tcontent: \"\\e6dd\";\r\n}\r\n.ti-pin-alt:before {\r\n\tcontent: \"\\e6de\";\r\n}\r\n.ti-pencil-alt2:before {\r\n\tcontent: \"\\e6df\";\r\n}\r\n.ti-palette:before {\r\n\tcontent: \"\\e6e0\";\r\n}\r\n.ti-more:before {\r\n\tcontent: \"\\e6e1\";\r\n}\r\n.ti-more-alt:before {\r\n\tcontent: \"\\e6e2\";\r\n}\r\n.ti-microphone-alt:before {\r\n\tcontent: \"\\e6e3\";\r\n}\r\n.ti-magnet:before {\r\n\tcontent: \"\\e6e4\";\r\n}\r\n.ti-line-double:before {\r\n\tcontent: \"\\e6e5\";\r\n}\r\n.ti-line-dotted:before {\r\n\tcontent: \"\\e6e6\";\r\n}\r\n.ti-line-dashed:before {\r\n\tcontent: \"\\e6e7\";\r\n}\r\n.ti-layout-width-full:before {\r\n\tcontent: \"\\e6e8\";\r\n}\r\n.ti-layout-width-default:before {\r\n\tcontent: \"\\e6e9\";\r\n}\r\n.ti-layout-width-default-alt:before {\r\n\tcontent: \"\\e6ea\";\r\n}\r\n.ti-layout-tab:before {\r\n\tcontent: \"\\e6eb\";\r\n}\r\n.ti-layout-tab-window:before {\r\n\tcontent: \"\\e6ec\";\r\n}\r\n.ti-layout-tab-v:before {\r\n\tcontent: \"\\e6ed\";\r\n}\r\n.ti-layout-tab-min:before {\r\n\tcontent: \"\\e6ee\";\r\n}\r\n.ti-layout-slider:before {\r\n\tcontent: \"\\e6ef\";\r\n}\r\n.ti-layout-slider-alt:before {\r\n\tcontent: \"\\e6f0\";\r\n}\r\n.ti-layout-sidebar-right:before {\r\n\tcontent: \"\\e6f1\";\r\n}\r\n.ti-layout-sidebar-none:before {\r\n\tcontent: \"\\e6f2\";\r\n}\r\n.ti-layout-sidebar-left:before {\r\n\tcontent: \"\\e6f3\";\r\n}\r\n.ti-layout-placeholder:before {\r\n\tcontent: \"\\e6f4\";\r\n}\r\n.ti-layout-menu:before {\r\n\tcontent: \"\\e6f5\";\r\n}\r\n.ti-layout-menu-v:before {\r\n\tcontent: \"\\e6f6\";\r\n}\r\n.ti-layout-menu-separated:before {\r\n\tcontent: \"\\e6f7\";\r\n}\r\n.ti-layout-menu-full:before {\r\n\tcontent: \"\\e6f8\";\r\n}\r\n.ti-layout-media-right-alt:before {\r\n\tcontent: \"\\e6f9\";\r\n}\r\n.ti-layout-media-right:before {\r\n\tcontent: \"\\e6fa\";\r\n}\r\n.ti-layout-media-overlay:before {\r\n\tcontent: \"\\e6fb\";\r\n}\r\n.ti-layout-media-overlay-alt:before {\r\n\tcontent: \"\\e6fc\";\r\n}\r\n.ti-layout-media-overlay-alt-2:before {\r\n\tcontent: \"\\e6fd\";\r\n}\r\n.ti-layout-media-left-alt:before {\r\n\tcontent: \"\\e6fe\";\r\n}\r\n.ti-layout-media-left:before {\r\n\tcontent: \"\\e6ff\";\r\n}\r\n.ti-layout-media-center-alt:before {\r\n\tcontent: \"\\e700\";\r\n}\r\n.ti-layout-media-center:before {\r\n\tcontent: \"\\e701\";\r\n}\r\n.ti-layout-list-thumb:before {\r\n\tcontent: \"\\e702\";\r\n}\r\n.ti-layout-list-thumb-alt:before {\r\n\tcontent: \"\\e703\";\r\n}\r\n.ti-layout-list-post:before {\r\n\tcontent: \"\\e704\";\r\n}\r\n.ti-layout-list-large-image:before {\r\n\tcontent: \"\\e705\";\r\n}\r\n.ti-layout-line-solid:before {\r\n\tcontent: \"\\e706\";\r\n}\r\n.ti-layout-grid4:before {\r\n\tcontent: \"\\e707\";\r\n}\r\n.ti-layout-grid3:before {\r\n\tcontent: \"\\e708\";\r\n}\r\n.ti-layout-grid2:before {\r\n\tcontent: \"\\e709\";\r\n}\r\n.ti-layout-grid2-thumb:before {\r\n\tcontent: \"\\e70a\";\r\n}\r\n.ti-layout-cta-right:before {\r\n\tcontent: \"\\e70b\";\r\n}\r\n.ti-layout-cta-left:before {\r\n\tcontent: \"\\e70c\";\r\n}\r\n.ti-layout-cta-center:before {\r\n\tcontent: \"\\e70d\";\r\n}\r\n.ti-layout-cta-btn-right:before {\r\n\tcontent: \"\\e70e\";\r\n}\r\n.ti-layout-cta-btn-left:before {\r\n\tcontent: \"\\e70f\";\r\n}\r\n.ti-layout-column4:before {\r\n\tcontent: \"\\e710\";\r\n}\r\n.ti-layout-column3:before {\r\n\tcontent: \"\\e711\";\r\n}\r\n.ti-layout-column2:before {\r\n\tcontent: \"\\e712\";\r\n}\r\n.ti-layout-accordion-separated:before {\r\n\tcontent: \"\\e713\";\r\n}\r\n.ti-layout-accordion-merged:before {\r\n\tcontent: \"\\e714\";\r\n}\r\n.ti-layout-accordion-list:before {\r\n\tcontent: \"\\e715\";\r\n}\r\n.ti-ink-pen:before {\r\n\tcontent: \"\\e716\";\r\n}\r\n.ti-info-alt:before {\r\n\tcontent: \"\\e717\";\r\n}\r\n.ti-help-alt:before {\r\n\tcontent: \"\\e718\";\r\n}\r\n.ti-headphone-alt:before {\r\n\tcontent: \"\\e719\";\r\n}\r\n.ti-hand-point-up:before {\r\n\tcontent: \"\\e71a\";\r\n}\r\n.ti-hand-point-right:before {\r\n\tcontent: \"\\e71b\";\r\n}\r\n.ti-hand-point-left:before {\r\n\tcontent: \"\\e71c\";\r\n}\r\n.ti-hand-point-down:before {\r\n\tcontent: \"\\e71d\";\r\n}\r\n.ti-gallery:before {\r\n\tcontent: \"\\e71e\";\r\n}\r\n.ti-face-smile:before {\r\n\tcontent: \"\\e71f\";\r\n}\r\n.ti-face-sad:before {\r\n\tcontent: \"\\e720\";\r\n}\r\n.ti-credit-card:before {\r\n\tcontent: \"\\e721\";\r\n}\r\n.ti-control-skip-forward:before {\r\n\tcontent: \"\\e722\";\r\n}\r\n.ti-control-skip-backward:before {\r\n\tcontent: \"\\e723\";\r\n}\r\n.ti-control-record:before {\r\n\tcontent: \"\\e724\";\r\n}\r\n.ti-control-eject:before {\r\n\tcontent: \"\\e725\";\r\n}\r\n.ti-comments-smiley:before {\r\n\tcontent: \"\\e726\";\r\n}\r\n.ti-brush-alt:before {\r\n\tcontent: \"\\e727\";\r\n}\r\n.ti-youtube:before {\r\n\tcontent: \"\\e728\";\r\n}\r\n.ti-vimeo:before {\r\n\tcontent: \"\\e729\";\r\n}\r\n.ti-twitter:before {\r\n\tcontent: \"\\e72a\";\r\n}\r\n.ti-time:before {\r\n\tcontent: \"\\e72b\";\r\n}\r\n.ti-tumblr:before {\r\n\tcontent: \"\\e72c\";\r\n}\r\n.ti-skype:before {\r\n\tcontent: \"\\e72d\";\r\n}\r\n.ti-share:before {\r\n\tcontent: \"\\e72e\";\r\n}\r\n.ti-share-alt:before {\r\n\tcontent: \"\\e72f\";\r\n}\r\n.ti-rocket:before {\r\n\tcontent: \"\\e730\";\r\n}\r\n.ti-pinterest:before {\r\n\tcontent: \"\\e731\";\r\n}\r\n.ti-new-window:before {\r\n\tcontent: \"\\e732\";\r\n}\r\n.ti-microsoft:before {\r\n\tcontent: \"\\e733\";\r\n}\r\n.ti-list-ol:before {\r\n\tcontent: \"\\e734\";\r\n}\r\n.ti-linkedin:before {\r\n\tcontent: \"\\e735\";\r\n}\r\n.ti-layout-sidebar-2:before {\r\n\tcontent: \"\\e736\";\r\n}\r\n.ti-layout-grid4-alt:before {\r\n\tcontent: \"\\e737\";\r\n}\r\n.ti-layout-grid3-alt:before {\r\n\tcontent: \"\\e738\";\r\n}\r\n.ti-layout-grid2-alt:before {\r\n\tcontent: \"\\e739\";\r\n}\r\n.ti-layout-column4-alt:before {\r\n\tcontent: \"\\e73a\";\r\n}\r\n.ti-layout-column3-alt:before {\r\n\tcontent: \"\\e73b\";\r\n}\r\n.ti-layout-column2-alt:before {\r\n\tcontent: \"\\e73c\";\r\n}\r\n.ti-instagram:before {\r\n\tcontent: \"\\e73d\";\r\n}\r\n.ti-google:before {\r\n\tcontent: \"\\e73e\";\r\n}\r\n.ti-github:before {\r\n\tcontent: \"\\e73f\";\r\n}\r\n.ti-flickr:before {\r\n\tcontent: \"\\e740\";\r\n}\r\n.ti-facebook:before {\r\n\tcontent: \"\\e741\";\r\n}\r\n.ti-dropbox:before {\r\n\tcontent: \"\\e742\";\r\n}\r\n.ti-dribbble:before {\r\n\tcontent: \"\\e743\";\r\n}\r\n.ti-apple:before {\r\n\tcontent: \"\\e744\";\r\n}\r\n.ti-android:before {\r\n\tcontent: \"\\e745\";\r\n}\r\n.ti-save:before {\r\n\tcontent: \"\\e746\";\r\n}\r\n.ti-save-alt:before {\r\n\tcontent: \"\\e747\";\r\n}\r\n.ti-yahoo:before {\r\n\tcontent: \"\\e748\";\r\n}\r\n.ti-wordpress:before {\r\n\tcontent: \"\\e749\";\r\n}\r\n.ti-vimeo-alt:before {\r\n\tcontent: \"\\e74a\";\r\n}\r\n.ti-twitter-alt:before {\r\n\tcontent: \"\\e74b\";\r\n}\r\n.ti-tumblr-alt:before {\r\n\tcontent: \"\\e74c\";\r\n}\r\n.ti-trello:before {\r\n\tcontent: \"\\e74d\";\r\n}\r\n.ti-stack-overflow:before {\r\n\tcontent: \"\\e74e\";\r\n}\r\n.ti-soundcloud:before {\r\n\tcontent: \"\\e74f\";\r\n}\r\n.ti-sharethis:before {\r\n\tcontent: \"\\e750\";\r\n}\r\n.ti-sharethis-alt:before {\r\n\tcontent: \"\\e751\";\r\n}\r\n.ti-reddit:before {\r\n\tcontent: \"\\e752\";\r\n}\r\n.ti-pinterest-alt:before {\r\n\tcontent: \"\\e753\";\r\n}\r\n.ti-microsoft-alt:before {\r\n\tcontent: \"\\e754\";\r\n}\r\n.ti-linux:before {\r\n\tcontent: \"\\e755\";\r\n}\r\n.ti-jsfiddle:before {\r\n\tcontent: \"\\e756\";\r\n}\r\n.ti-joomla:before {\r\n\tcontent: \"\\e757\";\r\n}\r\n.ti-html5:before {\r\n\tcontent: \"\\e758\";\r\n}\r\n.ti-flickr-alt:before {\r\n\tcontent: \"\\e759\";\r\n}\r\n.ti-email:before {\r\n\tcontent: \"\\e75a\";\r\n}\r\n.ti-drupal:before {\r\n\tcontent: \"\\e75b\";\r\n}\r\n.ti-dropbox-alt:before {\r\n\tcontent: \"\\e75c\";\r\n}\r\n.ti-css3:before {\r\n\tcontent: \"\\e75d\";\r\n}\r\n.ti-rss:before {\r\n\tcontent: \"\\e75e\";\r\n}\r\n.ti-rss-alt:before {\r\n\tcontent: \"\\e75f\";\r\n}\r\n@media (min-width: 992px){\r\n  .typo-line{\r\n      padding-left: 140px;\r\n      margin-bottom: 40px;\r\n      position: relative;\r\n  }\r\n\r\n  .typo-line .category{\r\n      -webkit-transform: translateY(-50%);\r\n              transform: translateY(-50%);\r\n      top: 50%;\r\n      left: 0px;\r\n      position: absolute;\r\n  }\r\n}\r\n.icon-section {\r\nmargin: 0 0 3em;\r\nclear: both;\r\noverflow: hidden;\r\n}\r\n.icon-container {\r\nwidth: 240px;\r\npadding: .7em 0;\r\nfloat: left;\r\nposition: relative;\r\ntext-align: left;\r\n}\r\n.icon-container [class^=\"ti-\"],\r\n.icon-container [class*=\" ti-\"] {\r\ncolor: #000;\r\nposition: absolute;\r\nmargin-top: 3px;\r\ntransition: .3s;\r\n}\r\n.icon-container:hover [class^=\"ti-\"],\r\n.icon-container:hover [class*=\" ti-\"] {\r\nfont-size: 2.2em;\r\nmargin-top: -5px;\r\n}\r\n.icon-container:hover .icon-name {\r\ncolor: #000;\r\n}\r\n.icon-name {\r\ncolor: #aaa;\r\nmargin-left: 35px;\r\nfont-size: .8em;\r\ntransition: .3s;\r\n}\r\n.icon-container:hover .icon-name {\r\nmargin-left: 45px;\r\n}\r\n.places-buttons .btn{\r\n  margin-bottom: 30px\r\n}\r\n.sidebar .nav > li.active-pro{\r\n  position: absolute;\r\n  width: 100%;\r\n  bottom: 10px;\r\n}\r\n.sidebar .nav > li.active-pro a{\r\n  background: rgba(255, 255, 255, 0.14);\r\n  opacity: 1;\r\n  color: #FFFFFF;\r\n}\r\n.table-upgrade td:nth-child(2),\r\n.table-upgrade td:nth-child(3){\r\n  text-align: center;\r\n}\r\n.col-xs-5{\r\n  margin: 5px 30% 0px 30px!important;\r\n}\r\n.col-xs-7{\r\n  margin-top: 5px!important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content mt-3\">\r\n  <div class=\"container-fluid\">\r\n      <div class=\"row\"><!--row begins-->\r\n          <div class=\"col-lg-3 col-sm-6\">\r\n              <div class=\"card\">\r\n                  <div class=\"content\">\r\n                      <div class=\"row\">\r\n                          <div class=\"col-xs-5\">\r\n                              <div class=\"icon-big icon-warning text-center\">\r\n                                  <i class=\"ti-user\"></i>\r\n                              </div>\r\n                          </div>\r\n                          <div class=\"col-xs-7\">\r\n                              <div class=\"numbers\">\r\n                                  <p><strong>Students</strong></p>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                      <a routerLink=\"/users\">\r\n                          <div class=\"footer\">\r\n                          <hr />\r\n                          <div class=\"stats\">\r\n                              <i class=\"ti-arrow-right\"></i>View\r\n                          </div>\r\n                      </div>\r\n                  </a>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-lg-3 col-sm-6\">\r\n            <div class=\"card\">\r\n                <div class=\"content\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-5\">\r\n                            <div class=\"icon-big icon-info text-center\">\r\n                                <i class=\"ti-id-badge\"></i>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-7\">\r\n                            <div class=\"numbers\">\r\n                                <p><strong>Teachers</strong></p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <a routerLink=\"/users\">\r\n                        <div class=\"footer\">\r\n                        <hr />\r\n                        <div class=\"stats\">\r\n                            <i class=\"ti-arrow-right\"></i>View\r\n                        </div>\r\n                    </div>\r\n                </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-sm-6\">\r\n            <div class=\"card\">\r\n                <div class=\"content\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-5\">\r\n                            <div class=\"icon-big icon-warning text-center\">\r\n                                <i class=\"ti-user\"></i>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-7\">\r\n                            <div class=\"numbers\">\r\n                                <p><strong>Parents</strong></p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <a href=\"/parent\">\r\n                        <div class=\"footer\">\r\n                        <hr />\r\n                        <div class=\"stats\">\r\n                            <i class=\"ti-arrow-right\"></i>View\r\n                        </div>\r\n                    </div>\r\n                </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n          <div class=\"col-lg-3 col-sm-6\">\r\n              <div class=\"card\">\r\n                  <div class=\"content\">\r\n                      <div class=\"row\">\r\n                          <div class=\"col-xs-5\">\r\n                              <div class=\"icon-big icon-success text-center\">\r\n                                  <i class=\"ti-wallet\"></i>\r\n                              </div>\r\n                          </div>\r\n                          <div class=\"col-xs-7\">\r\n                              <div class=\"numbers\">\r\n                                  <p> <strong>School Fees</strong></p>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                      <a routerLink=\"/fees\">\r\n                          <div class=\"footer\">\r\n                          <hr />\r\n                          <div class=\"stats\">\r\n                              <i class=\"ti-arrow-right\"></i>View\r\n                          </div>\r\n                      </div>\r\n                  </a>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div><!--row ends-->\r\n      <!--row begins-->\r\n          <div class=\"row\">\r\n          <div class=\"col-lg-3 col-sm-6\">\r\n              <div class=\"card\">\r\n                  <div class=\"content\">\r\n                      <div class=\"row\">\r\n                          <div class=\"col-xs-5\">\r\n                              <div class=\"icon-big icon-warning text-center\">\r\n                                  <i class=\"ti-harddrives\"></i>\r\n                              </div>\r\n                          </div>\r\n                          <div class=\"col-xs-7\">\r\n                              <div class=\"numbers\">\r\n                                  <p><strong>Subjects</strong></p>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                      <a routerLink=\"/subjects\">\r\n                          <div class=\"footer\">\r\n                          <hr />\r\n                          <div class=\"stats\">\r\n                              <i class=\"ti-arrow-right\"></i>View\r\n                          </div>\r\n                      </div>\r\n                  </a>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-lg-3 col-sm-6\">\r\n              <div class=\"card\">\r\n                  <div class=\"content\">\r\n                      <div class=\"row\">\r\n                          <div class=\"col-xs-5\">\r\n                              <div class=\"icon-big icon-danger text-center\">\r\n                                  <i class=\"ti-blackboard\"></i>\r\n                              </div>\r\n                          </div>\r\n                          <div class=\"col-xs-7\">\r\n                              <div class=\"numbers\">\r\n                                  <p><strong>Streams</strong></p>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                      <a routerLink=\"/streams\">\r\n                          <div class=\"footer\">\r\n                          <hr />\r\n                          <div class=\"stats\">\r\n                              <i class=\"ti-arrow-right\"></i>View\r\n                          </div>\r\n                      </div>\r\n                  </a>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-lg-3 col-sm-6\">\r\n              <div class=\"card\">\r\n                  <div class=\"content\">\r\n                      <div class=\"row\">\r\n                          <div class=\"col-xs-5\">\r\n                              <div class=\"icon-big icon-success text-center\">\r\n                                  <i class=\"ti-crown\"></i>\r\n                              </div>\r\n                          </div>\r\n                          <div class=\"col-xs-7\">\r\n                              <div class=\"numbers\">\r\n                                  <p><strong>Classes</strong></p>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                      <a routerLink=\"/classes\">\r\n                          <div class=\"footer\">\r\n                          <hr />\r\n                          <div class=\"stats\">\r\n                              <i class=\"ti-arrow-right\"></i>View\r\n                          </div>\r\n                      </div>\r\n                  </a>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-lg-3 col-sm-6\">\r\n              <div class=\"card\">\r\n                  <div class=\"content\">\r\n                      <div class=\"row\">\r\n                          <div class=\"col-xs-5\">\r\n                              <div class=\"icon-big icon-info text-center\">\r\n                                  <i class=\"ti-bar-chart-alt\"></i>\r\n                              </div>\r\n                          </div>\r\n                          <div class=\"col-xs-7\">\r\n                              <div class=\"numbers\">\r\n                                  <p><strong>Attendance</strong></p>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                      <a href=\"/classes\">\r\n                          <div class=\"footer\">\r\n                          <hr />\r\n                          <div class=\"stats\">\r\n                              <i class=\"ti-arrow-right\"></i>View\r\n                          </div>\r\n                      </div>\r\n                  </a>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          <!--row ends-->\r\n      </div>\r\n      <!--row begins-->\r\n          <div class=\"row\">\r\n          <div class=\"col-lg-3 col-sm-6\">\r\n              <div class=\"card\">\r\n                  <div class=\"content\">\r\n                      <div class=\"row\">\r\n                          <div class=\"col-xs-5\">\r\n                              <div class=\"icon-big icon-warning text-center\">\r\n                                  <i class=\"ti-layers-alt\"></i>\r\n                              </div>\r\n                          </div>\r\n                          <div class=\"col-xs-7\">\r\n                              <div class=\"numbers\">\r\n                                  <p><strong>Timetables</strong></p>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                     <a routerLink=\"/timetables\">\r\n                          <div class=\"footer\">\r\n                          <hr />\r\n                          <div class=\"stats\">\r\n                              <i class=\"ti-arrow-right\"></i>View\r\n                          </div>\r\n                      </div>\r\n                  </a>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-lg-3 col-sm-6\">\r\n              <div class=\"card\">\r\n                  <div class=\"content\">\r\n                      <div class=\"row\">\r\n                          <div class=\"col-xs-5\">\r\n                              <div class=\"icon-big icon-danger text-center\">\r\n                                  <i class=\"ti-announcement\"></i>\r\n                              </div>\r\n                          </div>\r\n                          <div class=\"col-xs-7\">\r\n                              <div class=\"numbers\">\r\n                                  <p><strong>Notices</strong></p>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                      <a routerLink=\"/notices\">\r\n                          <div class=\"footer\">\r\n                          <hr />\r\n                          <div class=\"stats\">\r\n                              <i class=\"ti-arrow-right\"></i>View\r\n                          </div>\r\n                      </div>\r\n                  </a>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-lg-3 col-sm-6\">\r\n              <div class=\"card\">\r\n                  <div class=\"content\">\r\n                      <div class=\"row\">\r\n                          <div class=\"col-xs-5\">\r\n                              <div class=\"icon-big icon-primary text-center\">\r\n                                  <i class=\"ti-cup\"></i>\r\n                              </div>\r\n                          </div>\r\n                          <div class=\"col-xs-7\">\r\n                              <div class=\"numbers\">\r\n                                  <p><strong>Exam Results</strong></p>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                      <a routerLink=\"/results\">\r\n                          <div class=\"footer\">\r\n                          <hr />\r\n                          <div class=\"stats\">\r\n                              <i class=\"ti-arrow-right\"></i>View\r\n                          </div>\r\n                      </div>\r\n                  </a>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-lg-3 col-sm-6\">\r\n              <div class=\"card\">\r\n                  <div class=\"content\">\r\n                      <div class=\"row\">\r\n                          <div class=\"col-xs-5\">\r\n                              <div class=\"icon-big icon-primary text-center\">\r\n                                  <i class=\"ti-location-arrow\"></i>\r\n                              </div>\r\n                          </div>\r\n                          <div class=\"col-xs-7\">\r\n                              <div class=\"numbers\">\r\n                                  <p><strong>Student Location</strong></p>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                      <a routerLink=\"/location\">\r\n                          <div class=\"footer\">\r\n                          <hr />\r\n                          <div class=\"stats\">\r\n                              <i class=\"ti-arrow-right\"></i>View\r\n                          </div>\r\n                      </div>\r\n                  </a>\r\n                  </div>\r\n              </div>\r\n          </div><!--row ends-->\r\n      </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
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

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
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
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/location-map/location-map.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/location-map/location-map.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/location-map/location-map.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/location-map/location-map.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #gmap style=\"width:100%;height:500px\"></div>\n"

/***/ }),

/***/ "./src/app/components/location-map/location-map.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/location-map/location-map.component.ts ***!
  \*******************************************************************/
/*! exports provided: LocationMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationMapComponent", function() { return LocationMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference types="@types/googlemaps" />





var LocationMapComponent = /** @class */ (function () {
    function LocationMapComponent(data, api, token, notify) {
        this.data = data;
        this.api = api;
        this.token = token;
        this.notify = notify;
        this.lon = 18.5793;
        this.lat = 73.8143;
        this.headers = {
            'Authorization': this.token.get(),
            'X-Requested-With': 'XMLHttpRequest'
        };
    }
    LocationMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentMessage.subscribe(function (data) {
            console.log(data);
            if (data) {
                _this.api.get('location/' + data, _this.headers).subscribe(function (data) {
                    _this.lon = data['latitude'];
                    _this.lat = data['longitude'];
                    var mapProp = {
                        center: new google.maps.LatLng(_this.lon, _this.lat),
                        zoom: 15,
                        mapTypeId: google.maps.MapTypeId.ROADMAP,
                    };
                    _this.map = new google.maps.Map(_this.gmapElement.nativeElement, mapProp);
                    _this.updateMap(_this.map, mapProp);
                }, function (error) { _this.notify.error(error.message); });
            }
        });
    };
    LocationMapComponent.prototype.updateMap = function (map, mapProp) {
        var _this = this;
        this.data.currentMessage.subscribe(function (data) {
            if (data) {
                _this.api.get('location/' + data, _this.headers).subscribe(function (data) {
                    console.log(data);
                    mapProp.center = new google.maps.LatLng(_this.lon, _this.lat);
                    if (_this.lon != data['latitude'] || _this.lat != data['longitude']) {
                        _this.ngOnInit();
                    }
                    _this.lon = data['latitude'];
                    _this.lat = data['longitude'];
                    var marker = new google.maps.Marker({
                        position: mapProp.center,
                        title: "Last Seen At " + data['timestamp']
                    });
                    marker.setMap(_this.map);
                    setTimeout(function () {
                        _this.updateMap(map, mapProp);
                    }, 10000);
                }, function (error) { _this.notify.error(error.message); });
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('gmap'),
        __metadata("design:type", Object)
    ], LocationMapComponent.prototype, "gmapElement", void 0);
    LocationMapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-location-map',
            template: __webpack_require__(/*! ./location-map.component.html */ "./src/app/components/location-map/location-map.component.html"),
            styles: [__webpack_require__(/*! ./location-map.component.css */ "./src/app/components/location-map/location-map.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], src_app_services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"], ng_snotify__WEBPACK_IMPORTED_MODULE_4__["SnotifyService"]])
    ], LocationMapComponent);
    return LocationMapComponent;
}());



/***/ }),

/***/ "./src/app/components/location/location.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/location/location.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/location/location.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/location/location.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\" style=\"margin-top: 30px;\">\n      <div class=\"col-6\">\n        <h3>Student Locations</h3>\n      </div>\n      <div class=\"col-md-3 text-right\">\n        <input type=\"search\" class=\"form-control\" id=\"search\" name=\"search\" placeholder=\"Search\"  [(ngModel)]=\"keyword\" (keyup)=\"search()\"/>\n      </div>\n    </div>\n  </div>\n    <hr>\n\n    <div class=\"container\">\n        <table class=\"table table-bordered text-center\">\n            <thead>\n              <tr>\n                <th>Avatar</th>\n                <th (click)=\"sort('name')\"><a href=\"javascript:void(0)\" style=\"color:black\">Name <span *ngIf=\"sortData.col=='name'\"><i class=\"fa fa-caret-down\" *ngIf=\"sortData.order=='asc'\"></i><i class=\"fa fa-caret-up\" *ngIf=\"sortData.order=='desc'\"></i></span></a></th>\n                <th>Last Updated at</th>\n                <th>View Location</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let location of locations\">\n                <td><img src=\"{{ location.avatar_url }}\" style=\"max-height: 40px;\"></td>\n                <td>{{ location.name }}</td>\n                <td ><span *ngIf=\"location.location\">{{ location.location.timestamp }}</span><span *ngIf=\"!location.location\">Unavailable</span></td>\n                <td>\n                  <a href=\"javascript:void(0)\" class=\"item\"  (click)=\"locationMap(location.id)\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"view\" style=\"padding-right: 10px;\">\n                      <i class=\"fa fa-map-marker\"></i>\n                  </a>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <div class=\"col-12 justify-content-center\" style=\"display: flex !important; justify-content: center !important;\">\n            <ngb-pagination [(collectionSize)]=\"pagination.max\" (pageChange)=\"paginateClick($event)\" [(page)]=\"pagination.page\" (onclick)=\"paginateClick()\"></ngb-pagination>\n          </div>\n        </div>\n"

/***/ }),

/***/ "./src/app/components/location/location.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/location/location.component.ts ***!
  \***********************************************************/
/*! exports provided: LocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationComponent", function() { return LocationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LocationComponent = /** @class */ (function () {
    function LocationComponent(data, pg, token, http, router, api, notify) {
        this.data = data;
        this.pg = pg;
        this.token = token;
        this.http = http;
        this.router = router;
        this.api = api;
        this.notify = notify;
        this.locations = null;
        this.error = []; //Form errors
        this.keyword = null; //Current Search Keyword
        this.pagination = {
            'page': '1',
            'max': '10'
        };
        this.headers = {
            'Authorization': this.token.get(),
            'X-Requested-With': 'XMLHttpRequest'
        };
        this.sortData = {
            "col": null,
            "order": null
        };
        pg.boundaryLinks = true;
        pg.rotate = true;
    }
    LocationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.notify.clear();
        this.notify.info("Loading...", { timeout: 0 });
        if (this.keyword) {
            this.api.get('locations?search=' + this.keyword + '&page=' + this.pagination.page + '&sort=' + this.sortData.col + '&order=' + this.sortData.order, this.headers).subscribe(function (data) { return _this.datahandler(data); }, function (error) { _this.notify.clear(); _this.token.remove(); _this.router.navigateByUrl("/login"); });
        }
        else {
            this.api.get('locations?page=' + this.pagination.page + '&sort=' + this.sortData.col + '&order=' + this.sortData.order, this.headers).subscribe(function (data) { return _this.datahandler(data); }, function (error) { _this.token.remove(); _this.router.navigateByUrl("/login"); });
        }
    };
    LocationComponent.prototype.datahandler = function (data) {
        console.log(data.data);
        this.notify.clear();
        this.locations = data.data;
        this.pagination.max = data.total;
    };
    //sort handler
    LocationComponent.prototype.sort = function (col) {
        console.log(col);
        if (this.sortData.order == "asc" && this.sortData.col == col) {
            this.sortData.order = "desc";
        }
        else if (this.sortData.order == "desc" && this.sortData.col == col) {
            this.sortData.order = null;
            col = null;
        }
        else {
            this.sortData.order = "asc";
        }
        this.sortData.col = col;
        this.ngOnInit();
    };
    //Paginate Handling
    LocationComponent.prototype.paginateClick = function (page) {
        console.log(page);
        this.pagination.page = page;
        this.ngOnInit();
    };
    //Serach Handling
    LocationComponent.prototype.search = function () {
        this.ngOnInit();
    };
    LocationComponent.prototype.locationMap = function (id) {
        this.data.changeMessage(id);
        this.router.navigateByUrl("/locationMap");
    };
    LocationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-location',
            template: __webpack_require__(/*! ./location.component.html */ "./src/app/components/location/location.component.html"),
            styles: [__webpack_require__(/*! ./location.component.css */ "./src/app/components/location/location.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbPaginationConfig"], _services_token_service__WEBPACK_IMPORTED_MODULE_6__["TokenService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], ng_snotify__WEBPACK_IMPORTED_MODULE_3__["SnotifyService"]])
    ], LocationComponent);
    return LocationComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":root {\r\n  --input-padding-x: 1.5rem;\r\n  --input-padding-y: 0.75rem;\r\n}\r\n\r\nbody {\r\n  background: #9CECFB;\r\n  /* fallback for old browsers */\r\n  /* Chrome 10-25, Safari 5.1-6 */\r\n  background: linear-gradient(to right, #0052D4, #65C7F7, #9CECFB);\r\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n}\r\n\r\n.card-signin {\r\n  border: 2px solid #65C7F7;\r\n  border-radius: 1rem;\r\n  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.card-signin .card-title {\r\n  margin-bottom: 2rem;\r\n  font-weight: 300;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.card-signin .card-body {\r\n  padding: 2rem;\r\n}\r\n\r\n.form-signin {\r\n  width: 100%;\r\n}\r\n\r\n.form-signin .btn {\r\n  font-size: 80%;\r\n  border-radius: 5rem;\r\n  letter-spacing: .1rem;\r\n  font-weight: bold;\r\n  padding: 1rem;\r\n  transition: all 0.2s;\r\n}\r\n\r\n.form-label-group {\r\n  position: relative;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.form-label-group input {\r\n  border-radius: 2rem;\r\n}\r\n\r\n.form-label-group>input,\r\n.form-label-group>label {\r\n  padding: 0.75rem 1.5rem;\r\n}\r\n\r\n.form-label-group>label {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  display: block;\r\n  width: 100%;\r\n  margin-bottom: 0;\r\n  /* Override default `<label>` margin */\r\n  line-height: 1.5;\r\n  color: #495057;\r\n  border: 1px solid transparent;\r\n  border-radius: .25rem;\r\n  transition: all .1s ease-in-out;\r\n}\r\n\r\n.form-label-group input:not(:placeholder-shown) {\r\n  padding-top: 1.00rem;\r\n  padding-bottom: 0.25rem;\r\n}\r\n\r\n.form-label-group input:not(:placeholder-shown)~label {\r\n  padding-top: 0.25rem;\r\n  padding-bottom: 0.25rem;\r\n  font-size: 12px;\r\n  color: #777;\r\n}\r\n\r\n.btn-google {\r\n  color: white;\r\n  background-color: #ea4335;\r\n}\r\n\r\n.btn-facebook {\r\n  color: white;\r\n  background-color: #3b5998;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\n        <div class=\"card card-signin my-5\">\n          <div class=\"card-body\">\n            <div class=\"alert alert-danger\" [hidden]=\"!error\">\n              {{ error }}\n            </div>\n            <h5 class=\"card-title text-center\">Sign In</h5>\n            <form class=\"form-signin\" #loginForm=ngForm (ngSubmit)=\"onSubmit()\">\n              <div class=\"form-label-group\">\n                <input type=\"email\" name=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required autofocus [(ngModel)]=\"form.email\">\n\n              </div>\n\n              <div class=\"form-label-group\">\n                <input type=\"password\" name=\"password\" id=\"inputPassword\" [(ngModel)]=\"form.password\" class=\"form-control\" placeholder=\"Password\" required>\n\n              </div>\n\n              <div class=\"custom-control custom-checkbox mb-3\">\n                <input type=\"checkbox\" name=\"remember_me\" class=\"custom-control-input\" id=\"customCheck1\" [(ngModel)]=\"form.remember_me\">\n                <label class=\"custom-control-label\" for=\"customCheck1\">Remember password</label>\n              </div>\n              <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"submit\" [disabled]=\"!loginForm.valid\">Sign in</button>\n            </form>\n\n            <p style=\"text-align: right;\"><a [routerLink]=\"['/reset-password']\" routerLinkActive=\"router-link-active\" ><small>Fogot Password?</small></a></p>\n              <hr class=\"my-4\">\n              <button class=\"btn btn-lg btn-google btn-block text-uppercase\" type=\"submit\"><i class=\"fab fa-google mr-2\"></i> Sign in with Google</button>\n              <button class=\"btn btn-lg btn-facebook btn-block text-uppercase\" type=\"submit\"><i class=\"fab fa-facebook-f mr-2\"></i> Sign in with Facebook</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
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
    function LoginComponent(api, token, router, auth, notify) {
        this.api = api;
        this.token = token;
        this.router = router;
        this.auth = auth;
        this.notify = notify;
        this.form = {
            email: null,
            password: null,
            remember_me: false
        };
        this.error = null;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.notify.info("Wait...", { timeout: 0 });
        var headers = {
            'Content-Type': 'application/json'
        };
        return this.api.post('auth/login', this.form, headers).subscribe(function (data) { return _this.tokenHandler(data); }, function (error) { return _this.errorHandler(error.error); });
    };
    LoginComponent.prototype.errorHandler = function (error) {
        this.notify.clear();
        console.log(error);
        if (error.errors && error.errors.email) {
            this.error = error.errors.email;
        }
        else if (error.message == "Unauthorized") {
            this.error = null;
            this.notify.error("Invalid Login Details or email not confirmed", { timeout: 0 });
        }
        else {
            this.error = null;
            this.notify.error(error.message, { timeout: 0 });
        }
    };
    LoginComponent.prototype.tokenHandler = function (data) {
        this.notify.clear();
        console.log(data);
        this.token.set(data.token_type + " " + data.access_token);
        this.auth.changeAuthStatus(true);
        this.router.navigateByUrl('/dashboard');
        this.notify.info("Login Succesfully", { timeout: 2000 });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            _services_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            ng_snotify__WEBPACK_IMPORTED_MODULE_5__["SnotifyService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/nav/nav.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/nav/nav.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/nav/nav.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/nav/nav.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark sticky-top\">\n  <button class=\"btn btn-default navbar-btn yay-toggle navbar-toggler\" *ngIf=\"loggedIn\" (click)='toggle()' type=\"button\" style=\"display: inline!important; margin-right: 10px!important\"><i class=\"fa fa-bars\"></i></button>\n  <a class=\"navbar-brand\" routerLink=\"\" *ngIf=\"!loggedIn\">EMS</a>\n  <a class=\"navbar-brand\" routerLink=\"dashboard\" *ngIf=\"loggedIn\">EMS</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" (click)=\"isCollapsed = !isCollapsed\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\" [ngbCollapse]=\"isCollapsed\">\n    <ul class=\"navbar-nav mr-auto\">\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <a class=\"text-white\" routerLink=\"login\" style=\"padding-right: 20px;\" *ngIf=\"!loggedIn\">Login</a>\n      <a class=\"text-white\" routerLink=\"signup\" style=\"padding-right: 20px;\" *ngIf=\"!loggedIn\">Register</a>\n\n      <a class=\"text-white\" href=\"javascript:void(0)\" (click)=\"logout($event)\" style=\"padding-right: 20px;\" *ngIf=\"loggedIn\">Logout</a>\n    </form>\n  </div>\n</nav>\n\n<!--\n\n  Yay Sidebar\n\n  Options [you can use all of theme classnames]:\n\n    .yay-hide-to-small   - no hide menu, just set it small with big icons\n\n    .yay-static          - stop using fixed sidebar (will scroll with content)\n\n    .yay-gestures        - to show and hide menu using gesture swipes\n\n    .yay-light           - light color scheme\n\n    .yay-overlap-content - hide menu on content click\n\n\n\n  Effects [you can use one of these classnames]:\n\n    .yay-overlay  - overlay content\n\n    .yay-push     - push content to right\n\n    .yay-shrink   - shrink content width\n\n-->\n<div style=\"position: fixed; top: 0; right: 0; bottom: 0; left: 0; z-index: 999; background-color: gray; opacity: 0.6;\" (click)='toggle()' *ngIf=\"_opened && loggedIn\"></div>\n  <div class=\"yaybar yay-hide-to-small yay-push yay-gestures\" *ngIf=\"_opened && loggedIn\" style=\"z-index: 1000;\">\n      <div class=\"nano\">\n        <div class=\"nano-content\">\n          <ul>\n            <li class=\"sidenav-content label\">Menu</li>\n\n            <li class=\"active\">\n              <a (click)=\"subtoggle('sub-users')\"><i class=\"fa fa-indent\"></i>Users Managment<span class=\"badge\"> 7 </span><span class=\"yay-collapse-icon fa fa-angle-down sidenav-content\"></span></a>\n              <ul class=\"sidenav-content\">\n                <li>\n                    <a class=\"sub-users\" routerLink=\"/users\" style=\"display: none\">Users</a>\n                    <a class=\"sub-users\" routerLink=\"/roles\" style=\"display: none\">Roles</a>\n                    <a class=\"sub-users\" routerLink=\"/permissions\" style=\"display: none\">Permissions</a>\n                </li>\n              </ul>\n            </li>\n\n            <li>\n                <a routerLink=\"/location\"><i class=\"fa fa-map-marker\"></i>Student Location</a>\n            </li>\n\n            <li>\n              <a routerLink=\"/attendance\"><i class=\"fa fa-book\"></i>Attendance Managment</a>\n            </li>\n\n          </ul>\n        </div>\n      </div>\n    </div>\n    <!-- /Yay Sidebar -->\n\n"

/***/ }),

/***/ "./src/app/components/nav/nav.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/nav/nav.component.ts ***!
  \*************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/token.service */ "./src/app/services/token.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavComponent = /** @class */ (function () {
    //private prevdata = null;
    function NavComponent(auth, router, token, notify) {
        this.auth = auth;
        this.router = router;
        this.token = token;
        this.notify = notify;
        this.isCollapsed = true;
        this._opened = false;
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.authStatus.subscribe(function (value) { return _this.loggedIn = value; });
        console.log(this.loggedIn);
    };
    NavComponent.prototype.logout = function (Event) {
        if (Event === void 0) { Event = MouseEvent; }
        event.preventDefault;
        this.token.remove();
        this.auth.changeAuthStatus(false);
        this.router.navigateByUrl('/login');
        location.reload();
        this.notify.info("Logout Succesfully", { timeout: 2000 });
    };
    NavComponent.prototype.toggle = function () {
        this._opened = !this._opened;
    };
    NavComponent.prototype.subtoggle = function (data) {
        console.log('clicked');
        var t = document.getElementsByClassName(data);
        //t[0].parentElement.className = t[0].parentElement.className.replace(/\bactive\b/g, "");
        for (var i = 0; i < t.length; i++) {
            var visibility = this.getElement(t[i]);
            if (visibility == 'none')
                this.changeDisplay(t[i], "block");
            else
                this.changeDisplay(t[i], "none");
        }
        //this.prevdata = data;
    };
    NavComponent.prototype.changeDisplay = function (element, data) {
        element.style.display = data;
    };
    NavComponent.prototype.getElement = function (element) {
        return element.style.display;
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/components/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/components/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"],
            ng_snotify__WEBPACK_IMPORTED_MODULE_1__["SnotifyService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/components/password/request-reset/request-reset.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/password/request-reset/request-reset.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":root {\r\n  --input-padding-x: 1.5rem;\r\n  --input-padding-y: 0.75rem;\r\n}\r\n\r\nbody {\r\n  background: #9CECFB;\r\n  /* fallback for old browsers */\r\n  /* Chrome 10-25, Safari 5.1-6 */\r\n  background: linear-gradient(to right, #0052D4, #65C7F7, #9CECFB);\r\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n}\r\n\r\n.card-signin {\r\n  border: 2px solid #65C7F7;\r\n  border-radius: 1rem;\r\n  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.card-signin .card-title {\r\n  margin-bottom: 2rem;\r\n  font-weight: 300;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.card-signin .card-body {\r\n  padding: 2rem;\r\n}\r\n\r\n.form-signin {\r\n  width: 100%;\r\n}\r\n\r\n.form-signin .btn {\r\n  font-size: 80%;\r\n  border-radius: 5rem;\r\n  letter-spacing: .1rem;\r\n  font-weight: bold;\r\n  padding: 1rem;\r\n  transition: all 0.2s;\r\n}\r\n\r\n.form-label-group {\r\n  position: relative;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.form-label-group input {\r\n  border-radius: 2rem;\r\n}\r\n\r\n.form-label-group>input,\r\n.form-label-group>label {\r\n  padding: 0.75rem 1.5rem;\r\n}\r\n\r\n.form-label-group>label {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  display: block;\r\n  width: 100%;\r\n  margin-bottom: 0;\r\n  /* Override default `<label>` margin */\r\n  line-height: 1.5;\r\n  color: #495057;\r\n  border: 1px solid transparent;\r\n  border-radius: .25rem;\r\n  transition: all .1s ease-in-out;\r\n}\r\n\r\n.form-label-group input::-webkit-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input:-ms-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input::-ms-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input::placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input:not(:placeholder-shown) {\r\n  padding-top: 1.00rem;\r\n  padding-bottom: 0.25rem;\r\n}\r\n\r\n.form-label-group input:not(:placeholder-shown)~label {\r\n  padding-top: 0.25rem;\r\n  padding-bottom: 0.25rem;\r\n  font-size: 12px;\r\n  color: #777;\r\n}\r\n\r\n.btn-google {\r\n  color: white;\r\n  background-color: #ea4335;\r\n}\r\n\r\n.btn-facebook {\r\n  color: white;\r\n  background-color: #3b5998;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/password/request-reset/request-reset.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/password/request-reset/request-reset.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\n        <div class=\"card card-signin my-5\">\n          <div class=\"card-body\">\n            <div class=\"alert alert-danger\" [hidden]=\"!error\">\n              {{ error }}\n            </div>\n            <h5 class=\"card-title text-center\">Reset Password</h5>\n            <form class=\"form-signin\" #passwordResetForm=ngForm (ngSubmit)=\"onSubmit()\">\n              <div class=\"form-label-group\">\n                <input type=\"email\" name=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Enter Email address\" required autofocus [(ngModel)]=\"form.email\">\n                <label for=\"inputEmail\">Email address</label>\n              </div>\n              <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"submit\" [disabled]=\"!passwordResetForm.valid\">Reset Password</button>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/password/request-reset/request-reset.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/password/request-reset/request-reset.component.ts ***!
  \******************************************************************************/
/*! exports provided: RequestResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestResetComponent", function() { return RequestResetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RequestResetComponent = /** @class */ (function () {
    function RequestResetComponent(api, notify) {
        this.api = api;
        this.notify = notify;
        this.form = {
            email: null
        };
        this.error = null;
    }
    RequestResetComponent.prototype.ngOnInit = function () {
    };
    RequestResetComponent.prototype.onSubmit = function () {
        var _this = this;
        this.notify.clear();
        var header = {
            'Content-Type': 'application/json'
        };
        this.notify.info('Wait...', { timeout: 0 });
        return this.api.post('password/create', this.form, header).subscribe(function (data) { return _this.datahandler(data); }, function (error) { return _this.errorHandler(error.error); });
    };
    RequestResetComponent.prototype.datahandler = function (data) {
        this.notify.clear();
        this.notify.info(data.message);
    };
    RequestResetComponent.prototype.errorHandler = function (error) {
        this.notify.clear();
        console.log(error);
        if (error.errors && error.errors.email) {
            this.error = error.errors.email;
        }
        else {
            this.error = null;
            this.notify.error(error.message, { timeout: 0 });
        }
        this.form.email = null;
    };
    RequestResetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-request-reset',
            template: __webpack_require__(/*! ./request-reset.component.html */ "./src/app/components/password/request-reset/request-reset.component.html"),
            styles: [__webpack_require__(/*! ./request-reset.component.css */ "./src/app/components/password/request-reset/request-reset.component.css")]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            ng_snotify__WEBPACK_IMPORTED_MODULE_2__["SnotifyService"]])
    ], RequestResetComponent);
    return RequestResetComponent;
}());



/***/ }),

/***/ "./src/app/components/password/response-reset/response-reset.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/components/password/response-reset/response-reset.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":root {\r\n  --input-padding-x: 1.5rem;\r\n  --input-padding-y: 0.75rem;\r\n}\r\n\r\nbody {\r\n  background: #9CECFB;\r\n  /* fallback for old browsers */\r\n  /* Chrome 10-25, Safari 5.1-6 */\r\n  background: linear-gradient(to right, #0052D4, #65C7F7, #9CECFB);\r\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n}\r\n\r\n.card-signin {\r\n  border: 2px solid #65C7F7;\r\n  border-radius: 1rem;\r\n  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.card-signin .card-title {\r\n  margin-bottom: 2rem;\r\n  font-weight: 300;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.card-signin .card-body {\r\n  padding: 2rem;\r\n}\r\n\r\n.form-signin {\r\n  width: 100%;\r\n}\r\n\r\n.form-signin .btn {\r\n  font-size: 80%;\r\n  border-radius: 5rem;\r\n  letter-spacing: .1rem;\r\n  font-weight: bold;\r\n  padding: 1rem;\r\n  transition: all 0.2s;\r\n}\r\n\r\n.form-label-group {\r\n  position: relative;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.form-label-group input {\r\n  border-radius: 2rem;\r\n}\r\n\r\n.form-label-group>input,\r\n.form-label-group>label {\r\n  padding: 0.75rem 1.5rem;\r\n}\r\n\r\n.form-label-group>label {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  display: block;\r\n  width: 100%;\r\n  margin-bottom: 0;\r\n  /* Override default `<label>` margin */\r\n  line-height: 1.5;\r\n  color: #495057;\r\n  border: 1px solid transparent;\r\n  border-radius: .25rem;\r\n  transition: all .1s ease-in-out;\r\n}\r\n\r\n.btn-google {\r\n  color: white;\r\n  background-color: #ea4335;\r\n}\r\n\r\n.btn-facebook {\r\n  color: white;\r\n  background-color: #3b5998;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/password/response-reset/response-reset.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/password/response-reset/response-reset.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\n        <div class=\"card card-signin my-5\">\n          <div class=\"card-body\">\n            <div class=\"alert alert-danger\" [hidden]=\"!error\">\n                {{ error }}\n              </div>\n            <h5 class=\"card-title text-center\">Reset Password</h5>\n            <form class=\"form-signin\" #ResetResponseForm=ngForm (ngSubmit)=\"onSubmit()\">\n              <div class=\"form-label-group\">\n                <input type=\"email\" name=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required autofocus [(ngModel)]=\"form.email\">\n              </div>\n\n              <div class=\"form-label-group\">\n                <input type=\"password\" name=\"password\" id=\"inputPassword\" [(ngModel)]=\"form.password\" class=\"form-control\" placeholder=\"Password\" required>\n              </div>\n\n              <div class=\"form-label-group\">\n                <input type=\"password\" name=\"password_confirmation\" id=\"inputPasswordConfirmation\" [(ngModel)]=\"form.password_confirmation\" class=\"form-control\" placeholder=\"Re Enter Password\" required>\n              </div>\n\n              <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"submit\" [disabled]=\"!ResetResponseForm.valid\">Change Password</button>\n            </form>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/password/response-reset/response-reset.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/password/response-reset/response-reset.component.ts ***!
  \********************************************************************************/
/*! exports provided: ResponseResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseResetComponent", function() { return ResponseResetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResponseResetComponent = /** @class */ (function () {
    function ResponseResetComponent(api, router, notify, route) {
        var _this = this;
        this.api = api;
        this.router = router;
        this.notify = notify;
        this.route = route;
        this.error = null;
        this.form = {
            email: null,
            password: null,
            password_confirmation: null,
            token: null
        };
        route.queryParams.subscribe(function (params) {
            _this.form.token = params['token'];
        });
    }
    ResponseResetComponent.prototype.ngOnInit = function () {
    };
    ResponseResetComponent.prototype.onSubmit = function () {
        var _this = this;
        this.notify.clear();
        this.notify.info('Wait...', { timeout: 0 });
        var header = {
            'Content-Type': 'application/json'
        };
        return this.api.get('password/find/' + this.form.token, header).subscribe(function (data) { return _this.resetHandler(data); }, function (error) { return _this.handleerror(error.error); });
    };
    ResponseResetComponent.prototype.handleerror = function (error) {
        console.log(error);
        this.notify.clear();
        if (error.errors && error.errors.password) {
            this.error = error.errors.password;
        }
        else
            this.notify.error(error.message, { timeout: 0 });
    };
    ResponseResetComponent.prototype.resetHandler = function (data) {
        var _this = this;
        this.notify.clear();
        console.log(data);
        if (data.email == this.form.email) {
            this.notify.info('Wait...', { timeout: 0 });
            var header = {
                'Content-Type': 'application/json'
            };
            return this.api.post('password/reset', this.form, header).subscribe(function (data) {
                _this.notify.clear();
                _this.notify.info('Password Reset Successfully', { timeout: 2000 });
                _this.router.navigateByUrl('/login');
            }, function (error) { return _this.handleerror(error.error); });
        }
        else {
            this.notify.error("Incorrect Email", { timeout: 0 });
        }
    };
    ResponseResetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-response-reset',
            template: __webpack_require__(/*! ./response-reset.component.html */ "./src/app/components/password/response-reset/response-reset.component.html"),
            styles: [__webpack_require__(/*! ./response-reset.component.css */ "./src/app/components/password/response-reset/response-reset.component.css")]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ng_snotify__WEBPACK_IMPORTED_MODULE_3__["SnotifyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ResponseResetComponent);
    return ResponseResetComponent;
}());



/***/ }),

/***/ "./src/app/components/permissions/permissions.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/permissions/permissions.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/permissions/permissions.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/permissions/permissions.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\" style=\"margin-top: 30px;\">\n    <div class=\"col-6\">\n      <h3>Permissions</h3>\n    </div>\n    <div class=\"col-md-3 col-6 text-right\">\n      <a class=\"text-white btn btn-info\" (click)='add()'>Add New Permission</a>\n    </div>\n    <div class=\"col-md-3 text-right\">\n      <input type=\"search\" class=\"form-control\" id=\"search\" name=\"search\" placeholder=\"Search\"  [(ngModel)]=\"keyword\" (keyup)=\"search()\"/>\n    </div>\n  </div>\n</div>\n<hr>\n\n<div class=\"container\">\n    <table class=\"table table-bordered text-center\">\n        <thead>\n          <tr>\n            <th (click)=\"sort('name')\"><a href=\"javascript:void(0)\" style=\"color:black\">Name <span *ngIf=\"sortData.col=='name'\"><i class=\"fa fa-caret-down\" *ngIf=\"sortData.order=='asc'\"></i><i class=\"fa fa-caret-up\" *ngIf=\"sortData.order=='desc'\"></i></span></a></th>\n            <th>Action</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let permission of permissions\">\n            <td>{{ permission.name }}</td>\n              <td>\n              <a href=\"javascript:void(0)\" class=\"item\"  (click)='edit( permission.id )' data-toggle=\"tooltip\" data-placement=\"top\" title=\"Edit\" style=\"padding-right: 10px;\">\n                  <i class=\"fa fa-edit\"></i>\n              </a>\n              <a href=\"javascript:void(0)\" class=\"item\"  (click)='delete( permission.id )' data-toggle=\"tooltip\" data-placement=\"top\" title=\"Delete\" style=\"padding-right: 10px;\">\n                  <i class=\"fa fa-trash\"></i>\n              </a>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n      <div class=\"col-12 justify-content-center\" style=\"display: flex !important; justify-content: center !important;\">\n        <ngb-pagination [(collectionSize)]=\"pagination.max\" (pageChange)=\"paginateClick($event)\" [(page)]=\"pagination.page\" (onclick)=\"paginateClick()\"></ngb-pagination>\n      </div>\n    </div>\n\n<!-- The Modal -->\n<div id=\"editModal\" class=\"modal\" style=\"background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4);\">\n  <div class=\"modal-dialog\" permission=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Edit Permission</h5>\n        <button type=\"button\" class=\"close\" (click)='closeEditModal()'>\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n            <div class=\"alert alert-danger\" [hidden]=\"!error.name\">\n                {{ error.name }}\n              </div>\n        <form #newPermissionForm=ngForm>\n          <div class=\"form-group\">\n              <label for=\"name\">Name</label>\n              <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" placeholder=\"Enter name\"  required [(ngModel)]=\"data.name\"/>\n          </div>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"submit\" class=\"btn btn-primary\"  [disabled]=\"!newPermissionForm.valid\" (click)='editsubmit()'>Save changes</button>\n        <button type=\"button\" class=\"btn btn-secondary\" (click)='closeEditModal()'>Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- The Modal -->\n<div id=\"addModal\" class=\"modal\" style=\"background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4);\">\n\n  <div class=\"modal-dialog\" permission=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Add New Permission</h5>\n        <button type=\"button\" class=\"close\" (click)='closeAddModal()'>\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n            <div class=\"alert alert-danger\" [hidden]=\"!error.name\">\n                {{ error.name }}\n              </div>\n        <form #editPermissionForm=ngForm>\n\n            <div class=\"form-group\">\n                <label for=\"name\">Name</label>\n              <input type=\"name\" name=\"name\" id=\"inputName\" class=\"form-control\" placeholder=\"Name\" [(ngModel)]=\"form.name\" required>\n            </div>\n\n        </form>\n\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)='addModalSubmit()' [disabled]=\"!editPermissionForm.valid\">Save changes</button>\n        <button type=\"button\" class=\"btn btn-secondary\" (click)='closeAddModal()'>Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/permissions/permissions.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/permissions/permissions.component.ts ***!
  \*****************************************************************/
/*! exports provided: PermissionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionsComponent", function() { return PermissionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/token.service */ "./src/app/services/token.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PermissionsComponent = /** @class */ (function () {
    function PermissionsComponent(pg, token, http, router, api, notify) {
        this.pg = pg;
        this.token = token;
        this.http = http;
        this.router = router;
        this.api = api;
        this.notify = notify;
        this.permissions = null; //Store API Data
        this.error = []; //Form errors
        this.keyword = null; //Current Search Keyword
        this.pagination = {
            'page': '1',
            'max': '10'
        };
        this.data = {
            "id": null,
            "name": null,
        };
        this.form = {
            name: null
        };
        this.headers = {
            'Authorization': this.token.get(),
            'X-Requested-With': 'XMLHttpRequest'
        };
        this.sortData = {
            "col": null,
            "order": null
        };
        pg.boundaryLinks = true;
        pg.rotate = true;
    }
    PermissionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.notify.clear();
        this.notify.info("Loading...", { timeout: 0 });
        if (this.keyword)
            this.api.get('permissions?search=' + this.keyword + '&page=' + this.pagination.page + '&sort=' + this.sortData.col + '&order=' + this.sortData.order, this.headers).subscribe(function (data) { return _this.datahandler(data); }, function (error) { _this.notify.clear(); _this.token.remove(); _this.router.navigateByUrl("/login"); });
        else
            this.api.get('permissions?page=' + this.pagination.page + '&sort=' + this.sortData.col + '&order=' + this.sortData.order, this.headers).subscribe(function (data) { return _this.datahandler(data); }, function (error) { _this.token.remove(); _this.router.navigateByUrl("/login"); });
    };
    PermissionsComponent.prototype.datahandler = function (data) {
        console.log(data.data);
        this.notify.clear();
        this.permissions = data.data;
        this.pagination.max = data.total;
    };
    //sort handler
    PermissionsComponent.prototype.sort = function (col) {
        console.log(col);
        if (this.sortData.order == "asc" && this.sortData.col == col) {
            this.sortData.order = "desc";
        }
        else if (this.sortData.order == "desc" && this.sortData.col == col) {
            this.sortData.order = null;
            col = null;
        }
        else {
            this.sortData.order = "asc";
        }
        this.sortData.col = col;
        this.ngOnInit();
    };
    //Paginate Handling
    PermissionsComponent.prototype.paginateClick = function (page) {
        console.log(page);
        this.pagination.page = page;
        this.ngOnInit();
    };
    //Serach Handling
    PermissionsComponent.prototype.search = function () {
        this.ngOnInit();
    };
    //Permission edit Handling
    PermissionsComponent.prototype.edit = function (id) {
        var _this = this;
        this.notify.clear();
        this.data.name = null;
        this.api.get('permissions/' + id, this.headers).subscribe(function (data) { return _this.editDataHandler(data); }, function (error) { return _this.notify.error("Permission Not Found", { timeout: 0 }); });
        this.data.id = id;
        var modal = document.getElementById('editModal');
        modal.style.display = "block";
    };
    PermissionsComponent.prototype.editDataHandler = function (data) {
        this.data.name = data.name;
    };
    PermissionsComponent.prototype.editsubmit = function () {
        var _this = this;
        this.notify.clear();
        this.notify.info("Wait...", { timeout: 0 });
        this.api.put('permissions/' + this.data.id, this.data, this.headers).subscribe(function (data) {
            _this.notify.clear();
            _this.notify.info("Permission Updated Successfully", { timeout: 2000 });
            _this.ngOnInit();
            _this.closeEditModal();
        }, function (error) { _this.notify.clear(); _this.error = error.error.errors; });
    };
    PermissionsComponent.prototype.closeEditModal = function () {
        this.error = [];
        var modal = document.getElementById('editModal');
        modal.style.display = "none";
    };
    //Permission delete Handling
    PermissionsComponent.prototype.delete = function (id) {
        var _this = this;
        this.notify.clear();
        this.notify.warning('Are you sure you want to detele this Permission?', 'Delete Permission', {
            timeout: 0,
            showProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            buttons: [
                { text: 'Yes', action: function () {
                        var headers = {
                            'Authorization': _this.token.get()
                        };
                        return _this.api.delete('permissions/' + id, headers).subscribe(function (data) { _this.notify.info("Success", { timeout: 2000 }); _this.ngOnInit(); }, function (error) { return _this.notify.error(error.message, { timeout: 0 }); });
                    }, bold: false },
                { text: 'No' }
            ]
        });
    };
    //New Permission add Handling
    PermissionsComponent.prototype.add = function () {
        this.notify.clear();
        this.form.name = null;
        var modal = document.getElementById('addModal');
        modal.style.display = "block";
    };
    PermissionsComponent.prototype.addModalSubmit = function () {
        var _this = this;
        this.notify.clear();
        this.notify.info("Wait...", { timeout: 0 });
        this.api.post('permissions', this.form, this.headers).subscribe(function (data) {
            _this.notify.clear();
            _this.notify.info("Permission Added Successfully", { timeout: 2000 });
            _this.ngOnInit();
            _this.closeAddModal();
        }, function (error) { _this.notify.clear(); _this.error = error.error.errors; });
    };
    PermissionsComponent.prototype.closeAddModal = function () {
        this.error = [];
        var modal = document.getElementById('addModal');
        modal.style.display = "none";
    };
    PermissionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-permissions',
            template: __webpack_require__(/*! ./permissions.component.html */ "./src/app/components/permissions/permissions.component.html"),
            styles: [__webpack_require__(/*! ./permissions.component.css */ "./src/app/components/permissions/permissions.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbPaginationConfig"], _services_token_service__WEBPACK_IMPORTED_MODULE_6__["TokenService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], ng_snotify__WEBPACK_IMPORTED_MODULE_3__["SnotifyService"]])
    ], PermissionsComponent);
    return PermissionsComponent;
}());



/***/ }),

/***/ "./src/app/components/roles/roles.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/roles/roles.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/roles/roles.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/roles/roles.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\" style=\"margin-top: 30px;\">\n      <div class=\"col-6\">\n        <h3>Roles</h3>\n      </div>\n      <div class=\"col-md-3 col-6 text-right\">\n        <a class=\"text-white btn btn-info\" (click)='add()'>Add New Role</a>\n      </div>\n      <div class=\"col-md-3 text-right\">\n        <input type=\"search\" class=\"form-control\" id=\"search\" name=\"search\" placeholder=\"Search\"  [(ngModel)]=\"keyword\" (keyup)=\"search()\"/>\n      </div>\n    </div>\n  </div>\n    <hr>\n\n    <div class=\"container\">\n        <table class=\"table table-bordered text-center\">\n            <thead>\n              <tr>\n                <th (click)=\"sort('name')\"><a href=\"javascript:void(0)\" style=\"color:black\">Name <span *ngIf=\"sortData.col=='name'\"><i class=\"fa fa-caret-down\" *ngIf=\"sortData.order=='asc'\"></i><i class=\"fa fa-caret-up\" *ngIf=\"sortData.order=='desc'\"></i></span></a></th>\n                <th>Permissions</th>\n                <th>Action</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let role of roles\">\n                <td>{{ role.name }}</td>\n                <td><div *ngFor=\"let permission of role.permissions\">{{ permission.name }}</div></td>\n                  <td>\n                  <a href=\"javascript:void(0)\" class=\"item\"  (click)='edit( role.id )' data-toggle=\"tooltip\" data-placement=\"top\" title=\"Edit\" style=\"padding-right: 10px;\">\n                      <i class=\"fa fa-edit\"></i>\n                  </a>\n                  <a href=\"javascript:void(0)\" class=\"item\"  (click)='delete( role.id )' data-toggle=\"tooltip\" data-placement=\"top\" title=\"Delete\" style=\"padding-right: 10px;\">\n                      <i class=\"fa fa-trash\"></i>\n                  </a>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <div class=\"col-12 justify-content-center\" style=\"display: flex !important; justify-content: center !important;\">\n            <ngb-pagination [(collectionSize)]=\"pagination.max\" (pageChange)=\"paginateClick($event)\" [(page)]=\"pagination.page\" (onclick)=\"paginateClick()\"></ngb-pagination>\n          </div>\n        </div>\n\n    <!-- The Modal -->\n    <div id=\"editModal\" class=\"modal\" style=\"background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4);\">\n\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <h5 class=\"modal-title\">Edit Role</h5>\n                <button type=\"button\" class=\"close\" (click)='closeEditModal()'>\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n              <div class=\"modal-body\">\n                    <div class=\"alert alert-danger\" [hidden]=\"!error.name\">\n                        {{ error.name }}\n                      </div>\n                <form #newRoleForm=ngForm>\n                  <div class=\"form-group\">\n                      <label for=\"name\">Name</label>\n                      <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" placeholder=\"Enter name\"  required [(ngModel)]=\"data.name\"/>\n                  </div>\n                  <div class=\"form-group\">\n                      <label for=\"name\">Permissions</label>\n                      <div *ngFor=\"let permission of permissions\">\n                          <input type=\"checkbox\" name=\"{{ permission.name }}\" value=\"{{ permission.name }}\" (change)=\"checkbox($event)\" *ngIf=\"!data.permission.includes(permission.name)\">\n                        <input type=\"checkbox\" name=\"{{ permission.name }}\" value=\"{{ permission.name }}\" (change)=\"checkbox($event)\" *ngIf=\"data.permission.includes(permission.name)\" checked> {{ permission.name }}\n                      </div>\n                  </div>\n                </form>\n              </div>\n              <div class=\"modal-footer\">\n                <button type=\"submit\" class=\"btn btn-primary\"  [disabled]=\"!newRoleForm.valid\" (click)='editsubmit()'>Save changes</button>\n                <button type=\"button\" class=\"btn btn-secondary\" (click)='closeEditModal()'>Close</button>\n              </div>\n            </div>\n          </div>\n\n    </div>\n\n    <!-- The Modal -->\n    <div id=\"addModal\" class=\"modal\" style=\"background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4);\">\n\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <h5 class=\"modal-title\">Add New Role</h5>\n                <button type=\"button\" class=\"close\" (click)='closeAddModal()'>\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n              <div class=\"modal-body\">\n                    <div class=\"alert alert-danger\" [hidden]=\"!error.name\">\n                        {{ error.name }}\n                      </div>\n                <form #editRoleForm=ngForm>\n\n                    <div class=\"form-group\">\n                        <label for=\"name\">Name</label>\n                      <input type=\"name\" name=\"name\" id=\"inputName\" class=\"form-control\" placeholder=\"Name\" [(ngModel)]=\"form.name\" required>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"name\">Permissions</label>\n                        <div *ngFor=\"let permission of permissions\">\n                            <input type=\"checkbox\" name=\"{{ permission.name }}\" value=\"{{ permission.name }}\" (change)=\"checkboxAdd($event)\"> {{ permission.name }}\n                        </div>\n                    </div>\n\n                </form>\n\n              </div>\n              <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-primary\" (click)='addModalSubmit()' [disabled]=\"!editRoleForm.valid\">Save changes</button>\n                <button type=\"button\" class=\"btn btn-secondary\" (click)='closeAddModal()'>Close</button>\n              </div>\n            </div>\n          </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/components/roles/roles.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/roles/roles.component.ts ***!
  \*****************************************************/
/*! exports provided: RolesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesComponent", function() { return RolesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/token.service */ "./src/app/services/token.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RolesComponent = /** @class */ (function () {
    function RolesComponent(pg, token, http, router, api, notify) {
        this.pg = pg;
        this.token = token;
        this.http = http;
        this.router = router;
        this.api = api;
        this.notify = notify;
        this.roles = null; //Store API Data
        this.permissions = null; //Store all permissions Data
        this.error = []; //Form errors
        this.keyword = null; //Current Search Keyword
        this.pagination = {
            'page': '1',
            'max': '10'
        };
        this.data = {
            "id": null,
            "name": null,
            "permission": []
        };
        this.form = {
            "name": null,
            "permission": []
        };
        this.headers = {
            'Authorization': this.token.get(),
            'X-Requested-With': 'XMLHttpRequest'
        };
        this.sortData = {
            "col": null,
            "order": null
        };
        pg.boundaryLinks = true;
        pg.rotate = true;
    }
    RolesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.notify.clear();
        this.notify.info("Loading...", { timeout: 0 });
        if (this.keyword)
            this.api.get('roles?search=' + this.keyword + '&page=' + this.pagination.page + '&sort=' + this.sortData.col + '&order=' + this.sortData.order, this.headers).subscribe(function (data) { return _this.datahandler(data); }, function (error) { _this.notify.clear(); _this.token.remove(); _this.router.navigateByUrl("/login"); });
        else
            this.api.get('roles?page=' + this.pagination.page + '&sort=' + this.sortData.col + '&order=' + this.sortData.order, this.headers).subscribe(function (data) { return _this.datahandler(data); }, function (error) { _this.token.remove(); _this.router.navigateByUrl("/login"); });
        this.api.get('permission', this.headers).subscribe(function (data) { console.log(data); _this.permissions = data; }, function (error) { _this.notify.clear(); _this.notify.error(error.error.message); });
    };
    RolesComponent.prototype.datahandler = function (data) {
        console.log(data.data);
        this.notify.clear();
        this.roles = data.data;
        this.pagination.max = data.total;
    };
    //sort handler
    RolesComponent.prototype.sort = function (col) {
        console.log(col);
        if (this.sortData.order == "asc" && this.sortData.col == col) {
            this.sortData.order = "desc";
        }
        else if (this.sortData.order == "desc" && this.sortData.col == col) {
            this.sortData.order = null;
            col = null;
        }
        else {
            this.sortData.order = "asc";
        }
        this.sortData.col = col;
        this.ngOnInit();
    };
    //Paginate Handling
    RolesComponent.prototype.paginateClick = function (page) {
        console.log(page);
        this.pagination.page = page;
        this.ngOnInit();
    };
    //Serach Handling
    RolesComponent.prototype.search = function () {
        this.ngOnInit();
    };
    //Role edit Handling
    RolesComponent.prototype.edit = function (id) {
        var _this = this;
        this.notify.clear();
        this.data.name = null;
        this.data.permission = [];
        this.api.get('roles/' + id, this.headers).subscribe(function (data) { return _this.editDataHandler(data); }, function (error) { return _this.notify.error("Role Not Found", { timeout: 0 }); });
        this.data.id = id;
        var modal = document.getElementById('editModal');
        modal.style.display = "block";
    };
    RolesComponent.prototype.editDataHandler = function (data) {
        this.data.name = data.name;
        for (var i = 0; i < data.permissions.length; i++)
            this.data.permission.push(data.permissions[i].name);
    };
    RolesComponent.prototype.checkbox = function (event) {
        if (event.srcElement.checked) {
            this.data.permission.push(event.srcElement.name);
        }
        else {
            var index = this.data.permission.indexOf(event.srcElement.name);
            this.data.permission.splice(index, index + 1);
        }
        console.log(this.data.permission);
    };
    RolesComponent.prototype.editsubmit = function () {
        var _this = this;
        this.notify.clear();
        this.notify.info("Wait...", { timeout: 0 });
        this.api.put('roles/' + this.data.id, this.data, this.headers).subscribe(function (data) {
            _this.notify.clear();
            _this.notify.info("Role Updated Successfully", { timeout: 2000 });
            _this.ngOnInit();
            _this.closeEditModal();
        }, function (error) { _this.notify.clear(); _this.error = error.error.errors; });
    };
    RolesComponent.prototype.closeEditModal = function () {
        this.error = [];
        var modal = document.getElementById('editModal');
        modal.style.display = "none";
    };
    //Role delete Handling
    RolesComponent.prototype.delete = function (id) {
        var _this = this;
        this.notify.clear();
        this.notify.warning('Are you sure you want to detele this Role?', 'Delete Role', {
            timeout: 0,
            showProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            buttons: [
                { text: 'Yes', action: function () {
                        var headers = {
                            'Authorization': _this.token.get()
                        };
                        return _this.api.delete('roles/' + id, headers).subscribe(function (data) { _this.notify.info("Success", { timeout: 2000 }); _this.ngOnInit(); }, function (error) { return _this.notify.error(error.message, { timeout: 0 }); });
                    }, bold: false },
                { text: 'No' }
            ]
        });
    };
    //New Role add Handling
    RolesComponent.prototype.add = function () {
        this.notify.clear();
        this.form.name = null;
        this.form.permission = [];
        var modal = document.getElementById('addModal');
        modal.style.display = "block";
    };
    RolesComponent.prototype.addModalSubmit = function () {
        var _this = this;
        this.notify.clear();
        this.notify.info("Wait...", { timeout: 0 });
        this.api.post('roles', this.form, this.headers).subscribe(function (data) {
            _this.notify.clear();
            _this.notify.info("Role Added Successfully", { timeout: 2000 });
            _this.ngOnInit();
            _this.closeAddModal();
        }, function (error) { _this.notify.clear(); _this.error = error.error.errors; });
    };
    RolesComponent.prototype.checkboxAdd = function (event) {
        if (event.srcElement.checked) {
            this.form.permission.push(event.srcElement.name);
        }
        else {
            var index = this.form.permission.indexOf(event.srcElement.name);
            this.form.permission.splice(index, index + 1);
        }
        console.log(this.form.permission);
    };
    RolesComponent.prototype.closeAddModal = function () {
        this.error = [];
        var modal = document.getElementById('addModal');
        modal.style.display = "none";
    };
    RolesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-roles',
            template: __webpack_require__(/*! ./roles.component.html */ "./src/app/components/roles/roles.component.html"),
            styles: [__webpack_require__(/*! ./roles.component.css */ "./src/app/components/roles/roles.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbPaginationConfig"], _services_token_service__WEBPACK_IMPORTED_MODULE_6__["TokenService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], ng_snotify__WEBPACK_IMPORTED_MODULE_3__["SnotifyService"]])
    ], RolesComponent);
    return RolesComponent;
}());



/***/ }),

/***/ "./src/app/components/signup-confrim/signup-confrim.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/signup-confrim/signup-confrim.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":root {\r\n  --input-padding-x: 1.5rem;\r\n  --input-padding-y: 0.75rem;\r\n}\r\n\r\nbody {\r\n  background: #9CECFB;\r\n  /* fallback for old browsers */\r\n  /* Chrome 10-25, Safari 5.1-6 */\r\n  background: linear-gradient(to right, #0052D4, #65C7F7, #9CECFB);\r\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n}\r\n\r\n.card-signin {\r\n  border: 2px solid #65C7F7;\r\n  border-radius: 1rem;\r\n  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.card-signin .card-title {\r\n  margin-bottom: 2rem;\r\n  font-weight: 300;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.card-signin .card-body {\r\n  padding: 2rem;\r\n}\r\n\r\n.form-signin {\r\n  width: 100%;\r\n}\r\n\r\n.form-signin .btn {\r\n  font-size: 80%;\r\n  border-radius: 5rem;\r\n  letter-spacing: .1rem;\r\n  font-weight: bold;\r\n  padding: 1rem;\r\n  transition: all 0.2s;\r\n}\r\n\r\n.form-label-group {\r\n  position: relative;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.form-label-group input {\r\n  border-radius: 2rem;\r\n}\r\n\r\n.form-label-group>input,\r\n.form-label-group>label {\r\n  padding: 0.75rem 1.5rem;\r\n}\r\n\r\n.form-label-group>label {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  display: block;\r\n  width: 100%;\r\n  margin-bottom: 0;\r\n  /* Override default `<label>` margin */\r\n  line-height: 1.5;\r\n  color: #495057;\r\n  border: 1px solid transparent;\r\n  border-radius: .25rem;\r\n  transition: all .1s ease-in-out;\r\n}\r\n\r\n.btn-google {\r\n  color: white;\r\n  background-color: #ea4335;\r\n}\r\n\r\n.btn-facebook {\r\n  color: white;\r\n  background-color: #3b5998;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/signup-confrim/signup-confrim.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/signup-confrim/signup-confrim.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\n        <div class=\"card card-signin my-5\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title text-center\">Activate Account</h5>\n            <form class=\"form-signin\" #ResetResponseForm=ngForm (ngSubmit)=\"onSubmit()\">\n              <div class=\"form-label-group\">\n                <input type=\"text\" name=\"token\" id=\"inputtoken\" class=\"form-control\" placeholder=\"Enter Activation Token\" required autofocus [(ngModel)]=\"token\">\n              </div>\n              <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"submit\" [disabled]=\"!ResetResponseForm.valid\">Activate</button>\n            </form>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/signup-confrim/signup-confrim.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/signup-confrim/signup-confrim.component.ts ***!
  \***********************************************************************/
/*! exports provided: SignupConfrimComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupConfrimComponent", function() { return SignupConfrimComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupConfrimComponent = /** @class */ (function () {
    function SignupConfrimComponent(notify, router, route, api) {
        var _this = this;
        this.notify = notify;
        this.router = router;
        this.route = route;
        this.api = api;
        this['token'] = null;
        route.queryParams.subscribe(function (params) {
            _this.token = params['token'];
        });
    }
    SignupConfrimComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.notify.clear();
        if (this.token) {
            this.notify.info("Wait...", { timeout: 0 });
            this.api.get("auth/signup/activate/" + this.token, null).subscribe(function (data) { _this.notify.clear(); _this.notify.info("Account Activated", { timeout: 2000 }); _this.router.navigateByUrl("/login"); }, function (error) { _this.notify.clear(); _this.notify.error(error.error.message); });
        }
    };
    SignupConfrimComponent.prototype.onSubmit = function () {
        this.ngOnInit();
    };
    SignupConfrimComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup-confrim',
            template: __webpack_require__(/*! ./signup-confrim.component.html */ "./src/app/components/signup-confrim/signup-confrim.component.html"),
            styles: [__webpack_require__(/*! ./signup-confrim.component.css */ "./src/app/components/signup-confrim/signup-confrim.component.css")]
        }),
        __metadata("design:paramtypes", [ng_snotify__WEBPACK_IMPORTED_MODULE_3__["SnotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], SignupConfrimComponent);
    return SignupConfrimComponent;
}());



/***/ }),

/***/ "./src/app/components/signup/signup.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/signup/signup.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":root {\r\n  --input-padding-x: 1.5rem;\r\n  --input-padding-y: 0.75rem;\r\n}\r\n\r\nbody {\r\n  background: #9CECFB;\r\n  /* fallback for old browsers */\r\n  /* Chrome 10-25, Safari 5.1-6 */\r\n  background: linear-gradient(to right, #0052D4, #65C7F7, #9CECFB);\r\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n}\r\n\r\n.card-signin {\r\n  border: 2px solid #65C7F7;\r\n  border-radius: 1rem;\r\n  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.card-signin .card-title {\r\n  margin-bottom: 2rem;\r\n  font-weight: 300;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.card-signin .card-body {\r\n  padding: 2rem;\r\n}\r\n\r\n.form-signin {\r\n  width: 100%;\r\n}\r\n\r\n.form-signin .btn {\r\n  font-size: 80%;\r\n  border-radius: 5rem;\r\n  letter-spacing: .1rem;\r\n  font-weight: bold;\r\n  padding: 1rem;\r\n  transition: all 0.2s;\r\n}\r\n\r\n.form-label-group {\r\n  position: relative;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.form-label-group input {\r\n  border-radius: 2rem;\r\n}\r\n\r\n.form-label-group>input,\r\n.form-label-group>label {\r\n  padding: 0.75rem 1.5rem;\r\n}\r\n\r\n.form-label-group>label {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  display: block;\r\n  width: 100%;\r\n  margin-bottom: 0;\r\n  /* Override default `<label>` margin */\r\n  line-height: 1.5;\r\n  color: #495057;\r\n  border: 1px solid transparent;\r\n  border-radius: .25rem;\r\n  transition: all .1s ease-in-out;\r\n}\r\n\r\n.form-label-group input:not(:placeholder-shown) {\r\n  padding-top: 1.00rem;\r\n  padding-bottom: 0.25rem;\r\n}\r\n\r\n.form-label-group input:not(:placeholder-shown)~label {\r\n  padding-top: 0.25rem;\r\n  padding-bottom: 0.25rem;\r\n  font-size: 12px;\r\n  color: #777;\r\n}\r\n\r\n.btn-google {\r\n  color: white;\r\n  background-color: #ea4335;\r\n}\r\n\r\n.btn-facebook {\r\n  color: white;\r\n  background-color: #3b5998;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/signup/signup.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/signup/signup.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\n        <div class=\"card card-signin my-5\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title text-center\">Add new User</h5>\n            <form class=\"form-signin\" #registerForm=ngForm (ngSubmit)=\"onSubmit()\">\n\n                <div class=\"alert alert-danger\" [hidden]=\"!error.role\">\n                    {{ error.role }}\n                  </div>\n                <div class=\"alert alert-danger\" [hidden]=\"!error.email\">\n                    {{ error.email }}\n                  </div>\n                  <div class=\"alert alert-danger\" [hidden]=\"!error.name\">\n                      {{ error.name }}\n                    </div>\n                  <div class=\"alert alert-danger\" [hidden]=\"!error.password\">\n                      {{ error.password }}\n                    </div>\n                  <!-- <div class=\"form-label-group\">\n                    <p>Role:</p>\n                    <select class=\"form-control\" name=\"role\" id=\"inputRole\" required [(ngModel)]=\"form.role\" autofocus>\n                        <option value=\"CompanyAdmin\">CompanyAdmin</option>\n                      </select>\n                    </div> -->\n\n              <div class=\"form-label-group\">\n                  <input type=\"name\" name=\"name\" id=\"inputName\" class=\"form-control\" placeholder=\"Name\" [(ngModel)]=\"form.name\" required>\n                </div>\n                <div class=\"form-label-group\">\n                    <input type=\"email\" name=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required [(ngModel)]=\"form.email\">\n                  </div>\n              <div class=\"form-label-group\">\n                <input type=\"password\" name=\"password\" id=\"inputPassword\" [(ngModel)]=\"form.password\" class=\"form-control\" placeholder=\"Password\" required>\n              </div>\n\n              <div class=\"form-label-group\">\n                <input type=\"password\" name=\"password_confirmation\" id=\"inputPasswordConfirm\" [(ngModel)]=\"form.password_confirmation\" class=\"form-control\" placeholder=\"Re enter Password\" required>\n              </div>\n\n              <div class=\"custom-control custom-checkbox mb-3\">\n                <input type=\"checkbox\" name=\"terms\" class=\"custom-control-input\" id=\"customCheck1\" [(ngModel)]=\"form.terms\">\n                <label class=\"custom-control-label\" for=\"customCheck1\">Agree terms and conditions</label>\n              </div>\n              <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"submit\" [disabled]=\"!registerForm.valid || form.terms==false\">Add</button>\n            </form>\n            </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/signup/signup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = /** @class */ (function () {
    function SignupComponent(api, token, router, notify) {
        this.api = api;
        this.token = token;
        this.router = router;
        this.notify = notify;
        this.form = {
            name: null,
            email: null,
            password: null,
            password_confirmation: null,
            terms: false
            // role : null
        };
        this.error = [];
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        this.notify.clear();
        this.notify.info('Wait...', { timeout: 0 });
        var header = {
            'Content-Type': 'application/json'
        };
        return this.api.post('auth/signup', this.form, header).subscribe(function (data) { return _this.tokenHandler(data); }, function (error) { return _this.errorHandle(error); });
    };
    SignupComponent.prototype.tokenHandler = function (data) {
        this.notify.clear();
        console.log(data);
        this.notify.info(data.message, { timeout: 2000 });
        this.notify.info("Please Confirm Email Address", { timeout: 0 });
        this.router.navigateByUrl('/login');
    };
    SignupComponent.prototype.errorHandle = function (error) {
        this.notify.clear();
        console.log(error);
        this.error = error.error.errors;
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/components/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/components/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            _services_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ng_snotify__WEBPACK_IMPORTED_MODULE_4__["SnotifyService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/components/users/users.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/users/users.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/users/users.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/users/users.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\" style=\"margin-top: 30px;\">\r\n    <div class=\"col-6\">\r\n      <h3>Users</h3>\r\n    </div>\r\n    <div class=\"col-md-3 col-6 text-right\">\r\n      <a class=\"text-white btn btn-info\" (click)='add()'>Add New User</a>\r\n    </div>\r\n    <div class=\"col-md-3 text-right\">\r\n      <input type=\"search\" class=\"form-control\" id=\"search\" name=\"search\" placeholder=\"Search\"  [(ngModel)]=\"keyword\" (keyup)=\"search()\"/>\r\n    </div>\r\n  </div>\r\n</div>\r\n  <hr>\r\n\r\n  <div class=\"container\">\r\n      <table class=\"table table-bordered text-center\">\r\n          <thead>\r\n            <tr>\r\n              <th>Avatar</th>\r\n              <th (click)=\"sort('name')\"><a href=\"javascript:void(0)\" style=\"color:black\">Name <span *ngIf=\"sortData.col=='name'\"><i class=\"fa fa-caret-down\" *ngIf=\"sortData.order=='asc'\"></i><i class=\"fa fa-caret-up\" *ngIf=\"sortData.order=='desc'\"></i></span></a></th>\r\n              <th (click)=\"sort('email')\"><a href=\"javascript:void(0)\" style=\"color:black\">Email <span *ngIf=\"sortData.col=='email'\"><i class=\"fa fa-caret-down\" *ngIf=\"sortData.order=='asc'\"></i><i class=\"fa fa-caret-up\" *ngIf=\"sortData.order=='desc'\"></i></span></a></th>\r\n              <th (click)=\"sort('active')\"><a href=\"javascript:void(0)\" style=\"color:black\">Active <span *ngIf=\"sortData.col=='active'\"><i class=\"fa fa-caret-down\" *ngIf=\"sortData.order=='desc'\"></i><i class=\"fa fa-caret-up\" *ngIf=\"sortData.order=='asc'\"></i></span></a></th>\r\n              <th>Role</th>\r\n              <th>Action</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let user of users\">\r\n              <td><img src=\"{{ user.avatar_url }}\" style=\"max-height: 40px;\"></td>\r\n              <td>{{ user.name }}</td>\r\n              <td>{{ user.email }}</td>\r\n              <td *ngIf=\"user.active\">Active</td>\r\n              <td *ngIf=\"!user.active\">Deactivated</td>\r\n              <td>\r\n                <div *ngFor=\"let role of user.roles\">{{ role.name }}</div>\r\n              </td>\r\n              <td>\r\n                <a href=\"javascript:void(0)\" class=\"item\"  (click)='pause( user.id )' data-toggle=\"tooltip\" data-placement=\"top\" title=\"Pause\" style=\"padding-right: 10px;\" *ngIf=\"user.active\">\r\n                    <i class=\"fa fa-pause\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"item\"  (click)='pause( user.id )' data-toggle=\"tooltip\" data-placement=\"top\" title=\"Continue\" style=\"padding-right: 10px;\" *ngIf=\"!user.active\">\r\n                    <i class=\"fa fa-play\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"item\"  (click)='edit( user.id )' data-toggle=\"tooltip\" data-placement=\"top\" title=\"Edit\" style=\"padding-right: 10px;\">\r\n                    <i class=\"fa fa-edit\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"item\"  (click)='delete( user.id )' data-toggle=\"tooltip\" data-placement=\"top\" title=\"Delete\" style=\"padding-right: 10px;\">\r\n                    <i class=\"fa fa-trash\"></i>\r\n                </a>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        <div class=\"col-12 justify-content-center\" style=\"display: flex !important; justify-content: center !important;\">\r\n          <ngb-pagination [(collectionSize)]=\"pagination.max\" (pageChange)=\"paginateClick($event)\" [(page)]=\"pagination.page\" (onclick)=\"paginateClick()\"></ngb-pagination>\r\n        </div>\r\n      </div>\r\n\r\n  <!-- The Modal -->\r\n  <div id=\"editModal\" class=\"modal\" style=\"background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4);\">\r\n\r\n      <div class=\"modal-dialog\" role=\"document\">\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <h5 class=\"modal-title\">Edit User</h5>\r\n              <button type=\"button\" class=\"close\" (click)='closeEditModal()'>\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"alert alert-danger\" [hidden]=\"!error.role\">\r\n                    {{ error.role }}\r\n                  </div>\r\n                  <div class=\"alert alert-danger\" [hidden]=\"!error.name\">\r\n                      {{ error.name }}\r\n                    </div>\r\n              <form #newUserForm=ngForm>\r\n                <div class=\"form-group\">\r\n                    <label for=\"name\">Name</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" placeholder=\"Enter name\"  required [(ngModel)]=\"data.name\"/>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"name\">Role</label>\r\n                    <div *ngFor=\"let role of roles\">\r\n                        <input type=\"checkbox\" name=\"{{ role.name }}\" value=\"{{ role.name }}\" (change)=\"checkbox($event)\" *ngIf=\"!data.role.includes(role.name)\">\r\n                      <input type=\"checkbox\" name=\"{{ role.name }}\" value=\"{{ role.name }}\" (change)=\"checkbox($event)\" *ngIf=\"data.role.includes(role.name)\" checked> {{ role.name }}\r\n                    </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <button type=\"submit\" class=\"btn btn-primary\"  [disabled]=\"!newUserForm.valid\" (click)='editsubmit()'>Save changes</button>\r\n              <button type=\"button\" class=\"btn btn-secondary\" (click)='closeEditModal()'>Close</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n  </div>\r\n\r\n  <!-- The Modal -->\r\n  <div id=\"addModal\" class=\"modal\" style=\"background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4);\">\r\n\r\n      <div class=\"modal-dialog\" role=\"document\">\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <h5 class=\"modal-title\">Add New User</h5>\r\n              <button type=\"button\" class=\"close\" (click)='closeAddModal()'>\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"alert alert-danger\" [hidden]=\"!error.role\">\r\n                    {{ error.role }}\r\n                  </div>\r\n                <div class=\"alert alert-danger\" [hidden]=\"!error.email\">\r\n                    {{ error.email }}\r\n                  </div>\r\n                  <div class=\"alert alert-danger\" [hidden]=\"!error.name\">\r\n                      {{ error.name }}\r\n                    </div>\r\n                  <div class=\"alert alert-danger\" [hidden]=\"!error.password\">\r\n                      {{ error.password }}\r\n                    </div>\r\n              <form #editUserForm=ngForm>\r\n\r\n                  <div class=\"form-group\">\r\n                      <label for=\"name\">Name</label>\r\n                    <input type=\"name\" name=\"name\" id=\"inputName\" class=\"form-control\" placeholder=\"Name\" [(ngModel)]=\"form.name\" required>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                      <label for=\"name\">Email</label>\r\n                      <input type=\"email\" name=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required [(ngModel)]=\"form.email\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"name\">Role</label>\r\n                        <div *ngFor=\"let role of roles\">\r\n                            <input type=\"checkbox\" name=\"{{ role.name }}\" value=\"{{ role.name }}\" (change)=\"checkboxAdd($event)\"> {{ role.name }}\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"name\">Password</label>\r\n                  <input type=\"password\" name=\"password\" id=\"inputPassword\" [(ngModel)]=\"form.password\" class=\"form-control\" placeholder=\"Password\" required>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label for=\"name\">Password Confirmation</label>\r\n                  <input type=\"password\" name=\"password_confirmation\" id=\"inputPasswordConfirm\" [(ngModel)]=\"form.password_confirmation\" class=\"form-control\" placeholder=\"Re enter Password\" required>\r\n                </div>\r\n              </form>\r\n\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-primary\" (click)='addModalSubmit()' [disabled]=\"!editUserForm.valid\">Save changes</button>\r\n              <button type=\"button\" class=\"btn btn-secondary\" (click)='closeAddModal()'>Close</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/components/users/users.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/users/users.component.ts ***!
  \*****************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/token.service */ "./src/app/services/token.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UsersComponent = /** @class */ (function () {
    function UsersComponent(pg, token, http, router, api, notify) {
        this.pg = pg;
        this.token = token;
        this.http = http;
        this.router = router;
        this.api = api;
        this.notify = notify;
        this.users = null; //Store Users Data
        this.roles = null; //Store all roles Data
        this.error = []; //Form errors
        this.keyword = null; //Current Search Keyword
        this.pagination = {
            'page': '1',
            'max': '10'
        };
        this.data = {
            "id": null,
            "name": null,
            "role": []
        };
        this.form = {
            'name': null,
            'email': null,
            'password': null,
            'password_confirmation': null,
            'role': []
        };
        this.headers = {
            'Authorization': this.token.get(),
            'X-Requested-With': 'XMLHttpRequest'
        };
        this.sortData = {
            "col": null,
            "order": null
        };
        pg.boundaryLinks = true;
        pg.rotate = true;
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.notify.clear();
        this.notify.info("Loading...", { timeout: 0 });
        if (this.keyword) {
            this.api.get('users?search=' + this.keyword + '&page=' + this.pagination.page + '&sort=' + this.sortData.col + '&order=' + this.sortData.order, this.headers).subscribe(function (data) { return _this.datahandler(data); }, function (error) { _this.notify.clear(); _this.token.remove(); _this.router.navigateByUrl("/login"); });
        }
        else {
            this.api.get('users?page=' + this.pagination.page + '&sort=' + this.sortData.col + '&order=' + this.sortData.order, this.headers).subscribe(function (data) { return _this.datahandler(data); }, function (error) { _this.token.remove(); _this.router.navigateByUrl("/login"); });
        }
        this.api.get('role', this.headers).subscribe(function (data) { console.log(data); _this.roles = data; }, function (error) { _this.notify.clear(); _this.notify.error(error.error.message); });
    };
    UsersComponent.prototype.datahandler = function (data) {
        console.log(data.data);
        this.notify.clear();
        this.users = data.data;
        this.pagination.max = data.total;
    };
    //sort handler
    UsersComponent.prototype.sort = function (col) {
        console.log(col);
        if (this.sortData.order == "asc" && this.sortData.col == col) {
            this.sortData.order = "desc";
        }
        else if (this.sortData.order == "desc" && this.sortData.col == col) {
            this.sortData.order = null;
            col = null;
        }
        else {
            this.sortData.order = "asc";
        }
        this.sortData.col = col;
        this.ngOnInit();
    };
    //Paginate Handling
    UsersComponent.prototype.paginateClick = function (page) {
        console.log(page);
        this.pagination.page = page;
        this.ngOnInit();
    };
    //Serach Handling
    UsersComponent.prototype.search = function () {
        this.ngOnInit();
    };
    //Pause or Active User Handling
    UsersComponent.prototype.pause = function (id) {
        var _this = this;
        this.notify.clear();
        console.log(id);
        var body = {
            "id": id
        };
        return this.api.post('users/pause', body, this.headers).subscribe(function (data) { _this.notify.info("Success", { timeout: 2000 }); _this.ngOnInit(); }, function (error) { return _this.notify.error(error.message, { timeout: 0 }); });
    };
    //User edit Handling
    UsersComponent.prototype.edit = function (id) {
        var _this = this;
        this.notify.clear();
        this.data.name = null;
        this.data.role = [];
        this.api.get('users/' + id, this.headers).subscribe(function (data) { return _this.editDataHandler(data); }, function (error) { return _this.notify.error("User Not Found", { timeout: 0 }); });
        this.data.id = id;
        var modal = document.getElementById('editModal');
        modal.style.display = "block";
    };
    UsersComponent.prototype.editDataHandler = function (data) {
        console.log(data);
        this.data.name = data.name;
        for (var i = 0; i < data.roles.length; i++)
            this.data.role.push(data.roles[i].name);
    };
    UsersComponent.prototype.checkbox = function (event) {
        if (event.srcElement.checked) {
            this.data.role.push(event.srcElement.name);
        }
        else {
            var index = this.data.role.indexOf(event.srcElement.name);
            this.data.role.splice(index, index + 1);
        }
        console.log(this.data.role);
    };
    UsersComponent.prototype.editsubmit = function () {
        var _this = this;
        this.notify.clear();
        this.notify.info("Wait...", { timeout: 0 });
        this.api.put('users/' + this.data.id, this.data, this.headers).subscribe(function (data) {
            _this.notify.clear();
            _this.notify.info("User Updated Successfully", { timeout: 2000 });
            _this.ngOnInit();
            _this.closeEditModal();
        }, function (error) { _this.notify.clear(); _this.error = error.error.errors; });
    };
    UsersComponent.prototype.closeEditModal = function () {
        this.error = [];
        var modal = document.getElementById('editModal');
        modal.style.display = "none";
    };
    //User delete Handling
    UsersComponent.prototype.delete = function (id) {
        var _this = this;
        this.notify.clear();
        this.notify.warning('Are you sure you want to detele this User?', 'Delete User', {
            timeout: 0,
            showProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            buttons: [
                { text: 'Yes', action: function () {
                        var headers = {
                            'Authorization': _this.token.get()
                        };
                        return _this.api.delete('users/' + id, headers).subscribe(function (data) { _this.notify.info("Success", { timeout: 2000 }); _this.ngOnInit(); }, function (error) { return _this.notify.error(error.message, { timeout: 0 }); });
                    }, bold: false },
                { text: 'No' }
            ]
        });
    };
    //New User add Handling
    UsersComponent.prototype.add = function () {
        this.notify.clear();
        this.form.name = null;
        this.form.email = null;
        this.form.password = null;
        this.form.password_confirmation = null;
        this.form.role = [];
        var modal = document.getElementById('addModal');
        modal.style.display = "block";
    };
    UsersComponent.prototype.checkboxAdd = function (event) {
        if (event.srcElement.checked) {
            this.form.role.push(event.srcElement.name);
        }
        else {
            var index = this.form.role.indexOf(event.srcElement.name);
            this.form.role.splice(index, index + 1);
        }
        console.log(this.form.role);
    };
    UsersComponent.prototype.addModalSubmit = function () {
        var _this = this;
        this.notify.clear();
        this.notify.info("Wait...", { timeout: 0 });
        this.api.post('users', this.form, this.headers).subscribe(function (data) {
            _this.notify.clear();
            _this.notify.info("User Added Successfully", { timeout: 2000 });
            _this.ngOnInit();
            _this.closeAddModal();
        }, function (error) { _this.notify.clear(); _this.error = error.error.errors; });
    };
    UsersComponent.prototype.closeAddModal = function () {
        this.error = [];
        var modal = document.getElementById('addModal');
        modal.style.display = "none";
    };
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/components/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/components/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbPaginationConfig"], _services_token_service__WEBPACK_IMPORTED_MODULE_6__["TokenService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], ng_snotify__WEBPACK_IMPORTED_MODULE_3__["SnotifyService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/services/afterlogin.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/afterlogin.service.ts ***!
  \************************************************/
/*! exports provided: AfterloginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AfterloginService", function() { return AfterloginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token.service */ "./src/app/services/token.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AfterloginService = /** @class */ (function () {
    function AfterloginService(Token) {
        this.Token = Token;
    }
    AfterloginService.prototype.canActivate = function (route, state) {
        return this.Token.loggedIn();
    };
    AfterloginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"]])
    ], AfterloginService);
    return AfterloginService;
}());



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.host = "https://ems.aladinlabs.com";
        this.baseURL = this.host + "/api/";
    }
    ApiService.prototype.post = function (url, data, headers) {
        return this.http.post("" + this.baseURL + url, data, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](headers) });
    };
    ApiService.prototype.get = function (url, headers) {
        return this.http.get("" + this.baseURL + url, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](headers) });
    };
    ApiService.prototype.delete = function (url, headers) {
        return this.http.delete("" + this.baseURL + url, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](headers) });
    };
    ApiService.prototype.put = function (url, data, headers) {
        return this.http.put("" + this.baseURL + url, data, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](headers) });
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token.service */ "./src/app/services/token.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(token) {
        this.token = token;
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.token.loggedIn());
        this.authStatus = this.loggedIn.asObservable();
    }
    AuthService.prototype.changeAuthStatus = function (value) {
        this.loggedIn.next(value);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/beforelogin.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/beforelogin.service.ts ***!
  \*************************************************/
/*! exports provided: BeforeloginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeforeloginService", function() { return BeforeloginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token.service */ "./src/app/services/token.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BeforeloginService = /** @class */ (function () {
    function BeforeloginService(Token) {
        this.Token = Token;
    }
    BeforeloginService.prototype.canActivate = function (route, state) {
        return !this.Token.loggedIn();
    };
    BeforeloginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"]])
    ], BeforeloginService);
    return BeforeloginService;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService() {
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.currentMessage = this.messageSource.asObservable();
    }
    DataService.prototype.changeMessage = function (message) {
        this.messageSource.next(message);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/token.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/token.service.ts ***!
  \*******************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/app/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TokenService = /** @class */ (function () {
    function TokenService(api) {
        this.api = api;
        this.iss = {
            login: this.api.baseURL + 'login',
            signup: this.api.baseURL + 'signup'
        };
    }
    TokenService.prototype.set = function (token) {
        localStorage.setItem('token', token);
        //localStorage.setItem('user', JSON.stringify(token.user));
    };
    TokenService.prototype.get = function () {
        return localStorage.getItem('token');
    };
    TokenService.prototype.remove = function () {
        localStorage.removeItem('token');
    };
    TokenService.prototype.loggedIn = function () {
        var token = this.get();
        if (token == null)
            return false;
        return true;
    };
    TokenService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], TokenService);
    return TokenService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\xampp\htdocs\2nd Year\RoleManagmentFrontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map