/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/app.scss */ \"./src/scss/app.scss\");\n/* harmony import */ var _landing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing.js */ \"./src/js/landing.js\");\n/* harmony import */ var _landing_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_landing_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* Your JS Code goes here */\n\n/* Demo JS */\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBMEI7O0FBRTFCOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHdlYXJlYXRobG9uL2Zyb250ZW5kLXdlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvanMvYXBwLmpzPzkwZTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zY3NzL2FwcC5zY3NzJztcclxuXHJcbi8qIFlvdXIgSlMgQ29kZSBnb2VzIGhlcmUgKi9cclxuXHJcbi8qIERlbW8gSlMgKi9cclxuaW1wb3J0ICcuL2xhbmRpbmcuanMnO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/app.js\n");

/***/ }),

/***/ "./src/js/landing.js":
/*!***************************!*\
  !*** ./src/js/landing.js ***!
  \***************************/
/***/ (() => {

eval("console.log('Hello from \"landing\" page!');\n$(document).ready(function () {\n  var $slider = $('#slick').slick({\n    // autoplay: true,\n    slidesToShow: 4,\n    arrows: false\n  });\n  $('.slider-prev').on('click', function (e) {\n    e.preventDefault();\n    $slider.slick('slickPrev');\n  });\n  $('.slider-next').on('click', function (e) {\n    e.preventDefault();\n    $slider.slick('slickNext');\n  });\n});\nvar var1 = 'test';\nvar obj1 = {\n  k1: 1,\n  k2: 2\n};\nvar str1 = 't';\nstr1 = \"str \\\"test\\\"\";\n// str1 = `test ${obj1.k1}`\n\nconsole.log(str1);\nvar cond = 5;\n\n// if (cond !== '5') {\n//     console.log('true')\n// } else {\n//     console.log('false')\n// }\n\nfor (var i = 0, x = 5;; i++, x = i + 2) {\n  console.log(\"loop \".concat(i, \", \").concat(x));\n  if (i == 5) {\n    break;\n  }\n}\nconsole.log(cond !== '5' ? 'true' : 'false');\n\n// {\n// const x = 10\n// }\n// console.log(x)\n\n//console.log(5 - '3')\n\n// const obj2 = obj1\n\n// console.log(obj1)\n// console.log(obj2)\n\n// obj1.k1 = 'test'\n// obj2.k2 = 'test1'\n\n// console.log(obj1)\n// console.log(obj2)\n\n// let var2 = 123\n\n// var var3 = 5\n\nvar f1 = function f1() {\n  var x = 5;\n  console.log('hello from func');\n};\nvar f2 = f1;\nf1();\nf2();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbGFuZGluZy5qcyIsIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIiRzbGlkZXIiLCJzbGljayIsInNsaWRlc1RvU2hvdyIsImFycm93cyIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwidmFyMSIsIm9iajEiLCJrMSIsImsyIiwic3RyMSIsImNvbmQiLCJpIiwieCIsImNvbmNhdCIsImYxIiwiZjIiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL0B3ZWFyZWF0aGxvbi9mcm9udGVuZC13ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2pzL2xhbmRpbmcuanM/ZjFiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZygnSGVsbG8gZnJvbSBcImxhbmRpbmdcIiBwYWdlIScpXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgJHNsaWRlciA9ICQoJyNzbGljaycpLnNsaWNrKHtcclxuICAgICAgICAvLyBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5zbGlkZXItcHJldicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkc2xpZGVyLnNsaWNrKCdzbGlja1ByZXYnKTtcclxuICAgIH0pXHJcblxyXG4gICAgJCgnLnNsaWRlci1uZXh0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICRzbGlkZXIuc2xpY2soJ3NsaWNrTmV4dCcpO1xyXG4gICAgfSlcclxufSk7XHJcblxyXG5jb25zdCB2YXIxID0gJ3Rlc3QnXHJcbmNvbnN0IG9iajEgPSB7XHJcbiAgICBrMTogMSxcclxuICAgIGsyOiAyLFxyXG59XHJcblxyXG5sZXQgc3RyMSA9ICd0J1xyXG5zdHIxID0gXCJzdHIgXFxcInRlc3RcXFwiXCJcclxuLy8gc3RyMSA9IGB0ZXN0ICR7b2JqMS5rMX1gXHJcblxyXG5jb25zb2xlLmxvZyhzdHIxKVxyXG5cclxudmFyIGNvbmQgPSA1XHJcblxyXG4vLyBpZiAoY29uZCAhPT0gJzUnKSB7XHJcbi8vICAgICBjb25zb2xlLmxvZygndHJ1ZScpXHJcbi8vIH0gZWxzZSB7XHJcbi8vICAgICBjb25zb2xlLmxvZygnZmFsc2UnKVxyXG4vLyB9XHJcblxyXG5mb3IgKGxldCBpID0gMCwgeCA9IDUgOyA7IGkrKyx4ID0gaSsyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhgbG9vcCAke2l9LCAke3h9YCk7XHJcbiAgICBcclxuICAgIGlmIChpID09IDUpIHtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxufVxyXG5cclxuY29uc29sZS5sb2coY29uZCAhPT0gJzUnID8gJ3RydWUnIDogJ2ZhbHNlJylcclxuXHJcbi8vIHtcclxuLy8gY29uc3QgeCA9IDEwXHJcbi8vIH1cclxuLy8gY29uc29sZS5sb2coeClcclxuXHJcblxyXG4vL2NvbnNvbGUubG9nKDUgLSAnMycpXHJcblxyXG4vLyBjb25zdCBvYmoyID0gb2JqMVxyXG5cclxuLy8gY29uc29sZS5sb2cob2JqMSlcclxuLy8gY29uc29sZS5sb2cob2JqMilcclxuXHJcbi8vIG9iajEuazEgPSAndGVzdCdcclxuLy8gb2JqMi5rMiA9ICd0ZXN0MSdcclxuXHJcbi8vIGNvbnNvbGUubG9nKG9iajEpXHJcbi8vIGNvbnNvbGUubG9nKG9iajIpXHJcblxyXG4vLyBsZXQgdmFyMiA9IDEyM1xyXG5cclxuLy8gdmFyIHZhcjMgPSA1XHJcblxyXG5jb25zdCBmMSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciB4ID0gNVxyXG4gICAgY29uc29sZS5sb2coJ2hlbGxvIGZyb20gZnVuYycpXHJcbn1cclxuXHJcbmNvbnN0IGYyID0gZjFcclxuXHJcbmYxKClcclxuZjIoKSJdLCJtYXBwaW5ncyI6IkFBQUFBLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDRCQUE0QixDQUFDO0FBRXpDQyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxDQUFDQyxLQUFLLENBQUMsWUFBVTtFQUN4QixJQUFNQyxPQUFPLEdBQUdILENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQ0ksS0FBSyxDQUFDO0lBQzlCO0lBQ0FDLFlBQVksRUFBRSxDQUFDO0lBQ2ZDLE1BQU0sRUFBRTtFQUNaLENBQUMsQ0FBQztFQUVGTixDQUFDLENBQUMsY0FBYyxDQUFDLENBQUNPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBU0MsQ0FBQyxFQUFDO0lBQ3JDQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBQ2xCTixPQUFPLENBQUNDLEtBQUssQ0FBQyxXQUFXLENBQUM7RUFDOUIsQ0FBQyxDQUFDO0VBRUZKLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQ08sRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFTQyxDQUFDLEVBQUM7SUFDckNBLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7SUFDbEJOLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLFdBQVcsQ0FBQztFQUM5QixDQUFDLENBQUM7QUFDTixDQUFDLENBQUM7QUFFRixJQUFNTSxJQUFJLEdBQUcsTUFBTTtBQUNuQixJQUFNQyxJQUFJLEdBQUc7RUFDVEMsRUFBRSxFQUFFLENBQUM7RUFDTEMsRUFBRSxFQUFFO0FBQ1IsQ0FBQztBQUVELElBQUlDLElBQUksR0FBRyxHQUFHO0FBQ2RBLElBQUksR0FBRyxjQUFjO0FBQ3JCOztBQUVBaEIsT0FBTyxDQUFDQyxHQUFHLENBQUNlLElBQUksQ0FBQztBQUVqQixJQUFJQyxJQUFJLEdBQUcsQ0FBQzs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUMsQ0FBQyxHQUFHLENBQUMsR0FBS0QsQ0FBQyxFQUFFLEVBQUNDLENBQUMsR0FBR0QsQ0FBQyxHQUFDLENBQUMsRUFBRTtFQUNuQ2xCLE9BQU8sQ0FBQ0MsR0FBRyxTQUFBbUIsTUFBQSxDQUFTRixDQUFDLFFBQUFFLE1BQUEsQ0FBS0QsQ0FBQyxDQUFFLENBQUM7RUFFOUIsSUFBSUQsQ0FBQyxJQUFJLENBQUMsRUFBRTtJQUNSO0VBQ0o7QUFDSjtBQUVBbEIsT0FBTyxDQUFDQyxHQUFHLENBQUNnQixJQUFJLEtBQUssR0FBRyxHQUFHLE1BQU0sR0FBRyxPQUFPLENBQUM7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBOztBQUdBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLElBQU1JLEVBQUUsR0FBRyxTQUFMQSxFQUFFQSxDQUFBLEVBQWU7RUFDbkIsSUFBSUYsQ0FBQyxHQUFHLENBQUM7RUFDVG5CLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGlCQUFpQixDQUFDO0FBQ2xDLENBQUM7QUFFRCxJQUFNcUIsRUFBRSxHQUFHRCxFQUFFO0FBRWJBLEVBQUUsQ0FBQyxDQUFDO0FBQ0pDLEVBQUUsQ0FBQyxDQUFDIn0=\n//# sourceURL=webpack-internal:///./src/js/landing.js\n");

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9hcHAuc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad2VhcmVhdGhsb24vZnJvbnRlbmQtd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9zY3NzL2FwcC5zY3NzPzYyOWUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scss/app.scss\n");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;