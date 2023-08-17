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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var req = _ref.req;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Hello world");
});

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
  var Html = _src_templates_TemplateList__WEBPACK_IMPORTED_MODULE_7__["default"][req.template];
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

  //res.send(`<!doctype html>\n${ReactDOMServer.renderToStaticMarkup(HTML_content)}`);

  //res.send(`TEST 123`);
  res.end();
}
app.get('/Robots.txt', function (req, res) {
  res.send("\n  User-agent: * Disallow: /\n  ");
});

// #############################################################
// All page requests
// #############################################################
app.get('/*', function (req, res, next) {
  console.log("Serving main file ...s");
  var apiData = [];
  var templateName = 'html';
  responseWithSourceCode(req, res, apiData, templateName);
});
app.listen(SERVER_PORT, function () {
  console.log("\uD83D\uDE0E Server is listening on port ".concat(SERVER_PORT));
});
})();

/******/ })()
;
//# sourceMappingURL=server-bundle.js.map