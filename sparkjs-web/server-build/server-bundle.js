/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/App/index.js":
/*!*************************************!*\
  !*** ./src/components/App/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_PageLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../containers/PageLayout */ "./src/containers/PageLayout/index.js");
/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom/server */ "react-router-dom/server");
/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom_server__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.scss */ "./src/components/App/styles.scss");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





var Home = function Home() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/home"
  }, "HOME")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/about"
  }, "ABOUT"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Home"));
};
var About = function About() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/home"
  }, "HOME")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/about"
  }, "ABOUT"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Aboiut"));
};
var context = {};
var client = function client() {
  var cookies = {};
  var apiData = {};

  //console.log(">>>>> [CLIENT] ", window.location.pathname);
  var props = {
    originalUrl: window.location.pathname
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
    path: "/test",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_PageLayout__WEBPACK_IMPORTED_MODULE_2__["default"], props)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
    path: "/home",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Home, props)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
    path: "/About",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(About, props)
  })));
};
var server = function server(props) {
  var cookies = {};
  var apiData = {};
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom_server__WEBPACK_IMPORTED_MODULE_3__.StaticRouter, {
    location: props.url,
    context: context
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_PageLayout__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    serverCookies: cookies,
    apiData: apiData
  }, props)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var req = _ref.req;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_4__["default"].appWrapper
  }, typeof window == 'undefined' ? server(req) : client(req));
});

/***/ }),

/***/ "./src/components/GeneralPopup/index.js":
/*!**********************************************!*\
  !*** ./src/components/GeneralPopup/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ "./src/components/GeneralPopup/styles.scss");
/* harmony import */ var _containers_EventsManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../containers/EventsManager */ "./src/containers/EventsManager/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var Renderer = function Renderer(_ref) {
  var showPopup = _ref.showPopup;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(showPopup),
    _useState2 = _slicedToArray(_useState, 2),
    popupVisible = _useState2[0],
    setPopupVisible = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    message = _useState4[0],
    setMessage = _useState4[1];
  function closePopup() {
    setPopupVisible(false);
  }
  function showPopupFunc(message) {
    setMessage(message);
    setPopupVisible(true);
  }

  // register global showPopup to be called by other components
  _containers_EventsManager__WEBPACK_IMPORTED_MODULE_2__["default"].registerEvent('showPopup', showPopupFunc);
  return popupVisible ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "addFeatureFlag",
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_1__["default"].modal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_1__["default"].modalContent
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    onClick: function onClick() {
      closePopup();
    },
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_1__["default"].close
  }, "\xD7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_1__["default"].message
  }, message))) : null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Renderer);

/***/ }),

/***/ "./src/components/Home/index.js":
/*!**************************************!*\
  !*** ./src/components/Home/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ "./src/components/Home/styles.scss");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


;
var WEATHER_API_URL = undefined;
var btnClicked = function btnClicked() {
  alert("!");
};
var Home = /*#__PURE__*/function (_Component) {
  _inherits(Home, _Component);
  var _super = _createSuper(Home);
  function Home(props) {
    _classCallCheck(this, Home);
    return _super.call(this, props);
  }
  _createClass(Home, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: _styles_scss__WEBPACK_IMPORTED_MODULE_1__["default"].wrapper
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Test 123"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        onClick: function onClick() {
          btnClicked();
        }
      }, "TEST BUTTON"));
    }
  }]);
  return Home;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./src/containers/EventsManager/index.js":
/*!***********************************************!*\
  !*** ./src/containers/EventsManager/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var isFrontEnd = function isFrontEnd() {
  if (typeof window == 'undefined') ;
};
var app_events;
if (typeof window === 'undefined') {
  if (typeof global.__APP_EVENTS__ == 'undefined') global.__APP_EVENTS__ = {};
  app_events = global.__APP_EVENTS__;
} else {
  if (typeof window.__APP_EVENTS__ == 'undefined') window.__APP_EVENTS__ = {};
  app_events = window.__APP_EVENTS__;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  registerEvent: function registerEvent(eventName, eventAction) {
    if (typeof app_events[eventName] == 'undefined') {
      app_events[eventName] = eventAction;
      return true;
    }
    return false;
  },
  callEvent: function callEvent(eventName) {
    //debugger;
    //return app_events;
    //return app_events[eventName];
    return app_events[eventName];
    //return app_events;
  }
});

/***/ }),

/***/ "./src/containers/PageLayout/ComponentList/index.js":
/*!**********************************************************!*\
  !*** ./src/containers/PageLayout/ComponentList/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pageComponents_Loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../pageComponents/Loading */ "./src/pageComponents/Loading/index.js");
// import Loadable from 'react-loadable';



/* Components */
var Header = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../../../pageComponents/Header */ "./src/pageComponents/Header/index.js"));
});
var Home = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../../../components/Home */ "./src/components/Home/index.js"));
});
var About = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../../../pageComponents/About */ "./src/pageComponents/About/index.js"));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  Home: Home,
  Header: Header,
  About: About
});

/***/ }),

/***/ "./src/containers/PageLayout/PageData/index.js":
/*!*****************************************************!*\
  !*** ./src/containers/PageLayout/PageData/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  '/about': {
    template: "Html",
    layout: [{
      span: [12],
      style: {
        display: "block"
      },
      components: [{
        name: "Header",
        props: {}
      }]
    }, {
      span: 12,
      style: {
        display: "block"
      },
      components: [{
        name: "About",
        props: {}
      }]
    }]
  },
  '/words': {
    template: "Html",
    layout: [{
      span: [0],
      style: {
        display: "block",
        border: "10px solid red"
      },
      components: [{
        name: "Header",
        props: {}
      }]
    }, {
      span: [70, 30],
      style: {
        display: "flex"
      },
      components: [{
        name: "Words",
        props: {},
        style: {
          width: '80%'
        }
      }, {
        name: "LeftRail",
        props: {},
        style: {
          width: '20%'
        }
      }]
    }]
  },
  '/home': {
    template: "Html",
    layout: [{
      span: 12,
      components: [{
        name: "Header",
        props: {}
      }]
    }, {
      span: 12,
      components: [{
        name: "Home",
        props: {}
      }]
    }]
  },
  '/setup': {
    template: "Html",
    layout: [{
      span: 12,
      components: [{
        name: "Header",
        props: {}
      }]
    }, {
      span: 12,
      components: [{
        name: "Setup",
        props: {}
      }]
    }]
  },
  '/other-template': {
    template: "OtherHtml",
    layout: [{
      span: 12,
      components: [{
        name: "Greetings",
        props: {}
      }]
    }]
  }
});

/***/ }),

/***/ "./src/containers/PageLayout/index.js":
/*!********************************************!*\
  !*** ./src/containers/PageLayout/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ComponentList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComponentList */ "./src/containers/PageLayout/ComponentList/index.js");
/* harmony import */ var _PageData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageData */ "./src/containers/PageLayout/PageData/index.js");
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal-cookie */ "universal-cookie");
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(universal_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.scss */ "./src/containers/PageLayout/styles.scss");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var PageLayout = /*#__PURE__*/function (_Component) {
  _inherits(PageLayout, _Component);
  var _super = _createSuper(PageLayout);
  function PageLayout(props) {
    var _this;
    _classCallCheck(this, PageLayout);
    _this = _super.call(this, props);
    _this.cookies = new (universal_cookie__WEBPACK_IMPORTED_MODULE_3___default())();
    _this.user = null;
    _this.wrapperGroup = 0;
    return _this;
  }
  _createClass(PageLayout, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var url = this.props.originalUrl;
      console.log(">>>>>>>>> ", url);
      if (typeof window === 'undefined') {
        // server side 
      } else {
        // client side       
        window.__API_DATA__.url = url;
      }
      var page = _PageData__WEBPACK_IMPORTED_MODULE_2__["default"][url];
      var template = page.template || "template-not-found";
      var allLayout = page.layout.map(function (layoutList) {
        var componentCount = 0;
        var span = layoutList.span;
        var wrapperStyle = layoutList.style;
        var layout = layoutList.components.map(function (component, id, components) {
          var componentName = component.name;
          var props = component.props;
          var ChildComponent = _ComponentList__WEBPACK_IMPORTED_MODULE_1__["default"][componentName];
          var style = component.style;
          if (typeof ChildComponent === 'undefined') {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
              key: "{id}",
              className: _styles_scss__WEBPACK_IMPORTED_MODULE_4__["default"].error
            }, "Can't find ", componentName, " component!");
          }
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
            style: style,
            "data-main": "true",
            key: componentName,
            props: props
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
            fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Loading...")
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ChildComponent, null)));
        });
        var wrapperKeyStr = "wrapper_".concat(_this2.wrapperGroup, "_{componentCount}");
        //const spanWidth = span[componentCount];

        componentCount++;
        _this2.wrapperGroup++;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          "data-test": span,
          style: wrapperStyle,
          className: _styles_scss__WEBPACK_IMPORTED_MODULE_4__["default"].wrapper,
          key: wrapperKeyStr
        }, layout);
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: _styles_scss__WEBPACK_IMPORTED_MODULE_4__["default"].app
      }, allLayout);
    }
  }]);
  return PageLayout;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageLayout);

/***/ }),

/***/ "./src/pageComponents/About/index.js":
/*!*******************************************!*\
  !*** ./src/pageComponents/About/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ "./src/pageComponents/About/styles.scss");


function About() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_1__["default"].wrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "this is the about Page component"));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);

/***/ }),

/***/ "./src/pageComponents/Header/index.js":
/*!********************************************!*\
  !*** ./src/pageComponents/Header/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.scss */ "./src/pageComponents/Header/styles.scss");
/* harmony import */ var _components_GeneralPopup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/GeneralPopup */ "./src/components/GeneralPopup/index.js");
/* harmony import */ var _containers_EventsManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../containers/EventsManager */ "./src/containers/EventsManager/index.js");





var Header = function Header(_ref) {
  var title = _ref.title;
  var _useLocation = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLocation)(),
    search = _useLocation.search;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_2__["default"].wrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/home".concat(search)
  }, "DEVICES")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/account".concat(search)
  }, "ACCOUNT")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/setup".concat(search)
  }, "SETTINGS")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/about".concat(search)
  }, "ABOUT")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/sign-out".concat(search)
  }, "SIGN OUT")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_GeneralPopup__WEBPACK_IMPORTED_MODULE_3__["default"], {
    showPopup: false
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/pageComponents/Loading/index.js":
/*!*********************************************!*\
  !*** ./src/pageComponents/Loading/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var styles = __webpack_require__(/*! ./styles.scss */ "./src/pageComponents/Loading/styles.scss");

/**
 * HELPER COMPONENT TO DISPLAY LOADING ... AND HANDLE ERRORS WHEN COMPONENTS LOADS DYNAMICALLY 
 * @param {} props 
 */
var Loading = function Loading(props) {
  if (props.error) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: styles.wrapper
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Error loading component!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, props.error.message)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, props.error.stack), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: props.retry
    }, "Retry")));
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Loading...");
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loading);

/***/ }),

/***/ "./src/templates/Html.js":
/*!*******************************!*\
  !*** ./src/templates/Html.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var publicPath = "".concat("http://localhost", ":").concat("8084", "/dist/");
var Html = function Html(_ref) {
  var content = _ref.content,
    cssBundles = _ref.cssBundles,
    jsBundles = _ref.jsBundles,
    apiData = _ref.apiData;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("html", {
    lang: "en"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("head", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    charSet: "utf-8"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    "http-equiv": "ScreenOrientation",
    content: "autoRotate:disabled"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", null, "var startTime = new Date();"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, "Server Side Rendering and Bundle Splitting"),
  // don't add this to DEV since there, it will be served from Webpack-dev-server
   false && /*#__PURE__*/0, cssBundles.map(function (bundle) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("link", {
      href: "".concat(bundle.publicPath),
      rel: "stylesheet",
      as: "style",
      media: "screen, projection",
      type: "text/css",
      charSet: "UTF-8"
    });
  }), jsBundles.map(function (_ref2) {
    var file = _ref2.file;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", {
      src: "".concat(publicPath).concat(file)
    }, file);
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", {
    dangerouslySetInnerHTML: {
      __html: "window.__API_DATA__=".concat(JSON.stringify(apiData))
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("body", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "root",
    dangerouslySetInnerHTML: {
      __html: content
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", {
    src: "".concat(publicPath, "main-bundle.js")
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Html);

/***/ }),

/***/ "./src/templates/InternalError.js":
/*!****************************************!*\
  !*** ./src/templates/InternalError.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var publicPath = "".concat("http://localhost", ":").concat("8084", "/dist/");
var Html = function Html(_ref) {
  var content = _ref.content,
    cssBundles = _ref.cssBundles,
    jsBundles = _ref.jsBundles,
    apiData = _ref.apiData;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("html", {
    lang: "en"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("head", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    charSet: "utf-8"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, "Internal Error")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("body", {
    "cz-shortcut-listen": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "root"
  }, "INTERNAL ERROR !")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Html);

/***/ }),

/***/ "./src/templates/OtherHtml.js":
/*!************************************!*\
  !*** ./src/templates/OtherHtml.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var publicPath = "".concat("http://localhost", ":").concat("8084", "/dist/");
var Html = function Html(_ref) {
  var content = _ref.content,
    cssBundles = _ref.cssBundles,
    jsBundles = _ref.jsBundles,
    apiData = _ref.apiData;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("html", {
    lang: "en"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("head", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    charSet: "utf-8"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, "Other Template"),
  // don't add this to DEV since there it will be served from Webpack-dev-server
   false && /*#__PURE__*/0, cssBundles.map(function (bundle) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("link", {
      href: "".concat(bundle.publicPath),
      rel: "stylesheet",
      as: "style",
      media: "screen, projection",
      type: "text/css",
      charSet: "UTF-8"
    });
  }), jsBundles.map(function (_ref2) {
    var file = _ref2.file;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", {
      src: "".concat(publicPath).concat(file)
    }, file);
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", {
    dangerouslySetInnerHTML: {
      __html: "window.__API_DATA__=".concat(JSON.stringify(apiData))
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("body", {
    "cz-shortcut-listen": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "root",
    dangerouslySetInnerHTML: {
      __html: content
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", {
    src: "".concat(publicPath, "main-bundle.js")
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Html);

/***/ }),

/***/ "./src/templates/TemplateList/index.js":
/*!*********************************************!*\
  !*** ./src/templates/TemplateList/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Html.js */ "./src/templates/Html.js");
/* harmony import */ var _OtherHtml_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../OtherHtml.js */ "./src/templates/OtherHtml.js");
/* harmony import */ var _InternalError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../InternalError.js */ "./src/templates/InternalError.js");
/* harmony import */ var _TemplateNotFound_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../TemplateNotFound.js */ "./src/templates/TemplateNotFound.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  Html: _Html_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  OtherHtml: _OtherHtml_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  InternalError: _InternalError_js__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/templates/TemplateNotFound.js":
/*!*******************************************!*\
  !*** ./src/templates/TemplateNotFound.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var publicPath = "".concat("http://localhost", ":").concat("8084", "/dist/");
var Html = function Html(_ref) {
  var content = _ref.content,
    cssBundles = _ref.cssBundles,
    jsBundles = _ref.jsBundles,
    apiData = _ref.apiData;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("html", {
    lang: "en"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("head", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    charSet: "utf-8"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    "http-equiv": "ScreenOrientation",
    content: "autoRotate:disabled"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", null, "var startTime = new Date();"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, "Server Side Rendering and Bundle Splitting"),
  // don't add this to DEV since there, it will be served from Webpack-dev-server
   false && /*#__PURE__*/0, cssBundles.map(function (bundle) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("link", {
      href: "".concat(bundle.publicPath),
      rel: "stylesheet",
      as: "style",
      media: "screen, projection",
      type: "text/css",
      charSet: "UTF-8"
    });
  }), jsBundles.map(function (_ref2) {
    var file = _ref2.file;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", {
      src: "".concat(publicPath).concat(file)
    }, file);
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", {
    dangerouslySetInnerHTML: {
      __html: "window.__API_DATA__=".concat(JSON.stringify(apiData))
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("body", {
    "cz-shortcut-listen": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "TEMPLATE NOT FAUND"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "root",
    dangerouslySetInnerHTML: {
      __html: content
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", {
    src: "".concat(publicPath, "main-bundle.js")
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Html);

/***/ }),

/***/ "./src/components/App/styles.scss":
/*!****************************************!*\
  !*** ./src/components/App/styles.scss ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../fonts/digital-display.ttf */ "./src/fonts/digital-display.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../fonts/Roboto/Roboto-Light.ttf */ "./src/fonts/Roboto/Roboto-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../fonts/Roboto/Roboto-Black.ttf */ "./src/fonts/Roboto/Roboto-Black.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "DigitalDisplay";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("truetype");
  font-weight: 600;
  font-style: normal;
}
@font-face {
  font-family: "RobotoLight";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("truetype");
}
@font-face {
  font-family: "RobotoBlack";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format("truetype");
}
.App-appWrapper--GE1Uw {
  background: #ecf0f1;
  color: white;
  text-align: center;
  font-family: RobotoLight;
}

body {
  overflow-x: hidden;
}

/* global css styles */
*, *:before, *:after {
  border: 0;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

input {
  -webkit-user-select: text;
  user-select: text;
}`, "",{"version":3,"sources":["webpack://./src/components/App/styles.scss"],"names":[],"mappings":"AAAA;EACE,6BAAA;EACA,+DAAA;EACA,gBAAA;EACA,kBAAA;AACF;AAEA;EACE,0BAAA;EACA,+DAAA;AAAF;AAGA;EACE,0BAAA;EACA,+DAAA;AADF;AAIA;EACE,mBAAA;EACA,YAAA;EACA,kBAAA;EACA,wBAAA;AAFF;;AAKA;EACE,kBAAA;AAFF;;AAKA,sBAAA;AAEA;EACE,SAAA;EACA,SAAA;EACA,UAAA;EACA,sBAAA;EACA,UAAA;EACA,yBAAA;EACA,sBAAA;EACA,qBAAA;EACA,iBAAA;AAHF;;AAMA;EACE,yBAAA;EACA,iBAAA;AAHF","sourcesContent":["@font-face {\n  font-family: 'DigitalDisplay';\n  src:  url('../../fonts/digital-display.ttf') format('truetype');\n  font-weight: 600;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'RobotoLight';\n  src:  url('../../fonts/Roboto/Roboto-Light.ttf') format('truetype');\n}\n\n@font-face {\n  font-family: 'RobotoBlack';\n  src:  url('../../fonts/Roboto/Roboto-Black.ttf') format('truetype');\n}\n\n.appWrapper {\n  background:#ecf0f1;  \n  color: white;\n  text-align: center;\n  font-family: RobotoLight;\n}\n\nbody {\n  overflow-x: hidden;\n}\n\n/* global css styles */\n\n*, *:before, *:after {\n  border: 0;\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  outline: 0;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\ninput {\n  -webkit-user-select: text;\n  user-select: text;\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"appWrapper": `App-appWrapper--GE1Uw`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/GeneralPopup/styles.scss":
/*!*************************************************!*\
  !*** ./src/components/GeneralPopup/styles.scss ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* The Modal (background) */
.GeneralPopup-modal--OlA7E {
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}

/* Modal Content/Box */
.GeneralPopup-modalContent--EHl27 {
  background-color: #fefefe;
  margin: 30% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

/* The Close Button */
.GeneralPopup-close--ILpPU {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.GeneralPopup-close--ILpPU:hover,
.GeneralPopup-close--ILpPU:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.GeneralPopup-message--PIIf3 {
  color: black;
  padding: 15px;
}`, "",{"version":3,"sources":["webpack://./src/components/GeneralPopup/styles.scss"],"names":[],"mappings":"AAAA,2BAAA;AACA;EAEE,eAAA;EACA,YAAA;EACA,OAAA;EACA,MAAA;EACA,WAAA;EACA,YAAA;EACA,cAAA;EACA,8BAAA;EACA,oCAAA;AAAF;;AAGA,sBAAA;AACA;EACE,yBAAA;EACA,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,UAAA;AAAF;;AAGA,qBAAA;AACA;EACE,WAAA;EACA,YAAA;EACA,eAAA;EACA,iBAAA;AAAF;;AAGA;;EAEE,YAAA;EACA,qBAAA;EACA,eAAA;AAAF;;AAGA;EACE,YAAA;EACA,aAAA;AAAF","sourcesContent":["/* The Modal (background) */\n.modal {\n  \n  position: fixed; \n  z-index: 100; \n  left: 0;\n  top: 0;\n  width: 100%; \n  height: 100%; \n  overflow: auto; \n  background-color: rgb(0,0,0); \n  background-color: rgba(0,0,0,0.4);\n}\n\n/* Modal Content/Box */\n.modalContent {\n  background-color: #fefefe;\n  margin: 30% auto;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 80%;\n}\n\n/* The Close Button */\n.close {\n  color: #aaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.message  {\n  color: black;\n  padding: 15px;\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"modal": `GeneralPopup-modal--OlA7E`,
	"modalContent": `GeneralPopup-modalContent--EHl27`,
	"close": `GeneralPopup-close--ILpPU`,
	"message": `GeneralPopup-message--PIIf3`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/Home/styles.scss":
/*!*****************************************!*\
  !*** ./src/components/Home/styles.scss ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.Home-weatherTitle--mhgnu {
  background: #7983e4;
  color: #dbd0d0;
  text-align: center;
  padding: 10px;
}
.Home-weatherTitle--mhgnu span {
  font-family: DigitalDisplay;
  font-size: 22px;
  color: white;
  padding-right: 10px;
}
.Home-weatherTitle--mhgnu img {
  width: 35px;
}

.Home-wrapper--tnNOK {
  background: rgb(243, 243, 247);
  color: black;
}
.Home-wrapper--tnNOK .Home-flagWrapper--QkQt2 {
  border: 5px solid silver;
  padding: 40px;
}
.Home-wrapper--tnNOK .Home-flagWrapperError--Ifarq {
  background: rgb(211, 198, 198);
  padding: 40px;
}
.Home-wrapper--tnNOK .Home-fanModeText--kCb42 {
  font-size: 13px;
}

.Home-leftRail--N0A51 {
  text-align: left;
}

.Home-rightRail--FC9LP {
  display: flex;
}
.Home-rightRail--FC9LP button {
  width: 100%;
  padding: 5px;
  cursor: pointer;
}

button {
  border-radius: 5px;
  margin-bottom: 5px;
}

button:hover {
  border-radius: 5px;
  background-color: darkgray;
  color: white;
  font-weight: 800;
}

.Home-addButtonVisible--QG4_r {
  border-radius: 5px;
}

.Home-addButtonHidden--Hsv7E {
  display: none;
}`, "",{"version":3,"sources":["webpack://./src/components/Home/styles.scss"],"names":[],"mappings":"AAAA;EACE,mBAAA;EACA,cAAA;EACA,kBAAA;EAEA,aAAA;AAAF;AAEE;EACE,2BAAA;EACA,eAAA;EACA,YAAA;EACA,mBAAA;AAAJ;AAGE;EACE,WAAA;AADJ;;AAKA;EACE,8BAAA;EACA,YAAA;AAFF;AAQE;EACE,wBAAA;EACA,aAAA;AANJ;AASE;EAEE,8BAAA;EACA,aAAA;AARJ;AAWE;EACE,eAAA;AATJ;;AAeA;EACE,gBAAA;AAZF;;AAeA;EACE,aAAA;AAZF;AAaE;EACE,WAAA;EACA,YAAA;EACA,eAAA;AAXJ;;AAeA;EACE,kBAAA;EACA,kBAAA;AAZF;;AAeA;EACE,kBAAA;EACA,0BAAA;EACA,YAAA;EACA,gBAAA;AAZF;;AAeA;EACE,kBAAA;AAZF;;AAeA;EACE,aAAA;AAZF","sourcesContent":[".weatherTitle {\n  background: #7983e4;\n  color: #dbd0d0;\n  text-align: center;\n  \n  padding: 10px;\n\n  span {\n    font-family: DigitalDisplay;\n    font-size: 22px;\n    color: white;\n    padding-right: 10px;\n  }\n\n  img {\n    width: 35px;\n  }\n}\n\n.wrapper {\n  background: rgb(243, 243, 247);\n  color: black;\n\n  .roomName {\n    \n  }\n\n  .flagWrapper {\n    border: 5px solid silver;\n    padding: 40px;\n  }\n\n  .flagWrapperError {\n    //`border: 5px solid red;\n    background: rgb(211, 198, 198);\n    padding: 40px;\n  }\n\n  .fanModeText {\n    font-size:13px;\n  }\n} \n\n\n\n.leftRail {\n  text-align: left;\n}\n\n.rightRail {\n  display: flex;\n  button {\n    width: 100%;\n    padding: 5px;\n    cursor: pointer;\n  }\n}\n\nbutton {\n  border-radius: 5px;  \n  margin-bottom: 5px;\n}\n\nbutton:hover {\n  border-radius: 5px;\n  background-color: darkgray;\n  color: white;\n  font-weight: 800;\n}\n\n.addButtonVisible {\n  border-radius: 5px;\n}\n\n.addButtonHidden {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"weatherTitle": `Home-weatherTitle--mhgnu`,
	"wrapper": `Home-wrapper--tnNOK`,
	"flagWrapper": `Home-flagWrapper--QkQt2`,
	"flagWrapperError": `Home-flagWrapperError--Ifarq`,
	"fanModeText": `Home-fanModeText--kCb42`,
	"leftRail": `Home-leftRail--N0A51`,
	"rightRail": `Home-rightRail--FC9LP`,
	"addButtonVisible": `Home-addButtonVisible--QG4_r`,
	"addButtonHidden": `Home-addButtonHidden--Hsv7E`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/containers/PageLayout/styles.scss":
/*!***********************************************!*\
  !*** ./src/containers/PageLayout/styles.scss ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.PageLayout-error--Jmg4v {
  background: red;
  color: white;
}

.PageLayout-wrapper--hBShE {
  border: 2px solid red;
}`, "",{"version":3,"sources":["webpack://./src/containers/PageLayout/styles.scss"],"names":[],"mappings":"AAAA;EACE,eAAA;EACA,YAAA;AACF;;AAEA;EACE,qBAAA;AACF","sourcesContent":[".error {\n  background: red;\n  color: white;\n}\n\n.wrapper {\n  border: 2px solid red;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"error": `PageLayout-error--Jmg4v`,
	"wrapper": `PageLayout-wrapper--hBShE`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/pageComponents/About/styles.scss":
/*!**********************************************!*\
  !*** ./src/pageComponents/About/styles.scss ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.About-wrapper--DoZpi {
  color: white;
  background: blue;
  padding: 10px;
}`, "",{"version":3,"sources":["webpack://./src/pageComponents/About/styles.scss"],"names":[],"mappings":"AAAA;EACE,YAAA;EACA,gBAAA;EACA,aAAA;AACF","sourcesContent":[".wrapper {\n  color: white;\n  background: blue;\n  padding: 10px;\n\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"wrapper": `About-wrapper--DoZpi`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/pageComponents/Header/styles.scss":
/*!***********************************************!*\
  !*** ./src/pageComponents/Header/styles.scss ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.Header-wrapper--MtuQQ ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  border: 1px solid #e7e7e7;
  background-color: #f3f3f3;
}
.Header-wrapper--MtuQQ li {
  float: left;
}
.Header-wrapper--MtuQQ li a {
  display: block;
  color: #666;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
.Header-wrapper--MtuQQ li a:hover:not(.Header-active--oFtUn) {
  background-color: #ddd;
}
.Header-wrapper--MtuQQ li a.Header-active--oFtUn {
  color: white;
}`, "",{"version":3,"sources":["webpack://./src/pageComponents/Header/styles.scss"],"names":[],"mappings":"AAEE;EACE,qBAAA;EACA,SAAA;EACA,UAAA;EACA,gBAAA;EACA,yBAAA;EACA,yBAAA;AADJ;AAGE;EACE,WAAA;AADJ;AAIE;EACE,cAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;EACA,qBAAA;AAFJ;AAKE;EACI,sBAAA;AAHN;AAME;EACI,YAAA;AAJN","sourcesContent":[".wrapper {\n  \n  ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    border: 1px solid #e7e7e7;\n    background-color: #f3f3f3;\n  }\n  li {\n    float: left;\n  }\n\n  li a {\n    display: block;\n    color: #666;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n  }\n\n  li a:hover:not(.active) {\n      background-color: #ddd;\n  }\n\n  li a.active {\n      color: white;\n    \n  }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"wrapper": `Header-wrapper--MtuQQ`,
	"active": `Header-active--oFtUn`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/pageComponents/Loading/styles.scss":
/*!************************************************!*\
  !*** ./src/pageComponents/Loading/styles.scss ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.Loading-wrapper--bjLlY {
  background: rgb(141, 141, 172);
  padding-bottom: 10px;
}
.Loading-wrapper--bjLlY h3 {
  background: red;
  text-align: center;
}
.Loading-wrapper--bjLlY div {
  text-align: center;
}`, "",{"version":3,"sources":["webpack://./src/pageComponents/Loading/styles.scss"],"names":[],"mappings":"AAAA;EACE,8BAAA;EACA,oBAAA;AACF;AAAE;EACE,eAAA;EACA,kBAAA;AAEJ;AAAE;EACE,kBAAA;AAEJ","sourcesContent":[".wrapper {\n  background:rgb(141, 141, 172);\n  padding-bottom: 10px;\n  h3 {\n    background: red;\n    text-align: center;\n  }\n  div{\n    text-align: center;\n  }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"wrapper": `Loading-wrapper--bjLlY`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/fonts/Roboto/Roboto-Black.ttf":
/*!*******************************************!*\
  !*** ./src/fonts/Roboto/Roboto-Black.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1e4593aadb047daa00fa.ttf";

/***/ }),

/***/ "./src/fonts/Roboto/Roboto-Light.ttf":
/*!*******************************************!*\
  !*** ./src/fonts/Roboto/Roboto-Light.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7ac06cd185bcbf0d145e.ttf";

/***/ }),

/***/ "./src/fonts/digital-display.ttf":
/*!***************************************!*\
  !*** ./src/fonts/digital-display.ttf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "07daec87663e80140d8d.ttf";

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("body-parser");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("cookie-parser");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react-router-dom/server":
/*!******************************************!*\
  !*** external "react-router-dom/server" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("react-router-dom/server");

/***/ }),

/***/ "universal-cookie":
/*!***********************************!*\
  !*** external "universal-cookie" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("universal-cookie");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = require("url").pathToFileURL(__filename);
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			"server": 1
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no chunk install function needed
/******/ 		
/******/ 		// no chunk loading
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./ssr-server.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! https */ "https");
/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(https__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_components_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/components/App */ "./src/components/App/index.js");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_templates_TemplateList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/templates/TemplateList */ "./src/templates/TemplateList/index.js");
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! cookie-parser */ "cookie-parser");
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_9__);






// import Loadable from 'react-loadable';
// import manifest from './dist/loadable-manifest.json';
// import { getBundles } from 'react-loadable/webpack';



//import cookiesManagement from './expressMiddlewares/cookiesManagement';
// import requestDataFromAPI from './expressMiddlewares/requestDataFromAPI';
var publicPath = "".concat("http://localhost", ":").concat("8084", "/dist/");
// import pageData from './expressMiddlewares/pageData';
//import devicesServices from './expressMiddlewares/devicesServices';
//import userServices from './expressMiddlewares/userServices';
//import weatherServices from './expressMiddlewares/WeatherServices';
//import queries from './src/queries';

var _process$env = ({"APP_NAME":"Webpack React Tutorial","APP_HOST":"http://localhost","SERVER_PORT":"8085","ASSETS_SERVER_PORT":"8084","ENVIRONMENT":"development","DB_DATABASE_NAME":undefined,"DB_DATABASE_PORT":undefined,"WEATHER_API_URL":undefined}),
  APP_HOST = _process$env.APP_HOST,
  SERVER_PORT = _process$env.SERVER_PORT,
  ENVIRONMENT = _process$env.ENVIRONMENT;
var test = null;
var app = new (express__WEBPACK_IMPORTED_MODULE_2___default())();
app.use(express__WEBPACK_IMPORTED_MODULE_2___default().json());
app.use(express__WEBPACK_IMPORTED_MODULE_2___default().urlencoded({
  xtended: true
}));
app.use(express__WEBPACK_IMPORTED_MODULE_2___default().text());
app.use(body_parser__WEBPACK_IMPORTED_MODULE_9___default().text({
  type: 'text/*'
}));
app.use(cookie_parser__WEBPACK_IMPORTED_MODULE_8___default()());
app.use('/source-maps', express__WEBPACK_IMPORTED_MODULE_2___default()["static"]('./dist/source-maps'));
app.use('/server-build', express__WEBPACK_IMPORTED_MODULE_2___default()["static"]('./server-build'));
app.use('/dist', express__WEBPACK_IMPORTED_MODULE_2___default()["static"]('dist')); // to serve frontent prod static files
app.use('/favicon.ico', express__WEBPACK_IMPORTED_MODULE_2___default()["static"]('./static-assets/favicon.ico'));
app.use(express__WEBPACK_IMPORTED_MODULE_2___default()["static"]('static-assets'));
console.log("SERVER_PORT: ", SERVER_PORT);
function responseWithSourceCode(req, res, apiData, templateName) {
  var Html = _src_templates_TemplateList__WEBPACK_IMPORTED_MODULE_7__["default"][templateName];
  var HTML_content = react_dom_server__WEBPACK_IMPORTED_MODULE_6___default().renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_src_components_App__WEBPACK_IMPORTED_MODULE_5__["default"], {
    req: req
  }));
  var cssBundles = [];
  var jsBundles = [];
  var html = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Html, {
    content: HTML_content,
    cssBundles: cssBundles,
    jsBundles: jsBundles,
    apiData: apiData
  });
  res.status(200);
  res.send("<!doctype html>\n".concat(react_dom_server__WEBPACK_IMPORTED_MODULE_6___default().renderToStaticMarkup(html)));
  res.end();
}
app.get('/Robots.txt', function (req, res) {
  res.send("\n  User-agent: * Disallow: /\n  ");
});

// #############################################################
// All page requests
// #############################################################
app.get('/*', function (req, res, next) {
  console.log("Request to: ", req.url);
  var apiData = [];
  var templateName = 'Html';
  responseWithSourceCode(req, res, apiData, templateName);
});
app.listen(SERVER_PORT, function () {
  console.log("\uD83D\uDE0E Server is listening on port ".concat(SERVER_PORT));
});
})();

/******/ })()
;
//# sourceMappingURL=server-bundle.js.map