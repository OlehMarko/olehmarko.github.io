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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_module_interface_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_module_calculation_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_module_render_js__ = __webpack_require__(3);




Object(__WEBPACK_IMPORTED_MODULE_0__js_module_interface_js__["a" /* createInterface */])();

let addButton = document.getElementsByClassName('add')[0];
addButton.onclick = function () {
  Object(__WEBPACK_IMPORTED_MODULE_2__js_module_render_js__["a" /* render */])(__WEBPACK_IMPORTED_MODULE_1__js_module_calculation_js__["a" /* default */].add());
}

let subtractButton = document.getElementsByClassName('subtract')[0];
subtractButton.onclick = function () {
  Object(__WEBPACK_IMPORTED_MODULE_2__js_module_render_js__["a" /* render */])(__WEBPACK_IMPORTED_MODULE_1__js_module_calculation_js__["a" /* default */].subtract());
}

let multiplyButton = document.getElementsByClassName('multiply')[0];
multiplyButton.onclick = function () {
  Object(__WEBPACK_IMPORTED_MODULE_2__js_module_render_js__["a" /* render */])(__WEBPACK_IMPORTED_MODULE_1__js_module_calculation_js__["a" /* default */].multiply());
}

let divideButton = document.getElementsByClassName('divide')[0];
divideButton.onclick = function () {
  Object(__WEBPACK_IMPORTED_MODULE_2__js_module_render_js__["a" /* render */])(__WEBPACK_IMPORTED_MODULE_1__js_module_calculation_js__["a" /* default */].divide());
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createInterface;
function createInterface() {
  let container = document.getElementsByClassName('container')[0];
  let inputFirst = document.createElement('input');
  inputFirst.setAttribute('type', 'text');
  inputFirst.setAttribute('name', 'firstInput');
  let inputSecond = document.createElement('input');
  inputSecond.setAttribute('type', 'text');
  inputSecond.setAttribute('name', 'secondInput');
  container.appendChild(inputFirst);
  container.appendChild(inputSecond);
  createButton('+', 'add');
  createButton('-', 'subtract');
  createButton('*', 'multiply');
  createButton('/', 'divide');
}

function createButton(sign, operation) {
  let container = document.getElementsByClassName('container')[0];
  let button = document.createElement('input');
  button.setAttribute('type', 'button');
  button.setAttribute('value', sign);
  button.classList.add(operation);
  container.appendChild(button);
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function add(){
  let result = parseInt(document.getElementsByName('firstInput')[0].value) + parseInt(document.getElementsByName('secondInput')[0].value);
  return validate(result);
}
function subtract(){
  let result = parseInt(document.getElementsByName('firstInput')[0].value) - parseInt(document.getElementsByName('secondInput')[0].value);
  return validate(result);
}
function multiply(){
  let result = parseInt(document.getElementsByName('firstInput')[0].value) * parseInt(document.getElementsByName('secondInput')[0].value);
  return validate(result);
}
function divide(){
  let result = parseInt(document.getElementsByName('firstInput')[0].value) / parseInt(document.getElementsByName('secondInput')[0].value);
  return validate(result);
}

function validate(result) {
  debugger
  if (!isNaN(result)) {
    return result;
  } else {
    return 'Enter nubers';
  }
}

/* harmony default export */ __webpack_exports__["a"] = ({
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide
});


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = render;
function render(result) {
  let resultNode = document.getElementsByClassName('result')[0];
  resultNode.innerHTML = result;
}


/***/ })
/******/ ]);