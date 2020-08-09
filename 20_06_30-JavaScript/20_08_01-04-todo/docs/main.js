/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"html,\\nbody {\\n\\tmargin: 0;\\n\\tpadding: 0;\\n}\\n\\nbutton {\\n\\tmargin: 0;\\n\\tpadding: 0;\\n\\tborder: 0;\\n\\tbackground: none;\\n\\tfont-size: 100%;\\n\\tvertical-align: baseline;\\n\\tfont-family: inherit;\\n\\tfont-weight: inherit;\\n\\tcolor: inherit;\\n\\t-webkit-appearance: none;\\n\\tappearance: none;\\n\\t-webkit-font-smoothing: antialiased;\\n\\t-moz-osx-font-smoothing: grayscale;\\n}\\n\\nbody {\\n\\tfont: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;\\n\\tline-height: 1.4em;\\n\\tbackground: #f5f5f5;\\n\\tcolor: #111111;\\n\\tmin-width: 230px;\\n\\tmax-width: 550px;\\n\\tmargin: 0 auto;\\n\\t-webkit-font-smoothing: antialiased;\\n\\t-moz-osx-font-smoothing: grayscale;\\n\\tfont-weight: 300;\\n}\\n\\n:focus {\\n\\toutline: 0;\\n}\\n\\n.hidden {\\n\\tdisplay: none;\\n}\\n\\n.todoapp {\\n\\tbackground: #fff;\\n\\tmargin: 130px 0 40px 0;\\n\\tposition: relative;\\n\\tbox-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),\\n\\t            0 25px 50px 0 rgba(0, 0, 0, 0.1);\\n}\\n\\n.todoapp input::-webkit-input-placeholder {\\n\\tfont-style: italic;\\n\\tfont-weight: 300;\\n\\tcolor: rgba(0, 0, 0, 0.4);\\n}\\n\\n.todoapp input::-moz-placeholder {\\n\\tfont-style: italic;\\n\\tfont-weight: 300;\\n\\tcolor: rgba(0, 0, 0, 0.4);\\n}\\n\\n.todoapp input::input-placeholder {\\n\\tfont-style: italic;\\n\\tfont-weight: 300;\\n\\tcolor: rgba(0, 0, 0, 0.4);\\n}\\n\\n.todoapp h1 {\\n\\tposition: absolute;\\n\\ttop: -140px;\\n\\twidth: 100%;\\n\\tfont-size: 80px;\\n\\tfont-weight: 200;\\n\\ttext-align: center;\\n\\tcolor: #b83f45;\\n\\t-webkit-text-rendering: optimizeLegibility;\\n\\t-moz-text-rendering: optimizeLegibility;\\n\\ttext-rendering: optimizeLegibility;\\n}\\n\\n.new-todo,\\n.edit {\\n\\tposition: relative;\\n\\tmargin: 0;\\n\\twidth: 100%;\\n\\tfont-size: 24px;\\n\\tfont-family: inherit;\\n\\tfont-weight: inherit;\\n\\tline-height: 1.4em;\\n\\tcolor: inherit;\\n\\tpadding: 6px;\\n\\tborder: 1px solid #999;\\n\\tbox-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\\n\\tbox-sizing: border-box;\\n\\t-webkit-font-smoothing: antialiased;\\n\\t-moz-osx-font-smoothing: grayscale;\\n}\\n\\n.new-todo {\\n\\tpadding: 16px 16px 16px 60px;\\n\\tborder: none;\\n\\tbackground: rgba(0, 0, 0, 0.003);\\n\\tbox-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);\\n}\\n\\n.main {\\n\\tposition: relative;\\n\\tz-index: 2;\\n\\tborder-top: 1px solid #e6e6e6;\\n}\\n\\n.toggle-all {\\n\\twidth: 1px;\\n\\theight: 1px;\\n\\tborder: none; /* Mobile Safari */\\n\\topacity: 0;\\n\\tposition: absolute;\\n\\tright: 100%;\\n\\tbottom: 100%;\\n}\\n\\n.toggle-all + label {\\n\\twidth: 60px;\\n\\theight: 34px;\\n\\tfont-size: 0;\\n\\tposition: absolute;\\n\\ttop: -52px;\\n\\tleft: -13px;\\n\\t-webkit-transform: rotate(90deg);\\n\\ttransform: rotate(90deg);\\n}\\n\\n.toggle-all + label:before {\\n\\tcontent: '❯';\\n\\tfont-size: 22px;\\n\\tcolor: #e6e6e6;\\n\\tpadding: 10px 27px 10px 27px;\\n}\\n\\n.toggle-all:checked + label:before {\\n\\tcolor: #737373;\\n}\\n\\n.todo-list {\\n\\tmargin: 0;\\n\\tpadding: 0;\\n\\tlist-style: none;\\n}\\n\\n.todo-list li {\\n\\tposition: relative;\\n\\tfont-size: 24px;\\n\\tborder-bottom: 1px solid #ededed;\\n}\\n\\n.todo-list li:last-child {\\n\\tborder-bottom: none;\\n}\\n\\n.todo-list li.editing {\\n\\tborder-bottom: none;\\n\\tpadding: 0;\\n}\\n\\n.todo-list li.editing .edit {\\n\\tdisplay: block;\\n\\twidth: calc(100% - 43px);\\n\\tpadding: 12px 16px;\\n\\tmargin: 0 0 0 43px;\\n}\\n\\n.todo-list li.editing .view {\\n\\tdisplay: none;\\n}\\n\\n.todo-list li .toggle {\\n\\ttext-align: center;\\n\\twidth: 40px;\\n\\t/* auto, since non-WebKit browsers doesn't support input styling */\\n\\theight: auto;\\n\\tposition: absolute;\\n\\ttop: 0;\\n\\tbottom: 0;\\n\\tmargin: auto 0;\\n\\tborder: none; /* Mobile Safari */\\n\\t-webkit-appearance: none;\\n\\tappearance: none;\\n}\\n\\n.todo-list li .toggle {\\n\\topacity: 0;\\n}\\n\\n.todo-list li .toggle + label {\\n\\t/*\\n\\t\\tFirefox requires `#` to be escaped - https://bugzilla.mozilla.org/show_bug.cgi?id=922433\\n\\t\\tIE and Edge requires *everything* to be escaped to render, so we do that instead of just the `#` - https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/7157459/\\n\\t*/\\n\\tbackground-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E');\\n\\tbackground-repeat: no-repeat;\\n\\tbackground-position: center left;\\n}\\n\\n.todo-list li .toggle:checked + label {\\n\\tbackground-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E');\\n}\\n\\n.todo-list li label {\\n\\tword-break: break-all;\\n\\tpadding: 15px 15px 15px 60px;\\n\\tdisplay: block;\\n\\tline-height: 1.2;\\n\\ttransition: color 0.4s;\\n\\tfont-weight: 400;\\n\\tcolor: #4d4d4d;\\n}\\n\\n.todo-list li.completed label {\\n\\tcolor: #cdcdcd;\\n\\ttext-decoration: line-through;\\n}\\n\\n.todo-list li .destroy {\\n\\tdisplay: none;\\n\\tposition: absolute;\\n\\ttop: 0;\\n\\tright: 10px;\\n\\tbottom: 0;\\n\\twidth: 40px;\\n\\theight: 40px;\\n\\tmargin: auto 0;\\n\\tfont-size: 30px;\\n\\tcolor: #cc9a9a;\\n\\tmargin-bottom: 11px;\\n\\ttransition: color 0.2s ease-out;\\n}\\n\\n.todo-list li .destroy:hover {\\n\\tcolor: #af5b5e;\\n}\\n\\n.todo-list li .destroy:after {\\n\\tcontent: '×';\\n}\\n\\n.todo-list li:hover .destroy {\\n\\tdisplay: block;\\n}\\n\\n.todo-list li .edit {\\n\\tdisplay: none;\\n}\\n\\n.todo-list li.editing:last-child {\\n\\tmargin-bottom: -1px;\\n}\\n\\n.footer {\\n\\tpadding: 10px 15px;\\n\\theight: 20px;\\n\\ttext-align: center;\\n\\tfont-size: 15px;\\n\\tborder-top: 1px solid #e6e6e6;\\n}\\n\\n.footer:before {\\n\\tcontent: '';\\n\\tposition: absolute;\\n\\tright: 0;\\n\\tbottom: 0;\\n\\tleft: 0;\\n\\theight: 50px;\\n\\toverflow: hidden;\\n\\tbox-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),\\n\\t            0 8px 0 -3px #f6f6f6,\\n\\t            0 9px 1px -3px rgba(0, 0, 0, 0.2),\\n\\t            0 16px 0 -6px #f6f6f6,\\n\\t            0 17px 2px -6px rgba(0, 0, 0, 0.2);\\n}\\n\\n.todo-count {\\n\\tfloat: left;\\n\\ttext-align: left;\\n}\\n\\n.todo-count strong {\\n\\tfont-weight: 300;\\n}\\n\\n.filters {\\n\\tmargin: 0;\\n\\tpadding: 0;\\n\\tlist-style: none;\\n\\tposition: absolute;\\n\\tright: 0;\\n\\tleft: 0;\\n}\\n\\n.filters li {\\n\\tdisplay: inline;\\n}\\n\\n.filters li a {\\n\\tcolor: inherit;\\n\\tmargin: 3px;\\n\\tpadding: 3px 7px;\\n\\ttext-decoration: none;\\n\\tborder: 1px solid transparent;\\n\\tborder-radius: 3px;\\n}\\n\\n.filters li a:hover {\\n\\tborder-color: rgba(175, 47, 47, 0.1);\\n}\\n\\n.filters li a.selected {\\n\\tborder-color: rgba(175, 47, 47, 0.2);\\n}\\n\\n.clear-completed,\\nhtml .clear-completed:active {\\n\\tfloat: right;\\n\\tposition: relative;\\n\\tline-height: 20px;\\n\\ttext-decoration: none;\\n\\tcursor: pointer;\\n}\\n\\n.clear-completed:hover {\\n\\ttext-decoration: underline;\\n}\\n\\n.info {\\n\\tmargin: 65px auto 0;\\n\\tcolor: #4d4d4d;\\n\\tfont-size: 11px;\\n\\ttext-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\\n\\ttext-align: center;\\n}\\n\\n.info p {\\n\\tline-height: 1;\\n}\\n\\n.info a {\\n\\tcolor: inherit;\\n\\ttext-decoration: none;\\n\\tfont-weight: 400;\\n}\\n\\n.info a:hover {\\n\\ttext-decoration: underline;\\n}\\n\\n/*\\n\\tHack to remove background from Mobile Safari.\\n\\tCan't use it globally since it destroys checkboxes in Firefox\\n*/\\n@media screen and (-webkit-min-device-pixel-ratio:0) {\\n\\t.toggle-all,\\n\\t.todo-list li .toggle {\\n\\t\\tbackground: none;\\n\\t}\\n\\n\\t.todo-list li .toggle {\\n\\t\\theight: 40px;\\n\\t}\\n}\\n\\n@media (max-width: 430px) {\\n\\t.footer {\\n\\t\\theight: 50px;\\n\\t}\\n\\n\\t.filters {\\n\\t\\tbottom: 10px;\\n\\t}\\n}\\n\\n\\nhr {\\n\\tmargin: 20px 0;\\n\\tborder: 0;\\n\\tborder-top: 1px dashed #c5c5c5;\\n\\tborder-bottom: 1px dashed #f7f7f7;\\n}\\n\\n.learn a {\\n\\tfont-weight: normal;\\n\\ttext-decoration: none;\\n\\tcolor: #b83f45;\\n}\\n\\n.learn a:hover {\\n\\ttext-decoration: underline;\\n\\tcolor: #787e7e;\\n}\\n\\n.learn h3,\\n.learn h4,\\n.learn h5 {\\n\\tmargin: 10px 0;\\n\\tfont-weight: 500;\\n\\tline-height: 1.2;\\n\\tcolor: #000;\\n}\\n\\n.learn h3 {\\n\\tfont-size: 24px;\\n}\\n\\n.learn h4 {\\n\\tfont-size: 18px;\\n}\\n\\n.learn h5 {\\n\\tmargin-bottom: 0;\\n\\tfont-size: 14px;\\n}\\n\\n.learn ul {\\n\\tpadding: 0;\\n\\tmargin: 0 0 30px 25px;\\n}\\n\\n.learn li {\\n\\tline-height: 20px;\\n}\\n\\n.learn p {\\n\\tfont-size: 15px;\\n\\tfont-weight: 300;\\n\\tline-height: 1.3;\\n\\tmargin-top: 0;\\n\\tmargin-bottom: 0;\\n}\\n\\n#issue-count {\\n\\tdisplay: none;\\n}\\n\\n.quote {\\n\\tborder: none;\\n\\tmargin: 20px 0 60px 0;\\n}\\n\\n.quote p {\\n\\tfont-style: italic;\\n}\\n\\n.quote p:before {\\n\\tcontent: '“';\\n\\tfont-size: 50px;\\n\\topacity: .15;\\n\\tposition: absolute;\\n\\ttop: -20px;\\n\\tleft: 3px;\\n}\\n\\n.quote p:after {\\n\\tcontent: '”';\\n\\tfont-size: 50px;\\n\\topacity: .15;\\n\\tposition: absolute;\\n\\tbottom: -42px;\\n\\tright: 3px;\\n}\\n\\n.quote footer {\\n\\tposition: absolute;\\n\\tbottom: -40px;\\n\\tright: 0;\\n}\\n\\n.quote footer img {\\n\\tborder-radius: 3px;\\n}\\n\\n.quote footer a {\\n\\tmargin-left: 5px;\\n\\tvertical-align: middle;\\n}\\n\\n.speech-bubble {\\n\\tposition: relative;\\n\\tpadding: 10px;\\n\\tbackground: rgba(0, 0, 0, .04);\\n\\tborder-radius: 5px;\\n}\\n\\n.speech-bubble:after {\\n\\tcontent: '';\\n\\tposition: absolute;\\n\\ttop: 100%;\\n\\tright: 30px;\\n\\tborder: 13px solid transparent;\\n\\tborder-top-color: rgba(0, 0, 0, .04);\\n}\\n\\n.learn-bar > .learn {\\n\\tposition: absolute;\\n\\twidth: 272px;\\n\\ttop: 8px;\\n\\tleft: -300px;\\n\\tpadding: 10px;\\n\\tborder-radius: 5px;\\n\\tbackground-color: rgba(255, 255, 255, .6);\\n\\ttransition-property: left;\\n\\ttransition-duration: 500ms;\\n}\\n\\n@media (min-width: 899px) {\\n\\t.learn-bar {\\n\\t\\twidth: auto;\\n\\t\\tpadding-left: 300px;\\n\\t}\\n\\n\\t.learn-bar > .learn {\\n\\t\\tleft: 8px;\\n\\t}\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/classes/index.js":
/*!******************************!*\
  !*** ./src/classes/index.js ***!
  \******************************/
/*! exports provided: Todo, TodoList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.class */ \"./src/classes/todo.class.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Todo\", function() { return _todo_class__WEBPACK_IMPORTED_MODULE_0__[\"Todo\"]; });\n\n/* harmony import */ var _todo_list_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-list.class */ \"./src/classes/todo-list.class.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"TodoList\", function() { return _todo_list_class__WEBPACK_IMPORTED_MODULE_1__[\"TodoList\"]; });\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/classes/index.js?");

/***/ }),

/***/ "./src/classes/todo-list.class.js":
/*!****************************************!*\
  !*** ./src/classes/todo-list.class.js ***!
  \****************************************/
/*! exports provided: TodoList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TodoList\", function() { return TodoList; });\n\n\n\nclass TodoList {\n\n    constructor() {\n        // this.todos = [];\n        this.crgarLocalStorage();\n    }\n\n    nuevoTodo(todo) {\n        this.todos.push(todo);\n        this.guardarLocalStorage();\n    }\n\n    eliminarTodo(id) {\n        this.todos = this.todos.filter(todo => todo.id != id)\n        this.guardarLocalStorage();\n    }\n\n    marcarCompletado(id) {\n        for (const todo of this.todos) {\n\n            if (todo.id == id) {\n                todo.completado = !todo.completado;\n                this.guardarLocalStorage();\n                break;\n            }\n        }\n    }\n\n    eliminarCompletados() {\n        this.todos = this.todos.filter(todo => !todo.completado)\n        this.guardarLocalStorage();\n    }\n\n    guardarLocalStorage() {\n        localStorage.setItem('todo', JSON.stringify(this.todos));\n    }\n\n    crgarLocalStorage() {\n        // if (localStorage.getItem('todo')) {// Verificar si el objeto existe\n        //     this.todos = JSON.parse(localStorage.getItem('todo'));\n\n        //     console.log('cargarLocal:', this.todos);\n        //     console.log(typeof this.todos);\n\n        // } else {\n        //     this.todos = [];\n        // }\n\n        this.todos = (localStorage.getItem('todo')) // Operador Ternario de la Funcion de arriba - Verifica si el objeto existe entonces\n            ? JSON.parse(localStorage.getItem('todo')) // Imprime lo que tienes en el localStorage\n            : []; // En caso contrario imprime un arreglo vacio\n\n    }\n}\n\n//# sourceURL=webpack:///./src/classes/todo-list.class.js?");

/***/ }),

/***/ "./src/classes/todo.class.js":
/*!***********************************!*\
  !*** ./src/classes/todo.class.js ***!
  \***********************************/
/*! exports provided: Todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Todo\", function() { return Todo; });\n\n\n\nclass Todo { //Esto es un constructor \n\n    constructor(tarea){ //Estos son los atributos que la tarea tiene\n        this.tarea = tarea;\n        this.id = new Date().getTime();\n        this.completado = false;\n        this.creado = new Date();\n    }\n}\n\n//# sourceURL=webpack:///./src/classes/todo.class.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: todoList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"todoList\", function() { return todoList; });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes */ \"./src/classes/index.js\");\n/* harmony import */ var _js_componentes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/componentes */ \"./src/js/componentes.js\");\n\n\n //Aqui importamos la clase para poder tener un control de ella\n\n\nconst todoList = new _classes__WEBPACK_IMPORTED_MODULE_1__[\"TodoList\"]();\n\n// const tarea = new Todo('Aprender JavaScript!!'); //Aqui creamos una nueva tarea, en el constructor Todo y recibe un parametro que es Aprender JavaScript\n// todoList.nuevoTodo(tarea); //Aqui ya me daba los metodos (osea \"nuevoTodo\")\n\n// console.log(todoList); \n\n// crearTodoHtml(tarea);\n\n// localStorage.setItem('mi-key', 'ABC123');\n// sessionStorage.setItem('mi-key', 'ABC123');\n\n// setTimeout(() => {\n//     localStorage.removeItem('mi-key');\n// }, 1500)\n\ntodoList.todos.forEach(_js_componentes__WEBPACK_IMPORTED_MODULE_2__[\"crearTodoHtml\"]); // Mandamos llamar este procedimiento para ver los Todos\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/componentes.js":
/*!*******************************!*\
  !*** ./src/js/componentes.js ***!
  \*******************************/
/*! exports provided: crearTodoHtml */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"crearTodoHtml\", function() { return crearTodoHtml; });\n/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes */ \"./src/classes/index.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n\n\n\n//Referencias en el HTML\nconst divTodoList = document.querySelector('.todo-list');\nconst txtInput = document.querySelector('.new-todo');\nconst btnBorrar = document.querySelector('.clear-completed');\nconst ulFiltros = document.querySelector('.filters');\nconst anchorfiltros = document.querySelectorAll('.filtro') ;\n\nconst crearTodoHtml = (todo) => { // Ocupo recibir un todo\n\n    const htmlTodo = `\n    <li class=\"${(todo.completado) ? 'completed' : ''}\" data-id=\"${todo.id}\">\n    <div class=\"view\">\n        <input class=\"toggle\" type=\"checkbox\" ${(todo.completado) ? 'checked' : ''}>\n        <label>${todo.tarea}</label>\n        <button class=\"destroy\"></button>\n    </div>\n    <input class=\"edit\" value=\"Create a TodoMVC template\">\n</li>`;\n\n    const div = document.createElement('div');\n    div.innerHTML = htmlTodo;\n\n    divTodoList.append(div.firstElementChild);\n\n    return div.firstElementChild;\n\n}\n\n// Eventos\ntxtInput.addEventListener('keyup', (event) => {\n    if (event.keyCode == 13 && txtInput.value.length > 0) {\n        console.log(txtInput.value);\n        const nuevoTodo = new _classes__WEBPACK_IMPORTED_MODULE_0__[\"Todo\"](txtInput.value);\n        _index__WEBPACK_IMPORTED_MODULE_1__[\"todoList\"].nuevoTodo(nuevoTodo);\n\n        crearTodoHtml(nuevoTodo);\n        txtInput.value = '';\n    }\n});\n\ndivTodoList.addEventListener('click', (event) => {\n\n    const nombreElemento = event.target.localName; //input, label, button\n    const todoElemento = event.target.parentElement.parentElement;\n    const todoId = todoElemento.getAttribute('data-id');\n\n    if (nombreElemento.includes('input')) { // click en el check\n        _index__WEBPACK_IMPORTED_MODULE_1__[\"todoList\"].marcarCompletado(todoId);\n        todoElemento.classList.toggle('completed');\n    } else if (nombreElemento.includes('button')) { //hay ue borrar el todo\n        _index__WEBPACK_IMPORTED_MODULE_1__[\"todoList\"].eliminarTodo(todoId);\n        divTodoList.removeChild(todoElemento);\n    }\n});\n\nbtnBorrar.addEventListener('click', () => {\n    _index__WEBPACK_IMPORTED_MODULE_1__[\"todoList\"].eliminarCompletados();\n\n    for (let i = divTodoList.children.length - 1; i >= 0; i--) {\n        const elemento = divTodoList.children[i];\n\n        if (elemento.classList.contains('completed')) {\n            divTodoList.removeChild(elemento);\n        }\n    }\n});\n\nulFiltros.addEventListener('click', (event) => {\n    const filtro = event.target.text;\n    if (!filtro) { return; }\n\n    anchorfiltros.forEach(elem => elem.classList.remove('selected'));\n    event.target.classList.add('selected');\n\n    for (const elemento of divTodoList.children) {\n        elemento.classList.remove('hidden');\n        const completado = elemento.classList.contains('completed');\n\n        switch (filtro) {\n            case 'Pendientes':\n                if (completado) {\n                    elemento.classList.add('hidden');\n                }\n                    break;\n                    case 'Completados':\n                if (!completado) {\n                    elemento.classList.add('hidden');\n                }\n                    break;\n                }\n        }\n    }\n);\n\n//# sourceURL=webpack:///./src/js/componentes.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/styles.css?");

/***/ })

/******/ });