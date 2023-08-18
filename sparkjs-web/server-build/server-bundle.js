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
Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var client = function client(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
    exact: true,
    path: "*",
    render: function render(props) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_PageLayout__WEBPACK_IMPORTED_MODULE_2__["default"], props);
    }
  })));
};
var context = {};
var server = function server(props) {
  var cookies = props.cookies;
  var apiData = props.apiData;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.StaticRouter, {
    location: props.url,
    serverCookies: cookies,
    apiData: apiData,
    context: context
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
    exact: true,
    path: "*",
    render: function render(props) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_PageLayout__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
        serverCookies: cookies,
        apiData: apiData
      }, props));
    }
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var req = _ref.req;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  }, typeof window == 'undefined' ? server(req) : client(req));
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
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-loadable'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../pageComponents/Loading'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



/* Components */
var Header = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-loadable'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
  loader: function loader() {
    return Promise.resolve().then(function webpackMissingModule() { var e = new Error("Cannot find module '../../../pageComponents/Header'"); e.code = 'MODULE_NOT_FOUND'; throw e; });
  },
  loading: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../pageComponents/Loading'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
});
var Home = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-loadable'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
  loader: function loader() {
    return Promise.resolve().then(function webpackMissingModule() { var e = new Error("Cannot find module '../../../components/Home'"); e.code = 'MODULE_NOT_FOUND'; throw e; });
  },
  loading: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../pageComponents/Loading'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
});
var About = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-loadable'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
  loader: function loader() {
    return Promise.resolve().then(function webpackMissingModule() { var e = new Error("Cannot find module '../../../pageComponents/About'"); e.code = 'MODULE_NOT_FOUND'; throw e; });
  },
  loading: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../pageComponents/Loading'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
});
var Setup = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-loadable'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
  loader: function loader() {
    return Promise.resolve().then(function webpackMissingModule() { var e = new Error("Cannot find module '../../../pageComponents/Setup'"); e.code = 'MODULE_NOT_FOUND'; throw e; });
  },
  loading: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../pageComponents/Loading'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
});
var Words = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-loadable'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
  loader: function loader() {
    return Promise.resolve().then(function webpackMissingModule() { var e = new Error("Cannot find module '../../../pageComponents/Words'"); e.code = 'MODULE_NOT_FOUND'; throw e; });
  },
  loading: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../pageComponents/Loading'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
});
var LeftRail = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-loadable'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
  loader: function loader() {
    return Promise.resolve().then(function webpackMissingModule() { var e = new Error("Cannot find module '../../../pageComponents/LeftRail'"); e.code = 'MODULE_NOT_FOUND'; throw e; });
  },
  loading: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../pageComponents/Loading'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  Home: Home,
  About: About,
  Setup: Setup,
  Header: Header,
  Words: Words,
  LeftRail: LeftRail
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
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'universal-cookie'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
    _this.cookies = new Object(function webpackMissingModule() { var e = new Error("Cannot find module 'universal-cookie'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    _this.user = null;
    _this.wrapperGroup = 0;
    return _this;
  }
  _createClass(PageLayout, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var url = this.props.location.pathname;
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
              className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
            }, "Can't find ", componentName, " component!");
          }
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
            style: style,
            "data-main": "true",
            key: componentName,
            props: props
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ChildComponent, null));
        });
        var wrapperKeyStr = "wrapper_".concat(_this2.wrapperGroup, "_{componentCount}");
        //const spanWidth = span[componentCount];

        componentCount++;
        _this2.wrapperGroup++;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          "data-test": span,
          style: wrapperStyle,
          className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
          key: wrapperKeyStr
        }, layout);
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
      }, allLayout);
    }
  }]);
  return PageLayout;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageLayout);

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
/******/ 			// no module.id needed
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