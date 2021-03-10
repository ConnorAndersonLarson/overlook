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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_hotel_pattern_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/hotel-pattern.jpg */ "./src/images/hotel-pattern.jpg");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_hotel_pattern_jpg__WEBPACK_IMPORTED_MODULE_3__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0; }\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block; }\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent; }\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */ }\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none; }\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; }\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em; }\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline; }\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto; }\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block; }\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item; }\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none; }\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none; }\n\n.accent {\n  color: #992023; }\n\n* {\n  font-family: \"Sawarabi Mincho\", sans-serif; }\n\nbutton {\n  cursor: pointer; }\n\nbody {\n  background: #4F3026;\n  height: 100%;\n  scroll-padding-bottom: 12%; }\n\nheader {\n  width: 100%;\n  height: 26%; }\n\nmain {\n  padding-bottom: 26%; }\n\nfooter {\n  position: fixed;\n  bottom: 0px;\n  width: 100%;\n  margin: 0;\n  height: 12%;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  color: #E6AE98;\n  background: center/cover url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); }\n  footer .book-a-room {\n    width: 33%;\n    height: 50%;\n    border-radius: 10px;\n    font-size: 3vw;\n    padding: 0px;\n    border: 5px solid #992023;\n    background-color: #E6AE98; }\n\n/*HEADER*/\n.title {\n  box-sizing: border-box;\n  display: grid;\n  grid-template: \"welcome\" 34% \"overlook\" 34% \"hotel\" 34% /100%;\n  height: 60%;\n  width: 100%;\n  justify-items: center;\n  background-color: #4F3026;\n  background: center/cover url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); }\n\n.overlook {\n  align-self: center;\n  color: #E6AE98;\n  font-size: 2.5em;\n  text-shadow: 0 0 5px black, 1px 0 20px #E6AE98;\n  grid-area: overlook;\n  margin: 0; }\n\n.welcome {\n  grid-area: welcome;\n  justify-self: flex-start;\n  margin: 10px 0 10px 9%;\n  color: #E6AE98;\n  font-size: 1.5em;\n  text-shadow: 0 0 5px black, 1px 0 20px #E6AE98; }\n\n.hotel {\n  grid-area: hotel;\n  justify-self: flex-end;\n  align-self: flex-end;\n  margin: 10px 10% 10px 0;\n  color: #E6AE98;\n  font-size: 1.5em;\n  text-shadow: 0 0 5px black, 1px 0 20px #E6AE98; }\n\n.sub-header {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column-reverse;\n  position: sticky;\n  position: -webkit-sticky;\n  top: -1px; }\n\n.greeting {\n  text-align: center;\n  font-size: 1.5em;\n  color: #E6AE98;\n  background-color: #4F3026;\n  margin: 0;\n  border: 1px solid #4F3026;\n  padding: 5px 0px 5px 0px;\n  width: 100%; }\n\n/*MAIN*/\n.bookings {\n  display: flex;\n  flex-direction: column;\n  margin: 5%; }\n\n.booking, .log-in, .return {\n  font-size: 3.75vw;\n  margin: 5%;\n  padding-left: 10px;\n  color: #4F3026;\n  border: 5px solid #992023;\n  background-color: #E6AE98;\n  border-radius: 10px; }\n\n.log-in {\n  position: fixed;\n  top: 60%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  height: 35%;\n  width: 65%;\n  margin: 0;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n  .log-in .book-a-room {\n    width: 50%;\n    height: 25%;\n    border-radius: 10px;\n    font-size: 6vw;\n    margin-top: 25px;\n    border: 5px solid #992023;\n    background-color: #E6AE98; }\n\n.error {\n  font-size: 1em;\n  text-align: center; }\n\n/*BOOKING FORM*/\n.book-button {\n  width: 75%; }\n\n.book-button:focus {\n  border-color: #4FB87B; }\n\n.booking-form {\n  position: sticky;\n  top: 4.75em;\n  height: 55%;\n  margin: 0 2.5% 0 2.5%;\n  border: 7px solid #992023;\n  background-color: #E6AE98;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  justify-content: space-around;\n  padding: 10px;\n  border-radius: 10px; }\n\n.stay {\n  font-size: 4.75vw;\n  align-self: center;\n  width: 100%;\n  margin: 0 20px 0 20px;\n  text-align: center; }\n\n#roomType {\n  width: 100%; }\n\n.input > * {\n  font-size: 3.75vw; }\n\n.date {\n  width: 100%;\n  margin: 15px;\n  align-self: center;\n  text-align: center; }\n\n.room-features {\n  grid-template: \"roomType bidet\" 1fr \"numberBeds bidet\" 1fr \"filter bidet\" 1fr /50% 50%;\n  width: 100%;\n  display: grid;\n  justify-items: flex-start;\n  align-items: self-end; }\n\n.room-type {\n  grid-area: roomType; }\n\n.bed-num {\n  grid-area: numberBeds; }\n\nfieldset {\n  grid-area: bidet;\n  height: 100%;\n  border-color: #992023;\n  border-style: solid;\n  padding: 5.6px 12px 5.6px 12px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around; }\n  fieldset legend {\n    font-size: 3.75vw; }\n\nfieldset:focus-within {\n  border-color: #E05F18; }\n\ninput[type=radio] {\n  opacity: 0;\n  position: absolute; }\n\ninput[type=radio] + label:before {\n  height: .75em;\n  width: .75em;\n  margin: 3px 10px 3px 10px;\n  content: \" \";\n  display: inline-block;\n  vertical-align: baseline;\n  border: 5px solid #992023; }\n\ninput[type=radio]:checked + label:before {\n  background: #4FB87B; }\n\n.num-beds {\n  width: 20%;\n  border: #E05F18; }\n\n.filter-button {\n  width: 80%;\n  height: 80%;\n  border-radius: 10px;\n  font-size: 1.25em;\n  border: 5px solid #992023;\n  background-color: #E6AE98; }\n\n.confirmation {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  width: 75%;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  margin: 0; }\n  .confirmation .greeting {\n    border: 5px solid #E05F18;\n    border-radius: 10px; }\n\n.return {\n  width: 50%;\n  height: 10%;\n  font-size: 5vw; }\n\n/*FOOTER*/\n.spending {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  width: 50%; }\n\n.total-spending {\n  height: 100%;\n  color: #E6AE98;\n  font-size: 1.25em;\n  text-shadow: 0 0 5px black, 1px 0 20px #E6AE98; }\n\n.user-spending {\n  height: 100%;\n  color: #E6AE98;\n  font-size: 1.75em;\n  text-shadow: 0 0 5px black, 1px 0 20px #E6AE98; }\n\n@media screen and (min-width: 550px) {\n  header {\n    position: fixed;\n    top: 0px; }\n  main {\n    padding-top: 16em; }\n  footer {\n    position: fixed; }\n  .greeting {\n    font-size: 1.75em; }\n  .log-in {\n    top: 50%; }\n  .sub-header {\n    position: fixed;\n    top: 10em;\n    width: 100%; }\n  .total-spending {\n    font-size: 1.75em; }\n  .user-spending {\n    font-size: 2.5em; }\n  .booking-form {\n    top: 1em; }\n  #roomType {\n    width: 75%; }\n  .filter-button {\n    font-size: 2.5em; }\n  .booking, .log-in, .return {\n    padding: 20px; }\n  .return {\n    height: 20%; }\n  .confirmation {\n    top: 50%; } }\n\n@media screen and (min-width: 1000px) {\n  header {\n    position: fixed;\n    top: 0px;\n    width: 100%;\n    height: 15%; }\n  main {\n    padding-top: 5%;\n    padding-bottom: 3%; }\n  footer {\n    height: 12%; }\n    footer .book-a-room {\n      height: 75%; }\n  .title {\n    grid-template: \"welcome overlook hotel guest\" 100% /33% 34% 33%; }\n  .welcome, .overlook, .hotel {\n    align-self: center;\n    color: #E6AE98;\n    font-size: 45px;\n    text-shadow: 0 0 5px black, 1px 0 20px #E6AE98; }\n  .sub-header {\n    flex-direction: row;\n    justify-content: space-around;\n    position: fixed;\n    top: 9%;\n    width: 100%; }\n  .log-in {\n    height: 35%;\n    top: 50%; }\n    .log-in .book-a-room {\n      font-size: 3vw; }\n  .photo {\n    object-fit: contain;\n    width: 100%; }\n  .greeting {\n    text-align: end;\n    font-size: 25px;\n    padding: 10px 30px 10px 0px;\n    width: 50%; }\n  .room-column {\n    text-align: left;\n    padding-left: 6%; }\n  .booking, .log-in, .return {\n    width: 45%;\n    font-size: 25px;\n    margin: 2%; }\n  .booking-form {\n    position: fixed;\n    top: 50%;\n    left: 75%;\n    transform: translate(-50%, -50%);\n    height: 60%;\n    width: 40%; }\n  .stay {\n    font-size: 25px;\n    align-self: center; }\n  .input > * {\n    font-size: 20px; }\n  fieldset legend {\n    font-size: 20px; }\n  fieldset .input > * {\n    font-size: 18px; }\n  input[type=radio] + label:before {\n    height: 15px;\n    width: 15px; }\n  .filter-button {\n    font-size: 25px; }\n  .spending {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    margin-left: 90px;\n    width: 50%; }\n  .book-a-room {\n    width: 30%;\n    height: 50%;\n    border-radius: 10px;\n    font-size: 3vw;\n    border: 5px solid #992023;\n    background-color: #E6AE98; }\n  .book-button {\n    width: 60%; }\n  .confirmation .greeting {\n    width: 95%;\n    text-align: center;\n    padding: 10px; } }\n\n.hidden {\n  display: none;\n  visibility: hidden; }\n\n.invisible {\n  visibility: hidden; }\n", "",{"version":3,"sources":["webpack://./src/css/_normalize.scss","webpack://./src/css/base.scss","webpack://./src/css/_color.scss","webpack://./src/css/_mobile.scss","webpack://./src/css/_tablet.scss","webpack://./src/css/_desktop.scss"],"names":[],"mappings":"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","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n","@import 'normalize';\n@import 'color';\n@import 'mobile';\n@import 'tablet';\n@import 'desktop';\n\n.hidden {\n  display: none;\n  visibility: hidden;\n}\n\n.invisible {\n  visibility: hidden;\n}\n","$brown: #4F3026;\n$red: #992023;\n$orange: #E05F18;\n$pink: #E6AE98;\n$green: #4FB87B;\n\n$font: 'Sawarabi Mincho', sans-serif;\n\n@mixin hexFont($fontsize){\n  color: $pink;\n  font-size: $fontsize;\n  text-shadow:\n  0 0 5px black,\n  1px 0 20px $pink;\n}\n\n@mixin boxStandard($borderwidth){\n  border: $borderwidth solid $red;\n  background-color: $pink;\n}\n\n@mixin centerFlex($justify){\n  display:flex;\n  align-items: center;\n  justify-content: $justify;\n}\n\n.accent {\n  color: $red;\n}\n","\n\n* {\n  font-family: $font;\n}\n\nbutton {\n  cursor: pointer;\n}\n\nbody {\n  background: $brown;\n  height: 100%;\n  scroll-padding-bottom: 12%;\n}\n\nheader {\n  width: 100%;\n  height: 26%;\n}\n\nmain {\n  padding-bottom: 26%;\n}\n\nfooter {\n  position: fixed;\n  bottom: 0px;\n  width: 100%;\n  margin: 0;\n  height:12%;\n  @include centerFlex(space-around);\n  color: $pink;\n  background: center / cover url(\"../images/hotel-pattern.jpg\");\n  .book-a-room {\n    width: 33%;\n    height: 50%;\n    border-radius: 10px;\n    font-size: 3vw;\n    padding: 0px;\n    @include boxStandard(5px);\n  }\n}\n\n/*HEADER*/\n\n.title{\n  box-sizing: border-box;\n  display: grid;\n  grid-template:\n    \"welcome\" 34%\n    \"overlook\" 34%\n    \"hotel\" 34%\n    /100%;\n  height: 60%;\n  width: 100%;\n  justify-items: center;\n  background-color: $brown;\n  background: center / cover url(\"../images/hotel-pattern.jpg\");\n}\n\n.overlook{\n  align-self: center;\n  @include hexFont(2.5em);\n  grid-area: overlook;\n  margin:0;\n}\n\n.welcome{\n  grid-area: welcome;\n  justify-self: flex-start;\n  margin: 10px 0 10px 9%;\n  @include hexFont(1.5em);\n}\n\n.hotel{\n  grid-area: hotel;\n  justify-self: flex-end;\n  align-self: flex-end;\n  margin: 10px 10% 10px 0;\n  @include hexFont(1.5em);\n}\n\n.sub-header {\n  @include centerFlex(center);\n  flex-direction: column-reverse;\n  position: sticky;\n  position: -webkit-sticky;\n  top: -1px;\n}\n\n.greeting {\n  text-align: center;\n  font-size: 1.5em;\n  color: $pink;\n  background-color: $brown;\n  margin: 0;\n  border: 1px solid $brown;\n  padding: 5px 0px 5px 0px;\n  width: 100%;\n}\n\n/*MAIN*/\n\n\n.bookings {\n  display:flex;\n  flex-direction: column;\n  margin: 5%;\n}\n\n.booking {\n  font-size: 3.75vw;\n  margin: 5%;\n  padding-left: 10px;\n  color: $brown;\n  @include boxStandard(5px);\n  border-radius: 10px;\n}\n\n.log-in {\n  @extend .booking;\n  position: fixed;\n  top: 60%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  height: 35%;\n  width: 65%;\n  margin:0;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  .book-a-room {\n    width: 50%;\n    height: 25%;\n    border-radius: 10px;\n    font-size: 6vw;\n    margin-top: 25px;\n    @include boxStandard(5px);\n  }\n}\n\n\n.error {\n  font-size: 1em;\n  text-align: center;\n}\n\n/*BOOKING FORM*/\n\n.book-button {\n  width: 75%;\n}\n\n.book-button:focus {\n  border-color: $green;\n}\n\n.booking-form {\n  position: sticky;\n  top: 4.75em;\n  height: 55%;\n  margin: 0 2.5% 0 2.5%;\n  @include boxStandard(7px);\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  justify-content: space-around;\n  padding: 10px;\n  border-radius: 10px;\n}\n\n.stay{\n  font-size: 4.75vw;\n  align-self: center;\n  width: 100%;\n  margin: 0 20px 0 20px;\n  text-align: center;\n}\n\n#roomType {\n  width: 100%;\n}\n\n.input > * {\n  font-size: 3.75vw;\n}\n\n.date {\n  width: 100%;\n  margin: 15px;\n  align-self: center;\n  text-align: center;\n}\n\n.room-features {\n  grid-template:\n    \"roomType bidet\" 1fr\n    \"numberBeds bidet\" 1fr\n    \"filter bidet\" 1fr\n    /50% 50%;\n  width: 100%;\n  display:grid;\n  justify-items: flex-start;\n  align-items: self-end;\n}\n\n.room-type {\n  grid-area: roomType;\n}\n\n.bed-num {\n  grid-area: numberBeds;\n}\n\nfieldset {\n  legend {\n    font-size: 3.75vw;\n  }\n  grid-area: bidet;\n  height: 100%;\n  border-color: $red;\n  border-style: solid;\n  padding: 5.6px 12px 5.6px 12px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n\n}\n\nfieldset:focus-within {\n  border-color: $orange;\n}\n\ninput[type=radio] {\n  opacity: 0;\n  position: absolute;\n}\n\ninput[type=radio] + label:before {\n  height: .75em;\n  width: .75em;\n  margin: 3px 10px 3px 10px;\n  content: \" \";\n  display: inline-block;\n  vertical-align: baseline;\n  border: 5px solid $red;\n}\n\ninput[type=radio]:checked + label:before {\n  background: $green;\n}\n\n.num-beds {\n  width: 20%;\n  border: $orange;\n}\n\n.filter-button {\n  width: 80%;\n  height: 80%;\n  border-radius: 10px;\n  font-size: 1.25em;\n  @include boxStandard(5px);\n}\n\n.confirmation {\n  @include centerFlex(space-around);\n  width: 75%;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  margin: 0;\n  .greeting {\n    border: 5px solid $orange;\n    border-radius: 10px;\n  }\n}\n\n.return {\n  @extend .booking;\n  width: 50%;\n  height: 10%;\n  font-size: 5vw;\n}\n\n\n/*FOOTER*/\n\n.spending {\n  @include centerFlex(space-around);\n  width: 50%;\n}\n\n.total-spending {\n  height: 100%;\n  @include hexFont(1.25em);\n}\n.user-spending {\n  height: 100%;\n  @include hexFont(1.75em);\n}\n","@media screen and (min-width: 550px) {\n  header {\n    position: fixed;\n    top: 0px;\n  }\n\n  main {\n    padding-top: 16em;\n  }\n\n  footer {\n    position: fixed;\n  }\n\n  .greeting {\n    font-size: 1.75em;\n  }\n\n  .log-in {\n    top: 50%;\n  }\n\n  .sub-header {\n    position: fixed;\n    top: 10em;\n    width: 100%;\n  }\n\n  .total-spending {\n    font-size: 1.75em;\n  }\n\n  .user-spending {\n    font-size: 2.5em;\n  }\n\n  .booking-form {\n    top: 1em;\n  }\n\n  #roomType {\n    width: 75%;\n  }\n\n  .filter-button {\n    font-size: 2.5em;\n  }\n\n  .booking {\n    padding: 20px;\n  }\n\n  .return {\n    height: 20%;\n  }\n\n  .confirmation {\n    top: 50%;\n  }\n}\n","@media screen and (min-width: 1000px) {\n\n  header {\n    position: fixed;\n    top: 0px;\n    width: 100%;\n    height: 15%;\n  }\n\n  main {\n    padding-top: 5%;\n    padding-bottom: 3%;\n  }\n\n  footer {\n    height:12%;\n    .book-a-room {\n      height: 75%;\n    }\n  }\n\n  .title{\n    grid-template:\n      \"welcome overlook hotel guest\" 100%\n      /33% 34% 33%;\n  }\n\n  .welcome, .overlook, .hotel {\n    align-self: center;\n    @include hexFont(45px);\n  }\n\n  .sub-header {\n    flex-direction: row;\n    justify-content: space-around;\n    position: fixed;\n    top: 9%;\n    width: 100%;\n  }\n\n  .log-in {\n    height: 35%;\n    top: 50%;\n    .book-a-room {\n      font-size: 3vw;\n    }\n  }\n\n  .photo {\n    object-fit: contain;\n    width: 100%;\n  }\n\n  .greeting {\n    text-align: end;\n    font-size: 25px;\n    padding: 10px 30px 10px 0px;\n    width: 50%\n  }\n\n  .room-column {\n    text-align: left;\n    padding-left: 6%;\n  }\n\n  .booking {\n    width: 45%;\n    font-size: 25px;\n    margin: 2%;\n  }\n\n  .booking-form {\n    position: fixed;\n    top: 50%;\n    left: 75%;\n    transform: translate(-50%, -50%);\n    height: 60%;\n    width: 40%;\n  }\n\n  .stay{\n    font-size: 25px;\n    align-self: center;\n  }\n\n  .input > * {\n    font-size: 20px\n  }\n\n  fieldset {\n    legend {\n      font-size: 20px;\n    }\n    .input > * {\n      font-size: 18px;\n    }\n  }\n\n  input[type=radio] + label:before {\n    height: 15px;\n    width: 15px;\n  }\n\n  .filter-button {\n    font-size: 25px;\n  }\n\n  .spending {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    margin-left: 90px;\n    width: 50%;\n  }\n\n  .book-a-room {\n    width: 30%;\n    height: 50%;\n    border-radius: 10px;\n    font-size: 3vw;\n    @include boxStandard(5px);\n  }\n\n  .book-button {\n    width: 60%;\n  }\n\n  .confirmation {\n    .greeting {\n      width: 95%;\n      text-align: center;\n      padding: 10px;\n    }\n  }\n\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/css/base.scss":
/*!***************************!*\
  !*** ./src/css/base.scss ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./base.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/customer.js":
/*!*************************!*\
  !*** ./src/customer.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

class Customer {
  constructor(custInfo) {
    if (custInfo) {
      this.userID = custInfo.id;
      this.name = custInfo.name;
    } else {
      this.userID = 'guest';
      this.name = 'guest';
    }
    this.myBookings = [];
    this.bookedData = [];
    this.totalSpent = 0;
  }

  findBookings(bookingData, roomData) {
    let myData = bookingData.filter(booking => booking.userID === this.userID)
    let bookedRooms = myData.map(data => {
      let thisRoomData = roomData.find(room => room.number === data.roomNumber)
      let bookedData = [data.date, thisRoomData]
      return bookedData
    })
    this.bookedData = bookedRooms;
    this.myBookings = myData;
  }

  findTotal(roomData) {
    this.myBookings.forEach(booking => {
      roomData.forEach(room => {
        if (room.number === booking.roomNumber) {
          this.totalSpent += room.costPerNight
        }
      })
    })
    this.totalSpent = this.totalSpent.toFixed(2)
  }

  createBooking(date, room, endLocation) {
    let booked = false;
    let data = {
      "userID": this.userID,
      date,
      "roomNumber": room,
      "roomServiceCharges": []}
    booked = endLocation.find(booking => booking.date === date &&
      booking.roomNumber === room)
    if (!booked) {
      endLocation.push(data);
      return 'Your booking has been confirmed.';
    } else if (booked.userID === this.userID) {
      return "Looks like you've already booked this room";
    } else {
      return 'Oops, that room is unavailable.';
    }
  }

  createNewBooking(roomData, endLocation) {
    let booking = {"userID": this.userID, "date": roomData[0],
      "roomNumber": roomData[1].number, "roomServiceCharges": []}
    return fetch('http://localhost:3001/api/v1/bookings', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(booking)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .catch(err => showError(err))
  }

}

module.exports = Customer;


/***/ }),

/***/ "./src/hotel.js":
/*!**********************!*\
  !*** ./src/hotel.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

class Hotel {
  constructor(rooms, bookings, customers) {
    this.rooms = rooms;
    this.bookings = bookings;
    this.customers = customers;
    this.searchDate = '';
    this.availableRooms = [];
    this.filteredRooms = [];
    this.bookingData = [];
    this.selectedRoom = [];
  }

  createNewBooking(userID, date, room, endLocation) {
    let booked = false;
    let data = {userID, date, "roomNumber": room }
    booked = this.bookings.find(booking => booking.date === date &&
      booking.roomNumber === room)
    if (!booked) {
      endLocation.push(data);
      return 'Your booking has been confirmed.';
    } else {
      return 'Oops, that room is unavailable.';
    }
  }

  findOpenRooms(searchDate) {
    this.searchDate = searchDate;
    let bookedRooms = this.bookings.filter(booking =>
      booking.date === searchDate)
    let roomNums = bookedRooms.map(room => room.roomNumber)
    let theseRooms;
    theseRooms = this.rooms.reduce((openRooms, room) => {
      if (!roomNums.includes(room.number)) {
        openRooms.push([searchDate, room])
        return openRooms
      }
      return openRooms
    }, [])
    this.availableRooms = theseRooms;
    return theseRooms
  }

  filterRooms(filterData) {
    this.findOpenRooms(this.searchDate)
    let filteredRooms = this.availableRooms.filter(room =>
      room[1].roomType === filterData.roomType &&
      (room[1].bidet === (filterData.bidet === 'true') ||
      filterData.bidet === 'maybe') &&
      room[1].numBeds == filterData.numBeds);
    this.filteredRooms = filteredRooms;
  }

  chooseRoom(roomNumber) {
    this.selectedRoom = this.availableRooms.find(room =>
      room[1].number == roomNumber)
  }

}

module.exports = Hotel;


/***/ }),

/***/ "./src/images/hotel-pattern.jpg":
/*!**************************************!*\
  !*** ./src/images/hotel-pattern.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/hotel-pattern.jpg");

/***/ }),

/***/ "./src/images/overlook-hotel-party.jpg":
/*!*********************************************!*\
  !*** ./src/images/overlook-hotel-party.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/overlook-hotel-party.jpg");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/base.scss */ "./src/css/base.scss");
/* harmony import */ var _images_overlook_hotel_party_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/overlook-hotel-party.jpg */ "./src/images/overlook-hotel-party.jpg");
/* harmony import */ var _hotel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hotel */ "./src/hotel.js");
/* harmony import */ var _hotel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_hotel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _customer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer */ "./src/customer.js");
/* harmony import */ var _customer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_customer__WEBPACK_IMPORTED_MODULE_3__);





const apiData = [
  fetch('http://localhost:3001/api/v1/rooms'),
  fetch('http://localhost:3001/api/v1/bookings'),
  fetch('http://localhost:3001/api/v1/customers')
]
let allRooms, allBookings, allCustomers;
let hotel;
let customer;
let todayDate = "2020-07-05"

const guestName = document.querySelector('#guestName');
const guestBookings = document.querySelector('#guestBookings');
const userSpending = document.querySelector('#userSpending');
const bookingForm = document.querySelector('#bookingForm');
const bookRoom = document.querySelector('#bookRoom');
const bookDate = document.querySelector('#bookDate');
const filterRooms = document.querySelector('#filterRooms');
const confirmationScreen = document.querySelector('#bookingConfirmation');
const photoSection = document.querySelector('#photoSection');
const columnHeader = document.querySelector('#roomColumnHeader');
const logInForm = document.querySelector('#logInForm');
let bookButtons;

window.addEventListener('load', loadIn);
bookRoom.addEventListener('click', bookingButtonPress);
bookDate.addEventListener('blur', findAvailableRooms);
filterRooms.addEventListener('click', filterThroughRooms);
confirmationScreen.addEventListener('click', confirmPress);
logInForm.addEventListener('click', logPress);
let buttonsListener;

function loadIn() {
  Promise.all(apiData)
    .then(responses => Promise.all(responses.map(response => response.json())))
    .then(data => {
      if (data) {
        allRooms = data[0].rooms;
        allBookings = data[1].bookings;
        allCustomers = data[2].customers;
        createHotel(allRooms, allBookings, allCustomers)
      }
    })
    .catch(err => showError(err))
  setDate()
}

function showError(error) {
  console.log(error)
  confirmationScreen.classList.toggle('hidden')
  document.querySelector('#bookingResponse').innerText =
  `Error: ${error.message} <br>Please Refresh and Try Again</br>`
}

function createHotel(rooms, bookings, customers) {
  hotel = new _hotel__WEBPACK_IMPORTED_MODULE_2___default.a(rooms, bookings, customers)
}

function setDate() {
  bookDate.min = todayDate;
  bookDate.value = todayDate;
}

function logPress() {
  if (event.target.id === 'logInButton') {
    logIn()
  }
}

function logIn() {
  event.preventDefault()
  const userIndex = logInForm.childNodes[3].value.split("r").pop()
  const cust = hotel.customers.find(cust => cust.id == userIndex)
  if (cust && logInForm.childNodes[7].value === 'overlook2021') {
    createCustomer(cust)
    screenCheck()
    logInForm.classList.toggle('hidden')
    bookRoom.classList.remove('hidden')
    bookRoom.innerHTML = 'Book your next visit'
  } else {
    logInForm.childNodes[7].value = ''
    document.querySelector('#errorMSG').classList.remove('invisible');
  }
}

function createCustomer(customerInfo) {
  customer = new _customer__WEBPACK_IMPORTED_MODULE_3___default.a(customerInfo);
  customer.findBookings(allBookings, allRooms);
  customer.findTotal(allRooms);
  updateDOM()
}

function updateDOM() {
  updateDate()
  updateGuestName()
  updateBookings(customer.bookedData)
  updateTotalSpent()
}

function screenCheck() {
  if (screen.width > 1024) {
    photoSection.classList.remove('hidden');
  }
}

function updateDate() {
  bookDate.min = todayDate;
  bookDate.value = todayDate.split('/').join('-');
}

function updateGuestName() {
  guestName.innerText = `Back, ${customer.name}`;
  columnHeader.innerText = 'Your Previous Bookings';
}

function updateBookings(data) {
  if (!data[0]) {
    apologize()
  } else {
    guestBookings.innerHTML = '';
    data.forEach(booking => {
      guestBookings.innerHTML += `
      <section class="booking">
        <h3>${booking[0]}</h3>
        <h3>Room Number: <span class="accent">${booking[1].number}</span></h3>
        <h3>Room Type: <span class="accent">${booking[1].roomType}</span></h3>
        <h3>Amount of Beds: <span class="accent">${booking[1].numBeds}</span></h3>
        <h3>Bidet: <span class="accent">${booking[1].bidet}</span></h3>
        <h3>Nightly Cost: <span class="accent">${booking[1].costPerNight}</span></h3>
        <button type=button class="booking book-button hidden" id="${booking[1].number}">Choose This Room!</button>
      </section>`
    })
  }
}

function apologize() {
  guestBookings.innerHTML = `
    <section class="booking">
      <h3>We are extremely sorry, <span class="accent">${customer.name}</span></h3>
      <h3>We cannot find any available rooms</h3>
      <h3>Please try a different date or amenities.</h3>
    </section>`
}

function updateTotalSpent() {
  document.querySelector('#spending').classList.remove('hidden')
  userSpending.innerText += customer.totalSpent;
}

function bookingButtonPress() {
  if (bookRoom.innerHTML === 'Book your next visit') {
    showBookingForm()
  } else {
    makeBooking()
  }
}

function showBookingForm() {
  bookingForm.classList.toggle('hidden');
  bookRoom.innerHTML = 'Confirm My Visit';
  photoSection.classList.add('hidden');
}

function makeBooking() {
  customer.createNewBooking(hotel.selectedRoom, allBookings)
  document.querySelector('#bookingConfirmation').classList.toggle('hidden');
  userSpending.innerText += customer.totalSpent;
  bookingForm.classList.toggle('hidden');
}

function findAvailableRooms() {
  let date = event.target.value.split('-').join('/')
  columnHeader.innerText = "Available Rooms:"
  hotel.findOpenRooms(date)
  updateBookings(hotel.availableRooms)
  toggleButtons()
}

function filterThroughRooms() {
  let roomType = document.querySelector('#roomType').value
  let bidet = document.querySelector('input[name="Bidet"]:checked').value;
  let numBeds = document.querySelector('#numBeds').value
  let data = {roomType, bidet, numBeds}
  hotel.filterRooms(data)
  updateBookings(hotel.filteredRooms)
  toggleButtons()
}

function toggleButtons() {
  let allBookings = document.querySelectorAll('.book-button')
  allBookings.forEach(booking => {
    booking.classList.remove('hidden')
  })
  bookButtons = document.querySelectorAll('.book-button');
  buttonsListener = bookButtons.forEach(button=> button.addEventListener('click', selectRoom));
}

function selectRoom() {
  hotel.chooseRoom(event.target.id)

}

function confirmPress() {
  if (event.target.id === 'return') {
    window.location.reload()
  }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2Jhc2Uuc2Nzcz8xMTA3Iiwid2VicGFjazovLy8uL3NyYy9jdXN0b21lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG90ZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9ob3RlbC1wYXR0ZXJuLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL292ZXJsb29rLWhvdGVsLXBhcnR5LmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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O0FBQ0E7QUFDQSxjQUFjLFdBQVc7QUFDekIsZ0RBQWdELGtCQUFrQjtBQUNsRSw4Q0FBOEMsb0JBQW9CO0FBQ2xFLG1EQUFtRCxtQkFBbUI7QUFDdEUsMENBQTBDLGlCQUFpQjtBQUMzRCxpREFBaUQsd0JBQXdCO0FBQ3pFLHFFQUFxRSxrQkFBa0I7QUFDdkY7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsY0FBYztBQUN2RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi4vaW1hZ2VzL2hvdGVsLXBhdHRlcm4uanBnXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcbi8qIERvY3VtZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuICovXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS4xNTtcXG4gIC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gIC8qIDIgKi8gfVxcblxcbi8qIFNlY3Rpb25zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuYm9keSB7XFxuICBtYXJnaW46IDA7IH1cXG5cXG4vKipcXG4gKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXG4gKi9cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICovXFxuaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDAuNjdlbSAwOyB9XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gKi9cXG5ociB7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gIC8qIDEgKi9cXG4gIGhlaWdodDogMDtcXG4gIC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgLyogMiAqLyB9XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXG4gIC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgLyogMiAqLyB9XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAqL1xcbmFiYnJbdGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAvKiAxICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIC8qIDIgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG4gIC8qIDIgKi8gfVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjsgfVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcbiAgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07XFxuICAvKiAyICovIH1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTsgfVxcblxcbi8qKlxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAqIGFsbCBicm93c2Vycy5cXG4gKi9cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IH1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtOyB9XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtOyB9XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5pbWcge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lOyB9XFxuXFxuLyogRm9ybXNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gKi9cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7XFxuICAvKiAxICovXFxuICBtYXJnaW46IDA7XFxuICAvKiAyICovIH1cXG5cXG4vKipcXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAqL1xcbmJ1dHRvbixcXG5pbnB1dCB7XFxuICAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTsgfVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gKi9cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gIC8qIDEgKi9cXG4gIHRleHQtdHJhbnNmb3JtOiBub25lOyB9XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKi9cXG5idXR0b24sXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgfVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDsgfVxcblxcbi8qKlxcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gKi9cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7IH1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuZmllbGRzZXQge1xcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtOyB9XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbmxlZ2VuZCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICAvKiAyICovXFxuICBkaXNwbGF5OiB0YWJsZTtcXG4gIC8qIDEgKi9cXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7XFxuICAvKiAzICovXFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbiAgLyogMSAqLyB9XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gKi9cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IH1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXG4gKi9cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bzsgfVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXG4gKi9cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5bdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLyogMSAqL1xcbiAgcGFkZGluZzogMDtcXG4gIC8qIDIgKi8gfVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gKi9cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bzsgfVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAqL1xcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXG4gIC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xcbiAgLyogMiAqLyB9XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAqL1xcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IH1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gKi9cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbiAgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIC8qIDIgKi8gfVxcblxcbi8qIEludGVyYWN0aXZlXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXFxuICovXFxuZGV0YWlscyB7XFxuICBkaXNwbGF5OiBibG9jazsgfVxcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtOyB9XFxuXFxuLyogTWlzY1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcbiAqL1xcbnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cXG4gKi9cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLmFjY2VudCB7XFxuICBjb2xvcjogIzk5MjAyMzsgfVxcblxcbioge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTYXdhcmFiaSBNaW5jaG9cXFwiLCBzYW5zLXNlcmlmOyB9XFxuXFxuYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogIzRGMzAyNjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHNjcm9sbC1wYWRkaW5nLWJvdHRvbTogMTIlOyB9XFxuXFxuaGVhZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAyNiU7IH1cXG5cXG5tYWluIHtcXG4gIHBhZGRpbmctYm90dG9tOiAyNiU7IH1cXG5cXG5mb290ZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIGhlaWdodDogMTIlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGNvbG9yOiAjRTZBRTk4O1xcbiAgYmFja2dyb3VuZDogY2VudGVyL2NvdmVyIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7IH1cXG4gIGZvb3RlciAuYm9vay1hLXJvb20ge1xcbiAgICB3aWR0aDogMzMlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1zaXplOiAzdnc7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgIzk5MjAyMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U2QUU5ODsgfVxcblxcbi8qSEVBREVSKi9cXG4udGl0bGUge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiBcXFwid2VsY29tZVxcXCIgMzQlIFxcXCJvdmVybG9va1xcXCIgMzQlIFxcXCJob3RlbFxcXCIgMzQlIC8xMDAlO1xcbiAgaGVpZ2h0OiA2MCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0RjMwMjY7XFxuICBiYWNrZ3JvdW5kOiBjZW50ZXIvY292ZXIgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTsgfVxcblxcbi5vdmVybG9vayB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBjb2xvcjogI0U2QUU5ODtcXG4gIGZvbnQtc2l6ZTogMi41ZW07XFxuICB0ZXh0LXNoYWRvdzogMCAwIDVweCBibGFjaywgMXB4IDAgMjBweCAjRTZBRTk4O1xcbiAgZ3JpZC1hcmVhOiBvdmVybG9vaztcXG4gIG1hcmdpbjogMDsgfVxcblxcbi53ZWxjb21lIHtcXG4gIGdyaWQtYXJlYTogd2VsY29tZTtcXG4gIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcXG4gIG1hcmdpbjogMTBweCAwIDEwcHggOSU7XFxuICBjb2xvcjogI0U2QUU5ODtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICB0ZXh0LXNoYWRvdzogMCAwIDVweCBibGFjaywgMXB4IDAgMjBweCAjRTZBRTk4OyB9XFxuXFxuLmhvdGVsIHtcXG4gIGdyaWQtYXJlYTogaG90ZWw7XFxuICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBtYXJnaW46IDEwcHggMTAlIDEwcHggMDtcXG4gIGNvbG9yOiAjRTZBRTk4O1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIHRleHQtc2hhZG93OiAwIDAgNXB4IGJsYWNrLCAxcHggMCAyMHB4ICNFNkFFOTg7IH1cXG5cXG4uc3ViLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcXG4gIHRvcDogLTFweDsgfVxcblxcbi5ncmVldGluZyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgY29sb3I6ICNFNkFFOTg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEYzMDI2O1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzRGMzAyNjtcXG4gIHBhZGRpbmc6IDVweCAwcHggNXB4IDBweDtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLypNQUlOKi9cXG4uYm9va2luZ3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IDUlOyB9XFxuXFxuLmJvb2tpbmcsIC5sb2ctaW4sIC5yZXR1cm4ge1xcbiAgZm9udC1zaXplOiAzLjc1dnc7XFxuICBtYXJnaW46IDUlO1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgY29sb3I6ICM0RjMwMjY7XFxuICBib3JkZXI6IDVweCBzb2xpZCAjOTkyMDIzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U2QUU5ODtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7IH1cXG5cXG4ubG9nLWluIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNjAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBoZWlnaHQ6IDM1JTtcXG4gIHdpZHRoOiA2NSU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAubG9nLWluIC5ib29rLWEtcm9vbSB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDogMjUlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDZ2dztcXG4gICAgbWFyZ2luLXRvcDogMjVweDtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgIzk5MjAyMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U2QUU5ODsgfVxcblxcbi5lcnJvciB7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi8qQk9PS0lORyBGT1JNKi9cXG4uYm9vay1idXR0b24ge1xcbiAgd2lkdGg6IDc1JTsgfVxcblxcbi5ib29rLWJ1dHRvbjpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6ICM0RkI4N0I7IH1cXG5cXG4uYm9va2luZy1mb3JtIHtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDQuNzVlbTtcXG4gIGhlaWdodDogNTUlO1xcbiAgbWFyZ2luOiAwIDIuNSUgMCAyLjUlO1xcbiAgYm9yZGVyOiA3cHggc29saWQgIzk5MjAyMztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFNkFFOTg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4OyB9XFxuXFxuLnN0YXkge1xcbiAgZm9udC1zaXplOiA0Ljc1dnc7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMCAyMHB4IDAgMjBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbiNyb29tVHlwZSB7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi5pbnB1dCA+ICoge1xcbiAgZm9udC1zaXplOiAzLjc1dnc7IH1cXG5cXG4uZGF0ZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMTVweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi5yb29tLWZlYXR1cmVzIHtcXG4gIGdyaWQtdGVtcGxhdGU6IFxcXCJyb29tVHlwZSBiaWRldFxcXCIgMWZyIFxcXCJudW1iZXJCZWRzIGJpZGV0XFxcIiAxZnIgXFxcImZpbHRlciBiaWRldFxcXCIgMWZyIC81MCUgNTAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1pdGVtczogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBzZWxmLWVuZDsgfVxcblxcbi5yb29tLXR5cGUge1xcbiAgZ3JpZC1hcmVhOiByb29tVHlwZTsgfVxcblxcbi5iZWQtbnVtIHtcXG4gIGdyaWQtYXJlYTogbnVtYmVyQmVkczsgfVxcblxcbmZpZWxkc2V0IHtcXG4gIGdyaWQtYXJlYTogYmlkZXQ7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3JkZXItY29sb3I6ICM5OTIwMjM7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgcGFkZGluZzogNS42cHggMTJweCA1LjZweCAxMnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDsgfVxcbiAgZmllbGRzZXQgbGVnZW5kIHtcXG4gICAgZm9udC1zaXplOiAzLjc1dnc7IH1cXG5cXG5maWVsZHNldDpmb2N1cy13aXRoaW4ge1xcbiAgYm9yZGVyLWNvbG9yOiAjRTA1RjE4OyB9XFxuXFxuaW5wdXRbdHlwZT1yYWRpb10ge1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxcblxcbmlucHV0W3R5cGU9cmFkaW9dICsgbGFiZWw6YmVmb3JlIHtcXG4gIGhlaWdodDogLjc1ZW07XFxuICB3aWR0aDogLjc1ZW07XFxuICBtYXJnaW46IDNweCAxMHB4IDNweCAxMHB4O1xcbiAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbiAgYm9yZGVyOiA1cHggc29saWQgIzk5MjAyMzsgfVxcblxcbmlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQgKyBsYWJlbDpiZWZvcmUge1xcbiAgYmFja2dyb3VuZDogIzRGQjg3QjsgfVxcblxcbi5udW0tYmVkcyB7XFxuICB3aWR0aDogMjAlO1xcbiAgYm9yZGVyOiAjRTA1RjE4OyB9XFxuXFxuLmZpbHRlci1idXR0b24ge1xcbiAgd2lkdGg6IDgwJTtcXG4gIGhlaWdodDogODAlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xcbiAgYm9yZGVyOiA1cHggc29saWQgIzk5MjAyMztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFNkFFOTg7IH1cXG5cXG4uY29uZmlybWF0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB3aWR0aDogNzUlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIG1hcmdpbjogMDsgfVxcbiAgLmNvbmZpcm1hdGlvbiAuZ3JlZXRpbmcge1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjRTA1RjE4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyB9XFxuXFxuLnJldHVybiB7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiAxMCU7XFxuICBmb250LXNpemU6IDV2dzsgfVxcblxcbi8qRk9PVEVSKi9cXG4uc3BlbmRpbmcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHdpZHRoOiA1MCU7IH1cXG5cXG4udG90YWwtc3BlbmRpbmcge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgY29sb3I6ICNFNkFFOTg7XFxuICBmb250LXNpemU6IDEuMjVlbTtcXG4gIHRleHQtc2hhZG93OiAwIDAgNXB4IGJsYWNrLCAxcHggMCAyMHB4ICNFNkFFOTg7IH1cXG5cXG4udXNlci1zcGVuZGluZyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBjb2xvcjogI0U2QUU5ODtcXG4gIGZvbnQtc2l6ZTogMS43NWVtO1xcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggYmxhY2ssIDFweCAwIDIwcHggI0U2QUU5ODsgfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU1MHB4KSB7XFxuICBoZWFkZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMHB4OyB9XFxuICBtYWluIHtcXG4gICAgcGFkZGluZy10b3A6IDE2ZW07IH1cXG4gIGZvb3RlciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgfVxcbiAgLmdyZWV0aW5nIHtcXG4gICAgZm9udC1zaXplOiAxLjc1ZW07IH1cXG4gIC5sb2ctaW4ge1xcbiAgICB0b3A6IDUwJTsgfVxcbiAgLnN1Yi1oZWFkZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMTBlbTtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG4gIC50b3RhbC1zcGVuZGluZyB7XFxuICAgIGZvbnQtc2l6ZTogMS43NWVtOyB9XFxuICAudXNlci1zcGVuZGluZyB7XFxuICAgIGZvbnQtc2l6ZTogMi41ZW07IH1cXG4gIC5ib29raW5nLWZvcm0ge1xcbiAgICB0b3A6IDFlbTsgfVxcbiAgI3Jvb21UeXBlIHtcXG4gICAgd2lkdGg6IDc1JTsgfVxcbiAgLmZpbHRlci1idXR0b24ge1xcbiAgICBmb250LXNpemU6IDIuNWVtOyB9XFxuICAuYm9va2luZywgLmxvZy1pbiwgLnJldHVybiB7XFxuICAgIHBhZGRpbmc6IDIwcHg7IH1cXG4gIC5yZXR1cm4ge1xcbiAgICBoZWlnaHQ6IDIwJTsgfVxcbiAgLmNvbmZpcm1hdGlvbiB7XFxuICAgIHRvcDogNTAlOyB9IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcXG4gIGhlYWRlciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDE1JTsgfVxcbiAgbWFpbiB7XFxuICAgIHBhZGRpbmctdG9wOiA1JTtcXG4gICAgcGFkZGluZy1ib3R0b206IDMlOyB9XFxuICBmb290ZXIge1xcbiAgICBoZWlnaHQ6IDEyJTsgfVxcbiAgICBmb290ZXIgLmJvb2stYS1yb29tIHtcXG4gICAgICBoZWlnaHQ6IDc1JTsgfVxcbiAgLnRpdGxlIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogXFxcIndlbGNvbWUgb3Zlcmxvb2sgaG90ZWwgZ3Vlc3RcXFwiIDEwMCUgLzMzJSAzNCUgMzMlOyB9XFxuICAud2VsY29tZSwgLm92ZXJsb29rLCAuaG90ZWwge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjRTZBRTk4O1xcbiAgICBmb250LXNpemU6IDQ1cHg7XFxuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IGJsYWNrLCAxcHggMCAyMHB4ICNFNkFFOTg7IH1cXG4gIC5zdWItaGVhZGVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA5JTtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG4gIC5sb2ctaW4ge1xcbiAgICBoZWlnaHQ6IDM1JTtcXG4gICAgdG9wOiA1MCU7IH1cXG4gICAgLmxvZy1pbiAuYm9vay1hLXJvb20ge1xcbiAgICAgIGZvbnQtc2l6ZTogM3Z3OyB9XFxuICAucGhvdG8ge1xcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xcbiAgICB3aWR0aDogMTAwJTsgfVxcbiAgLmdyZWV0aW5nIHtcXG4gICAgdGV4dC1hbGlnbjogZW5kO1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMzBweCAxMHB4IDBweDtcXG4gICAgd2lkdGg6IDUwJTsgfVxcbiAgLnJvb20tY29sdW1uIHtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgcGFkZGluZy1sZWZ0OiA2JTsgfVxcbiAgLmJvb2tpbmcsIC5sb2ctaW4sIC5yZXR1cm4ge1xcbiAgICB3aWR0aDogNDUlO1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIG1hcmdpbjogMiU7IH1cXG4gIC5ib29raW5nLWZvcm0ge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA3NSU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBoZWlnaHQ6IDYwJTtcXG4gICAgd2lkdGg6IDQwJTsgfVxcbiAgLnN0YXkge1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjsgfVxcbiAgLmlucHV0ID4gKiB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDsgfVxcbiAgZmllbGRzZXQgbGVnZW5kIHtcXG4gICAgZm9udC1zaXplOiAyMHB4OyB9XFxuICBmaWVsZHNldCAuaW5wdXQgPiAqIHtcXG4gICAgZm9udC1zaXplOiAxOHB4OyB9XFxuICBpbnB1dFt0eXBlPXJhZGlvXSArIGxhYmVsOmJlZm9yZSB7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgd2lkdGg6IDE1cHg7IH1cXG4gIC5maWx0ZXItYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAyNXB4OyB9XFxuICAuc3BlbmRpbmcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiA5MHB4O1xcbiAgICB3aWR0aDogNTAlOyB9XFxuICAuYm9vay1hLXJvb20ge1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1zaXplOiAzdnc7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkICM5OTIwMjM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNkFFOTg7IH1cXG4gIC5ib29rLWJ1dHRvbiB7XFxuICAgIHdpZHRoOiA2MCU7IH1cXG4gIC5jb25maXJtYXRpb24gLmdyZWV0aW5nIHtcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4OyB9IH1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47IH1cXG5cXG4uaW52aXNpYmxlIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX25vcm1hbGl6ZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2Jhc2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fY29sb3Iuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fbW9iaWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX3RhYmxldC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19kZXNrdG9wLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMkVBQUE7QUFFQTsrRUNBK0U7QURHL0U7OztFQ0NFO0FESUY7RUFDRSxpQkFBaUI7RUFBRSxNQUFBO0VBQ25CLDhCQUE4QjtFQUFFLE1BQUEsRUFBTzs7QUFHekM7K0VDRCtFO0FESS9FOztFQ0RFO0FES0Y7RUFDRSxTQUFTLEVBQUE7O0FBR1g7O0VDSEU7QURPRjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7OztFQ0pFO0FEU0Y7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7O0FBR2xCOytFQ1IrRTtBRFcvRTs7O0VDUEU7QURZRjtFQUNFLHVCQUF1QjtFQUFFLE1BQUE7RUFDekIsU0FBUztFQUFFLE1BQUE7RUFDWCxpQkFBaUI7RUFBRSxNQUFBLEVBQU87O0FBRzVCOzs7RUNORTtBRFdGO0VBQ0UsaUNBQWlDO0VBQUUsTUFBQTtFQUNuQyxjQUFjO0VBQUUsTUFBQSxFQUFPOztBQUd6QjsrRUNSK0U7QURXL0U7O0VDUkU7QURZRjtFQUNFLDZCQUE2QixFQUFBOztBQUcvQjs7O0VDVEU7QURjRjtFQUNFLG1CQUFtQjtFQUFFLE1BQUE7RUFDckIsMEJBQTBCO0VBQUUsTUFBQTtFQUM1QixpQ0FBaUM7RUFBRSxNQUFBLEVBQU87O0FBRzVDOztFQ1RFO0FEYUY7O0VBRUUsbUJBQW1CLEVBQUE7O0FBR3JCOzs7RUNWRTtBRGVGOzs7RUFHRSxpQ0FBaUM7RUFBRSxNQUFBO0VBQ25DLGNBQWM7RUFBRSxNQUFBLEVBQU87O0FBR3pCOztFQ1hFO0FEZUY7RUFDRSxjQUFjLEVBQUE7O0FBR2hCOzs7RUNaRTtBRGlCRjs7RUFFRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix3QkFBd0IsRUFBQTs7QUFHMUI7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsV0FBVyxFQUFBOztBQUdiOytFQ2xCK0U7QURx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O0lBQ0UsbUJBQW1CO0lBQ25CLFdBQVcsRUFBQTtFRnlDZjtJRXJDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixVQUNGLEVBQUE7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixnQkFBZ0IsRUFBQTtFRmlEcEI7SUU3Q0ksVUFBVTtJQUNWLGVBQWU7SUFDZixVQUFVLEVBQUE7RUYyRmQ7SUV2RkksZUFBZTtJQUNmLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLFdBQVc7SUFDWCxVQUFVLEVBQUE7RUZnR2Q7SUU1RkksZUFBZTtJQUNmLGtCQUFrQixFQUFBO0VGdUd0QjtJRW5HSSxlQUNGLEVBQUE7RUZpSUY7SUU3SE0sZUFBZSxFQUFBO0VBRm5CO0lBS0ksZUFBZSxFQUFBO0VGa0pyQjtJRTdJSSxZQUFZO0lBQ1osV0FBVyxFQUFBO0VGK0pmO0lFM0pJLGVBQWUsRUFBQTtFRjJMbkI7SUV2TEksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsaUJBQWlCO0lBQ2pCLFVBQVUsRUFBQTtFQUdaO0lBQ0UsVUFBVTtJQUNWLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsY0FBYztJSHRHaEIseUJBaEJXO0lBaUJYLHlCQWZZLEVBQUE7RUNvSmQ7SUUzQkksVUFBVSxFQUFBO0VGK0lkO0lFMUlNLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsYUFBYSxFQUFBLEVBQ2Q7O0FKOUhMO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQixFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXG4gKi9cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICovXFxuXFxuaHIge1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICogYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0IHsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHsgLyogMSAqL1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmxlZ2VuZCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXG4gIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAqL1xcblxcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxuICovXFxuXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5bdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAqL1xcblxcbmRldGFpbHMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKiBNaXNjXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxuICovXFxuXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCIsXCJAaW1wb3J0ICdub3JtYWxpemUnO1xcbkBpbXBvcnQgJ2NvbG9yJztcXG5AaW1wb3J0ICdtb2JpbGUnO1xcbkBpbXBvcnQgJ3RhYmxldCc7XFxuQGltcG9ydCAnZGVza3RvcCc7XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uaW52aXNpYmxlIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXCIsXCIkYnJvd246ICM0RjMwMjY7XFxuJHJlZDogIzk5MjAyMztcXG4kb3JhbmdlOiAjRTA1RjE4O1xcbiRwaW5rOiAjRTZBRTk4O1xcbiRncmVlbjogIzRGQjg3QjtcXG5cXG4kZm9udDogJ1Nhd2FyYWJpIE1pbmNobycsIHNhbnMtc2VyaWY7XFxuXFxuQG1peGluIGhleEZvbnQoJGZvbnRzaXplKXtcXG4gIGNvbG9yOiAkcGluaztcXG4gIGZvbnQtc2l6ZTogJGZvbnRzaXplO1xcbiAgdGV4dC1zaGFkb3c6XFxuICAwIDAgNXB4IGJsYWNrLFxcbiAgMXB4IDAgMjBweCAkcGluaztcXG59XFxuXFxuQG1peGluIGJveFN0YW5kYXJkKCRib3JkZXJ3aWR0aCl7XFxuICBib3JkZXI6ICRib3JkZXJ3aWR0aCBzb2xpZCAkcmVkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHBpbms7XFxufVxcblxcbkBtaXhpbiBjZW50ZXJGbGV4KCRqdXN0aWZ5KXtcXG4gIGRpc3BsYXk6ZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xcbn1cXG5cXG4uYWNjZW50IHtcXG4gIGNvbG9yOiAkcmVkO1xcbn1cXG5cIixcIlxcblxcbioge1xcbiAgZm9udC1mYW1pbHk6ICRmb250O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQ6ICRicm93bjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHNjcm9sbC1wYWRkaW5nLWJvdHRvbTogMTIlO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDI2JTtcXG59XFxuXFxubWFpbiB7XFxuICBwYWRkaW5nLWJvdHRvbTogMjYlO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIGhlaWdodDoxMiU7XFxuICBAaW5jbHVkZSBjZW50ZXJGbGV4KHNwYWNlLWFyb3VuZCk7XFxuICBjb2xvcjogJHBpbms7XFxuICBiYWNrZ3JvdW5kOiBjZW50ZXIgLyBjb3ZlciB1cmwoXFxcIi4uL2ltYWdlcy9ob3RlbC1wYXR0ZXJuLmpwZ1xcXCIpO1xcbiAgLmJvb2stYS1yb29tIHtcXG4gICAgd2lkdGg6IDMzJTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogM3Z3O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIEBpbmNsdWRlIGJveFN0YW5kYXJkKDVweCk7XFxuICB9XFxufVxcblxcbi8qSEVBREVSKi9cXG5cXG4udGl0bGV7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6XFxuICAgIFxcXCJ3ZWxjb21lXFxcIiAzNCVcXG4gICAgXFxcIm92ZXJsb29rXFxcIiAzNCVcXG4gICAgXFxcImhvdGVsXFxcIiAzNCVcXG4gICAgLzEwMCU7XFxuICBoZWlnaHQ6IDYwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJyb3duO1xcbiAgYmFja2dyb3VuZDogY2VudGVyIC8gY292ZXIgdXJsKFxcXCIuLi9pbWFnZXMvaG90ZWwtcGF0dGVybi5qcGdcXFwiKTtcXG59XFxuXFxuLm92ZXJsb29re1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgQGluY2x1ZGUgaGV4Rm9udCgyLjVlbSk7XFxuICBncmlkLWFyZWE6IG92ZXJsb29rO1xcbiAgbWFyZ2luOjA7XFxufVxcblxcbi53ZWxjb21le1xcbiAgZ3JpZC1hcmVhOiB3ZWxjb21lO1xcbiAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgbWFyZ2luOiAxMHB4IDAgMTBweCA5JTtcXG4gIEBpbmNsdWRlIGhleEZvbnQoMS41ZW0pO1xcbn1cXG5cXG4uaG90ZWx7XFxuICBncmlkLWFyZWE6IGhvdGVsO1xcbiAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgbWFyZ2luOiAxMHB4IDEwJSAxMHB4IDA7XFxuICBAaW5jbHVkZSBoZXhGb250KDEuNWVtKTtcXG59XFxuXFxuLnN1Yi1oZWFkZXIge1xcbiAgQGluY2x1ZGUgY2VudGVyRmxleChjZW50ZXIpO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcXG4gIHRvcDogLTFweDtcXG59XFxuXFxuLmdyZWV0aW5nIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICBjb2xvcjogJHBpbms7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnJvd247XFxuICBtYXJnaW46IDA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAkYnJvd247XFxuICBwYWRkaW5nOiA1cHggMHB4IDVweCAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLypNQUlOKi9cXG5cXG5cXG4uYm9va2luZ3Mge1xcbiAgZGlzcGxheTpmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbjogNSU7XFxufVxcblxcbi5ib29raW5nIHtcXG4gIGZvbnQtc2l6ZTogMy43NXZ3O1xcbiAgbWFyZ2luOiA1JTtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIGNvbG9yOiAkYnJvd247XFxuICBAaW5jbHVkZSBib3hTdGFuZGFyZCg1cHgpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmxvZy1pbiB7XFxuICBAZXh0ZW5kIC5ib29raW5nO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA2MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGhlaWdodDogMzUlO1xcbiAgd2lkdGg6IDY1JTtcXG4gIG1hcmdpbjowO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC5ib29rLWEtcm9vbSB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDogMjUlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDZ2dztcXG4gICAgbWFyZ2luLXRvcDogMjVweDtcXG4gICAgQGluY2x1ZGUgYm94U3RhbmRhcmQoNXB4KTtcXG4gIH1cXG59XFxuXFxuXFxuLmVycm9yIHtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKkJPT0tJTkcgRk9STSovXFxuXFxuLmJvb2stYnV0dG9uIHtcXG4gIHdpZHRoOiA3NSU7XFxufVxcblxcbi5ib29rLWJ1dHRvbjpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6ICRncmVlbjtcXG59XFxuXFxuLmJvb2tpbmctZm9ybSB7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiA0Ljc1ZW07XFxuICBoZWlnaHQ6IDU1JTtcXG4gIG1hcmdpbjogMCAyLjUlIDAgMi41JTtcXG4gIEBpbmNsdWRlIGJveFN0YW5kYXJkKDdweCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uc3RheXtcXG4gIGZvbnQtc2l6ZTogNC43NXZ3O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDAgMjBweCAwIDIwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNyb29tVHlwZSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmlucHV0ID4gKiB7XFxuICBmb250LXNpemU6IDMuNzV2dztcXG59XFxuXFxuLmRhdGUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDE1cHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5yb29tLWZlYXR1cmVzIHtcXG4gIGdyaWQtdGVtcGxhdGU6XFxuICAgIFxcXCJyb29tVHlwZSBiaWRldFxcXCIgMWZyXFxuICAgIFxcXCJudW1iZXJCZWRzIGJpZGV0XFxcIiAxZnJcXG4gICAgXFxcImZpbHRlciBiaWRldFxcXCIgMWZyXFxuICAgIC81MCUgNTAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OmdyaWQ7XFxuICBqdXN0aWZ5LWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IHNlbGYtZW5kO1xcbn1cXG5cXG4ucm9vbS10eXBlIHtcXG4gIGdyaWQtYXJlYTogcm9vbVR5cGU7XFxufVxcblxcbi5iZWQtbnVtIHtcXG4gIGdyaWQtYXJlYTogbnVtYmVyQmVkcztcXG59XFxuXFxuZmllbGRzZXQge1xcbiAgbGVnZW5kIHtcXG4gICAgZm9udC1zaXplOiAzLjc1dnc7XFxuICB9XFxuICBncmlkLWFyZWE6IGJpZGV0O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyLWNvbG9yOiAkcmVkO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIHBhZGRpbmc6IDUuNnB4IDEycHggNS42cHggMTJweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuXFxufVxcblxcbmZpZWxkc2V0OmZvY3VzLXdpdGhpbiB7XFxuICBib3JkZXItY29sb3I6ICRvcmFuZ2U7XFxufVxcblxcbmlucHV0W3R5cGU9cmFkaW9dIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbmlucHV0W3R5cGU9cmFkaW9dICsgbGFiZWw6YmVmb3JlIHtcXG4gIGhlaWdodDogLjc1ZW07XFxuICB3aWR0aDogLjc1ZW07XFxuICBtYXJnaW46IDNweCAxMHB4IDNweCAxMHB4O1xcbiAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbiAgYm9yZGVyOiA1cHggc29saWQgJHJlZDtcXG59XFxuXFxuaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCArIGxhYmVsOmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kOiAkZ3JlZW47XFxufVxcblxcbi5udW0tYmVkcyB7XFxuICB3aWR0aDogMjAlO1xcbiAgYm9yZGVyOiAkb3JhbmdlO1xcbn1cXG5cXG4uZmlsdGVyLWJ1dHRvbiB7XFxuICB3aWR0aDogODAlO1xcbiAgaGVpZ2h0OiA4MCU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxLjI1ZW07XFxuICBAaW5jbHVkZSBib3hTdGFuZGFyZCg1cHgpO1xcbn1cXG5cXG4uY29uZmlybWF0aW9uIHtcXG4gIEBpbmNsdWRlIGNlbnRlckZsZXgoc3BhY2UtYXJvdW5kKTtcXG4gIHdpZHRoOiA3NSU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgbWFyZ2luOiAwO1xcbiAgLmdyZWV0aW5nIHtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgJG9yYW5nZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIH1cXG59XFxuXFxuLnJldHVybiB7XFxuICBAZXh0ZW5kIC5ib29raW5nO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogMTAlO1xcbiAgZm9udC1zaXplOiA1dnc7XFxufVxcblxcblxcbi8qRk9PVEVSKi9cXG5cXG4uc3BlbmRpbmcge1xcbiAgQGluY2x1ZGUgY2VudGVyRmxleChzcGFjZS1hcm91bmQpO1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLnRvdGFsLXNwZW5kaW5nIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIEBpbmNsdWRlIGhleEZvbnQoMS4yNWVtKTtcXG59XFxuLnVzZXItc3BlbmRpbmcge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgQGluY2x1ZGUgaGV4Rm9udCgxLjc1ZW0pO1xcbn1cXG5cIixcIkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU1MHB4KSB7XFxuICBoZWFkZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMHB4O1xcbiAgfVxcblxcbiAgbWFpbiB7XFxuICAgIHBhZGRpbmctdG9wOiAxNmVtO1xcbiAgfVxcblxcbiAgZm9vdGVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgfVxcblxcbiAgLmdyZWV0aW5nIHtcXG4gICAgZm9udC1zaXplOiAxLjc1ZW07XFxuICB9XFxuXFxuICAubG9nLWluIHtcXG4gICAgdG9wOiA1MCU7XFxuICB9XFxuXFxuICAuc3ViLWhlYWRlciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAxMGVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC50b3RhbC1zcGVuZGluZyB7XFxuICAgIGZvbnQtc2l6ZTogMS43NWVtO1xcbiAgfVxcblxcbiAgLnVzZXItc3BlbmRpbmcge1xcbiAgICBmb250LXNpemU6IDIuNWVtO1xcbiAgfVxcblxcbiAgLmJvb2tpbmctZm9ybSB7XFxuICAgIHRvcDogMWVtO1xcbiAgfVxcblxcbiAgI3Jvb21UeXBlIHtcXG4gICAgd2lkdGg6IDc1JTtcXG4gIH1cXG5cXG4gIC5maWx0ZXItYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAyLjVlbTtcXG4gIH1cXG5cXG4gIC5ib29raW5nIHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gIH1cXG5cXG4gIC5yZXR1cm4ge1xcbiAgICBoZWlnaHQ6IDIwJTtcXG4gIH1cXG5cXG4gIC5jb25maXJtYXRpb24ge1xcbiAgICB0b3A6IDUwJTtcXG4gIH1cXG59XFxuXCIsXCJAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcXG5cXG4gIGhlYWRlciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDE1JTtcXG4gIH1cXG5cXG4gIG1haW4ge1xcbiAgICBwYWRkaW5nLXRvcDogNSU7XFxuICAgIHBhZGRpbmctYm90dG9tOiAzJTtcXG4gIH1cXG5cXG4gIGZvb3RlciB7XFxuICAgIGhlaWdodDoxMiU7XFxuICAgIC5ib29rLWEtcm9vbSB7XFxuICAgICAgaGVpZ2h0OiA3NSU7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC50aXRsZXtcXG4gICAgZ3JpZC10ZW1wbGF0ZTpcXG4gICAgICBcXFwid2VsY29tZSBvdmVybG9vayBob3RlbCBndWVzdFxcXCIgMTAwJVxcbiAgICAgIC8zMyUgMzQlIDMzJTtcXG4gIH1cXG5cXG4gIC53ZWxjb21lLCAub3Zlcmxvb2ssIC5ob3RlbCB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgQGluY2x1ZGUgaGV4Rm9udCg0NXB4KTtcXG4gIH1cXG5cXG4gIC5zdWItaGVhZGVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA5JTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAubG9nLWluIHtcXG4gICAgaGVpZ2h0OiAzNSU7XFxuICAgIHRvcDogNTAlO1xcbiAgICAuYm9vay1hLXJvb20ge1xcbiAgICAgIGZvbnQtc2l6ZTogM3Z3O1xcbiAgICB9XFxuICB9XFxuXFxuICAucGhvdG8ge1xcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5ncmVldGluZyB7XFxuICAgIHRleHQtYWxpZ246IGVuZDtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHggMTBweCAwcHg7XFxuICAgIHdpZHRoOiA1MCVcXG4gIH1cXG5cXG4gIC5yb29tLWNvbHVtbiB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHBhZGRpbmctbGVmdDogNiU7XFxuICB9XFxuXFxuICAuYm9va2luZyB7XFxuICAgIHdpZHRoOiA0NSU7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgbWFyZ2luOiAyJTtcXG4gIH1cXG5cXG4gIC5ib29raW5nLWZvcm0ge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA3NSU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBoZWlnaHQ6IDYwJTtcXG4gICAgd2lkdGg6IDQwJTtcXG4gIH1cXG5cXG4gIC5zdGF5e1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5pbnB1dCA+ICoge1xcbiAgICBmb250LXNpemU6IDIwcHhcXG4gIH1cXG5cXG4gIGZpZWxkc2V0IHtcXG4gICAgbGVnZW5kIHtcXG4gICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIH1cXG4gICAgLmlucHV0ID4gKiB7XFxuICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICB9XFxuICB9XFxuXFxuICBpbnB1dFt0eXBlPXJhZGlvXSArIGxhYmVsOmJlZm9yZSB7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICB9XFxuXFxuICAuZmlsdGVyLWJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gIH1cXG5cXG4gIC5zcGVuZGluZyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgbWFyZ2luLWxlZnQ6IDkwcHg7XFxuICAgIHdpZHRoOiA1MCU7XFxuICB9XFxuXFxuICAuYm9vay1hLXJvb20ge1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1zaXplOiAzdnc7XFxuICAgIEBpbmNsdWRlIGJveFN0YW5kYXJkKDVweCk7XFxuICB9XFxuXFxuICAuYm9vay1idXR0b24ge1xcbiAgICB3aWR0aDogNjAlO1xcbiAgfVxcblxcbiAgLmNvbmZpcm1hdGlvbiB7XFxuICAgIC5ncmVldGluZyB7XFxuICAgICAgd2lkdGg6IDk1JTtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgfVxcbiAgfVxcblxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJyksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYmFzZS5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiY2xhc3MgQ3VzdG9tZXIge1xuICBjb25zdHJ1Y3RvcihjdXN0SW5mbykge1xuICAgIGlmIChjdXN0SW5mbykge1xuICAgICAgdGhpcy51c2VySUQgPSBjdXN0SW5mby5pZDtcbiAgICAgIHRoaXMubmFtZSA9IGN1c3RJbmZvLm5hbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudXNlcklEID0gJ2d1ZXN0JztcbiAgICAgIHRoaXMubmFtZSA9ICdndWVzdCc7XG4gICAgfVxuICAgIHRoaXMubXlCb29raW5ncyA9IFtdO1xuICAgIHRoaXMuYm9va2VkRGF0YSA9IFtdO1xuICAgIHRoaXMudG90YWxTcGVudCA9IDA7XG4gIH1cblxuICBmaW5kQm9va2luZ3MoYm9va2luZ0RhdGEsIHJvb21EYXRhKSB7XG4gICAgbGV0IG15RGF0YSA9IGJvb2tpbmdEYXRhLmZpbHRlcihib29raW5nID0+IGJvb2tpbmcudXNlcklEID09PSB0aGlzLnVzZXJJRClcbiAgICBsZXQgYm9va2VkUm9vbXMgPSBteURhdGEubWFwKGRhdGEgPT4ge1xuICAgICAgbGV0IHRoaXNSb29tRGF0YSA9IHJvb21EYXRhLmZpbmQocm9vbSA9PiByb29tLm51bWJlciA9PT0gZGF0YS5yb29tTnVtYmVyKVxuICAgICAgbGV0IGJvb2tlZERhdGEgPSBbZGF0YS5kYXRlLCB0aGlzUm9vbURhdGFdXG4gICAgICByZXR1cm4gYm9va2VkRGF0YVxuICAgIH0pXG4gICAgdGhpcy5ib29rZWREYXRhID0gYm9va2VkUm9vbXM7XG4gICAgdGhpcy5teUJvb2tpbmdzID0gbXlEYXRhO1xuICB9XG5cbiAgZmluZFRvdGFsKHJvb21EYXRhKSB7XG4gICAgdGhpcy5teUJvb2tpbmdzLmZvckVhY2goYm9va2luZyA9PiB7XG4gICAgICByb29tRGF0YS5mb3JFYWNoKHJvb20gPT4ge1xuICAgICAgICBpZiAocm9vbS5udW1iZXIgPT09IGJvb2tpbmcucm9vbU51bWJlcikge1xuICAgICAgICAgIHRoaXMudG90YWxTcGVudCArPSByb29tLmNvc3RQZXJOaWdodFxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gICAgdGhpcy50b3RhbFNwZW50ID0gdGhpcy50b3RhbFNwZW50LnRvRml4ZWQoMilcbiAgfVxuXG4gIGNyZWF0ZUJvb2tpbmcoZGF0ZSwgcm9vbSwgZW5kTG9jYXRpb24pIHtcbiAgICBsZXQgYm9va2VkID0gZmFsc2U7XG4gICAgbGV0IGRhdGEgPSB7XG4gICAgICBcInVzZXJJRFwiOiB0aGlzLnVzZXJJRCxcbiAgICAgIGRhdGUsXG4gICAgICBcInJvb21OdW1iZXJcIjogcm9vbSxcbiAgICAgIFwicm9vbVNlcnZpY2VDaGFyZ2VzXCI6IFtdfVxuICAgIGJvb2tlZCA9IGVuZExvY2F0aW9uLmZpbmQoYm9va2luZyA9PiBib29raW5nLmRhdGUgPT09IGRhdGUgJiZcbiAgICAgIGJvb2tpbmcucm9vbU51bWJlciA9PT0gcm9vbSlcbiAgICBpZiAoIWJvb2tlZCkge1xuICAgICAgZW5kTG9jYXRpb24ucHVzaChkYXRhKTtcbiAgICAgIHJldHVybiAnWW91ciBib29raW5nIGhhcyBiZWVuIGNvbmZpcm1lZC4nO1xuICAgIH0gZWxzZSBpZiAoYm9va2VkLnVzZXJJRCA9PT0gdGhpcy51c2VySUQpIHtcbiAgICAgIHJldHVybiBcIkxvb2tzIGxpa2UgeW91J3ZlIGFscmVhZHkgYm9va2VkIHRoaXMgcm9vbVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ09vcHMsIHRoYXQgcm9vbSBpcyB1bmF2YWlsYWJsZS4nO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZU5ld0Jvb2tpbmcocm9vbURhdGEsIGVuZExvY2F0aW9uKSB7XG4gICAgbGV0IGJvb2tpbmcgPSB7XCJ1c2VySURcIjogdGhpcy51c2VySUQsIFwiZGF0ZVwiOiByb29tRGF0YVswXSxcbiAgICAgIFwicm9vbU51bWJlclwiOiByb29tRGF0YVsxXS5udW1iZXIsIFwicm9vbVNlcnZpY2VDaGFyZ2VzXCI6IFtdfVxuICAgIHJldHVybiBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS9ib29raW5ncycsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9va2luZylcbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiBzaG93RXJyb3IoZXJyKSlcbiAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ3VzdG9tZXI7XG4iLCJjbGFzcyBIb3RlbCB7XG4gIGNvbnN0cnVjdG9yKHJvb21zLCBib29raW5ncywgY3VzdG9tZXJzKSB7XG4gICAgdGhpcy5yb29tcyA9IHJvb21zO1xuICAgIHRoaXMuYm9va2luZ3MgPSBib29raW5ncztcbiAgICB0aGlzLmN1c3RvbWVycyA9IGN1c3RvbWVycztcbiAgICB0aGlzLnNlYXJjaERhdGUgPSAnJztcbiAgICB0aGlzLmF2YWlsYWJsZVJvb21zID0gW107XG4gICAgdGhpcy5maWx0ZXJlZFJvb21zID0gW107XG4gICAgdGhpcy5ib29raW5nRGF0YSA9IFtdO1xuICAgIHRoaXMuc2VsZWN0ZWRSb29tID0gW107XG4gIH1cblxuICBjcmVhdGVOZXdCb29raW5nKHVzZXJJRCwgZGF0ZSwgcm9vbSwgZW5kTG9jYXRpb24pIHtcbiAgICBsZXQgYm9va2VkID0gZmFsc2U7XG4gICAgbGV0IGRhdGEgPSB7dXNlcklELCBkYXRlLCBcInJvb21OdW1iZXJcIjogcm9vbSB9XG4gICAgYm9va2VkID0gdGhpcy5ib29raW5ncy5maW5kKGJvb2tpbmcgPT4gYm9va2luZy5kYXRlID09PSBkYXRlICYmXG4gICAgICBib29raW5nLnJvb21OdW1iZXIgPT09IHJvb20pXG4gICAgaWYgKCFib29rZWQpIHtcbiAgICAgIGVuZExvY2F0aW9uLnB1c2goZGF0YSk7XG4gICAgICByZXR1cm4gJ1lvdXIgYm9va2luZyBoYXMgYmVlbiBjb25maXJtZWQuJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICdPb3BzLCB0aGF0IHJvb20gaXMgdW5hdmFpbGFibGUuJztcbiAgICB9XG4gIH1cblxuICBmaW5kT3BlblJvb21zKHNlYXJjaERhdGUpIHtcbiAgICB0aGlzLnNlYXJjaERhdGUgPSBzZWFyY2hEYXRlO1xuICAgIGxldCBib29rZWRSb29tcyA9IHRoaXMuYm9va2luZ3MuZmlsdGVyKGJvb2tpbmcgPT5cbiAgICAgIGJvb2tpbmcuZGF0ZSA9PT0gc2VhcmNoRGF0ZSlcbiAgICBsZXQgcm9vbU51bXMgPSBib29rZWRSb29tcy5tYXAocm9vbSA9PiByb29tLnJvb21OdW1iZXIpXG4gICAgbGV0IHRoZXNlUm9vbXM7XG4gICAgdGhlc2VSb29tcyA9IHRoaXMucm9vbXMucmVkdWNlKChvcGVuUm9vbXMsIHJvb20pID0+IHtcbiAgICAgIGlmICghcm9vbU51bXMuaW5jbHVkZXMocm9vbS5udW1iZXIpKSB7XG4gICAgICAgIG9wZW5Sb29tcy5wdXNoKFtzZWFyY2hEYXRlLCByb29tXSlcbiAgICAgICAgcmV0dXJuIG9wZW5Sb29tc1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9wZW5Sb29tc1xuICAgIH0sIFtdKVxuICAgIHRoaXMuYXZhaWxhYmxlUm9vbXMgPSB0aGVzZVJvb21zO1xuICAgIHJldHVybiB0aGVzZVJvb21zXG4gIH1cblxuICBmaWx0ZXJSb29tcyhmaWx0ZXJEYXRhKSB7XG4gICAgdGhpcy5maW5kT3BlblJvb21zKHRoaXMuc2VhcmNoRGF0ZSlcbiAgICBsZXQgZmlsdGVyZWRSb29tcyA9IHRoaXMuYXZhaWxhYmxlUm9vbXMuZmlsdGVyKHJvb20gPT5cbiAgICAgIHJvb21bMV0ucm9vbVR5cGUgPT09IGZpbHRlckRhdGEucm9vbVR5cGUgJiZcbiAgICAgIChyb29tWzFdLmJpZGV0ID09PSAoZmlsdGVyRGF0YS5iaWRldCA9PT0gJ3RydWUnKSB8fFxuICAgICAgZmlsdGVyRGF0YS5iaWRldCA9PT0gJ21heWJlJykgJiZcbiAgICAgIHJvb21bMV0ubnVtQmVkcyA9PSBmaWx0ZXJEYXRhLm51bUJlZHMpO1xuICAgIHRoaXMuZmlsdGVyZWRSb29tcyA9IGZpbHRlcmVkUm9vbXM7XG4gIH1cblxuICBjaG9vc2VSb29tKHJvb21OdW1iZXIpIHtcbiAgICB0aGlzLnNlbGVjdGVkUm9vbSA9IHRoaXMuYXZhaWxhYmxlUm9vbXMuZmluZChyb29tID0+XG4gICAgICByb29tWzFdLm51bWJlciA9PSByb29tTnVtYmVyKVxuICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBIb3RlbDtcbiIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2hvdGVsLXBhdHRlcm4uanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvb3Zlcmxvb2staG90ZWwtcGFydHkuanBnXCI7IiwiaW1wb3J0ICcuL2Nzcy9iYXNlLnNjc3MnXG5pbXBvcnQgaW1hZ2UgZnJvbSAnLi9pbWFnZXMvb3Zlcmxvb2staG90ZWwtcGFydHkuanBnJ1xuaW1wb3J0IEhvdGVsIGZyb20gJy4vaG90ZWwnO1xuaW1wb3J0IEN1c3RvbWVyIGZyb20gJy4vY3VzdG9tZXInO1xuXG5jb25zdCBhcGlEYXRhID0gW1xuICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS9yb29tcycpLFxuICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS9ib29raW5ncycpLFxuICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS9jdXN0b21lcnMnKVxuXVxubGV0IGFsbFJvb21zLCBhbGxCb29raW5ncywgYWxsQ3VzdG9tZXJzO1xubGV0IGhvdGVsO1xubGV0IGN1c3RvbWVyO1xubGV0IHRvZGF5RGF0ZSA9IFwiMjAyMC0wNy0wNVwiXG5cbmNvbnN0IGd1ZXN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNndWVzdE5hbWUnKTtcbmNvbnN0IGd1ZXN0Qm9va2luZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ3Vlc3RCb29raW5ncycpO1xuY29uc3QgdXNlclNwZW5kaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VzZXJTcGVuZGluZycpO1xuY29uc3QgYm9va2luZ0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9va2luZ0Zvcm0nKTtcbmNvbnN0IGJvb2tSb29tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Jvb2tSb29tJyk7XG5jb25zdCBib29rRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib29rRGF0ZScpO1xuY29uc3QgZmlsdGVyUm9vbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmlsdGVyUm9vbXMnKTtcbmNvbnN0IGNvbmZpcm1hdGlvblNjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib29raW5nQ29uZmlybWF0aW9uJyk7XG5jb25zdCBwaG90b1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGhvdG9TZWN0aW9uJyk7XG5jb25zdCBjb2x1bW5IZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vbUNvbHVtbkhlYWRlcicpO1xuY29uc3QgbG9nSW5Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvZ0luRm9ybScpO1xubGV0IGJvb2tCdXR0b25zO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGxvYWRJbik7XG5ib29rUm9vbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGJvb2tpbmdCdXR0b25QcmVzcyk7XG5ib29rRGF0ZS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZmluZEF2YWlsYWJsZVJvb21zKTtcbmZpbHRlclJvb21zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZmlsdGVyVGhyb3VnaFJvb21zKTtcbmNvbmZpcm1hdGlvblNjcmVlbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbmZpcm1QcmVzcyk7XG5sb2dJbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2dQcmVzcyk7XG5sZXQgYnV0dG9uc0xpc3RlbmVyO1xuXG5mdW5jdGlvbiBsb2FkSW4oKSB7XG4gIFByb21pc2UuYWxsKGFwaURhdGEpXG4gICAgLnRoZW4ocmVzcG9uc2VzID0+IFByb21pc2UuYWxsKHJlc3BvbnNlcy5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKSkpXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICBhbGxSb29tcyA9IGRhdGFbMF0ucm9vbXM7XG4gICAgICAgIGFsbEJvb2tpbmdzID0gZGF0YVsxXS5ib29raW5ncztcbiAgICAgICAgYWxsQ3VzdG9tZXJzID0gZGF0YVsyXS5jdXN0b21lcnM7XG4gICAgICAgIGNyZWF0ZUhvdGVsKGFsbFJvb21zLCBhbGxCb29raW5ncywgYWxsQ3VzdG9tZXJzKVxuICAgICAgfVxuICAgIH0pXG4gICAgLmNhdGNoKGVyciA9PiBzaG93RXJyb3IoZXJyKSlcbiAgc2V0RGF0ZSgpXG59XG5cbmZ1bmN0aW9uIHNob3dFcnJvcihlcnJvcikge1xuICBjb25zb2xlLmxvZyhlcnJvcilcbiAgY29uZmlybWF0aW9uU2NyZWVuLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib29raW5nUmVzcG9uc2UnKS5pbm5lclRleHQgPVxuICBgRXJyb3I6ICR7ZXJyb3IubWVzc2FnZX0gPGJyPlBsZWFzZSBSZWZyZXNoIGFuZCBUcnkgQWdhaW48L2JyPmBcbn1cblxuZnVuY3Rpb24gY3JlYXRlSG90ZWwocm9vbXMsIGJvb2tpbmdzLCBjdXN0b21lcnMpIHtcbiAgaG90ZWwgPSBuZXcgSG90ZWwocm9vbXMsIGJvb2tpbmdzLCBjdXN0b21lcnMpXG59XG5cbmZ1bmN0aW9uIHNldERhdGUoKSB7XG4gIGJvb2tEYXRlLm1pbiA9IHRvZGF5RGF0ZTtcbiAgYm9va0RhdGUudmFsdWUgPSB0b2RheURhdGU7XG59XG5cbmZ1bmN0aW9uIGxvZ1ByZXNzKCkge1xuICBpZiAoZXZlbnQudGFyZ2V0LmlkID09PSAnbG9nSW5CdXR0b24nKSB7XG4gICAgbG9nSW4oKVxuICB9XG59XG5cbmZ1bmN0aW9uIGxvZ0luKCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIGNvbnN0IHVzZXJJbmRleCA9IGxvZ0luRm9ybS5jaGlsZE5vZGVzWzNdLnZhbHVlLnNwbGl0KFwiclwiKS5wb3AoKVxuICBjb25zdCBjdXN0ID0gaG90ZWwuY3VzdG9tZXJzLmZpbmQoY3VzdCA9PiBjdXN0LmlkID09IHVzZXJJbmRleClcbiAgaWYgKGN1c3QgJiYgbG9nSW5Gb3JtLmNoaWxkTm9kZXNbN10udmFsdWUgPT09ICdvdmVybG9vazIwMjEnKSB7XG4gICAgY3JlYXRlQ3VzdG9tZXIoY3VzdClcbiAgICBzY3JlZW5DaGVjaygpXG4gICAgbG9nSW5Gb3JtLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpXG4gICAgYm9va1Jvb20uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICBib29rUm9vbS5pbm5lckhUTUwgPSAnQm9vayB5b3VyIG5leHQgdmlzaXQnXG4gIH0gZWxzZSB7XG4gICAgbG9nSW5Gb3JtLmNoaWxkTm9kZXNbN10udmFsdWUgPSAnJ1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcnJvck1TRycpLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmlzaWJsZScpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUN1c3RvbWVyKGN1c3RvbWVySW5mbykge1xuICBjdXN0b21lciA9IG5ldyBDdXN0b21lcihjdXN0b21lckluZm8pO1xuICBjdXN0b21lci5maW5kQm9va2luZ3MoYWxsQm9va2luZ3MsIGFsbFJvb21zKTtcbiAgY3VzdG9tZXIuZmluZFRvdGFsKGFsbFJvb21zKTtcbiAgdXBkYXRlRE9NKClcbn1cblxuZnVuY3Rpb24gdXBkYXRlRE9NKCkge1xuICB1cGRhdGVEYXRlKClcbiAgdXBkYXRlR3Vlc3ROYW1lKClcbiAgdXBkYXRlQm9va2luZ3MoY3VzdG9tZXIuYm9va2VkRGF0YSlcbiAgdXBkYXRlVG90YWxTcGVudCgpXG59XG5cbmZ1bmN0aW9uIHNjcmVlbkNoZWNrKCkge1xuICBpZiAoc2NyZWVuLndpZHRoID4gMTAyNCkge1xuICAgIHBob3RvU2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVEYXRlKCkge1xuICBib29rRGF0ZS5taW4gPSB0b2RheURhdGU7XG4gIGJvb2tEYXRlLnZhbHVlID0gdG9kYXlEYXRlLnNwbGl0KCcvJykuam9pbignLScpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVHdWVzdE5hbWUoKSB7XG4gIGd1ZXN0TmFtZS5pbm5lclRleHQgPSBgQmFjaywgJHtjdXN0b21lci5uYW1lfWA7XG4gIGNvbHVtbkhlYWRlci5pbm5lclRleHQgPSAnWW91ciBQcmV2aW91cyBCb29raW5ncyc7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUJvb2tpbmdzKGRhdGEpIHtcbiAgaWYgKCFkYXRhWzBdKSB7XG4gICAgYXBvbG9naXplKClcbiAgfSBlbHNlIHtcbiAgICBndWVzdEJvb2tpbmdzLmlubmVySFRNTCA9ICcnO1xuICAgIGRhdGEuZm9yRWFjaChib29raW5nID0+IHtcbiAgICAgIGd1ZXN0Qm9va2luZ3MuaW5uZXJIVE1MICs9IGBcbiAgICAgIDxzZWN0aW9uIGNsYXNzPVwiYm9va2luZ1wiPlxuICAgICAgICA8aDM+JHtib29raW5nWzBdfTwvaDM+XG4gICAgICAgIDxoMz5Sb29tIE51bWJlcjogPHNwYW4gY2xhc3M9XCJhY2NlbnRcIj4ke2Jvb2tpbmdbMV0ubnVtYmVyfTwvc3Bhbj48L2gzPlxuICAgICAgICA8aDM+Um9vbSBUeXBlOiA8c3BhbiBjbGFzcz1cImFjY2VudFwiPiR7Ym9va2luZ1sxXS5yb29tVHlwZX08L3NwYW4+PC9oMz5cbiAgICAgICAgPGgzPkFtb3VudCBvZiBCZWRzOiA8c3BhbiBjbGFzcz1cImFjY2VudFwiPiR7Ym9va2luZ1sxXS5udW1CZWRzfTwvc3Bhbj48L2gzPlxuICAgICAgICA8aDM+QmlkZXQ6IDxzcGFuIGNsYXNzPVwiYWNjZW50XCI+JHtib29raW5nWzFdLmJpZGV0fTwvc3Bhbj48L2gzPlxuICAgICAgICA8aDM+TmlnaHRseSBDb3N0OiA8c3BhbiBjbGFzcz1cImFjY2VudFwiPiR7Ym9va2luZ1sxXS5jb3N0UGVyTmlnaHR9PC9zcGFuPjwvaDM+XG4gICAgICAgIDxidXR0b24gdHlwZT1idXR0b24gY2xhc3M9XCJib29raW5nIGJvb2stYnV0dG9uIGhpZGRlblwiIGlkPVwiJHtib29raW5nWzFdLm51bWJlcn1cIj5DaG9vc2UgVGhpcyBSb29tITwvYnV0dG9uPlxuICAgICAgPC9zZWN0aW9uPmBcbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwb2xvZ2l6ZSgpIHtcbiAgZ3Vlc3RCb29raW5ncy5pbm5lckhUTUwgPSBgXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJib29raW5nXCI+XG4gICAgICA8aDM+V2UgYXJlIGV4dHJlbWVseSBzb3JyeSwgPHNwYW4gY2xhc3M9XCJhY2NlbnRcIj4ke2N1c3RvbWVyLm5hbWV9PC9zcGFuPjwvaDM+XG4gICAgICA8aDM+V2UgY2Fubm90IGZpbmQgYW55IGF2YWlsYWJsZSByb29tczwvaDM+XG4gICAgICA8aDM+UGxlYXNlIHRyeSBhIGRpZmZlcmVudCBkYXRlIG9yIGFtZW5pdGllcy48L2gzPlxuICAgIDwvc2VjdGlvbj5gXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVRvdGFsU3BlbnQoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzcGVuZGluZycpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gIHVzZXJTcGVuZGluZy5pbm5lclRleHQgKz0gY3VzdG9tZXIudG90YWxTcGVudDtcbn1cblxuZnVuY3Rpb24gYm9va2luZ0J1dHRvblByZXNzKCkge1xuICBpZiAoYm9va1Jvb20uaW5uZXJIVE1MID09PSAnQm9vayB5b3VyIG5leHQgdmlzaXQnKSB7XG4gICAgc2hvd0Jvb2tpbmdGb3JtKClcbiAgfSBlbHNlIHtcbiAgICBtYWtlQm9va2luZygpXG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvd0Jvb2tpbmdGb3JtKCkge1xuICBib29raW5nRm9ybS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgYm9va1Jvb20uaW5uZXJIVE1MID0gJ0NvbmZpcm0gTXkgVmlzaXQnO1xuICBwaG90b1NlY3Rpb24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG59XG5cbmZ1bmN0aW9uIG1ha2VCb29raW5nKCkge1xuICBjdXN0b21lci5jcmVhdGVOZXdCb29raW5nKGhvdGVsLnNlbGVjdGVkUm9vbSwgYWxsQm9va2luZ3MpXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib29raW5nQ29uZmlybWF0aW9uJykuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gIHVzZXJTcGVuZGluZy5pbm5lclRleHQgKz0gY3VzdG9tZXIudG90YWxTcGVudDtcbiAgYm9va2luZ0Zvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG59XG5cbmZ1bmN0aW9uIGZpbmRBdmFpbGFibGVSb29tcygpIHtcbiAgbGV0IGRhdGUgPSBldmVudC50YXJnZXQudmFsdWUuc3BsaXQoJy0nKS5qb2luKCcvJylcbiAgY29sdW1uSGVhZGVyLmlubmVyVGV4dCA9IFwiQXZhaWxhYmxlIFJvb21zOlwiXG4gIGhvdGVsLmZpbmRPcGVuUm9vbXMoZGF0ZSlcbiAgdXBkYXRlQm9va2luZ3MoaG90ZWwuYXZhaWxhYmxlUm9vbXMpXG4gIHRvZ2dsZUJ1dHRvbnMoKVxufVxuXG5mdW5jdGlvbiBmaWx0ZXJUaHJvdWdoUm9vbXMoKSB7XG4gIGxldCByb29tVHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb29tVHlwZScpLnZhbHVlXG4gIGxldCBiaWRldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJCaWRldFwiXTpjaGVja2VkJykudmFsdWU7XG4gIGxldCBudW1CZWRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI251bUJlZHMnKS52YWx1ZVxuICBsZXQgZGF0YSA9IHtyb29tVHlwZSwgYmlkZXQsIG51bUJlZHN9XG4gIGhvdGVsLmZpbHRlclJvb21zKGRhdGEpXG4gIHVwZGF0ZUJvb2tpbmdzKGhvdGVsLmZpbHRlcmVkUm9vbXMpXG4gIHRvZ2dsZUJ1dHRvbnMoKVxufVxuXG5mdW5jdGlvbiB0b2dnbGVCdXR0b25zKCkge1xuICBsZXQgYWxsQm9va2luZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9vay1idXR0b24nKVxuICBhbGxCb29raW5ncy5mb3JFYWNoKGJvb2tpbmcgPT4ge1xuICAgIGJvb2tpbmcuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgfSlcbiAgYm9va0J1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9vay1idXR0b24nKTtcbiAgYnV0dG9uc0xpc3RlbmVyID0gYm9va0J1dHRvbnMuZm9yRWFjaChidXR0b249PiBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3RSb29tKSk7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdFJvb20oKSB7XG4gIGhvdGVsLmNob29zZVJvb20oZXZlbnQudGFyZ2V0LmlkKVxuXG59XG5cbmZ1bmN0aW9uIGNvbmZpcm1QcmVzcygpIHtcbiAgaWYgKGV2ZW50LnRhcmdldC5pZCA9PT0gJ3JldHVybicpIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==