function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/Services/Auth.service.ts":
  /*!**************************************!*\
    !*** ./src/Services/Auth.service.ts ***!
    \**************************************/

  /*! exports provided: AuthServiceService */

  /***/
  function srcServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthServiceService", function () {
      return AuthServiceService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AuthServiceService = /*#__PURE__*/function () {
      function AuthServiceService(client) {
        _classCallCheck(this, AuthServiceService);

        this.client = client;
        this.photoUrl = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]('../../assets/user.png');
        this.currentPhotoUrl = this.photoUrl.asObservable();
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]();
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ApiURL + 'auth/';
      }

      _createClass(AuthServiceService, [{
        key: "changeMemberPhoto",
        value: function changeMemberPhoto(photoUrl) {
          this.photoUrl.next(photoUrl);
        }
      }, {
        key: "login",
        value: function login(model) {
          var _this = this;

          return this.client.post(this.baseUrl + 'login', model).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            var user = response;
            console.log();

            if (user) {
              _this.storeUserDetail_In_localStorage(user);

              _this.changeMemberPhoto(_this.CurrentUser.photoURL);
            }
          }));
        }
      }, {
        key: "storeUserDetail_In_localStorage",
        value: function storeUserDetail_In_localStorage(current) {
          localStorage.setItem('token', current.token);
          localStorage.setItem('user', JSON.stringify(current.user));
          this.UserName = this.jwtHelper.decodeToken(current.token);
          this.CurrentUser = current.user;
        }
      }, {
        key: "Register",
        value: function Register(model) {
          return this.client.post(this.baseUrl + 'Register', model);
        }
      }, {
        key: "loggedIn",
        value: function loggedIn() {
          var token = localStorage.getItem('token');
          return !this.jwtHelper.isTokenExpired(token);
        }
      }]);

      return AuthServiceService;
    }();

    AuthServiceService.ɵfac = function AuthServiceService_Factory(t) {
      return new (t || AuthServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]));
    };

    AuthServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthServiceService,
      factory: AuthServiceService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/Services/UserService.service.ts":
  /*!*********************************************!*\
    !*** ./src/Services/UserService.service.ts ***!
    \*********************************************/

  /*! exports provided: UserServiceService */

  /***/
  function srcServicesUserServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserServiceService", function () {
      return UserServiceService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var src_app_models_Pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/_models/Pagination */
    "./src/app/_models/Pagination.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js"); // const httpOptions = {
    //  headers : new HttpHeaders({
    //    'Authorization': 'Bearer ' + localStorage.getItem('token')
    //  })
    // };


    var UserServiceService = /*#__PURE__*/function () {
      function UserServiceService(http) {
        _classCallCheck(this, UserServiceService);

        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].ApiURL;
      }

      _createClass(UserServiceService, [{
        key: "getUsers",
        value: function getUsers(page, itemPerPage, userParams, likesParam) {
          var paginatedResult = new src_app_models_Pagination__WEBPACK_IMPORTED_MODULE_3__["PaginationResult"]();
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

          if (page != null && itemPerPage != null) {
            params = params.append('pageNumber', page);
            params = params.append('pageSize', itemPerPage);
          }

          if (userParams != null) {
            params = params.append('minAge', userParams.minAge);
            params = params.append('maxAge', userParams.maxAge);
            params = params.append('gender', userParams.gender);
            params = params.append('orderBy', userParams.orderBy);
          }

          

          if (likesParam === 'Likers') {
            params = params.append('Likers', 'true');
          }

          if (likesParam === 'Likees') {
            params = params.append('Likees', 'true');
          }

          return this.http.get(this.baseUrl + 'Users/GetUsers', {
            observe: 'response',
            params: params
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            paginatedResult.result = res.body;

            if (res.headers.get('Pagination') != null) {
              
              paginatedResult.pagination = JSON.parse(res.headers.get('Pagination'));
              
            }

            console.log('fnsh  paginatedResult', paginatedResult);
            return paginatedResult;
          }));
        }
      }, {
        key: "updateUser",
        value: function updateUser(id, user) {
          return this.http.put(this.baseUrl + 'Users/updateUser?id=' + id, user);
        }
      }, {
        key: "getUser",
        value: function getUser(id) {
          return this.http.get(this.baseUrl + 'Users/getUserbyID/' + id);
        }
      }, {
        key: "DeletePhoto",
        value: function DeletePhoto(userId, id) {
          return this.http["delete"](this.baseUrl + 'users/' + userId + '/photos/' + id);
        }
      }, {
        key: "setMainPhoto",
        value: function setMainPhoto(userId, id) {
          return this.http.post(this.baseUrl + 'users/' + userId + '/photos/' + id + '/setMain', {});
        }
      }, {
        key: "sendLike",
        value: function sendLike(id, recipentId) {
          return this.http.post(this.baseUrl + 'users/LikeUser/' + id + '/like/' + recipentId, {});
        }
      }, {
        key: "getMessage",
        value: function getMessage(id, page, itemPerPage, messageContainer) {
          console.log('user service msg st');
          var paginatedResult = new src_app_models_Pagination__WEBPACK_IMPORTED_MODULE_3__["PaginationResult"]();
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
          params = params.append('messageContainer', messageContainer);

          if (page != null && itemPerPage != null) {
            params = params.append('pageNumber', page);
            params = params.append('pageSize', itemPerPage);
          }

          return this.http.get(this.baseUrl + 'users/' + id + '/message', {
            observe: 'response',
            params: params
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            paginatedResult.result = res.body;

            if (res.headers.get('Pagination') != null) {
              paginatedResult.pagination = JSON.parse(res.headers.get('Pagination'));
              console.log('user service msg result', paginatedResult.pagination);
            }

            return paginatedResult;
          }));
        }
      }, {
        key: "getMessageThread",
        value: function getMessageThread(id, recipientId) {
          return this.http.get(this.baseUrl + 'users/' + id + '/Message/threads/' + recipientId);
        }
      }, {
        key: "sendMessage",
        value: function sendMessage(id, message) {
          return this.http.post(this.baseUrl + 'users/' + id + '/Message', message);
        }
      }, {
        key: "deleteMessage",
        value: function deleteMessage(id, userId) {
          return this.http.post(this.baseUrl + 'users/' + userId + '/Message/' + id, {});
        }
      }, {
        key: "MarkMessageAsRead",
        value: function MarkMessageAsRead(userId, messageId) {
          return this.http.post(this.baseUrl + 'users/' + userId + '/Message/' + messageId + '/read', {}).subscribe();
        }
      }]);

      return UserServiceService;
    }();

    UserServiceService.ɵfac = function UserServiceService_Factory(t) {
      return new (t || UserServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    UserServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserServiceService,
      factory: UserServiceService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/Services/alertify.service.ts":
  /*!******************************************!*\
    !*** ./src/Services/alertify.service.ts ***!
    \******************************************/

  /*! exports provided: AlertifyService */

  /***/
  function srcServicesAlertifyServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertifyService", function () {
      return AlertifyService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var alertifyjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! alertifyjs */
    "./node_modules/alertifyjs/build/alertify.js");
    /* harmony import */


    var alertifyjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(alertifyjs__WEBPACK_IMPORTED_MODULE_1__);

    var AlertifyService = /*#__PURE__*/function () {
      function AlertifyService() {
        _classCallCheck(this, AlertifyService);
      }

      _createClass(AlertifyService, [{
        key: "confirm",
        value: function confirm(message, okCallback) {
          alertifyjs__WEBPACK_IMPORTED_MODULE_1__["confirm"](message, function (e) {
            if (e) {
              okCallback();
            }
          });
        }
      }, {
        key: "success",
        value: function success(message) {
          alertifyjs__WEBPACK_IMPORTED_MODULE_1__["success"](message);
        }
      }, {
        key: "error",
        value: function error(message) {
          alertifyjs__WEBPACK_IMPORTED_MODULE_1__["error"](message);
        }
      }, {
        key: "warning",
        value: function warning(message) {
          alertifyjs__WEBPACK_IMPORTED_MODULE_1__["warning"](message);
        }
      }, {
        key: "message",
        value: function message(_message) {
          alertifyjs__WEBPACK_IMPORTED_MODULE_1__["message"](_message);
        }
      }]);

      return AlertifyService;
    }();

    AlertifyService.ɵfac = function AlertifyService_Factory(t) {
      return new (t || AlertifyService)();
    };

    AlertifyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AlertifyService,
      factory: AlertifyService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertifyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/Services/error.Interceptor.ts":
  /*!*******************************************!*\
    !*** ./src/Services/error.Interceptor.ts ***!
    \*******************************************/

  /*! exports provided: ErrorInterceptor */

  /***/
  function srcServicesErrorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
      return ErrorInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ErrorInterceptor = /*#__PURE__*/function () {
      function ErrorInterceptor() {
        _classCallCheck(this, ErrorInterceptor);
      }

      _createClass(ErrorInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          console.log('Inter');
          return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            if (error.status === 401) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error.statusText);
            }

            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
              var applicationError = error.headers.get('Application-Error');

              if (applicationError) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(applicationError);
              }
            }

            var serverError = error.error;
            var modelStateError = '';

            if (serverError.errors && typeof serverError.errors === 'object') {
              for (var key in serverError.errors) {
                if (serverError.errors[key]) {
                  modelStateError += serverError.errors[key] + '\n';
                }
              }
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(modelStateError || serverError || 'Server Error');
          }));
        }
      }]);

      return ErrorInterceptor;
    }();

    ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) {
      return new (t || ErrorInterceptor)();
    };

    ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ErrorInterceptor,
      factory: ErrorInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/Home/Home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/Home/Home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _Register_UserRegister_UserRegister_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../Register/UserRegister/UserRegister.component */
    "./src/app/Register/UserRegister/UserRegister.component.ts");

    function HomeComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Find your match");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Come on in to view your matches.. All you need to do is sign up!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_1_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.Register();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Register");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Learn more");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-UserRegister", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("CancelRegister", function HomeComponent_div_2_Template_app_UserRegister_CancelRegister_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.RegisterCancel($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(http) {
        _classCallCheck(this, HomeComponent);

        this.http = http;
        this.RegisterMode = false;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('home');
          this.getclientRequest();
        }
      }, {
        key: "getclientRequest",
        value: function getclientRequest() {
          var _this2 = this;

          this.http.get('http://localhost:5000/api/Values/GetTest').subscribe(function (res) {
            _this2.values = res;
            console.log(_this2.values);
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "Register",
        value: function Register() {
          this.RegisterMode = true;
        }
      }, {
        key: "RegisterCancel",
        value: function RegisterCancel(value) {
          this.RegisterMode = value;
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-Home"]],
      decls: 3,
      vars: 2,
      consts: [[1, "container", "mt-5"], ["style", "text-align: center", 4, "ngIf"], ["class", "container", 4, "ngIf"], [2, "text-align", "center"], [1, "lead"], [1, "text-center"], [1, "btn", "btn-primary", "btn-lg", "mr-2", 3, "click"], [1, "btn", "btn-info", "btn-lg"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-4"], [3, "CancelRegister"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_1_Template, 10, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_2_Template, 4, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.RegisterMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.RegisterMode);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _Register_UserRegister_UserRegister_component__WEBPACK_IMPORTED_MODULE_3__["UserRegisterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0hvbWUvSG9tZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-Home',
          templateUrl: './Home.component.html',
          styleUrls: ['./Home.component.css']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Members/member-edit/member-edit.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/Members/member-edit/member-edit.component.ts ***!
    \**************************************************************/

  /*! exports provided: MemberEditComponent */

  /***/
  function srcAppMembersMemberEditMemberEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MemberEditComponent", function () {
      return MemberEditComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_Services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/Services/alertify.service */
    "./src/Services/alertify.service.ts");
    /* harmony import */


    var src_Services_UserService_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/Services/UserService.service */
    "./src/Services/UserService.service.ts");
    /* harmony import */


    var src_Services_Auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/Services/Auth.service */
    "./src/Services/Auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-bootstrap */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/esm5/ngx-bootstrap.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _photo_editor_photo_editor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../photo-editor/photo-editor.component */
    "./src/app/Members/photo-editor/photo-editor.component.ts");

    var _c0 = ["editform"];

    function MemberEditComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Information ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " you have made changes.. Any unsaved changes will be lost.! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var MemberEditComponent = /*#__PURE__*/function () {
      function MemberEditComponent(route, alert, servive, authServie) {
        _classCallCheck(this, MemberEditComponent);

        this.route = route;
        this.alert = alert;
        this.servive = servive;
        this.authServie = authServie;
      }

      _createClass(MemberEditComponent, [{
        key: "unloadNotification",
        value: function unloadNotification($event) {
          if (this.editForm.dirty) {
            $event.returnValue = true;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.route.data.subscribe(function (data) {
            _this3.user = data['user'];
          });
          this.authServie.currentPhotoUrl.subscribe(function (photoUrl) {
            return _this3.photoUrl = photoUrl;
          });
        }
      }, {
        key: "updateUser",
        value: function updateUser() {
          var _this4 = this;

          this.servive.updateUser(this.authServie.UserName.nameid, this.user).subscribe(function (next) {
            _this4.alert.success('successfully saved');

            _this4.editForm.reset(_this4.user);
          }, function (err) {
            console.log(_this4.user);

            _this4.alert.error(err);
          });
        }
      }, {
        key: "updateMain",
        value: function updateMain(Url) {
          console.log(Url);
          this.user.photoURL = Url;
        }
      }]);

      return MemberEditComponent;
    }();

    MemberEditComponent.ɵfac = function MemberEditComponent_Factory(t) {
      return new (t || MemberEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_Services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_Services_UserService_service__WEBPACK_IMPORTED_MODULE_3__["UserServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_Services_Auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthServiceService"]));
    };

    MemberEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MemberEditComponent,
      selectors: [["app-member-edit"]],
      viewQuery: function MemberEditComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.editForm = _t.first);
        }
      },
      hostBindings: function MemberEditComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("beforeunload", function MemberEditComponent_beforeunload_HostBindingHandler($event) {
            return ctx.unloadNotification($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 61,
      vars: 15,
      consts: [[1, "container", "mt-4"], [1, "row"], [1, "col-sm-4"], [1, "col-sm-8"], ["class", "alert alert-info", 4, "ngIf"], [1, "card"], [1, "card-img-top", "img-thumbnail", 3, "src", "alt"], [1, "card-body"], [1, "card-footer"], ["form", "editform", 1, "btn", "btn-success", "btn-block", 3, "disabled"], [1, "tab-panel"], [1, "member-tabset"], ["heading", "Edit profile"], ["id", "editform", 3, "ngSubmit"], ["editform", "ngForm"], ["name", "introduction", "rows", "5", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "lookingFor", "rows", "5", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "interest", "rows", "5", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-inline"], ["for", "city"], ["type", "text", "name", "city", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "country"], ["type", "text", "name", "country", 1, "form-control", 3, "ngModel", "ngModelChange"], ["heading", "Edit Photos"], [3, "photos"], [1, "alert", "alert-info"]],
      template: function MemberEditComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "your profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MemberEditComponent_div_6_Template, 4, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Location:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Age:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Last Active:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Member since:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Save changes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tabset", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tab", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "form", 13, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function MemberEditComponent_Template_form_ngSubmit_39_listener() {
            return ctx.updateUser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "textarea", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MemberEditComponent_Template_textarea_ngModelChange_43_listener($event) {
            return ctx.user.introduction = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Looking For");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "textarea", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MemberEditComponent_Template_textarea_ngModelChange_46_listener($event) {
            return ctx.user.lookingFor = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Interest");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "textarea", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MemberEditComponent_Template_textarea_ngModelChange_49_listener($event) {
            return ctx.user.interest = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Location Details:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "city");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MemberEditComponent_Template_input_ngModelChange_55_listener($event) {
            return ctx.user.city = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "country");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MemberEditComponent_Template_input_ngModelChange_58_listener($event) {
            return ctx.user.country = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "tab", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "app-photo-editor", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.dirty);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.photoUrl || "../../../../../assets/user.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.user == null ? null : ctx.user.knownAs);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.user.city, " , ", ctx.user.country, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.age);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.lastActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.createed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r1.dirty);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.introduction);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.lookingFor);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.interest);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.city);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.country);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("photos", ctx.user.photos);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["TabsetComponent"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["TabDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _photo_editor_photo_editor_component__WEBPACK_IMPORTED_MODULE_8__["PhotoEditorComponent"]],
      styles: [".img-thumbnail[_ngcontent-%COMP%] {\r\n    margin: 25px;\r\n    width: 85%;\r\n    height: 85%;\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%]{\r\n    padding: 0 25px;\r\n}\r\n\r\n.card-footer[_ngcontent-%COMP%] {\r\n    padding: 10px 15px;\r\n    background-color: #fff;\r\n    border-top: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTWVtYmVycy9tZW1iZXItZWRpdC9tZW1iZXItZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9NZW1iZXJzL21lbWJlci1lZGl0L21lbWJlci1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLXRodW1ibmFpbCB7XHJcbiAgICBtYXJnaW46IDI1cHg7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgaGVpZ2h0OiA4NSU7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHl7XHJcbiAgICBwYWRkaW5nOiAwIDI1cHg7XHJcbn1cclxuXHJcbi5jYXJkLWZvb3RlciB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MemberEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-member-edit',
          templateUrl: './member-edit.component.html',
          styleUrls: ['./member-edit.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: src_Services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"]
        }, {
          type: src_Services_UserService_service__WEBPACK_IMPORTED_MODULE_3__["UserServiceService"]
        }, {
          type: src_Services_Auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthServiceService"]
        }];
      }, {
        editForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['editform']
        }],
        unloadNotification: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:beforeunload', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/Members/member-list/member-card/member-card.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/Members/member-list/member-card/member-card.component.ts ***!
    \**************************************************************************/

  /*! exports provided: MemberCardComponent */

  /***/
  function srcAppMembersMemberListMemberCardMemberCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MemberCardComponent", function () {
      return MemberCardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_Services_Auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/Services/Auth.service */
    "./src/Services/Auth.service.ts");
    /* harmony import */


    var src_Services_UserService_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/Services/UserService.service */
    "./src/Services/UserService.service.ts");
    /* harmony import */


    var src_Services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/Services/alertify.service */
    "./src/Services/alertify.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0(a1) {
      return ["/member/", a1];
    };

    var _c1 = function _c1() {
      return {
        tab: 3
      };
    };

    var MemberCardComponent = /*#__PURE__*/function () {
      function MemberCardComponent(authServie, userService, alert) {
        _classCallCheck(this, MemberCardComponent);

        this.authServie = authServie;
        this.userService = userService;
        this.alert = alert;
        console.log('printed card' + this.users);
      }

      _createClass(MemberCardComponent, [{
        key: "sendLike",
        value: function sendLike(id) {
          var _this5 = this;

          this.userService.sendLike(this.authServie.UserName.nameid, id).subscribe(function (data) {
            _this5.alert.success('you have liked:' + _this5.users.knownAs);
          }, function (err) {
            _this5.alert.error(err);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('printed card oninit');
        }
      }]);

      return MemberCardComponent;
    }();

    MemberCardComponent.ɵfac = function MemberCardComponent_Factory(t) {
      return new (t || MemberCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_Services_Auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_Services_UserService_service__WEBPACK_IMPORTED_MODULE_2__["UserServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_Services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]));
    };

    MemberCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MemberCardComponent,
      selectors: [["app-member-card"]],
      inputs: {
        users: "users"
      },
      decls: 19,
      vars: 13,
      consts: [[1, "card", "mb-4"], [1, "card-img-wrapper"], [1, "card-img-top", 3, "src", "alt"], [1, "list-inline", "member-icons", "animate", "text-center"], [1, "list-inline-item"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "fa", "fa-user"], [1, "btn", "btn-primary", 3, "click"], [1, "fa", "fa-heart"], [1, "btn", "btn-primary", 3, "routerLink", "queryParams"], [1, "fa", "fa-envelope"], [1, "card-body", "p-1"], [1, "card-title", "text-center", "mb-1"], [1, "card-text", "text-muted", "text-center"]],
      template: function MemberCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MemberCardComponent_Template_button_click_8_listener() {
            return ctx.sendLike(ctx.users.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h6", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.users.photoURL || "../../../../../../assets/user.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.users.knownAs);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.users.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.users.id))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.users.knownAs, " ", ctx.users.age, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.users.city, " ");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]],
      styles: [".card[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\r\n        transform: scale(1.2,1.2);\r\n        transition-duration: 500ms;\r\n        transition-timing-function: ease-out;\r\n        opacity: 0.7;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n\r\n    transform: scale(1.0,1.0);\r\n    transition-duration: 500ms;\r\n    transition-timing-function: ease-out;\r\n}\r\n\r\n.card-img-wrapper[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n\r\n.member-icons[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: -30%;\r\n    left: 0;\r\n    right: 0;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    opacity: 0;\r\n}\r\n\r\n.card-img-wrapper[_ngcontent-%COMP%]:hover   .member-icons[_ngcontent-%COMP%] { \r\n    bottom:0;\r\n    opacity: 1;\r\n}\r\n\r\n.animate[_ngcontent-%COMP%]{\r\n    transition: all 0.3s ease-in-out;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTWVtYmVycy9tZW1iZXItbGlzdC9tZW1iZXItY2FyZC9tZW1iZXItY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO1FBQ1EseUJBQXlCO1FBQ3pCLDBCQUEwQjtRQUMxQixvQ0FBb0M7UUFDcEMsWUFBWTtBQUNwQjs7QUFFQTs7SUFFSSx5QkFBeUI7SUFDekIsMEJBQTBCO0lBQzFCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLE9BQU87SUFDUCxRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxRQUFRO0lBQ1IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDIiwiZmlsZSI6InNyYy9hcHAvTWVtYmVycy9tZW1iZXItbGlzdC9tZW1iZXItY2FyZC9tZW1iZXItY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQ6aG92ZXIgaW1nIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMiwxLjIpO1xyXG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xyXG4gICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuXHJcbi5jYXJkIGltZyB7XHJcblxyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAsMS4wKTtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xyXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG59XHJcblxyXG4uY2FyZC1pbWctd3JhcHBlciB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5tZW1iZXItaWNvbnMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAtMzAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uY2FyZC1pbWctd3JhcHBlcjpob3ZlciAubWVtYmVyLWljb25zIHsgXHJcbiAgICBib3R0b206MDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5hbmltYXRle1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MemberCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-member-card',
          templateUrl: './member-card.component.html',
          styleUrls: ['./member-card.component.css']
        }]
      }], function () {
        return [{
          type: src_Services_Auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthServiceService"]
        }, {
          type: src_Services_UserService_service__WEBPACK_IMPORTED_MODULE_2__["UserServiceService"]
        }, {
          type: src_Services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]
        }];
      }, {
        users: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/Members/member-list/member-list.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/Members/member-list/member-list.component.ts ***!
    \**************************************************************/

  /*! exports provided: MemberListComponent */

  /***/
  function srcAppMembersMemberListMemberListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MemberListComponent", function () {
      return MemberListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_Services_UserService_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/Services/UserService.service */
    "./src/Services/UserService.service.ts");
    /* harmony import */


    var src_Services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/Services/alertify.service */
    "./src/Services/alertify.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-bootstrap/pagination */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/pagination/fesm2015/ngx-bootstrap-pagination.js");
    /* harmony import */


    var _member_card_member_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./member-card/member-card.component */
    "./src/app/Members/member-list/member-card/member-card.component.ts");

    function MemberListComponent_option_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r3.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3.display, " ");
      }
    }

    function MemberListComponent_div_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-member-card", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("users", user_r4);
      }
    }

    var MemberListComponent = /*#__PURE__*/function () {
      function MemberListComponent(service, alertMsg, route) {
        _classCallCheck(this, MemberListComponent);

        this.service = service;
        this.alertMsg = alertMsg;
        this.route = route;
        this.user = JSON.parse(localStorage.getItem('user')); // display gender into dropdown

        this.genderList = [{
          value: 'male',
          display: 'Males'
        }, {
          value: 'female',
          display: 'Females'
        }];
        this.userParams = {};
      }

      _createClass(MemberListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.route.data.subscribe(function (data) {
            _this6.users = data['users'].result;
            _this6.pagination = data['users'].pagination;
          });
          this.userParams.gender = this.user.gender === 'male' ? 'female' : 'male';
          this.userParams.minAge = 18;
          this.userParams.maxAge = 99;
          this.userParams.orderBy = 'lastActive';
        }
      }, {
        key: "reset",
        value: function reset() {
          this.userParams.gender = this.user.gender === 'male' ? 'female' : 'male';
          this.userParams.minAge = 18;
          this.userParams.maxAge = 99;
          this.loaduser();
        }
      }, {
        key: "pageChanged",
        value: function pageChanged(event) {
          this.pagination.currentPage = event.page;
          this.loaduser();
        }
      }, {
        key: "loaduser",
        value: function loaduser() {
          var _this7 = this;

          this.service.getUsers(this.pagination.currentPage, this.pagination.itemsPerPage, this.userParams).subscribe(function (res) {
            _this7.users = res.result;
            _this7.pagination = res.pagination;
          }, function (error) {
            _this7.alertMsg.error(error);
          });
        }
      }]);

      return MemberListComponent;
    }();

    MemberListComponent.ɵfac = function MemberListComponent_Factory(t) {
      return new (t || MemberListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_Services_UserService_service__WEBPACK_IMPORTED_MODULE_1__["UserServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_Services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    MemberListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MemberListComponent,
      selectors: [["app-member-list"]],
      decls: 34,
      vars: 12,
      consts: [[1, "text-center", "mt-3"], [1, "container", "mt-3"], ["novalidate", "", 1, "form-inline", 3, "ngSubmit"], ["form", "ngForm"], [1, "form-group"], ["for", "minAge"], ["type", "number", "id", "minAge", "name", "minAge", 1, "form-control", "ml-1", 2, "width", "70px", 3, "ngModel", "ngModelChange"], [1, "form-group", "px-2"], ["for", "maxAge"], ["type", "number", "id", "maxAge", "name", "maxAge", 1, "form-control", "ml-1", 2, "width", "70px", 3, "ngModel", "ngModelChange"], ["for", "gender"], ["id", "gender", "name", "gender", 1, "form-control", "ml-1", 2, "width", "130px", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "submit", 1, "btn", "btn-primary", 2, "margin-left", "10px"], ["type", "button", 1, "btn", "btn-info", 2, "margin-left", "10px", 3, "click"], [1, "col"], [1, "btn-group", "float-right"], ["type", "button", "name", "orderBy", "value", "lastActive", 1, "btn", "btn-primary", 3, "ngModel", "ngModelChange", "click"], ["type", "button", "name", "orderBy", "value", "created", 1, "btn", "btn-primary", 3, "ngModel", "ngModelChange", "click"], [1, "row"], ["class", "col-lg-2 col-md-3 col-sm-6", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center"], ["previousText", "\u2039", "nextText", "\u203A", "firstText", "\xAB", "lastText", "\xBB", 3, "boundaryLinks", "totalItems", "itemsPerPage", "ngModel", "ngModelChange", "pageChanged"], [3, "value"], [1, "col-lg-2", "col-md-3", "col-sm-6"], [3, "users"]],
      template: function MemberListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function MemberListComponent_Template_form_ngSubmit_4_listener() {
            return ctx.loaduser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Age From");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MemberListComponent_Template_input_ngModelChange_9_listener($event) {
            return ctx.userParams.minAge = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Age To");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MemberListComponent_Template_input_ngModelChange_13_listener($event) {
            return ctx.userParams.maxAge = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Show: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "select", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MemberListComponent_Template_select_ngModelChange_17_listener($event) {
            return ctx.userParams.gender = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, MemberListComponent_option_18_Template, 2, 2, "option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Apply Filters");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MemberListComponent_Template_button_click_21_listener() {
            return ctx.reset();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Reset Filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MemberListComponent_Template_button_ngModelChange_25_listener($event) {
            return ctx.userParams.orderBy = $event;
          })("click", function MemberListComponent_Template_button_click_25_listener() {
            return ctx.loaduser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Last Active");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MemberListComponent_Template_button_ngModelChange_27_listener($event) {
            return ctx.userParams.orderBy = $event;
          })("click", function MemberListComponent_Template_button_click_27_listener() {
            return ctx.loaduser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Newest Members");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, MemberListComponent_div_31_Template, 2, 1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "pagination", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MemberListComponent_Template_pagination_ngModelChange_33_listener($event) {
            return ctx.pagination.currentPage = $event;
          })("pageChanged", function MemberListComponent_Template_pagination_pageChanged_33_listener($event) {
            return ctx.pageChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Your matches - ", ctx.pagination.totalItems, " found");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userParams.minAge);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userParams.maxAge);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userParams.gender);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.genderList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userParams.orderBy);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userParams.orderBy);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("boundaryLinks", true)("totalItems", ctx.pagination.totalItems)("itemsPerPage", ctx.pagination.itemsPerPage)("ngModel", ctx.pagination.currentPage);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_6__["PaginationComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _member_card_member_card_component__WEBPACK_IMPORTED_MODULE_7__["MemberCardComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL01lbWJlcnMvbWVtYmVyLWxpc3QvbWVtYmVyLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MemberListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-member-list',
          templateUrl: './member-list.component.html',
          styleUrls: ['./member-list.component.css']
        }]
      }], function () {
        return [{
          type: src_Services_UserService_service__WEBPACK_IMPORTED_MODULE_1__["UserServiceService"]
        }, {
          type: src_Services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Members/member-messages/member-message.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/Members/member-messages/member-message.component.ts ***!
    \*********************************************************************/

  /*! exports provided: MemberMessageComponent */

  /***/
  function srcAppMembersMemberMessagesMemberMessageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MemberMessageComponent", function () {
      return MemberMessageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_Services_UserService_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/Services/UserService.service */
    "./src/Services/UserService.service.ts");
    /* harmony import */


    var src_Services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/Services/alertify.service */
    "./src/Services/alertify.service.ts");
    /* harmony import */


    var src_Services_Auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/Services/Auth.service */
    "./src/Services/Auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function MemberMessageComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " no Message Yet..");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MemberMessageComponent_li_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "small", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var msg_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", msg_r3.senderPhotoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", msg_r3.senderKnownAs);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](msg_r3.senderKnownAs);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 5, msg_r3.messageSent, "short"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](msg_r3.content);
      }
    }

    function MemberMessageComponent_li_4_div_2_span_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "(unread)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MemberMessageComponent_li_4_div_2_span_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var msg_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(Read ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, msg_r3.dateRead, "shortDate"), ")");
      }
    }

    function MemberMessageComponent_li_4_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "small", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MemberMessageComponent_li_4_div_2_span_9_Template, 2, 0, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MemberMessageComponent_li_4_div_2_span_10_Template, 3, 4, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var msg_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", msg_r3.senderPhotoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", msg_r3.senderKnownAs);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 7, msg_r3.messageSent, "shortDate"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !msg_r3.isRead);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", msg_r3.isRead);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](msg_r3.senderKnownAs);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](msg_r3.content);
      }
    }

    function MemberMessageComponent_li_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MemberMessageComponent_li_4_div_1_Template, 13, 8, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MemberMessageComponent_li_4_div_2_Template, 15, 10, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var msg_r3 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", msg_r3.senderId == ctx_r1.recipientId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", msg_r3.senderId != ctx_r1.recipientId);
      }
    }

    var MemberMessageComponent = /*#__PURE__*/function () {
      function MemberMessageComponent(service, alertMsg, authService) {
        _classCallCheck(this, MemberMessageComponent);

        this.service = service;
        this.alertMsg = alertMsg;
        this.authService = authService;
        this.newMessage = {};
      }

      _createClass(MemberMessageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadMessages();
        }
      }, {
        key: "loadMessages",
        value: function loadMessages() {
          var _this8 = this;

          var currentUserid = +this.authService.UserName.nameid;
          this.service.getMessageThread(this.authService.UserName.nameid, this.recipientId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (message) {
            for (var i = 0; i < message.length; i++) {
              if (message[i].isRead === false && message[i].recipientId === currentUserid) {
                _this8.service.MarkMessageAsRead(currentUserid, message[i].id);
              }
            }
          })).subscribe(function (messages) {
            _this8.messages = messages;
          }, function (err) {
            _this8.alertMsg.error(err);
          });
        }
      }, {
        key: "sendMessage",
        value: function sendMessage() {
          var _this9 = this;

          this.newMessage.recipientId = this.recipientId;
          this.service.sendMessage(this.authService.UserName.nameid, this.newMessage).subscribe(function (message) {
            _this9.messages.unshift(message);

            _this9.newMessage.content = '';
          }, function (err) {
            _this9.alertMsg.error(err);
          });
        }
      }]);

      return MemberMessageComponent;
    }();

    MemberMessageComponent.ɵfac = function MemberMessageComponent_Factory(t) {
      return new (t || MemberMessageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_Services_UserService_service__WEBPACK_IMPORTED_MODULE_2__["UserServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_Services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_Services_Auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthServiceService"]));
    };

    MemberMessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MemberMessageComponent,
      selectors: [["app-member-message"]],
      inputs: {
        recipientId: "recipientId"
      },
      decls: 13,
      vars: 4,
      consts: [[1, "card"], [1, "card-body"], [4, "ngIf"], [1, "chat"], [4, "ngFor", "ngForOf"], [1, "card-footer"], [3, "ngSubmit"], ["messageForm", "ngForm"], [1, "input-group"], ["type", "text", "name", "content", "required", "", "placeholder", "send a private message", 1, "form-control", "input-sm", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], [1, "btn", "btn-primary", 3, "disabled"], [1, "chat-img", "float-left"], [1, "rounded-circle", 3, "src", "alt"], [1, "chat-body"], [1, "header"], [1, "primary-font"], [1, "text-muted", "float-right"], [1, "fa", "fa-clock-o"], [1, "chat-img", "float-right"], ["class", "text-danger", 4, "ngIf"], ["class", "text-success", 4, "ngIf"], [1, "text-danger"], [1, "text-success"]],
      template: function MemberMessageComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MemberMessageComponent_div_2_Template, 3, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MemberMessageComponent_li_4_Template, 3, 2, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function MemberMessageComponent_Template_form_ngSubmit_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

            return _r2.valid && ctx.sendMessage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MemberMessageComponent_Template_input_ngModelChange_9_listener($event) {
            return ctx.newMessage.content = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Send");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.messages == null ? null : ctx.messages.length) === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messages);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newMessage.content);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r2.valid);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
      styles: [".card[_ngcontent-%COMP%] {\r\n    border: none;\r\n}\r\n\r\n.chat[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    margin:0;\r\n    padding: 0;\r\n}\r\n\r\n.chat[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n    padding-bottom: 10px;\r\n    border-bottom: 1px dotted #b3a9a9;\r\n}\r\n\r\n.rounded-circle[_ngcontent-%COMP%] {\r\n  height: 50px;\r\n  width:  50px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\r\n overflow-y: scroll; height: 400px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTWVtYmVycy9tZW1iZXItbWVzc2FnZXMvbWVtYmVyLW1lc3NhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsUUFBUTtJQUNSLFVBQVU7QUFDZDs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsaUNBQWlDO0FBQ3JDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtDQUNDLGtCQUFrQixFQUFFLGFBQWE7QUFDbEMiLCJmaWxlIjoic3JjL2FwcC9NZW1iZXJzL21lbWJlci1tZXNzYWdlcy9tZW1iZXItbWVzc2FnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uY2hhdCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uY2hhdCBsaSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICNiM2E5YTk7XHJcbn1cclxuXHJcbi5yb3VuZGVkLWNpcmNsZSB7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiAgNTBweDtcclxufVxyXG5cclxuLmNhcmQgYm9keSB7XHJcbiBvdmVyZmxvdy15OiBzY3JvbGw7IGhlaWdodDogNDAwcHg7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MemberMessageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-member-message',
          templateUrl: './member-message.component.html',
          styleUrls: ['./member-message.component.css']
        }]
      }], function () {
        return [{
          type: src_Services_UserService_service__WEBPACK_IMPORTED_MODULE_2__["UserServiceService"]
        }, {
          type: src_Services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]
        }, {
          type: src_Services_Auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthServiceService"]
        }];
      }, {
        recipientId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/Members/memberdetail/memberdetail.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/Members/memberdetail/memberdetail.component.ts ***!
    \****************************************************************/

  /*! exports provided: MemberdetailComponent */

  /***/
  function srcAppMembersMemberdetailMemberdetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MemberdetailComponent", function () {
      return MemberdetailComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_Services_UserService_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/Services/UserService.service */
    "./src/Services/UserService.service.ts");
    /* harmony import */


    var src_Services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/Services/alertify.service */
    "./src/Services/alertify.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-bootstrap */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/esm5/ngx-bootstrap.js");
    /* harmony import */


    var _member_messages_member_message_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../member-messages/member-message.component */
    "./src/app/Members/member-messages/member-message.component.ts");

    var _c0 = ["memberTabs"]; //import { NgxGalleryOptions, NgxGalleryImage } from 'ngx-gallery';

    var MemberdetailComponent = /*#__PURE__*/function () {
      //galleryOptions: NgxGalleryOptions[];
      //galleryImages: NgxGalleryImage[];
      function MemberdetailComponent(userservice, alert, route) {
        _classCallCheck(this, MemberdetailComponent);

        this.userservice = userservice;
        this.alert = alert;
        this.route = route;
      }

      _createClass(MemberdetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.route.data.subscribe(function (data) {
            _this10.user = data['user'];
          });
          this.route.queryParams.subscribe(function (params) {
            var selectedTab = params['tab'];
            console.log('selectedTab --', selectedTab); // this.memberTabs.tabs[selectedTab].active = true;
          });
        }
      }, {
        key: "getUserDetails",
        value: function getUserDetails() {
          var _this11 = this;

          this.userservice.getUser(+this.route.snapshot.params['id']).subscribe(function (user) {
            _this11.user = user;
            console.log(_this11.user);
          }, function (err) {
            _this11.alert.error(err);
          });
        }
      }, {
        key: "selectTab",
        value: function selectTab(tabId) {
          console.log('test');
          this.memberTabs.tabs[tabId].active = true;
        }
      }]);

      return MemberdetailComponent;
    }();

    MemberdetailComponent.ɵfac = function MemberdetailComponent_Factory(t) {
      return new (t || MemberdetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_Services_UserService_service__WEBPACK_IMPORTED_MODULE_1__["UserServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_Services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    MemberdetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MemberdetailComponent,
      selectors: [["app-memberdetail"]],
      viewQuery: function MemberdetailComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.memberTabs = _t.first);
        }
      },
      decls: 58,
      vars: 13,
      consts: [[1, "container", "mt-4"], [1, "row"], [1, "col-sm-4"], [1, "card"], [1, "card-img-top", "img-thumbnail", 3, "src", "alt"], [1, "card-body"], [1, "card-footer"], [1, "btn-group", "d-flex"], [1, "btn", "btn-primary", "w-100"], [1, "btn", "btn-success", "w-100", 3, "click"], [1, "col-sm-8"], [1, "tab-panel"], [1, "member-tabset"], ["memberTabs", ""], [3, "heading"], ["heading", "Interests"], ["heading", "Photo"], ["heading", "Messages"], [3, "recipientId"]],
      template: function MemberdetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Location:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Age:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Last Active:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Member since:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Like");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MemberdetailComponent_Template_button_click_33_listener() {
            return ctx.selectTab(3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Message");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tabset", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tab", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Looking For");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "tab", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Interests");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "tab", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "photos will go..");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "tab", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "app-member-message", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.user.knownAs, "'s Profile ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.user == null ? null : ctx.user.photoURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.user == null ? null : ctx.user.knownAs);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.user == null ? null : ctx.user.city, " , ", ctx.user == null ? null : ctx.user.country, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user == null ? null : ctx.user.age);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user == null ? null : ctx.user.lastActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user == null ? null : ctx.user.createed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("heading", "About ", ctx.user == null ? null : ctx.user.knownAs, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user == null ? null : ctx.user.introduction);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user == null ? null : ctx.user.lookingFor);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user == null ? null : ctx.user.interest);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("recipientId", ctx.user.id);
        }
      },
      directives: [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["TabsetComponent"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["TabDirective"], _member_messages_member_message_component__WEBPACK_IMPORTED_MODULE_5__["MemberMessageComponent"]],
      styles: [".img-thumbnail[_ngcontent-%COMP%] {\r\n    margin: 25px;\r\n    width: 85%;\r\n    height: 85%;\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%]{\r\n    padding: 0 25px;\r\n}\r\n\r\n.card-footer[_ngcontent-%COMP%] {\r\n    padding: 10px 15px;\r\n    background-color: #fff;\r\n    border-top: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTWVtYmVycy9tZW1iZXJkZXRhaWwvbWVtYmVyZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL01lbWJlcnMvbWVtYmVyZGV0YWlsL21lbWJlcmRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy10aHVtYm5haWwge1xyXG4gICAgbWFyZ2luOiAyNXB4O1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIGhlaWdodDogODUlO1xyXG59XHJcblxyXG4uY2FyZC1ib2R5e1xyXG4gICAgcGFkZGluZzogMCAyNXB4O1xyXG59XHJcblxyXG4uY2FyZC1mb290ZXIge1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MemberdetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-memberdetail',
          templateUrl: './memberdetail.component.html',
          styleUrls: ['./memberdetail.component.css']
        }]
      }], function () {
        return [{
          type: src_Services_UserService_service__WEBPACK_IMPORTED_MODULE_1__["UserServiceService"]
        }, {
          type: src_Services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      }, {
        memberTabs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['memberTabs']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/Members/photo-editor/photo-editor.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/Members/photo-editor/photo-editor.component.ts ***!
    \****************************************************************/

  /*! exports provided: PhotoEditorComponent */

  /***/
  function srcAppMembersPhotoEditorPhotoEditorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhotoEditorComponent", function () {
      return PhotoEditorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ng2-file-upload */
    "./node_modules/ng2-file-upload/__ivy_ngcc__/fesm2015/ng2-file-upload.js");
    /* harmony import */


    var src_Services_Auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/Services/Auth.service */
    "./src/Services/Auth.service.ts");
    /* harmony import */


    var src_Services_UserService_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/Services/UserService.service */
    "./src/Services/UserService.service.ts");
    /* harmony import */


    var src_Services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/Services/alertify.service */
    "./src/Services/alertify.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PhotoEditorComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PhotoEditorComponent_div_1_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var photo_r2 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.SetMainPhoto(photo_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Main");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PhotoEditorComponent_div_1_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var photo_r2 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.DeletePhote(photo_r2.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var photo_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", photo_r2.url || "../../../../../assets/user.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", photo_r2.isMain ? "btn-success active" : "btn-secondary")("disabled", photo_r2.isMain);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", photo_r2.isMain);
      }
    }

    function PhotoEditorComponent_div_14_tr_13_td_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (item_r7 == null ? null : item_r7.file == null ? null : item_r7.file.size) / 1024 / 1024, " MB");
      }
    }

    function PhotoEditorComponent_div_14_tr_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PhotoEditorComponent_div_14_tr_13_td_4_Template, 2, 1, "td", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r7 = ctx.$implicit;

        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r7 == null ? null : item_r7.file == null ? null : item_r7.file.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.uploader.options.isHTML5);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "width": a0
      };
    };

    function PhotoEditorComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Upload queue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Size");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PhotoEditorComponent_div_14_tr_13_Template, 5, 2, "tr", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Queue progress: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PhotoEditorComponent_div_14_Template_button_click_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.uploader.uploadAll();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Upload ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PhotoEditorComponent_div_14_Template_button_click_22_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.uploader.cancelAll();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Cancel ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PhotoEditorComponent_div_14_Template_button_click_25_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.uploader.clearQueue();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "span", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Remove ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Queue length: ", ctx_r1.uploader == null ? null : ctx_r1.uploader.queue == null ? null : ctx_r1.uploader.queue.length, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.uploader.queue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r1.uploader.progress + "%"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r1.uploader.getNotUploadedItems().length);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r1.uploader.isUploading);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r1.uploader.queue.length);
      }
    }

    var _c1 = function _c1(a0) {
      return {
        "nv-file-over": a0
      };
    };

    var PhotoEditorComponent = /*#__PURE__*/function () {
      function PhotoEditorComponent(authservie, userService, alert) {
        _classCallCheck(this, PhotoEditorComponent);

        this.authservie = authservie;
        this.userService = userService;
        this.alert = alert;
        this.getMainPhotoChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(PhotoEditorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.FileInitialize();
        }
      }, {
        key: "fileOverBase",
        value: function fileOverBase(e) {
          this.hasBaseDropZoneOver = e;
        }
      }, {
        key: "FileInitialize",
        value: function FileInitialize() {
          var _this12 = this;

          this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploader"]({
            url: 'http://localhost:5000/api/' + 'users/' + this.authservie.UserName.nameid + '/photos',
            authToken: 'Bearer ' + localStorage.getItem('token'),
            isHTML5: true,
            allowedFileType: ['image'],
            removeAfterUpload: true,
            autoUpload: false,
            maxFileSize: 10 * 1024 * 1024
          });

          this.uploader.onAfterAddingFile = function (file) {
            file.withCredentials = false;
          };

          this.uploader.onSuccessItem = function (item, response, status, headers) {
            if (response) {
              console.log("success response");
              var res = JSON.parse(response);
              console.log(res);
              var photo = {
                id: res.id,
                url: res.url,
                dateAdded: res.dateAdded,
                description: res.description,
                isMain: res.isMain
              };
              console.log("photoe edit : " + photo);

              _this12.photos.push(photo);

              if (photo.isMain) {
                _this12.authservie.changeMemberPhoto(photo.url);

                _this12.authservie.CurrentUser.photoURL = photo.url;
                localStorage.setItem('user', JSON.stringify(_this12.authservie.CurrentUser));
              }
            }
          };
        }
      }, {
        key: "SetMainPhoto",
        value: function SetMainPhoto(photo) {
          var _this13 = this;

          this.userService.setMainPhoto(this.authservie.UserName.nameid, photo.id).subscribe(function () {
            _this13.currentMain = _this13.photos.filter(function (p) {
              return p.isMain === true;
            })[0];
            _this13.currentMain.isMain = false;
            photo.isMain = true;

            _this13.authservie.changeMemberPhoto(photo.url);

            _this13.authservie.CurrentUser.photoURL = photo.url;
            localStorage.setItem('user', JSON.stringify(_this13.authservie.CurrentUser));
          }, function (err) {
            _this13.alert.error(err);
          });
        }
      }, {
        key: "DeletePhote",
        value: function DeletePhote(id) {
          var _this14 = this;

          this.alert.confirm('Are you sure want to delete', function () {
            _this14.userService.DeletePhoto(_this14.authservie.UserName.nameid, id).subscribe(function () {
              _this14.photos.splice(_this14.photos.findIndex(function (x) {
                return x.id === id;
              }), 1);

              _this14.alert.success('Successfully deleted');
            }, function (err) {
              _this14.alert.error('fail to delete');
            });
          });
        }
      }]);

      return PhotoEditorComponent;
    }();

    PhotoEditorComponent.ɵfac = function PhotoEditorComponent_Factory(t) {
      return new (t || PhotoEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_Services_Auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_Services_UserService_service__WEBPACK_IMPORTED_MODULE_3__["UserServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_Services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"]));
    };

    PhotoEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PhotoEditorComponent,
      selectors: [["app-photo-editor"]],
      inputs: {
        photos: "photos"
      },
      outputs: {
        getMainPhotoChange: "getMainPhotoChange"
      },
      decls: 15,
      vars: 8,
      consts: [[1, "row"], ["class", "col-sm-2", 4, "ngFor", "ngForOf"], [1, "row", "mt-3"], [1, "col-md-3"], ["ng2FileDrop", "", 1, "card", "bg-faded", "p-3", "text-center", "mb-3", "my-drop-zone", 3, "ngClass", "uploader", "fileOver"], [1, "fa", "fa-upload", "fa-3x"], ["type", "file", "ng2FileSelect", "", "multiple", "", 3, "uploader"], ["type", "file", "ng2FileSelect", "", 3, "uploader"], ["class", "col-md-9", "style", "margin-bottom: 40px", 4, "ngIf"], [1, "col-sm-2"], ["alt", "", 1, "img-thumbnail", "p-1", 3, "src"], [1, "text-center"], ["type", "button", 1, "btn", "btn-sm", "mr-1", 3, "ngClass", "disabled", "click"], ["type", "button", 1, "btn", "btn-sm", "btn-danger", 3, "disabled", "click"], [1, "fa", "fa-trash-o"], [1, "col-md-9", 2, "margin-bottom", "40px"], [1, "table"], ["width", "50%"], [4, "ngFor", "ngForOf"], [1, "progress", "mb-4"], ["role", "progressbar", 1, "progress-bar", 3, "ngStyle"], ["type", "button", 1, "btn", "btn-success", "btn-s", 3, "disabled", "click"], [1, "fa", "fa-upload"], ["type", "button", 1, "btn", "btn-warning", "btn-s", 3, "disabled", "click"], [1, "fa", "fa-ban"], ["type", "button", 1, "btn", "btn-danger", "btn-s", 3, "disabled", "click"], [1, "fa", "fa-trash"], ["nowrap", "", 4, "ngIf"], ["nowrap", ""]],
      template: function PhotoEditorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PhotoEditorComponent_div_1_Template, 7, 4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add Photos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("fileOver", function PhotoEditorComponent_Template_div_fileOver_6_listener($event) {
            return ctx.fileOverBase($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Drop Photo Here ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Multiple ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Single ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PhotoEditorComponent_div_14_Template, 28, 8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.photos);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx.hasBaseDropZoneOver))("uploader", ctx.uploader);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("uploader", ctx.uploader);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("uploader", ctx.uploader);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.uploader == null ? null : ctx.uploader.queue == null ? null : ctx.uploader.queue.length);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileDropDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileSelectDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"]],
      styles: ["img.img-thumbnail[_ngcontent-%COMP%] {\r\n\r\n    height: 100px;\r\n    min-width: 100px !important;\r\n    margin-bottom: 2px;\r\n\r\n}\r\n\r\n.nv-file-over[_ngcontent-%COMP%] {\r\n    border: dotted 3px red;\r\n}\r\n\r\ninput[type=file][_ngcontent-%COMP%] {\r\n color: transparent;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTWVtYmVycy9waG90by1lZGl0b3IvcGhvdG8tZWRpdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvTWVtYmVycy9waG90by1lZGl0b3IvcGhvdG8tZWRpdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcuaW1nLXRodW1ibmFpbCB7XHJcblxyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG1pbi13aWR0aDogMTAwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuXHJcbn1cclxuXHJcbi5udi1maWxlLW92ZXIge1xyXG4gICAgYm9yZGVyOiBkb3R0ZWQgM3B4IHJlZDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1maWxlXSB7XHJcbiBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhotoEditorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-photo-editor',
          templateUrl: './photo-editor.component.html',
          styleUrls: ['./photo-editor.component.css']
        }]
      }], function () {
        return [{
          type: src_Services_Auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"]
        }, {
          type: src_Services_UserService_service__WEBPACK_IMPORTED_MODULE_3__["UserServiceService"]
        }, {
          type: src_Services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"]
        }];
      }, {
        photos: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        getMainPhotoChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/Register/UserRegister/UserRegister.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/Register/UserRegister/UserRegister.component.ts ***!
    \*****************************************************************/

  /*! exports provided: UserRegisterComponent */

  /***/
  function srcAppRegisterUserRegisterUserRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserRegisterComponent", function () {
      return UserRegisterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_Services_Auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/Services/Auth.service */
    "./src/Services/Auth.service.ts");
    /* harmony import */


    var src_Services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/Services/alertify.service */
    "./src/Services/alertify.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function UserRegisterComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "userName is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UserRegisterComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Known as is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UserRegisterComponent_div_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Date of Birth is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UserRegisterComponent_div_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "City is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UserRegisterComponent_div_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Country is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UserRegisterComponent_div_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "password is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UserRegisterComponent_div_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be atleast 4 character..");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UserRegisterComponent_div_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password can't exceed 8 character..");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UserRegisterComponent_div_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "password is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UserRegisterComponent_div_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be match..");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "is-invalid": a0
      };
    };

    var UserRegisterComponent = /*#__PURE__*/function () {
      function UserRegisterComponent(service, alertify, route, fb) {
        _classCallCheck(this, UserRegisterComponent);

        this.service = service;
        this.alertify = alertify;
        this.route = route;
        this.fb = fb;
        this.CancelRegister = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(UserRegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('start');
          this.CreateRegister();
        } // formLoad(){
        //   this.fb.get('password').value =='';
        //   g.get('userName').value =='';
        //   g.get('confirmPassword').value =='';
        // }

      }, {
        key: "passwordMatch",
        value: function passwordMatch(g) {
          return g.get('password').value === g.get('confirmPassword').value ? null : {
            'mismatch': true
          };
        }
      }, {
        key: "CreateRegister",
        value: function CreateRegister() {
          this.registerForm = this.fb.group({
            gender: ['male'],
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            knownAs: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            DOB: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(9)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          }, this.passwordMatch);
        }
      }, {
        key: "Register",
        value: function Register() {
          var _this15 = this;

          if (this.registerForm.valid) {
            console.log(this.user);
            this.user = Object.assign({}, this.registerForm.value);
            this.service.Register(this.user).subscribe(function () {
              _this15.alertify.success("Register Successfully");
            }, function (err) {
              _this15.alertify.error(err);
            }, function () {
              _this15.service.login(_this15.user).subscribe(function () {
                _this15.route.navigate(['/member']);
              });
            });
          }

          console.log(this.registerForm.value);
        }
      }, {
        key: "Cancel",
        value: function Cancel() {
          this.CancelRegister.emit(false);
        }
      }]);

      return UserRegisterComponent;
    }();

    UserRegisterComponent.ɵfac = function UserRegisterComponent_Factory(t) {
      return new (t || UserRegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_Services_Auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_Services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    UserRegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserRegisterComponent,
      selectors: [["app-UserRegister"]],
      outputs: {
        CancelRegister: "CancelRegister"
      },
      decls: 42,
      vars: 33,
      consts: [[3, "formGroup", "ngSubmit"], [1, "text-center", "text-primary"], [1, "form-group"], [1, "control-label", 2, "margin-right", "10px"], [1, "radio-inline"], ["type", "radio", "value", "male", "formControlName", "gender", 1, "mr-3"], [1, "radio-inline", "ml-3"], ["type", "radio", "value", "female", "formControlName", "gender", 1, "mr-3"], ["type", "text", "formControlName", "userName", "placeholder", "user name", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["placeholder", "Known as", "formControlName", "knownAs", 1, "form-control", 3, "ngClass"], ["placeholder", "Date of Birth", "formControlName", "DOB", "type", "date", 1, "form-control", 3, "ngClass"], ["placeholder", "City", "formControlName", "city", 1, "form-control", 3, "ngClass"], ["placeholder", "Country", "formControlName", "country", 1, "form-control", 3, "ngClass"], ["type", "password", "formControlName", "password", "placeholder", "Password", 1, "form-control", 3, "ngClass"], ["type", "password", "formControlName", "confirmPassword", "placeholder", "confirmPassword", 1, "form-control", 3, "ngClass"], [1, "form-group", "text-center"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], ["type", "button", 1, "btn", "btn-default", 3, "click"], [1, "invalid-feedback"]],
      template: function UserRegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UserRegisterComponent_Template_form_ngSubmit_0_listener() {
            return ctx.Register();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "I am a: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Male ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Female ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, UserRegisterComponent_div_15_Template, 2, 0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, UserRegisterComponent_div_18_Template, 2, 0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, UserRegisterComponent_div_21_Template, 2, 0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, UserRegisterComponent_div_24_Template, 2, 0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, UserRegisterComponent_div_27_Template, 2, 0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, UserRegisterComponent_div_30_Template, 2, 0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, UserRegisterComponent_div_31_Template, 2, 0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, UserRegisterComponent_div_32_Template, 2, 0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, UserRegisterComponent_div_35_Template, 2, 0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, UserRegisterComponent_div_36_Template, 2, 0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserRegisterComponent_Template_button_click_40_listener() {
            return ctx.Cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, ctx.registerForm.get("userName").errors && ctx.registerForm.get("userName").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("userName").touched && ctx.registerForm.get("userName").hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c0, ctx.registerForm.get("knownAs").errors && ctx.registerForm.get("knownAs").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("knownAs").touched && ctx.registerForm.get("knownAs").hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c0, ctx.registerForm.get("DOB").errors && ctx.registerForm.get("DOB").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("DOB").touched && ctx.registerForm.get("DOB").hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c0, ctx.registerForm.get("city").errors && ctx.registerForm.get("city").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("city").touched && ctx.registerForm.get("city").hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c0, ctx.registerForm.get("country").errors && ctx.registerForm.get("country").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("country").touched && ctx.registerForm.get("country").hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](29, _c0, ctx.registerForm.get("password").errors && ctx.registerForm.get("password").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("password").touched && ctx.registerForm.get("password").hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.hasError("minlength") && ctx.registerForm.get("password").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.hasError("maxlength") && ctx.registerForm.get("confirmPassword").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](31, _c0, ctx.registerForm.get("confirmPassword").errors && ctx.registerForm.get("confirmPassword").touched || ctx.registerForm.get("confirmPassword").touched && ctx.registerForm.hasError("misMatch")));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("confirmPassword").touched && ctx.registerForm.get("confirmPassword").hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.hasError("mismatch") && ctx.registerForm.get("confirmPassword").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.registerForm.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1JlZ2lzdGVyL1VzZXJSZWdpc3Rlci9Vc2VyUmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserRegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-UserRegister',
          templateUrl: './UserRegister.component.html',
          styleUrls: ['./UserRegister.component.css']
        }]
      }], function () {
        return [{
          type: src_Services_Auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"]
        }, {
          type: src_Services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, {
        CancelRegister: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/Route.ts":
  /*!**************************!*\
    !*** ./src/app/Route.ts ***!
    \**************************/

  /*! exports provided: Approute */

  /***/
  function srcAppRouteTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Approute", function () {
      return Approute;
    });
    /* harmony import */


    var _Home_Home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./Home/Home.component */
    "./src/app/Home/Home.component.ts");
    /* harmony import */


    var _Members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./Members/member-list/member-list.component */
    "./src/app/Members/member-list/member-list.component.ts");
    /* harmony import */


    var _messages_messages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./messages/messages.component */
    "./src/app/messages/messages.component.ts");
    /* harmony import */


    var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./list/list.component */
    "./src/app/list/list.component.ts");
    /* harmony import */


    var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./_guard/auth.guard */
    "./src/app/_guard/auth.guard.ts");
    /* harmony import */


    var _Members_memberdetail_memberdetail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./Members/memberdetail/memberdetail.component */
    "./src/app/Members/memberdetail/memberdetail.component.ts");
    /* harmony import */


    var _resolvers_member_detail_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./_resolvers/member-detail-resolver */
    "./src/app/_resolvers/member-detail-resolver.ts");
    /* harmony import */


    var _resolvers_member_list_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./_resolvers/member-list-resolver */
    "./src/app/_resolvers/member-list-resolver.ts");
    /* harmony import */


    var _Members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./Members/member-edit/member-edit.component */
    "./src/app/Members/member-edit/member-edit.component.ts");
    /* harmony import */


    var _resolvers_member_edit_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./_resolvers/member-edit-resolver */
    "./src/app/_resolvers/member-edit-resolver.ts");
    /* harmony import */


    var _guard_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./_guard/prevent-unsaved-changes-guard */
    "./src/app/_guard/prevent-unsaved-changes-guard.ts");
    /* harmony import */


    var _resolvers_list_resolver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./_resolvers/list-resolver */
    "./src/app/_resolvers/list-resolver.ts");
    /* harmony import */


    var _resolvers_messages_resolver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./_resolvers/messages.resolver */
    "./src/app/_resolvers/messages.resolver.ts");

    var Approute = [{
      path: '',
      component: _Home_Home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]
    }, {
      path: '',
      runGuardsAndResolvers: 'always',
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
      children: [{
        path: 'member',
        component: _Members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_1__["MemberListComponent"],
        resolve: {
          users: _resolvers_member_list_resolver__WEBPACK_IMPORTED_MODULE_7__["memberlistResolver"]
        }
      }, {
        path: 'member/:id',
        component: _Members_memberdetail_memberdetail_component__WEBPACK_IMPORTED_MODULE_5__["MemberdetailComponent"],
        resolve: {
          user: _resolvers_member_detail_resolver__WEBPACK_IMPORTED_MODULE_6__["memberdetailResolver"]
        }
      }, {
        path: 'memberedit',
        component: _Members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_8__["MemberEditComponent"],
        resolve: {
          user: _resolvers_member_edit_resolver__WEBPACK_IMPORTED_MODULE_9__["membereditResolver"]
        },
        canDeactivate: [_guard_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_10__["preventUnsavedChanges"]]
      }, {
        path: 'message',
        component: _messages_messages_component__WEBPACK_IMPORTED_MODULE_2__["MessagesComponent"],
        resolve: {
          messages: _resolvers_messages_resolver__WEBPACK_IMPORTED_MODULE_12__["messagesResolver"]
        }
      }, {
        path: 'list',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"],
        resolve: {
          users: _resolvers_list_resolver__WEBPACK_IMPORTED_MODULE_11__["listResolver"]
        }
      }]
    }, {
      path: '**',
      redirectTo: '',
      pathMatch: 'full'
    }];
    /***/
  },

  /***/
  "./src/app/Values/Values.component.ts":
  /*!********************************************!*\
    !*** ./src/app/Values/Values.component.ts ***!
    \********************************************/

  /*! exports provided: ValuesComponent */

  /***/
  function srcAppValuesValuesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValuesComponent", function () {
      return ValuesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");
    /* harmony import */


    var src_Services_Auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/Services/Auth.service */
    "./src/Services/Auth.service.ts");
    /* harmony import */


    var _nav_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../nav/nav.component */
    "./src/app/nav/nav.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ValuesComponent = /*#__PURE__*/function () {
      function ValuesComponent(service) {
        _classCallCheck(this, ValuesComponent);

        this.service = service;
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__["JwtHelperService"]();
      }

      _createClass(ValuesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var token = localStorage.getItem('token');
          var user = JSON.parse(localStorage.getItem('user'));

          if (token) {
            this.service.UserName = this.jwtHelper.decodeToken(token);
          }

          if (user) {
            this.service.CurrentUser = user;
            this.service.changeMemberPhoto(user.photoURL);
          }
        }
      }]);

      return ValuesComponent;
    }();

    ValuesComponent.ɵfac = function ValuesComponent_Factory(t) {
      return new (t || ValuesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_Services_Auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"]));
    };

    ValuesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ValuesComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function ValuesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        }
      },
      directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1ZhbHVlcy9WYWx1ZXMuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValuesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './Values.component.html',
          styleUrls: ['./Values.component.css']
        }]
      }], function () {
        return [{
          type: src_Services_Auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_guard/auth.guard.ts":
  /*!**************************************!*\
    !*** ./src/app/_guard/auth.guard.ts ***!
    \**************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcApp_guardAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_Services_Auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/Services/Auth.service */
    "./src/Services/Auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_Services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/Services/alertify.service */
    "./src/Services/alertify.service.ts");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(authservice, router, alertify) {
        _classCallCheck(this, AuthGuard);

        this.authservice = authservice;
        this.router = router;
        this.alertify = alertify;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate() {
          if (this.authservice.loggedIn()) {
            return true;
          }

          this.alertify.error('Please login');
          this.router.navigate(['home']);
          return false;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_Services_Auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_Services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: src_Services_Auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthServiceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_Services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_guard/prevent-unsaved-changes-guard.ts":
  /*!*********************************************************!*\
    !*** ./src/app/_guard/prevent-unsaved-changes-guard.ts ***!
    \*********************************************************/

  /*! exports provided: preventUnsavedChanges */

  /***/
  function srcApp_guardPreventUnsavedChangesGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "preventUnsavedChanges", function () {
      return preventUnsavedChanges;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var preventUnsavedChanges = /*#__PURE__*/function () {
      function preventUnsavedChanges() {
        _classCallCheck(this, preventUnsavedChanges);
      }

      _createClass(preventUnsavedChanges, [{
        key: "canDeactivate",
        value: function canDeactivate(component) {
          if (component.editForm.dirty) {
            return confirm('Are you sure want to continue? unsaved data will be lost.');
          }

          return true;
        }
      }]);

      return preventUnsavedChanges;
    }();

    preventUnsavedChanges.ɵfac = function preventUnsavedChanges_Factory(t) {
      return new (t || preventUnsavedChanges)();
    };

    preventUnsavedChanges.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: preventUnsavedChanges,
      factory: preventUnsavedChanges.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](preventUnsavedChanges, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/_models/Pagination.ts":
  /*!***************************************!*\
    !*** ./src/app/_models/Pagination.ts ***!
    \***************************************/

  /*! exports provided: PaginationResult */

  /***/
  function srcApp_modelsPaginationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginationResult", function () {
      return PaginationResult;
    });

    var PaginationResult = function PaginationResult() {
      _classCallCheck(this, PaginationResult);
    };
    /***/

  },

  /***/
  "./src/app/_resolvers/list-resolver.ts":
  /*!*********************************************!*\
    !*** ./src/app/_resolvers/list-resolver.ts ***!
    \*********************************************/

  /*! exports provided: listResolver */

  /***/
  function srcApp_resolversListResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "listResolver", function () {
      return listResolver;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_Services_UserService_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/Services/UserService.service */
    "./src/Services/UserService.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_Services_alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/Services/alertify.service */
    "./src/Services/alertify.service.ts");

    var listResolver = /*#__PURE__*/function () {
      function listResolver(service, router, alert) {
        _classCallCheck(this, listResolver);

        this.service = service;
        this.router = router;
        this.alert = alert;
        this.pageNumber = 1;
        this.pageSize = 5;
        this.likesParam = 'Likers';
      }

      _createClass(listResolver, [{
        key: "resolve",
        value: function resolve(route) {
          var _this16 = this;

          return this.service.getUsers(this.pageNumber, this.pageSize, null, this.likesParam).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            _this16.alert.error('problem with retrieving data');

            _this16.router.navigate(['/home']);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
          }));
        }
      }]);

      return listResolver;
    }();

    listResolver.ɵfac = function listResolver_Factory(t) {
      return new (t || listResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_Services_UserService_service__WEBPACK_IMPORTED_MODULE_3__["UserServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_Services_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"]));
    };

    listResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: listResolver,
      factory: listResolver.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](listResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: src_Services_UserService_service__WEBPACK_IMPORTED_MODULE_3__["UserServiceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_Services_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_resolvers/member-detail-resolver.ts":
  /*!******************************************************!*\
    !*** ./src/app/_resolvers/member-detail-resolver.ts ***!
    \******************************************************/

  /*! exports provided: memberdetailResolver */

  /***/
  function srcApp_resolversMemberDetailResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "memberdetailResolver", function () {
      return memberdetailResolver;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_Services_UserService_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/Services/UserService.service */
    "./src/Services/UserService.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_Services_alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/Services/alertify.service */
    "./src/Services/alertify.service.ts");

    var memberdetailResolver = /*#__PURE__*/function () {
      function memberdetailResolver(service, router, alert) {
        _classCallCheck(this, memberdetailResolver);

        this.service = service;
        this.router = router;
        this.alert = alert;
      }

      _createClass(memberdetailResolver, [{
        key: "resolve",
        value: function resolve(route) {
          var _this17 = this;

          return this.service.getUser(route.params['id']).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            _this17.alert.error('problem with nagivation');

            _this17.router.navigate(['/members']);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
          }));
        }
      }]);

      return memberdetailResolver;
    }();

    memberdetailResolver.ɵfac = function memberdetailResolver_Factory(t) {
      return new (t || memberdetailResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_Services_UserService_service__WEBPACK_IMPORTED_MODULE_3__["UserServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_Services_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"]));
    };

    memberdetailResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: memberdetailResolver,
      factory: memberdetailResolver.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](memberdetailResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: src_Services_UserService_service__WEBPACK_IMPORTED_MODULE_3__["UserServiceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_Services_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_resolvers/member-edit-resolver.ts":
  /*!****************************************************!*\
    !*** ./src/app/_resolvers/member-edit-resolver.ts ***!
    \****************************************************/

  /*! exports provided: membereditResolver */

  /***/
  function srcApp_resolversMemberEditResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "membereditResolver", function () {
      return membereditResolver;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_Services_UserService_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/Services/UserService.service */
    "./src/Services/UserService.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_Services_alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/Services/alertify.service */
    "./src/Services/alertify.service.ts");
    /* harmony import */


    var src_Services_Auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/Services/Auth.service */
    "./src/Services/Auth.service.ts");

    var membereditResolver = /*#__PURE__*/function () {
      function membereditResolver(service, router, alert, authservice) {
        _classCallCheck(this, membereditResolver);

        this.service = service;
        this.router = router;
        this.alert = alert;
        this.authservice = authservice;
      }

      _createClass(membereditResolver, [{
        key: "resolve",
        value: function resolve(route) {
          var _this18 = this;

          return this.service.getUser(this.authservice.UserName.nameid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            _this18.alert.error('problem with your data');

            _this18.router.navigate(['/members']);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
          }));
        }
      }]);

      return membereditResolver;
    }();

    membereditResolver.ɵfac = function membereditResolver_Factory(t) {
      return new (t || membereditResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_Services_UserService_service__WEBPACK_IMPORTED_MODULE_3__["UserServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_Services_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_Services_Auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthServiceService"]));
    };

    membereditResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: membereditResolver,
      factory: membereditResolver.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](membereditResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: src_Services_UserService_service__WEBPACK_IMPORTED_MODULE_3__["UserServiceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_Services_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"]
        }, {
          type: src_Services_Auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthServiceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_resolvers/member-list-resolver.ts":
  /*!****************************************************!*\
    !*** ./src/app/_resolvers/member-list-resolver.ts ***!
    \****************************************************/

  /*! exports provided: memberlistResolver */

  /***/
  function srcApp_resolversMemberListResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "memberlistResolver", function () {
      return memberlistResolver;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_Services_UserService_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/Services/UserService.service */
    "./src/Services/UserService.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_Services_alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/Services/alertify.service */
    "./src/Services/alertify.service.ts");

    var memberlistResolver = /*#__PURE__*/function () {
      function memberlistResolver(service, router, alert) {
        _classCallCheck(this, memberlistResolver);

        this.service = service;
        this.router = router;
        this.alert = alert;
        this.pageNumber = 1;
        this.pageSize = 5;
      }

      _createClass(memberlistResolver, [{
        key: "resolve",
        value: function resolve(route) {
          var _this19 = this;

          return this.service.getUsers(this.pageNumber, this.pageSize).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            _this19.alert.error('problem with nagivation');

            _this19.router.navigate(['/home']);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
          }));
        }
      }]);

      return memberlistResolver;
    }();

    memberlistResolver.ɵfac = function memberlistResolver_Factory(t) {
      return new (t || memberlistResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_Services_UserService_service__WEBPACK_IMPORTED_MODULE_3__["UserServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_Services_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"]));
    };

    memberlistResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: memberlistResolver,
      factory: memberlistResolver.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](memberlistResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: src_Services_UserService_service__WEBPACK_IMPORTED_MODULE_3__["UserServiceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_Services_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_resolvers/messages.resolver.ts":
  /*!*************************************************!*\
    !*** ./src/app/_resolvers/messages.resolver.ts ***!
    \*************************************************/

  /*! exports provided: messagesResolver */

  /***/
  function srcApp_resolversMessagesResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "messagesResolver", function () {
      return messagesResolver;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_Services_UserService_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/Services/UserService.service */
    "./src/Services/UserService.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_Services_alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/Services/alertify.service */
    "./src/Services/alertify.service.ts");
    /* harmony import */


    var src_Services_Auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/Services/Auth.service */
    "./src/Services/Auth.service.ts");

    var messagesResolver = /*#__PURE__*/function () {
      function messagesResolver(service, router, alert, authService) {
        _classCallCheck(this, messagesResolver);

        this.service = service;
        this.router = router;
        this.alert = alert;
        this.authService = authService;
        this.pageNumber = 1;
        this.pageSize = 5;
        this.messageContainer = 'Unread';
      }

      _createClass(messagesResolver, [{
        key: "resolve",
        value: function resolve(route) {
          var _this20 = this;

          console.log('message resolver');
          return this.service.getMessage(this.authService.UserName.nameid, this.pageNumber, this.pageSize, this.messageContainer).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            _this20.alert.error('problem with Retrieving messages');

            _this20.router.navigate(['/home']);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
          }));
        }
      }]);

      return messagesResolver;
    }();

    messagesResolver.ɵfac = function messagesResolver_Factory(t) {
      return new (t || messagesResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_Services_UserService_service__WEBPACK_IMPORTED_MODULE_3__["UserServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_Services_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_Services_Auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthServiceService"]));
    };

    messagesResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: messagesResolver,
      factory: messagesResolver.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](messagesResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: src_Services_UserService_service__WEBPACK_IMPORTED_MODULE_3__["UserServiceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_Services_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"]
        }, {
          type: src_Services_Auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthServiceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Dating App';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-second"]],
      decls: 0,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {},
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-second',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: tokenGetter, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "tokenGetter", function () {
      return tokenGetter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/esm5/ngx-bootstrap.js");
    /* harmony import */


    var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-bootstrap/pagination */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/pagination/fesm2015/ngx-bootstrap-pagination.js");
    /* harmony import */


    var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-bootstrap/buttons */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/buttons/fesm2015/ngx-bootstrap-buttons.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _Values_Values_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./Values/Values.component */
    "./src/app/Values/Values.component.ts");
    /* harmony import */


    var _nav_nav_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./nav/nav.component */
    "./src/app/nav/nav.component.ts");
    /* harmony import */


    var _Services_Auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../Services/Auth.service */
    "./src/Services/Auth.service.ts");
    /* harmony import */


    var _Register_UserRegister_UserRegister_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./Register/UserRegister/UserRegister.component */
    "./src/app/Register/UserRegister/UserRegister.component.ts");
    /* harmony import */


    var _Home_Home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./Home/Home.component */
    "./src/app/Home/Home.component.ts");
    /* harmony import */


    var src_Services_error_Interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! src/Services/error.Interceptor */
    "./src/Services/error.Interceptor.ts");
    /* harmony import */


    var _Route__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./Route */
    "./src/app/Route.ts");
    /* harmony import */


    var _Members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./Members/member-list/member-list.component */
    "./src/app/Members/member-list/member-list.component.ts");
    /* harmony import */


    var _messages_messages_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./messages/messages.component */
    "./src/app/messages/messages.component.ts");
    /* harmony import */


    var _Members_member_list_member_card_member_card_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./Members/member-list/member-card/member-card.component */
    "./src/app/Members/member-list/member-card/member-card.component.ts");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");
    /* harmony import */


    var _Members_memberdetail_memberdetail_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./Members/memberdetail/memberdetail.component */
    "./src/app/Members/memberdetail/memberdetail.component.ts");
    /* harmony import */


    var src_Services_UserService_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! src/Services/UserService.service */
    "./src/Services/UserService.service.ts");
    /* harmony import */


    var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./_guard/auth.guard */
    "./src/app/_guard/auth.guard.ts");
    /* harmony import */


    var _resolvers_member_detail_resolver__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./_resolvers/member-detail-resolver */
    "./src/app/_resolvers/member-detail-resolver.ts");
    /* harmony import */


    var _resolvers_member_list_resolver__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./_resolvers/member-list-resolver */
    "./src/app/_resolvers/member-list-resolver.ts");
    /* harmony import */


    var _Members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./Members/member-edit/member-edit.component */
    "./src/app/Members/member-edit/member-edit.component.ts");
    /* harmony import */


    var _resolvers_member_edit_resolver__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./_resolvers/member-edit-resolver */
    "./src/app/_resolvers/member-edit-resolver.ts");
    /* harmony import */


    var _guard_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./_guard/prevent-unsaved-changes-guard */
    "./src/app/_guard/prevent-unsaved-changes-guard.ts");
    /* harmony import */


    var _Members_photo_editor_photo_editor_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./Members/photo-editor/photo-editor.component */
    "./src/app/Members/photo-editor/photo-editor.component.ts");
    /* harmony import */


    var ng2_file_upload__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ng2-file-upload */
    "./node_modules/ng2-file-upload/__ivy_ngcc__/fesm2015/ng2-file-upload.js");
    /* harmony import */


    var _resolvers_list_resolver__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./_resolvers/list-resolver */
    "./src/app/_resolvers/list-resolver.ts");
    /* harmony import */


    var _resolvers_messages_resolver__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./_resolvers/messages.resolver */
    "./src/app/_resolvers/messages.resolver.ts");
    /* harmony import */


    var _list_list_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./list/list.component */
    "./src/app/list/list.component.ts");
    /* harmony import */


    var _Members_member_messages_member_message_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./Members/member-messages/member-message.component */
    "./src/app/Members/member-messages/member-message.component.ts"); //import {TimeAgoPipe} from 'time-ago-pipe';
    //import { NgxGalleryModule } from 'ngx-gallery';


    function tokenGetter() {
      return localStorage.getItem('token');
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_Values_Values_component__WEBPACK_IMPORTED_MODULE_9__["ValuesComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
        useClass: src_Services_error_Interceptor__WEBPACK_IMPORTED_MODULE_14__["ErrorInterceptor"],
        multi: true
      }, _Services_Auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthServiceService"], src_Services_error_Interceptor__WEBPACK_IMPORTED_MODULE_14__["ErrorInterceptor"], src_Services_UserService_service__WEBPACK_IMPORTED_MODULE_21__["UserServiceService"], _guard_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"], _resolvers_member_detail_resolver__WEBPACK_IMPORTED_MODULE_23__["memberdetailResolver"], _resolvers_member_list_resolver__WEBPACK_IMPORTED_MODULE_24__["memberlistResolver"], _resolvers_member_edit_resolver__WEBPACK_IMPORTED_MODULE_26__["membereditResolver"], _guard_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_27__["preventUnsavedChanges"], _resolvers_list_resolver__WEBPACK_IMPORTED_MODULE_30__["listResolver"], _resolvers_messages_resolver__WEBPACK_IMPORTED_MODULE_31__["messagesResolver"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["TabsModule"].forRoot(), ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_3__["PaginationModule"].forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], //    NgxGalleryModule,
      ng2_file_upload__WEBPACK_IMPORTED_MODULE_29__["FileUploadModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsDropdownModule"].forRoot(), ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_4__["ButtonsModule"].forRoot(), _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(_Route__WEBPACK_IMPORTED_MODULE_15__["Approute"]), _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_19__["JwtModule"].forRoot({
        config: {
          tokenGetter: tokenGetter,
          whitelistedDomains: ['localhost:5000'],
          blacklistedRoutes: ['localhost:5000/api/auth']
        }
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _Values_Values_component__WEBPACK_IMPORTED_MODULE_9__["ValuesComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_10__["NavComponent"], _Register_UserRegister_UserRegister_component__WEBPACK_IMPORTED_MODULE_12__["UserRegisterComponent"], _Home_Home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"], _Members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_16__["MemberListComponent"], _messages_messages_component__WEBPACK_IMPORTED_MODULE_17__["MessagesComponent"], _Members_member_list_member_card_member_card_component__WEBPACK_IMPORTED_MODULE_18__["MemberCardComponent"], _Members_memberdetail_memberdetail_component__WEBPACK_IMPORTED_MODULE_20__["MemberdetailComponent"], _Members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_25__["MemberEditComponent"], _Members_photo_editor_photo_editor_component__WEBPACK_IMPORTED_MODULE_28__["PhotoEditorComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_32__["ListComponent"], _Members_member_messages_member_message_component__WEBPACK_IMPORTED_MODULE_33__["MemberMessageComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["TabsModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_3__["PaginationModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], //    NgxGalleryModule,
        ng2_file_upload__WEBPACK_IMPORTED_MODULE_29__["FileUploadModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsDropdownModule"], ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_4__["ButtonsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_19__["JwtModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _Values_Values_component__WEBPACK_IMPORTED_MODULE_9__["ValuesComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_10__["NavComponent"], _Register_UserRegister_UserRegister_component__WEBPACK_IMPORTED_MODULE_12__["UserRegisterComponent"], _Home_Home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"], _Members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_16__["MemberListComponent"], _messages_messages_component__WEBPACK_IMPORTED_MODULE_17__["MessagesComponent"], _Members_member_list_member_card_member_card_component__WEBPACK_IMPORTED_MODULE_18__["MemberCardComponent"], _Members_memberdetail_memberdetail_component__WEBPACK_IMPORTED_MODULE_20__["MemberdetailComponent"], _Members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_25__["MemberEditComponent"], _Members_photo_editor_photo_editor_component__WEBPACK_IMPORTED_MODULE_28__["PhotoEditorComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_32__["ListComponent"], _Members_member_messages_member_message_component__WEBPACK_IMPORTED_MODULE_33__["MemberMessageComponent"]],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["TabsModule"].forRoot(), ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_3__["PaginationModule"].forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], //    NgxGalleryModule,
          ng2_file_upload__WEBPACK_IMPORTED_MODULE_29__["FileUploadModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsDropdownModule"].forRoot(), ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_4__["ButtonsModule"].forRoot(), _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(_Route__WEBPACK_IMPORTED_MODULE_15__["Approute"]), _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_19__["JwtModule"].forRoot({
            config: {
              tokenGetter: tokenGetter,
              whitelistedDomains: ['localhost:5000'],
              blacklistedRoutes: ['localhost:5000/api/auth']
            }
          })],
          // exports: [ ValuesComponent ],
          providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
            useClass: src_Services_error_Interceptor__WEBPACK_IMPORTED_MODULE_14__["ErrorInterceptor"],
            multi: true
          }, _Services_Auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthServiceService"], src_Services_error_Interceptor__WEBPACK_IMPORTED_MODULE_14__["ErrorInterceptor"], src_Services_UserService_service__WEBPACK_IMPORTED_MODULE_21__["UserServiceService"], _guard_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"], _resolvers_member_detail_resolver__WEBPACK_IMPORTED_MODULE_23__["memberdetailResolver"], _resolvers_member_list_resolver__WEBPACK_IMPORTED_MODULE_24__["memberlistResolver"], _resolvers_member_edit_resolver__WEBPACK_IMPORTED_MODULE_26__["membereditResolver"], _guard_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_27__["preventUnsavedChanges"], _resolvers_list_resolver__WEBPACK_IMPORTED_MODULE_30__["listResolver"], _resolvers_messages_resolver__WEBPACK_IMPORTED_MODULE_31__["messagesResolver"]],
          bootstrap: [_Values_Values_component__WEBPACK_IMPORTED_MODULE_9__["ValuesComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/list/list.component.ts":
  /*!****************************************!*\
    !*** ./src/app/list/list.component.ts ***!
    \****************************************/

  /*! exports provided: ListComponent */

  /***/
  function srcAppListListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListComponent", function () {
      return ListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_Services_Auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/Services/Auth.service */
    "./src/Services/Auth.service.ts");
    /* harmony import */


    var src_Services_UserService_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/Services/UserService.service */
    "./src/Services/UserService.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_Services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/Services/alertify.service */
    "./src/Services/alertify.service.ts");
    /* harmony import */


    var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-bootstrap/buttons */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/buttons/fesm2015/ngx-bootstrap-buttons.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-bootstrap/pagination */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/pagination/fesm2015/ngx-bootstrap-pagination.js");
    /* harmony import */


    var _Members_member_list_member_card_member_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../Members/member-list/member-card/member-card.component */
    "./src/app/Members/member-list/member-card/member-card.component.ts");

    function ListComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-member-card", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("users", user_r1);
      }
    }

    var ListComponent = /*#__PURE__*/function () {
      function ListComponent(authService, userService, route, alert) {
        _classCallCheck(this, ListComponent);

        this.authService = authService;
        this.userService = userService;
        this.route = route;
        this.alert = alert;
        this.likesParam = 'Likers';
      }

      _createClass(ListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this21 = this;

          this.route.data.subscribe(function (data) {
            _this21.users = data['users'].result;
            _this21.pagination = data['users'].pagination;
          });
        }
      }, {
        key: "pageChanged",
        value: function pageChanged(event) {
          this.pagination.currentPage = event.page;
          this.loaduser();
        }
      }, {
        key: "loaduser",
        value: function loaduser() {
          var _this22 = this;

          console.log('start search likes' + this.likesParam);
          this.userService.getUsers(this.pagination.currentPage, this.pagination.itemsPerPage, null, this.likesParam).subscribe(function (res) {
            _this22.users = res.result;
            _this22.pagination = res.pagination;
            console.log(_this22.users);
          }, function (error) {
            _this22.alert.error(error);
          });
        }
      }]);

      return ListComponent;
    }();

    ListComponent.ɵfac = function ListComponent_Factory(t) {
      return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_Services_Auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_Services_UserService_service__WEBPACK_IMPORTED_MODULE_2__["UserServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_Services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"]));
    };

    ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ListComponent,
      selectors: [["app-list"]],
      decls: 15,
      vars: 9,
      consts: [[1, "text-center", "mt-3"], [1, "container", "mt-3"], [1, "row"], [1, "btn-group"], ["btnRadio", "Likers", 1, "btn", "btn-primary", 3, "ngModel", "ngModelChange", "click"], ["btnRadio", "Likees", 1, "btn", "btn-primary", 3, "ngModel", "ngModelChange", "click"], ["class", "col-sm-6 col-md-4 col-lg-4 col-xl-2", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center"], ["previousText", "\u2039", "nextText", "\u203A", "firstText", "\xAB", "lastText", "\xBB", 3, "boundaryLinks", "totalItems", "itemsPerPage", "ngModel", "ngModelChange", "pageChanged"], [1, "col-sm-6", "col-md-4", "col-lg-4", "col-xl-2"], [3, "users"]],
      template: function ListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListComponent_Template_button_ngModelChange_6_listener($event) {
            return ctx.likesParam = $event;
          })("click", function ListComponent_Template_button_click_6_listener() {
            return ctx.loaduser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Members who like me");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListComponent_Template_button_ngModelChange_8_listener($event) {
            return ctx.likesParam = $event;
          })("click", function ListComponent_Template_button_click_8_listener() {
            return ctx.loaduser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Members who I like");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ListComponent_div_12_Template, 2, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "pagination", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListComponent_Template_pagination_ngModelChange_14_listener($event) {
            return ctx.pagination.currentPage = $event;
          })("pageChanged", function ListComponent_Template_pagination_pageChanged_14_listener($event) {
            return ctx.pageChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.likesParam === "Likers" ? "Members who like me" : "Members who I've Liked", " : ", ctx.pagination.totalItems, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.likesParam);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.likesParam);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("boundaryLinks", true)("totalItems", ctx.pagination.totalItems)("itemsPerPage", ctx.pagination.itemsPerPage)("ngModel", ctx.pagination.currentPage);
        }
      },
      directives: [ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__["ButtonRadioDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginationComponent"], _Members_member_list_member_card_member_card_component__WEBPACK_IMPORTED_MODULE_9__["MemberCardComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QvbGlzdC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-list',
          templateUrl: './list.component.html',
          styleUrls: ['./list.component.css']
        }]
      }], function () {
        return [{
          type: src_Services_Auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthServiceService"]
        }, {
          type: src_Services_UserService_service__WEBPACK_IMPORTED_MODULE_2__["UserServiceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: src_Services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/messages/messages.component.ts":
  /*!************************************************!*\
    !*** ./src/app/messages/messages.component.ts ***!
    \************************************************/

  /*! exports provided: MessagesComponent */

  /***/
  function srcAppMessagesMessagesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessagesComponent", function () {
      return MessagesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_Services_alertify_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/Services/alertify.service */
    "./src/Services/alertify.service.ts");
    /* harmony import */


    var src_Services_UserService_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/Services/UserService.service */
    "./src/Services/UserService.service.ts");
    /* harmony import */


    var src_Services_Auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/Services/Auth.service */
    "./src/Services/Auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-bootstrap/buttons */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/buttons/fesm2015/ngx-bootstrap-buttons.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-bootstrap/pagination */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/pagination/fesm2015/ngx-bootstrap-pagination.js");

    function MessagesComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No messages");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MessagesComponent_div_13_tr_10_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var message_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", message_r3 == null ? null : message_r3.senderPhotoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r3.senderKnownAs);
      }
    }

    function MessagesComponent_div_13_tr_10_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var message_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", message_r3 == null ? null : message_r3.recipientPhotoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r3.recipientKnownAs);
      }
    }

    var _c0 = function _c0(a1) {
      return ["/member", a1];
    };

    var _c1 = function _c1() {
      return {
        tab: 3
      };
    };

    function MessagesComponent_div_13_tr_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MessagesComponent_div_13_tr_10_div_4_Template, 4, 2, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MessagesComponent_div_13_tr_10_div_5_Template, 4, 2, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessagesComponent_div_13_tr_10_Template_button_click_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          return $event.stopPropagation();
        })("click", function MessagesComponent_div_13_tr_10_Template_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var message_r3 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r10.deleteMessage(message_r3.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var message_r3 = ctx.$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx_r2.messageContainer == "Outbox" ? message_r3.recipientId : message_r3.senderId))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r3.content);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.messageContainer != "Outbox");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.messageContainer == "Outbox");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 6, message_r3.messageSent, "shortDate"));
      }
    }

    function MessagesComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Message");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "From / To");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Sent / Received");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "th", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MessagesComponent_div_13_tr_10_Template, 12, 12, "tr", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.messages);
      }
    }

    var MessagesComponent = /*#__PURE__*/function () {
      function MessagesComponent(alertMsg, userService, authservice, route) {
        _classCallCheck(this, MessagesComponent);

        this.alertMsg = alertMsg;
        this.userService = userService;
        this.authservice = authservice;
        this.route = route;
        this.messages = [];
        this.messageContainer = 'Unread';
      }

      _createClass(MessagesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this23 = this;

          console.log('start messages ');
          this.route.data.subscribe(function (data) {
            _this23.messages = data['messages'].result;
            console.log("messages.. ");
            _this23.pagination = data['messages'].pagination;
          });
        }
      }, {
        key: "loadMessages",
        value: function loadMessages() {
          var _this24 = this;

          console.log('Test loadMessage');
          this.userService.getMessage(this.authservice.UserName.nameid, this.pagination.currentPage, this.pagination.itemsPerPage, this.messageContainer).subscribe(function (res) {
            _this24.messages = res.result;
            _this24.pagination = res.pagination;
          }, function (error) {
            _this24.alertMsg.error(error);
          });
        }
      }, {
        key: "pageChanged",
        value: function pageChanged(event) {
          this.pagination.currentPage = event.page;
          this.loadMessages();
        }
      }, {
        key: "deleteMessage",
        value: function deleteMessage(id) {
          var _this25 = this;

          this.alertMsg.confirm('Are you sure you want to delete this message', function () {
            _this25.userService.deleteMessage(id, _this25.authservice.UserName.nameid).subscribe(function () {
              _this25.messages.splice(_this25.messages.findIndex(function (x) {
                return x.id == id;
              }), 1);

              _this25.alertMsg.success('successfully delete');
            }, function (err) {
              _this25.alertMsg.error('Fail to delete');
            });
          });
        }
      }]);

      return MessagesComponent;
    }();

    MessagesComponent.ɵfac = function MessagesComponent_Factory(t) {
      return new (t || MessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_Services_alertify_service__WEBPACK_IMPORTED_MODULE_1__["AlertifyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_Services_UserService_service__WEBPACK_IMPORTED_MODULE_2__["UserServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_Services_Auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
    };

    MessagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MessagesComponent,
      selectors: [["app-messages"]],
      decls: 16,
      vars: 9,
      consts: [[1, "container", "mt-5"], [1, "row"], [1, "btn-group"], ["btnRadio", "Unread", 1, "btn", "btn-primary", 3, "ngModel", "ngModelChange", "click"], [1, "fa", "fa-envelope"], ["btnRadio", "Inbox", 1, "btn", "btn-primary", 3, "ngModel", "ngModelChange", "click"], [1, "fa", "fa-envelope-open"], ["btnRadio", "Outbox", 1, "btn", "btn-primary", 3, "ngModel", "ngModelChange", "click"], [1, "fa", "fa-paper-plane"], ["class", "row", 4, "ngIf"], [1, "d-flex", "justify-content-center"], ["previousText", "\u2039", "nextText", "\u203A", "firstText", "\xAB", "lastText", "\xBB", 3, "boundaryLinks", "totalItems", "itemsPerPage", "ngModel", "ngModelChange", "pageChanged"], [1, "table", "table-hover", 2, "cursor", "pointer"], [2, "width", "40%"], [2, "width", "20%"], [3, "routerLink", "queryParams", 4, "ngFor", "ngForOf"], [3, "routerLink", "queryParams"], [4, "ngIf"], [1, "btn", "btn-danger", 3, "click"], [1, "img-circle", "rounded-circle", "mr-1", 3, "src"]],
      template: function MessagesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MessagesComponent_Template_button_ngModelChange_3_listener($event) {
            return ctx.messageContainer = $event;
          })("click", function MessagesComponent_Template_button_click_3_listener() {
            return ctx.loadMessages();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Unread ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MessagesComponent_Template_button_ngModelChange_6_listener($event) {
            return ctx.messageContainer = $event;
          })("click", function MessagesComponent_Template_button_click_6_listener() {
            return ctx.loadMessages();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Inbox ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MessagesComponent_Template_button_ngModelChange_9_listener($event) {
            return ctx.messageContainer = $event;
          })("click", function MessagesComponent_Template_button_click_9_listener() {
            return ctx.loadMessages();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Outbox ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MessagesComponent_div_12_Template, 3, 0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MessagesComponent_div_13_Template, 11, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "pagination", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MessagesComponent_Template_pagination_ngModelChange_15_listener($event) {
            return ctx.pagination.currentPage = $event;
          })("pageChanged", function MessagesComponent_Template_pagination_pageChanged_15_listener($event) {
            return ctx.pageChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.messageContainer);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.messageContainer);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.messageContainer);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.messages.length == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.messages.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("boundaryLinks", true)("totalItems", ctx.pagination.totalItems)("itemsPerPage", ctx.pagination.itemsPerPage)("ngModel", ctx.pagination.currentPage);
        }
      },
      directives: [ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__["ButtonRadioDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginationComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]],
      styles: ["table[_ngcontent-%COMP%] {\r\n    margin-top: 15px;\r\n}\r\n\r\n.img-circle[_ngcontent-%COMP%] {\r\n    max-height: 50px;\r\n}\r\n\r\ntd[_ngcontent-%COMP%]{\r\n    vertical-align: middle;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4uaW1nLWNpcmNsZSB7XHJcbiAgICBtYXgtaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG50ZHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-messages',
          templateUrl: './messages.component.html',
          styleUrls: ['./messages.component.css']
        }]
      }], function () {
        return [{
          type: src_Services_alertify_service__WEBPACK_IMPORTED_MODULE_1__["AlertifyService"]
        }, {
          type: src_Services_UserService_service__WEBPACK_IMPORTED_MODULE_2__["UserServiceService"]
        }, {
          type: src_Services_Auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/nav/nav.component.ts":
  /*!**************************************!*\
    !*** ./src/app/nav/nav.component.ts ***!
    \**************************************/

  /*! exports provided: NavComponent */

  /***/
  function srcAppNavNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavComponent", function () {
      return NavComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _Services_Auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../Services/Auth.service */
    "./src/Services/Auth.service.ts");
    /* harmony import */


    var src_Services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/Services/alertify.service */
    "./src/Services/alertify.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-bootstrap */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/esm5/ngx-bootstrap.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var _c0 = function _c0() {
      return ["/member"];
    };

    var _c1 = function _c1() {
      return ["/list"];
    };

    var _c2 = function _c2() {
      return ["/message"];
    };

    function NavComponent_ul_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Matches ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "(current)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Lists");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Message");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
      }
    }

    var _c3 = function _c3() {
      return ["/memberedit"];
    };

    function NavComponent_div_5_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Edit Profile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_div_5_div_6_Template_a_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r4.Logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Logout");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c3));
      }
    }

    function NavComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NavComponent_div_5_div_6_Template, 8, 2, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.photoUrl || "../../../../assets/user.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Welcome ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, ctx_r1.service.UserName == null ? null : ctx_r1.service.UserName.unique_name), " ");
      }
    }

    function NavComponent_form_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 22, 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NavComponent_form_6_Template_form_ngSubmit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.login();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NavComponent_form_6_Template_input_ngModelChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.model.username = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NavComponent_form_6_Template_input_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.model.Password = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.model.username);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.model.Password);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r6.valid);
      }
    }

    var _c4 = function _c4() {
      return ["/home"];
    };

    var NavComponent = /*#__PURE__*/function () {
      function NavComponent(service, alertify, routelink) {
        _classCallCheck(this, NavComponent);

        this.service = service;
        this.alertify = alertify;
        this.routelink = routelink;
        this.model = {};
      }

      _createClass(NavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this26 = this;

          this.service.currentPhotoUrl.subscribe(function (photoUrl) {
            return _this26.photoUrl = photoUrl;
          });
        }
      }, {
        key: "login",
        value: function login() {
          var _this27 = this;

          this.service.login(this.model).subscribe(function (res) {
            _this27.alertify.success('Logged in successfully');
          }, function (err) {
            _this27.alertify.error(err);
          }, function () {
            _this27.routelink.navigate(['/member']);
          });
        }
      }, {
        key: "loggedIn",
        value: function loggedIn() {
          return this.service.loggedIn();
        }
      }, {
        key: "Logout",
        value: function Logout() {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          this.service.UserName = null;
          this.service.CurrentUser = null;
          this.alertify.message('Logout successfully');
          this.routelink.navigate(['/home']);
        }
      }]);

      return NavComponent;
    }();

    NavComponent.ɵfac = function NavComponent_Factory(t) {
      return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_Auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_Services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavComponent,
      selectors: [["app-nav"]],
      decls: 7,
      vars: 5,
      consts: [[1, "navbar", "navbar-expand-md", "navbar-dark", "bg-primary"], [1, "container"], [1, "navbar-brand", 3, "routerLink"], ["class", "navbar-nav mr-auto", 4, "ngIf"], ["class", "dropdown", "dropdown", "", 4, "ngIf"], ["class", "form-inline my-2 my-lg-0", 3, "ngSubmit", 4, "ngIf"], [1, "navbar-nav", "mr-auto"], ["active", "", 1, "nav-item", "routerLinkActive="], [1, "nav-link", 3, "routerLink"], [1, "sr-only"], ["routerLinkActive", "active", 1, "nav-item"], ["dropdown", "", 1, "dropdown"], [1, "mr-1"], ["alt", "", 3, "src"], ["dropdownToggle", "", 1, "dropdown-toggle", "text-light"], ["class", "dropdown-menu mt-3", 4, "dropdownMenu"], [1, "dropdown-menu", "mt-3"], [1, "dropdown-item", 3, "routerLink"], [1, "fa", "fa-user"], [1, "dropdown-divider"], [1, "dropdown-item", 3, "click"], [1, "fa", "fa-sign-out"], [1, "form-inline", "my-2", "my-lg-0", 3, "ngSubmit"], ["loginform", "ngForm"], ["type", "text", "name", "username", "placeholder", "UserName", "required", "", 1, "form-control", "mr-sm-2", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "Password", "placeholder", "Password", "required", "", 1, "form-control", "mr-sm-2", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-success", "my-2", "my-sm-0", 3, "disabled"]],
      template: function NavComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Dating App");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NavComponent_ul_4_Template, 12, 6, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NavComponent_div_5_Template, 7, 4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NavComponent_form_6_Template, 6, 3, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loggedIn());
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDropdownDirective"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDropdownToggleDirective"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDropdownMenuDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["TitleCasePipe"]],
      styles: [".dropdown-toggle[_ngcontent-%COMP%], .dropdown-item[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    max-height: 50px;\r\n    border: 2px solid white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9uYXYvbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcGRvd24tdG9nZ2xlLC5kcm9wZG93bi1pdGVtIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIG1heC1oZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nav',
          templateUrl: './nav.component.html',
          styleUrls: ['./nav.component.css']
        }]
      }], function () {
        return [{
          type: _Services_Auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthServiceService"]
        }, {
          type: src_Services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      ApiURL: 'http://localhost:5000/api/'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\API Core\DatingApp\DatingAPP-SPA\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map