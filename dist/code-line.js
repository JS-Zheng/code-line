(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["CodeLine"] = factory();
	else
		root["CodeLine"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyNSAyNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHRpdGxlPm51bWJlcmVkLWxpc3Q8L3RpdGxlPgo8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJub256ZXJvIj4KPHBhdGggZD0ibTMuNzAyMiAwaC0xLjQ4NjVsLTEuOTA3IDEuNzgwOCAwLjk5NTQ4IDEuMDY1OGMwLjM5MjYzLTAuMzQ1ODMgMC42MjYzOC0wLjU5ODQ4IDAuNzAxMjMtMC43NTcyMmgwLjAyODA0NXYwLjE2ODMyYzAgMC4zNzM5Mi0wLjAwMjQ1NTggMC45MzkzOS0wLjAwNzA3MjcgMS42OTY3LTAuMDA0NzE1MSAwLjc1NzIyLTAuMDA3MDcyNyAxLjMyNzUtMC4wMDcwNzI3IDEuNzEwOGgtMS41MDA1djEuMzg4M2g0LjY5Nzd2LTEuMzg4M2gtMS41MTQzdi01LjY2NTJ6Ii8+CjxwYXRoIGQ9Im0yNC44MjggMy41OTY5Yy0wLjA4OTE5NC0wLjA4ODg1MS0wLjE5NDExLTAuMTMzMi0wLjMxNTgyLTAuMTMzMmgtMTcuMDUyYy0wLjEyMTUxIDAtMC4yMjY0NyAwLjA0NDM1Mi0wLjMxNTQ3IDAuMTMzMi0wLjA4ODY1NCAwLjA4ODg1MS0wLjEzMzAxIDAuMTkzOTYtMC4xMzMwMSAwLjMxNTUydjIuNjkyNGMwIDAuMTIxNTYgMC4wNDQyMDQgMC4yMjY2NyAwLjEzMzAxIDAuMzE1NTIgMC4wODg5OTggMC4wODg3NTIgMC4xOTM5NiAwLjEzMzIgMC4zMTU0NyAwLjEzMzJoMTcuMDUyYzAuMTIxNzEgMCAwLjIyNjc3LTAuMDQ0NDUgMC4zMTU2Ny0wLjEzMzIgMC4wODg4MDItMC4wODg4NTEgMC4xMzI5Ni0wLjE5Mzk2IDAuMTMyOTYtMC4zMTU1MnYtMi42OTI0YzEuOTY1ZS00IC0wLjEyMTUxLTAuMDQ0MTU1LTAuMjI2NjctMC4xMzI5Ni0wLjMxNTUyeiIvPgo8cGF0aCBkPSJtMy42MTgxIDIwLjY3IDEuMzMyMi0xLjYxMjZ2LTEuMjM0aC00LjY2OTd2Mi4xMzE0aDEuNDg2M3YtMC43NDMyMmMwLjE0OTYxIDAgMC4zNzYyOC0wLjAwNDIyMzkgMC42ODAyNi0wLjAxMzYwNSAwLjMwMzYzLTAuMDA5NTc3NiAwLjUzMDQ1LTAuMDE0MTQ1IDAuNjgwMDYtMC4wMTQxNDV2MC4wMTQxNDVjLTAuMTc3ODUgMC4xNjgyNy0wLjM1MDY0IDAuMzQ4MDgtMC41MTg5NiAwLjUzOTg4LTAuMTY4MzIgMC4xOTE3NS0wLjM2Njk0IDAuNDQ0MDYtMC41OTYwMiAwLjc1NjgzLTAuMjI4OTMgMC4zMTMzMS0wLjM4MDcgMC41MTY3NS0wLjQ1NTU1IDAuNjEwMTdsMC4zNjQ0OSAwLjc4NTI3YzAuOTgxNTgtMC4wNzQ5NTEgMS40NzI0IDAuMTg2NzQgMS40NzI0IDAuNzg1MjcgMCAwLjI2MTY5LTAuMTAwNDkgMC40NjAzNi0wLjMwMTUyIDAuNTk1NjgtMC4yMDA4MyAwLjEzNTg1LTAuNDM2OTggMC4yMDM1OS0wLjcwODEgMC4yMDM1OS0wLjUzMjgxIDAtMS4wMjgzLTAuMjEwMjctMS40ODYzLTAuNjMxMTRsLTAuNzk5NTEgMS4yMzRjMC42MTY5OSAwLjYxNjk5IDEuNDIxIDAuOTI1NDkgMi40MTIgMC45MjU0OSAwLjc1NzE3IDAgMS4zOTA1LTAuMjE0ODMgMS45MDAyLTAuNjQ0OTQgMC41MDk0OC0wLjQzMDE2IDAuNzY0MTktMS4wMTkxIDAuNzY0MTktMS43NjY5IDAtMC40NzY4Ny0wLjE0MDQyLTAuODg4MTYtMC40MjA1My0xLjIzNDItMC4yODA1NS0wLjM0NTU4LTAuNjU4OTktMC41NzQ4NS0xLjEzNi0wLjY4Njk0eiIvPgo8cGF0aCBkPSJtMy43MyAxNC42NGgtMS43ODA5YzAuMDA5NDc5NC0wLjIzMzc5IDAuMTc1MzktMC40NzkxNyAwLjQ5Nzk0LTAuNzM2IDAuMzIyNTQtMC4yNTY5NyAwLjY3NTItMC40OTI5OCAxLjA1ODctMC43MDgxIDAuMzgzMTUtMC4yMTUxOCAwLjczMzc0LTAuNTE2NCAxLjA1MTctMC45MDQzMiAwLjMxNzg4LTAuMzg4MDIgMC40NzY3Ny0wLjgxNTcyIDAuNDc2NzctMS4yODMyIDAtMC42NjM4LTAuMjMzNjQtMS4xODk3LTAuNzAxMDMtMS41Nzc3LTAuNDY3MjktMC4zODc5Mi0xLjA0MjQtMC41ODE5Ny0xLjcyNDgtMC41ODE5Ny0wLjU0MjM0IDAtMS4wMzU1IDAuMTMzMi0xLjQ3OTYgMC4zOTk3MS0wLjQ0NDAxIDAuMjY2NC0wLjc3ODE0IDAuNjM4MDYtMS4wMDI2IDEuMTE1bDEuMTkyIDAuODI3MzFjMC4zMjcyNi0wLjU0MjM0IDAuNzA1ODQtMC44MTMzNiAxLjEzNTgtMC44MTMzNiAwLjIzMzg5IDAgMC40MTg0NyAwLjA2MzExNCAwLjU1NDA4IDAuMTg5MjkgMC4xMzU0MSAwLjEyNjQyIDAuMjAzMzkgMC4zMDYyNCAwLjIwMzM5IDAuNTM5OTggMCAwLjIxNDk4LTAuMTA5OTIgMC40MjUzNC0wLjMyOTYyIDAuNjMwOTktMC4yMTk3OSAwLjIwNTY1LTAuNDgzODQgMC40MDg5NC0wLjc5MjQ0IDAuNjA5OTctMC4zMDg0NSAwLjIwMTAzLTAuNjE3MDQgMC40MjMxMy0wLjkyNTQ0IDAuNjY2MTYtMC4zMDg0NSAwLjI0MzA3LTAuNTcyNzQgMC41NjA3Ni0wLjc5MjQ0IDAuOTUzMzktMC4yMTk2IDAuMzkyNjMtMC4zMjk0NyAwLjgyNzQ2LTAuMzI5NDcgMS4zMDQyIDAgMC4xNjgyMiAwLjAyODA0NSAwLjQyMDY4IDAuMDg0MDM3IDAuNzU3MjJoNS4wNzYzdi0yLjIzLTEuOTY1ZS00aC0xLjQ3MjR2MC44NDE1NXoiLz4KPHBhdGggZD0ibTI0LjUxMiAxNy44MjNoLTE3LjA1MmMtMC4xMzA4IDAtMC4yMzgzNiAwLjA0MjE0Mi0wLjMyMjM1IDAuMTI2MTgtMC4wODQxMzYgMC4wODQwODYtMC4xMjYxMyAwLjE5MTYtMC4xMjYxMyAwLjMyMjR2Mi42OTI1YzAgMC4xMjE1NiAwLjA0NDIwNCAwLjIyNjcyIDAuMTMzMDEgMC4zMTU0NyAwLjA4ODk5OCAwLjA4ODgwMiAwLjE5Mzk2IDAuMTMzMTUgMC4zMTU0NyAwLjEzMzE1aDE3LjA1MmMwLjEyMTcxIDAgMC4yMjY3Ny0wLjA0NDAwOCAwLjMxNTY3LTAuMTMzMTUgMC4wODg4MDItMC4wODg3NTIgMC4xMzI5Ni0wLjE5MzkxIDAuMTMyOTYtMC4zMTU0N3YtMi42OTI0YzAtMC4xMjEzNy0wLjA0NDQ5OS0wLjIyNjU3LTAuMTMyOTYtMC4zMTUzMi0wLjA4OTA0Ny0wLjA4ODgwMi0wLjE5NDExLTAuMTMzMy0wLjMxNTc3LTAuMTMzM3oiLz4KPHBhdGggZD0ibTI0LjUxMiAxMC42NDNoLTE3LjA1MmMtMC4xMzA4IDAtMC4yMzgzNiAwLjA0MTk5NC0wLjMyMjM1IDAuMTI2MTMtMC4wODQxMzYgMC4wODQxMzYtMC4xMjYxMyAwLjE5MTctMC4xMjYxMyAwLjMyMjU0djIuNjkyNGMwIDAuMTIxNTYgMC4wNDQyMDQgMC4yMjY1NyAwLjEzMzAxIDAuMzE1NTIgMC4wODg5OTggMC4wODg5IDAuMTkzOTYgMC4xMzMzIDAuMzE1NDcgMC4xMzMzaDE3LjA1MmMwLjEyMTcxIDAgMC4yMjY3Ny0wLjA0NDQwMSAwLjMxNTY3LTAuMTMzMyAwLjA4ODgwMi0wLjA4ODk0OSAwLjEzMjk2LTAuMTkzOTYgMC4xMzI5Ni0wLjMxNTUydi0yLjY5MjRjMC0wLjEyMTUxLTAuMDQ0NDk5LTAuMjI2NjctMC4xMzI5Ni0wLjMxNTQ3LTAuMDg5MDQ3LTAuMDg4ODAyLTAuMTk0MTEtMC4xMzMyLTAuMzE1NzctMC4xMzMyeiIvPgo8L2c+CjwvZz4KPC9zdmc+Cg=="

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _numberedList = __webpack_require__(0);

var _numberedList2 = _interopRequireDefault(_numberedList);

__webpack_require__(2);

var _whenReady = __webpack_require__(7);

var _whenReady2 = _interopRequireDefault(_whenReady);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {

  var classPrefix = 'cljs';
  var numClickEventName = '$_' + classPrefix + 'NumClickEvent';
  var elementProto = {};

  function CodeLine() {
    var self = this;

    this.minLies = 3;
    this.softWrap = false;
    this.showToggleBtn = true;
    this.disableOnMobile = true;
    this.maxMobileWidth = 420;

    this.loadLineNumbers = function () {
      var codes = document.querySelectorAll("pre code");
      var deviceWidth = getDeviceWidth();

      // for Performance is faster than Array#forEach:
      for (var i = 0, code; code = codes[i]; i++) {
        var pre = code.parentNode;

        if (pre.matches(".nohighlight") || code.matches(".nohighlight")) continue;

        var lines = getLines(code);
        if (!lines || lines.length < self.minLies) continue;

        if (deviceWidth > self.maxMobileWidth || !self.disableOnMobile) pre.classList.add(classPrefix);

        splitCodeLayout(code, lines);

        if (self.showToggleBtn) appendToggleButton(pre, code);

        if (self.softWrap) toggleSoftWrap(code);
      } // for End

      // free cache
      elementProto = {};

      setGlobalNumClickEvent();

      function setGlobalNumClickEvent() {
        var highlightClz = classPrefix + '-' + 'row-highlight';
        window[numClickEventName] = function (e) {
          var content = e.target.nextSibling;
          if (!content) return;
          content.classList.toggle(highlightClz);
        };
      }
    };

    this.initOnPageLoad = function () {
      (0, _whenReady2.default)(this.loadLineNumbers);
    };
  }

  return new CodeLine();

  function getDeviceWidth() {
    var wWidth = window.innerWidth;
    return wWidth > 0 ? wWidth : screen.width;
  }

  function getLines(code) {
    var text = code.innerHTML;
    return !text.length ? [] : text.split(/\r?\n|\r/g);
  }

  function splitCodeLayout(code, lines) {
    var linesLength = lines.length;

    var container = createElementWithClz("div", "container");

    setCodeLength(linesLength, code);

    var rowProto = createRowPrototype();
    var contentClz = getPrefixClzName('content');

    for (var i = 0, line; (line = lines[i]) || line === ''; i++) {
      var row = rowProto.cloneNode(true);

      if (line !== '') {
        // getElementsByClassName is faster than querySelector
        var codeContent = row.getElementsByClassName(contentClz)[0];
        codeContent.innerHTML = line + '\n';
      }

      container.appendChild(row);
    }

    code.innerHTML = "";
    code.appendChild(container);

    function createRowPrototype() {
      // use inline event attribute instead of addEventListener
      // to prevent DOM manipulating (e.g., Node Replace) by other script.
      var key = 'rowPrototype';
      var cache = elementProto[key];

      if (cache) return cache;

      var row = createElementWithClz('div', 'row');
      var num = createElementWithClz('div', 'number');
      var codeContent = createElementWithClz("div", "content");
      codeContent.innerHTML = '\n';
      num.setAttribute('onclick', numClickEventName + '(event)');
      row.appendChild(num);
      row.appendChild(codeContent);

      elementProto[key] = row;

      return row;
    }
  }

  function appendToggleButton(pre, code) {
    // appendCodeWrapper
    var codeWrapper = createElementWithClz("div", "wrapper");
    pre.appendChild(codeWrapper);
    codeWrapper.appendChild(code);

    // appendToggleBtn
    var btn = createElementWithClz('div', 'toggle-btn');
    btn.addEventListener("click", function () {
      return pre.classList.toggle(classPrefix);
    });

    var toggleBtnTouchClz = getPrefixClzName("toggle-btn-enabled");
    var counter = 2;
    var intervalId = void 0;

    var endEvent = function endEvent(e) {
      if (intervalId) return;

      // Performance: indexOf > test (Reg) > match
      var cancelTime = e.type.indexOf('m') > -1 ? 0 : 1000; // mouse

      intervalId = setInterval(function () {
        if (--counter <= 0) {
          btn.classList.remove(toggleBtnTouchClz);
          clearInterval(intervalId);
          intervalId = null;
        }
      }, cancelTime);
    };

    var startEvent = function startEvent() {
      counter = 2;

      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }

      btn.classList.add(toggleBtnTouchClz);
    };

    pre.addEventListener("touchstart", startEvent);
    pre.addEventListener("touchend", endEvent);

    pre.addEventListener("mouseenter", startEvent);
    pre.addEventListener("mouseleave", endEvent);

    codeWrapper.appendChild(btn);
  }

  function toggleSoftWrap(code) {
    code.classList.toggle('soft-wrap');
  }

  function getPrefixClzName(name) {
    return classPrefix + "-" + name;
  }

  function createElementWithClz(type, clzName) {
    var noPrefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var key = '' + type + clzName + noPrefix;
    var cache = elementProto[key];
    var result = void 0;

    if (cache) {
      result = cache.cloneNode(false);
    } else {
      result = createNewElement();
      elementProto[key] = result;
    }

    return result;

    function createNewElement() {
      var el = document.createElement(type);
      if (clzName) {
        clzName = noPrefix ? clzName : getPrefixClzName(clzName);
        el.classList.add(clzName);
      }
      return el;
    }
  }

  function addPrefixClzToElement(el, clzName) {
    el.classList.add(getPrefixClzName(clzName));
  }

  function setCodeLength(length, code) {
    var clzName = length > 999 ? 'over-thousand' : length > 99 ? 'over-hundred' : 'under-hundred';
    addPrefixClzToElement(code, clzName);
  }
}();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(3);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(5)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./code-line.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./code-line.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "pre, pre * {\n  -webkit-transition-property: opacity, margin;\n  -o-transition-property: opacity, margin;\n  transition-property: opacity, margin;\n  -webkit-transition-duration: .5s;\n  -o-transition-duration: .5s;\n  transition-duration: .5s\n}\n\n.cljs-wrapper {\n  position: relative\n}\n\n.cljs-toggle-btn {\n  position: absolute;\n  background-color: #fff;\n  opacity: 0;\n  padding: 2px;\n  border-radius: 25%;\n  top: .6em;\n  right: .6em\n}\n\n.cljs-toggle-btn-enabled {\n  opacity: .5\n}\n\n.cljs-toggle-btn::after {\n  content: \"\";\n  display: inline-block;\n  width: 25px;\n  height: 25px;\n  background: url(" + __webpack_require__(0) + ") no-repeat;\n  background-size: contain\n}\n\n.cljs-toggle-btn:hover {\n  -webkit-transition: initial;\n  -o-transition: initial;\n  transition: initial;\n  -webkit-transform: translate(-1px, -1px);\n  -ms-transform: translate(-1px, -1px);\n  transform: translate(-1px, -1px)\n}\n\npre.cljs code {\n  overflow-wrap: normal;\n  word-wrap: normal;\n  word-break: normal;\n  overflow-x: auto;\n  display: block;\n  --cljs-code-line-height: 1.45;\n  line-height: var(--cljs-code-line-height);\n  padding-left: 0;\n  counter-reset: linenumber;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  -moz-text-size-adjust: 100%;\n  text-size-adjust: 100%;\n  -webkit-transition: background .5s;\n  -o-transition: background .5s;\n  transition: background .5s\n}\n\n.cljs-container {\n  display: inline-block;\n  min-width: 100%\n}\n\n.cljs-container, .cljs-row {\n  background: inherit\n}\n\npre.cljs .cljs-row-highlight {\n  background-color: #ef9a9a;\n  color: #fff\n}\n\npre.cljs .cljs-number {\n  position: absolute;\n  text-align: right;\n  letter-spacing: 1px;\n  background: inherit;\n  padding-left: .3em;\n  opacity: .9;\n  border-right: 1px solid #ddd;\n  counter-increment: linenumber;\n  line-height: calc(var(--cljs-code-line-height, 1.35) + .1)\n}\n\npre.cljs .cljs-number:hover {\n  -webkit-filter: brightness(200%);\n  filter: brightness(200%)\n}\n\npre.cljs .cljs-number::before {\n  content: counter(linenumber);\n  text-align: right;\n  padding-right: .5em;\n  pointer-events: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none\n}\n\npre.cljs .cljs-row * {\n  -webkit-box-sizing: content-box;\n  box-sizing: content-box\n}\n\npre.cljs code.cljs-under-hundred .cljs-number {\n  width: 2.1em\n}\n\npre.cljs code.cljs-under-hundred .cljs-content {\n  margin-left: 3.2em\n}\n\npre.cljs code.cljs-over-hundred .cljs-number {\n  width: 2.6em\n}\n\npre.cljs code.cljs-over-hundred .cljs-content {\n  margin-left: 3.7em\n}\n\npre.cljs code.cljs-over-thousand .cljs-number {\n  width: 3.1em\n}\n\npre.cljs code.cljs-over-thousand .cljs-content {\n  margin-left: 4.2em\n}\n\npre.cljs {\n  white-space: pre\n}\n\npre.cljs .soft-wrap {\n  white-space: pre-wrap\n}\n\npre.cljs code.soft-wrap .cljs-row {\n  position: relative\n}\n\npre.cljs code.soft-wrap .cljs-number {\n  height: 100%\n}", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(6);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * Pass a function to whenReady() and it will be invoked (as a method of the
 * document) when the document is parsed and ready for manipulation. Registered
 * functions are triggered by the first DOMContentLoaded, readystatechange, or
 * load event that occurs. Once the document is ready and all functions have
 * been invoked, any functions passed to whenReady() will be invoked 
 * immediately.
 */
var whenReady = function () {
  // This function returns the whenReady() function
  var funcs = []; // The functions to run when we get an event
  var ready = false; // Switches to true when the handler is triggered

  // The event handler invoked when the document becomes ready
  function handler(e) {
    // If we've already run once, just return
    if (ready) return;

    // If this was a readystatechange event where the state changed to
    // something other than "complete", then we're not ready yet
    if (e.type === "readystatechange" && document.readyState !== "complete") return;

    // Run all registered functions.
    // Note that we look up funcs.length each time, in case calling
    // one of these functions causes more functions to be registered.
    for (var i = 0; i < funcs.length; i++) {
      funcs[i].call(document);
    } // Now set the ready flag to true and forget the functions
    ready = true;
    funcs = null;
  }

  // Register the handler for any event we might receive
  if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", handler, false);
    document.addEventListener("readystatechange", handler, false);
    window.addEventListener("load", handler, false);
  } else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", handler);
    window.attachEvent("onload", handler);
  }

  // Return the whenReady function
  return function whenReady(f) {
    if (ready) f.call(document); // If already ready, just run it
    else funcs.push(f); // Otherwise, queue it for later.
  };
}();

exports.default = whenReady;

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBiMGMwYWExZjNiYmMxODlmNzViYSIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL251bWJlcmVkLWxpc3Quc3ZnIiwid2VicGFjazovLy8uL3NyYy9jb2RlLWxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9jb2RlLWxpbmUuY3NzPzVlMDYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9jb2RlLWxpbmUuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd2hlblJlYWR5LmpzIl0sIm5hbWVzIjpbImNsYXNzUHJlZml4IiwibnVtQ2xpY2tFdmVudE5hbWUiLCJlbGVtZW50UHJvdG8iLCJDb2RlTGluZSIsInNlbGYiLCJtaW5MaWVzIiwic29mdFdyYXAiLCJzaG93VG9nZ2xlQnRuIiwiZGlzYWJsZU9uTW9iaWxlIiwibWF4TW9iaWxlV2lkdGgiLCJsb2FkTGluZU51bWJlcnMiLCJjb2RlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImRldmljZVdpZHRoIiwiZ2V0RGV2aWNlV2lkdGgiLCJpIiwiY29kZSIsInByZSIsInBhcmVudE5vZGUiLCJtYXRjaGVzIiwibGluZXMiLCJnZXRMaW5lcyIsImxlbmd0aCIsImNsYXNzTGlzdCIsImFkZCIsInNwbGl0Q29kZUxheW91dCIsImFwcGVuZFRvZ2dsZUJ1dHRvbiIsInRvZ2dsZVNvZnRXcmFwIiwic2V0R2xvYmFsTnVtQ2xpY2tFdmVudCIsImhpZ2hsaWdodENseiIsIndpbmRvdyIsImUiLCJjb250ZW50IiwidGFyZ2V0IiwibmV4dFNpYmxpbmciLCJ0b2dnbGUiLCJpbml0T25QYWdlTG9hZCIsIndXaWR0aCIsImlubmVyV2lkdGgiLCJzY3JlZW4iLCJ3aWR0aCIsInRleHQiLCJpbm5lckhUTUwiLCJzcGxpdCIsImxpbmVzTGVuZ3RoIiwiY29udGFpbmVyIiwiY3JlYXRlRWxlbWVudFdpdGhDbHoiLCJzZXRDb2RlTGVuZ3RoIiwicm93UHJvdG8iLCJjcmVhdGVSb3dQcm90b3R5cGUiLCJjb250ZW50Q2x6IiwiZ2V0UHJlZml4Q2x6TmFtZSIsImxpbmUiLCJyb3ciLCJjbG9uZU5vZGUiLCJjb2RlQ29udGVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsImtleSIsImNhY2hlIiwibnVtIiwic2V0QXR0cmlidXRlIiwiY29kZVdyYXBwZXIiLCJidG4iLCJhZGRFdmVudExpc3RlbmVyIiwidG9nZ2xlQnRuVG91Y2hDbHoiLCJjb3VudGVyIiwiaW50ZXJ2YWxJZCIsImVuZEV2ZW50IiwiY2FuY2VsVGltZSIsInR5cGUiLCJpbmRleE9mIiwic2V0SW50ZXJ2YWwiLCJyZW1vdmUiLCJjbGVhckludGVydmFsIiwic3RhcnRFdmVudCIsIm5hbWUiLCJjbHpOYW1lIiwibm9QcmVmaXgiLCJyZXN1bHQiLCJjcmVhdGVOZXdFbGVtZW50IiwiZWwiLCJjcmVhdGVFbGVtZW50IiwiYWRkUHJlZml4Q2x6VG9FbGVtZW50Iiwid2hlblJlYWR5IiwiZnVuY3MiLCJyZWFkeSIsImhhbmRsZXIiLCJyZWFkeVN0YXRlIiwiY2FsbCIsImF0dGFjaEV2ZW50IiwiZiIsInB1c2giXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7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QSxjQUFjOztBQUVkLGtEQUFrRCxzQkFBc0I7QUFDeEU7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM1V0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVcsRUFBRTtBQUNyRCx3Q0FBd0MsV0FBVyxFQUFFOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHNDQUFzQztBQUN0QyxHQUFHO0FBQ0g7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBOzs7Ozs7OztBQVFBLElBQUlPLFlBQWEsWUFBWTtBQUFFO0FBQzdCLE1BQUlDLFFBQVEsRUFBWixDQUQyQixDQUNSO0FBQ25CLE1BQUlDLFFBQVEsS0FBWixDQUYyQixDQUVSOztBQUVuQjtBQUNBLFdBQVNDLE9BQVQsQ0FBaUJ4RCxDQUFqQixFQUFvQjtBQUNsQjtBQUNBLFFBQUl1RCxLQUFKLEVBQVc7O0FBRVg7QUFDQTtBQUNBLFFBQUl2RCxFQUFFdUMsSUFBRixLQUFXLGtCQUFYLElBQWlDM0QsU0FBUzZFLFVBQVQsS0FBd0IsVUFBN0QsRUFDRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQSxTQUFLLElBQUl6RSxJQUFJLENBQWIsRUFBZ0JBLElBQUlzRSxNQUFNL0QsTUFBMUIsRUFBa0NQLEdBQWxDO0FBQ0VzRSxZQUFNdEUsQ0FBTixFQUFTMEUsSUFBVCxDQUFjOUUsUUFBZDtBQURGLEtBWmtCLENBZWxCO0FBQ0EyRSxZQUFRLElBQVI7QUFDQUQsWUFBUSxJQUFSO0FBQ0Q7O0FBRUQ7QUFDQSxNQUFJMUUsU0FBU3FELGdCQUFiLEVBQStCO0FBQzdCckQsYUFBU3FELGdCQUFULENBQTBCLGtCQUExQixFQUE4Q3VCLE9BQTlDLEVBQXVELEtBQXZEO0FBQ0E1RSxhQUFTcUQsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDdUIsT0FBOUMsRUFBdUQsS0FBdkQ7QUFDQXpELFdBQU9rQyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQ3VCLE9BQWhDLEVBQXlDLEtBQXpDO0FBQ0QsR0FKRCxNQUtLLElBQUk1RSxTQUFTK0UsV0FBYixFQUEwQjtBQUM3Qi9FLGFBQVMrRSxXQUFULENBQXFCLG9CQUFyQixFQUEyQ0gsT0FBM0M7QUFDQXpELFdBQU80RCxXQUFQLENBQW1CLFFBQW5CLEVBQTZCSCxPQUE3QjtBQUNEOztBQUVEO0FBQ0EsU0FBTyxTQUFTSCxTQUFULENBQW1CTyxDQUFuQixFQUFzQjtBQUMzQixRQUFJTCxLQUFKLEVBQVdLLEVBQUVGLElBQUYsQ0FBTzlFLFFBQVAsRUFBWCxDQUE2QjtBQUE3QixTQUNLMEUsTUFBTU8sSUFBTixDQUFXRCxDQUFYLEVBRnNCLENBRUU7QUFDOUIsR0FIRDtBQUlELENBekNnQixFQUFqQjs7a0JBNENlUCxTIiwiZmlsZSI6ImNvZGUtbGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkNvZGVMaW5lXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkNvZGVMaW5lXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBiMGMwYWExZjNiYmMxODlmNzViYSIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaVB6NEtQSE4yWnlCMlpYSnphVzl1UFNJeExqRWlJSFpwWlhkQ2IzZzlJakFnTUNBeU5TQXlOU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajRLUEhScGRHeGxQbTUxYldKbGNtVmtMV3hwYzNROEwzUnBkR3hsUGdvOFpHVnpZejVEY21WaGRHVmtJSGRwZEdnZ1UydGxkR05vTGp3dlpHVnpZejRLUEdjZ1ptbHNiRDBpYm05dVpTSWdabWxzYkMxeWRXeGxQU0psZG1WdWIyUmtJajRLUEdjZ1ptbHNiRDBpSXpBd01DSWdabWxzYkMxeWRXeGxQU0p1YjI1NlpYSnZJajRLUEhCaGRHZ2daRDBpYlRNdU56QXlNaUF3YUMweExqUTROalZzTFRFdU9UQTNJREV1Tnpnd09DQXdMams1TlRRNElERXVNRFkxT0dNd0xqTTVNall6TFRBdU16UTFPRE1nTUM0Mk1qWXpPQzB3TGpVNU9EUTRJREF1TnpBeE1qTXRNQzQzTlRjeU1tZ3dMakF5T0RBME5YWXdMakUyT0RNeVl6QWdNQzR6TnpNNU1pMHdMakF3TWpRMU5UZ2dNQzQ1TXprek9TMHdMakF3TnpBM01qY2dNUzQyT1RZM0xUQXVNREEwTnpFMU1TQXdMamMxTnpJeUxUQXVNREEzTURjeU55QXhMak15TnpVdE1DNHdNRGN3TnpJM0lERXVOekV3T0dndE1TNDFNREExZGpFdU16ZzRNMmcwTGpZNU56ZDJMVEV1TXpnNE0yZ3RNUzQxTVRRemRpMDFMalkyTlRKNklpOCtDanh3WVhSb0lHUTlJbTB5TkM0NE1qZ2dNeTQxT1RZNVl5MHdMakE0T1RFNU5DMHdMakE0T0RnMU1TMHdMakU1TkRFeExUQXVNVE16TWkwd0xqTXhOVGd5TFRBdU1UTXpNbWd0TVRjdU1EVXlZeTB3TGpFeU1UVXhJREF0TUM0eU1qWTBOeUF3TGpBME5ETTFNaTB3TGpNeE5UUTNJREF1TVRNek1pMHdMakE0T0RZMU5DQXdMakE0T0RnMU1TMHdMakV6TXpBeElEQXVNVGt6T1RZdE1DNHhNek13TVNBd0xqTXhOVFV5ZGpJdU5qa3lOR013SURBdU1USXhOVFlnTUM0d05EUXlNRFFnTUM0eU1qWTJOeUF3TGpFek16QXhJREF1TXpFMU5USWdNQzR3T0RnNU9UZ2dNQzR3T0RnM05USWdNQzR4T1RNNU5pQXdMakV6TXpJZ01DNHpNVFUwTnlBd0xqRXpNekpvTVRjdU1EVXlZekF1TVRJeE56RWdNQ0F3TGpJeU5qYzNMVEF1TURRME5EVWdNQzR6TVRVMk55MHdMakV6TXpJZ01DNHdPRGc0TURJdE1DNHdPRGc0TlRFZ01DNHhNekk1Tmkwd0xqRTVNemsySURBdU1UTXlPVFl0TUM0ek1UVTFNbll0TWk0Mk9USTBZekV1T1RZMVpTMDBJQzB3TGpFeU1UVXhMVEF1TURRME1UVTFMVEF1TWpJMk5qY3RNQzR4TXpJNU5pMHdMak14TlRVeWVpSXZQZ284Y0dGMGFDQmtQU0p0TXk0Mk1UZ3hJREl3TGpZM0lERXVNek15TWkweExqWXhNaloyTFRFdU1qTTBhQzAwTGpZMk9UZDJNaTR4TXpFMGFERXVORGcyTTNZdE1DNDNORE15TW1Nd0xqRTBPVFl4SURBZ01DNHpOell5T0Mwd0xqQXdOREl5TXprZ01DNDJPREF5Tmkwd0xqQXhNell3TlNBd0xqTXdNell6TFRBdU1EQTVOVGMzTmlBd0xqVXpNRFExTFRBdU1ERTBNVFExSURBdU5qZ3dNRFl0TUM0d01UUXhORFYyTUM0d01UUXhORFZqTFRBdU1UYzNPRFVnTUM0eE5qZ3lOeTB3TGpNMU1EWTBJREF1TXpRNE1EZ3RNQzQxTVRnNU5pQXdMalV6T1RnNExUQXVNVFk0TXpJZ01DNHhPVEUzTlMwd0xqTTJOamswSURBdU5EUTBNRFl0TUM0MU9UWXdNaUF3TGpjMU5qZ3pMVEF1TWpJNE9UTWdNQzR6TVRNek1TMHdMak00TURjZ01DNDFNVFkzTlMwd0xqUTFOVFUxSURBdU5qRXdNVGRzTUM0ek5qUTBPU0F3TGpjNE5USTNZekF1T1RneE5UZ3RNQzR3TnpRNU5URWdNUzQwTnpJMElEQXVNVGcyTnpRZ01TNDBOekkwSURBdU56ZzFNamNnTUNBd0xqSTJNVFk1TFRBdU1UQXdORGtnTUM0ME5qQXpOaTB3TGpNd01UVXlJREF1TlRrMU5qZ3RNQzR5TURBNE15QXdMakV6TlRnMUxUQXVORE0yT1RnZ01DNHlNRE0xT1Mwd0xqY3dPREVnTUM0eU1ETTFPUzB3TGpVek1qZ3hJREF0TVM0d01qZ3pMVEF1TWpFd01qY3RNUzQwT0RZekxUQXVOak14TVRSc0xUQXVOems1TlRFZ01TNHlNelJqTUM0Mk1UWTVPU0F3TGpZeE5qazVJREV1TkRJeElEQXVPVEkxTkRrZ01pNDBNVElnTUM0NU1qVTBPU0F3TGpjMU56RTNJREFnTVM0ek9UQTFMVEF1TWpFME9ETWdNUzQ1TURBeUxUQXVOalEwT1RRZ01DNDFNRGswT0Mwd0xqUXpNREUySURBdU56WTBNVGt0TVM0d01Ua3hJREF1TnpZME1Ua3RNUzQzTmpZNUlEQXRNQzQwTnpZNE55MHdMakUwTURReUxUQXVPRGc0TVRZdE1DNDBNakExTXkweExqSXpOREl0TUM0eU9EQTFOUzB3TGpNME5UVTRMVEF1TmpVNE9Ua3RNQzQxTnpRNE5TMHhMakV6Tmkwd0xqWTROamswZWlJdlBnbzhjR0YwYUNCa1BTSnRNeTQzTXlBeE5DNDJOR2d0TVM0M09EQTVZekF1TURBNU5EYzVOQzB3TGpJek16YzVJREF1TVRjMU16a3RNQzQwTnpreE55QXdMalE1TnprMExUQXVOek0ySURBdU16SXlOVFF0TUM0eU5UWTVOeUF3TGpZM05USXRNQzQwT1RJNU9DQXhMakExT0RjdE1DNDNNRGd4SURBdU16Z3pNVFV0TUM0eU1UVXhPQ0F3TGpjek16YzBMVEF1TlRFMk5DQXhMakExTVRjdE1DNDVNRFF6TWlBd0xqTXhOemc0TFRBdU16ZzRNRElnTUM0ME56WTNOeTB3TGpneE5UY3lJREF1TkRjMk56Y3RNUzR5T0RNeUlEQXRNQzQyTmpNNExUQXVNak16TmpRdE1TNHhPRGszTFRBdU56QXhNRE10TVM0MU56YzNMVEF1TkRZM01qa3RNQzR6T0RjNU1pMHhMakEwTWpRdE1DNDFPREU1TnkweExqY3lORGd0TUM0MU9ERTVOeTB3TGpVME1qTTBJREF0TVM0d016VTFJREF1TVRNek1pMHhMalEzT1RZZ01DNHpPVGszTVMwd0xqUTBOREF4SURBdU1qWTJOQzB3TGpjM09ERTBJREF1TmpNNE1EWXRNUzR3TURJMklERXVNVEUxYkRFdU1Ua3lJREF1T0RJM016RmpNQzR6TWpjeU5pMHdMalUwTWpNMElEQXVOekExT0RRdE1DNDRNVE16TmlBeExqRXpOVGd0TUM0NE1UTXpOaUF3TGpJek16ZzVJREFnTUM0ME1UZzBOeUF3TGpBMk16RXhOQ0F3TGpVMU5EQTRJREF1TVRnNU1qa2dNQzR4TXpVME1TQXdMakV5TmpReUlEQXVNakF6TXprZ01DNHpNRFl5TkNBd0xqSXdNek01SURBdU5UTTVPVGdnTUNBd0xqSXhORGs0TFRBdU1UQTVPVElnTUM0ME1qVXpOQzB3TGpNeU9UWXlJREF1TmpNd09Ua3RNQzR5TVRrM09TQXdMakl3TlRZMUxUQXVORGd6T0RRZ01DNDBNRGc1TkMwd0xqYzVNalEwSURBdU5qQTVPVGN0TUM0ek1EZzBOU0F3TGpJd01UQXpMVEF1TmpFM01EUWdNQzQwTWpNeE15MHdMamt5TlRRMElEQXVOalkyTVRZdE1DNHpNRGcwTlNBd0xqSTBNekEzTFRBdU5UY3lOelFnTUM0MU5qQTNOaTB3TGpjNU1qUTBJREF1T1RVek16a3RNQzR5TVRrMklEQXVNemt5TmpNdE1DNHpNamswTnlBd0xqZ3lOelEyTFRBdU16STVORGNnTVM0ek1EUXlJREFnTUM0eE5qZ3lNaUF3TGpBeU9EQTBOU0F3TGpReU1EWTRJREF1TURnME1ETTNJREF1TnpVM01qSm9OUzR3TnpZemRpMHlMakl6TFRFdU9UWTFaUzAwYUMweExqUTNNalIyTUM0NE5ERTFOWG9pTHo0S1BIQmhkR2dnWkQwaWJUSTBMalV4TWlBeE55NDRNak5vTFRFM0xqQTFNbU10TUM0eE16QTRJREF0TUM0eU16Z3pOaUF3TGpBME1qRTBNaTB3TGpNeU1qTTFJREF1TVRJMk1UZ3RNQzR3T0RReE16WWdNQzR3T0RRd09EWXRNQzR4TWpZeE15QXdMakU1TVRZdE1DNHhNall4TXlBd0xqTXlNalIyTWk0Mk9USTFZekFnTUM0eE1qRTFOaUF3TGpBME5ESXdOQ0F3TGpJeU5qY3lJREF1TVRNek1ERWdNQzR6TVRVME55QXdMakE0T0RrNU9DQXdMakE0T0Rnd01pQXdMakU1TXprMklEQXVNVE16TVRVZ01DNHpNVFUwTnlBd0xqRXpNekUxYURFM0xqQTFNbU13TGpFeU1UY3hJREFnTUM0eU1qWTNOeTB3TGpBME5EQXdPQ0F3TGpNeE5UWTNMVEF1TVRNek1UVWdNQzR3T0RnNE1ESXRNQzR3T0RnM05USWdNQzR4TXpJNU5pMHdMakU1TXpreElEQXVNVE15T1RZdE1DNHpNVFUwTjNZdE1pNDJPVEkwWXpBdE1DNHhNakV6Tnkwd0xqQTBORFE1T1Mwd0xqSXlOalUzTFRBdU1UTXlPVFl0TUM0ek1UVXpNaTB3TGpBNE9UQTBOeTB3TGpBNE9EZ3dNaTB3TGpFNU5ERXhMVEF1TVRNek15MHdMak14TlRjM0xUQXVNVE16TTNvaUx6NEtQSEJoZEdnZ1pEMGliVEkwTGpVeE1pQXhNQzQyTkROb0xURTNMakExTW1NdE1DNHhNekE0SURBdE1DNHlNemd6TmlBd0xqQTBNVGs1TkMwd0xqTXlNak0xSURBdU1USTJNVE10TUM0d09EUXhNellnTUM0d09EUXhNell0TUM0eE1qWXhNeUF3TGpFNU1UY3RNQzR4TWpZeE15QXdMak15TWpVMGRqSXVOamt5TkdNd0lEQXVNVEl4TlRZZ01DNHdORFF5TURRZ01DNHlNalkxTnlBd0xqRXpNekF4SURBdU16RTFOVElnTUM0d09EZzVPVGdnTUM0d09EZzVJREF1TVRrek9UWWdNQzR4TXpNeklEQXVNekUxTkRjZ01DNHhNek16YURFM0xqQTFNbU13TGpFeU1UY3hJREFnTUM0eU1qWTNOeTB3TGpBME5EUXdNU0F3TGpNeE5UWTNMVEF1TVRNek15QXdMakE0T0Rnd01pMHdMakE0T0RrME9TQXdMakV6TWprMkxUQXVNVGt6T1RZZ01DNHhNekk1Tmkwd0xqTXhOVFV5ZGkweUxqWTVNalJqTUMwd0xqRXlNVFV4TFRBdU1EUTBORGs1TFRBdU1qSTJOamN0TUM0eE16STVOaTB3TGpNeE5UUTNMVEF1TURnNU1EUTNMVEF1TURnNE9EQXlMVEF1TVRrME1URXRNQzR4TXpNeUxUQXVNekUxTnpjdE1DNHhNek15ZWlJdlBnbzhMMmMrQ2p3dlp6NEtQQzl6ZG1jK0NnPT1cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ltZy9udW1iZXJlZC1saXN0LnN2Z1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgbnVtYmVySWNvbiBmcm9tICcuL2ltZy9udW1iZXJlZC1saXN0LnN2ZydcbmltcG9ydCAnLi9zdHlsZXMvY29kZS1saW5lLmNzcydcbmltcG9ydCB3aGVuUmVhZHkgZnJvbSAnLi93aGVuUmVhZHknXG5cbmV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG5cbiAgY29uc3QgY2xhc3NQcmVmaXggPSAnY2xqcyc7XG4gIGNvbnN0IG51bUNsaWNrRXZlbnROYW1lID0gJyRfJyArIGNsYXNzUHJlZml4ICsgJ051bUNsaWNrRXZlbnQnO1xuICBsZXQgZWxlbWVudFByb3RvID0ge307XG5cbiAgZnVuY3Rpb24gQ29kZUxpbmUoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLm1pbkxpZXMgPSAzO1xuICAgIHRoaXMuc29mdFdyYXAgPSBmYWxzZTtcbiAgICB0aGlzLnNob3dUb2dnbGVCdG4gPSB0cnVlO1xuICAgIHRoaXMuZGlzYWJsZU9uTW9iaWxlID0gdHJ1ZTtcbiAgICB0aGlzLm1heE1vYmlsZVdpZHRoID0gNDIwO1xuXG5cbiAgICB0aGlzLmxvYWRMaW5lTnVtYmVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBjb2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJwcmUgY29kZVwiKTtcbiAgICAgIGNvbnN0IGRldmljZVdpZHRoID0gZ2V0RGV2aWNlV2lkdGgoKTtcblxuICAgICAgLy8gZm9yIFBlcmZvcm1hbmNlIGlzIGZhc3RlciB0aGFuIEFycmF5I2ZvckVhY2g6XG4gICAgICBmb3IgKGxldCBpID0gMCwgY29kZTsgY29kZSA9IGNvZGVzW2ldOyBpKyspIHtcbiAgICAgICAgY29uc3QgcHJlID0gY29kZS5wYXJlbnROb2RlO1xuXG4gICAgICAgIGlmIChwcmUubWF0Y2hlcyhcIi5ub2hpZ2hsaWdodFwiKSB8fCBjb2RlLm1hdGNoZXMoXCIubm9oaWdobGlnaHRcIikpIGNvbnRpbnVlO1xuXG4gICAgICAgIGxldCBsaW5lcyA9IGdldExpbmVzKGNvZGUpO1xuICAgICAgICBpZiAoIWxpbmVzIHx8IGxpbmVzLmxlbmd0aCA8IHNlbGYubWluTGllcykgY29udGludWU7XG5cbiAgICAgICAgaWYgKGRldmljZVdpZHRoID4gc2VsZi5tYXhNb2JpbGVXaWR0aCB8fCAhc2VsZi5kaXNhYmxlT25Nb2JpbGUpXG4gICAgICAgICAgcHJlLmNsYXNzTGlzdC5hZGQoY2xhc3NQcmVmaXgpO1xuXG4gICAgICAgIHNwbGl0Q29kZUxheW91dChjb2RlLCBsaW5lcyk7XG5cbiAgICAgICAgaWYgKHNlbGYuc2hvd1RvZ2dsZUJ0bilcbiAgICAgICAgICBhcHBlbmRUb2dnbGVCdXR0b24ocHJlLCBjb2RlKTtcblxuICAgICAgICBpZiAoc2VsZi5zb2Z0V3JhcClcbiAgICAgICAgICB0b2dnbGVTb2Z0V3JhcChjb2RlKTtcbiAgICAgIH0gLy8gZm9yIEVuZFxuXG4gICAgICAvLyBmcmVlIGNhY2hlXG4gICAgICBlbGVtZW50UHJvdG8gPSB7fTtcblxuICAgICAgc2V0R2xvYmFsTnVtQ2xpY2tFdmVudCgpO1xuXG4gICAgICBmdW5jdGlvbiBzZXRHbG9iYWxOdW1DbGlja0V2ZW50KCkge1xuICAgICAgICBsZXQgaGlnaGxpZ2h0Q2x6ID0gY2xhc3NQcmVmaXggKyAnLScgKyAncm93LWhpZ2hsaWdodCc7XG4gICAgICAgIHdpbmRvd1tudW1DbGlja0V2ZW50TmFtZV0gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGxldCBjb250ZW50ID0gZS50YXJnZXQubmV4dFNpYmxpbmc7XG4gICAgICAgICAgaWYgKCFjb250ZW50KSByZXR1cm47XG4gICAgICAgICAgY29udGVudC5jbGFzc0xpc3QudG9nZ2xlKGhpZ2hsaWdodENseilcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgIH07XG5cbiAgICB0aGlzLmluaXRPblBhZ2VMb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgd2hlblJlYWR5KHRoaXMubG9hZExpbmVOdW1iZXJzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IENvZGVMaW5lKCk7XG5cbiAgZnVuY3Rpb24gZ2V0RGV2aWNlV2lkdGgoKSB7XG4gICAgY29uc3Qgd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgcmV0dXJuIHdXaWR0aCA+IDAgPyB3V2lkdGggOiBzY3JlZW4ud2lkdGg7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRMaW5lcyhjb2RlKSB7XG4gICAgY29uc3QgdGV4dCA9IGNvZGUuaW5uZXJIVE1MO1xuICAgIHJldHVybiAhdGV4dC5sZW5ndGggPyBbXSA6IHRleHQuc3BsaXQoL1xccj9cXG58XFxyL2cpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3BsaXRDb2RlTGF5b3V0KGNvZGUsIGxpbmVzKSB7XG4gICAgY29uc3QgbGluZXNMZW5ndGggPSBsaW5lcy5sZW5ndGg7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50V2l0aENseihcImRpdlwiLCBcImNvbnRhaW5lclwiKTtcblxuICAgIHNldENvZGVMZW5ndGgobGluZXNMZW5ndGgsIGNvZGUpO1xuXG4gICAgY29uc3Qgcm93UHJvdG8gPSBjcmVhdGVSb3dQcm90b3R5cGUoKTtcbiAgICBjb25zdCBjb250ZW50Q2x6ID0gZ2V0UHJlZml4Q2x6TmFtZSgnY29udGVudCcpO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGxpbmU7IChsaW5lID0gbGluZXNbaV0gKSB8fCBsaW5lID09PSAnJzsgaSsrKSB7XG4gICAgICBjb25zdCByb3cgPSByb3dQcm90by5jbG9uZU5vZGUodHJ1ZSk7XG5cbiAgICAgIGlmIChsaW5lICE9PSAnJykge1xuICAgICAgICAvLyBnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIGlzIGZhc3RlciB0aGFuIHF1ZXJ5U2VsZWN0b3JcbiAgICAgICAgY29uc3QgY29kZUNvbnRlbnQgPSByb3cuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjb250ZW50Q2x6KVswXTtcbiAgICAgICAgY29kZUNvbnRlbnQuaW5uZXJIVE1MID0gbGluZSArICdcXG4nO1xuICAgICAgfVxuXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocm93KTtcbiAgICB9XG5cbiAgICBjb2RlLmlubmVySFRNTCA9IFwiXCI7XG4gICAgY29kZS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlUm93UHJvdG90eXBlKCkge1xuICAgICAgLy8gdXNlIGlubGluZSBldmVudCBhdHRyaWJ1dGUgaW5zdGVhZCBvZiBhZGRFdmVudExpc3RlbmVyXG4gICAgICAvLyB0byBwcmV2ZW50IERPTSBtYW5pcHVsYXRpbmcgKGUuZy4sIE5vZGUgUmVwbGFjZSkgYnkgb3RoZXIgc2NyaXB0LlxuICAgICAgY29uc3Qga2V5ID0gJ3Jvd1Byb3RvdHlwZSc7XG4gICAgICBsZXQgY2FjaGUgPSBlbGVtZW50UHJvdG9ba2V5XTtcblxuICAgICAgaWYgKGNhY2hlKVxuICAgICAgICByZXR1cm4gY2FjaGU7XG5cbiAgICAgIGNvbnN0IHJvdyA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2x6KCdkaXYnLCAncm93Jyk7XG4gICAgICBjb25zdCBudW0gPSBjcmVhdGVFbGVtZW50V2l0aENseignZGl2JywgJ251bWJlcicpO1xuICAgICAgY29uc3QgY29kZUNvbnRlbnQgPSBjcmVhdGVFbGVtZW50V2l0aENseihcImRpdlwiLCBcImNvbnRlbnRcIik7XG4gICAgICBjb2RlQ29udGVudC5pbm5lckhUTUwgPSAnXFxuJztcbiAgICAgIG51bS5zZXRBdHRyaWJ1dGUoJ29uY2xpY2snLCBgJHtudW1DbGlja0V2ZW50TmFtZX0oZXZlbnQpYCk7XG4gICAgICByb3cuYXBwZW5kQ2hpbGQobnVtKTtcbiAgICAgIHJvdy5hcHBlbmRDaGlsZChjb2RlQ29udGVudCk7XG5cbiAgICAgIGVsZW1lbnRQcm90b1trZXldID0gcm93O1xuXG4gICAgICByZXR1cm4gcm93O1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFwcGVuZFRvZ2dsZUJ1dHRvbihwcmUsIGNvZGUpIHtcbiAgICAvLyBhcHBlbmRDb2RlV3JhcHBlclxuICAgIGNvbnN0IGNvZGVXcmFwcGVyID0gY3JlYXRlRWxlbWVudFdpdGhDbHooXCJkaXZcIiwgXCJ3cmFwcGVyXCIpO1xuICAgIHByZS5hcHBlbmRDaGlsZChjb2RlV3JhcHBlcik7XG4gICAgY29kZVdyYXBwZXIuYXBwZW5kQ2hpbGQoY29kZSk7XG5cbiAgICAvLyBhcHBlbmRUb2dnbGVCdG5cbiAgICBsZXQgYnRuID0gY3JlYXRlRWxlbWVudFdpdGhDbHooJ2RpdicsICd0b2dnbGUtYnRuJyk7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBwcmUuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc1ByZWZpeCkpO1xuXG4gICAgY29uc3QgdG9nZ2xlQnRuVG91Y2hDbHogPSBnZXRQcmVmaXhDbHpOYW1lKFwidG9nZ2xlLWJ0bi1lbmFibGVkXCIpO1xuICAgIGxldCBjb3VudGVyID0gMjtcbiAgICBsZXQgaW50ZXJ2YWxJZDtcblxuICAgIGxldCBlbmRFdmVudCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoaW50ZXJ2YWxJZCkgcmV0dXJuO1xuXG4gICAgICAvLyBQZXJmb3JtYW5jZTogaW5kZXhPZiA+IHRlc3QgKFJlZykgPiBtYXRjaFxuICAgICAgbGV0IGNhbmNlbFRpbWUgPSBlLnR5cGUuaW5kZXhPZignbScpID4gLTEgPyAwIDogMTAwMDsgLy8gbW91c2VcblxuICAgICAgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgaWYgKC0tY291bnRlciA8PSAwKSB7XG4gICAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUodG9nZ2xlQnRuVG91Y2hDbHopO1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG4gICAgICAgICAgaW50ZXJ2YWxJZCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0sIGNhbmNlbFRpbWUpO1xuICAgIH07XG5cbiAgICBsZXQgc3RhcnRFdmVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvdW50ZXIgPSAyO1xuXG4gICAgICBpZiAoaW50ZXJ2YWxJZCkge1xuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xuICAgICAgICBpbnRlcnZhbElkID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgYnRuLmNsYXNzTGlzdC5hZGQodG9nZ2xlQnRuVG91Y2hDbHopO1xuICAgIH07XG5cbiAgICBwcmUuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgc3RhcnRFdmVudCk7XG4gICAgcHJlLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBlbmRFdmVudCk7XG5cbiAgICBwcmUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgc3RhcnRFdmVudCk7XG4gICAgcHJlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGVuZEV2ZW50KTtcblxuICAgIGNvZGVXcmFwcGVyLmFwcGVuZENoaWxkKGJ0bik7XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVTb2Z0V3JhcChjb2RlKSB7XG4gICAgY29kZS5jbGFzc0xpc3QudG9nZ2xlKCdzb2Z0LXdyYXAnKTtcbiAgfVxuXG5cbiAgZnVuY3Rpb24gZ2V0UHJlZml4Q2x6TmFtZShuYW1lKSB7XG4gICAgcmV0dXJuIGNsYXNzUHJlZml4ICsgXCItXCIgKyBuYW1lO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFdpdGhDbHoodHlwZSwgY2x6TmFtZSwgbm9QcmVmaXggPSBmYWxzZSkge1xuICAgIGNvbnN0IGtleSA9ICcnICsgdHlwZSArIGNsek5hbWUgKyBub1ByZWZpeDtcbiAgICBsZXQgY2FjaGUgPSBlbGVtZW50UHJvdG9ba2V5XTtcbiAgICBsZXQgcmVzdWx0O1xuXG4gICAgaWYgKGNhY2hlKSB7XG4gICAgICByZXN1bHQgPSBjYWNoZS5jbG9uZU5vZGUoZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSBjcmVhdGVOZXdFbGVtZW50KCk7XG4gICAgICBlbGVtZW50UHJvdG9ba2V5XSA9IHJlc3VsdDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlTmV3RWxlbWVudCgpIHtcbiAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICAgIGlmIChjbHpOYW1lKSB7XG4gICAgICAgIGNsek5hbWUgPSBub1ByZWZpeCA/IGNsek5hbWUgOiBnZXRQcmVmaXhDbHpOYW1lKGNsek5hbWUpO1xuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKGNsek5hbWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGVsO1xuICAgIH1cbiAgfVxuXG5cbiAgZnVuY3Rpb24gYWRkUHJlZml4Q2x6VG9FbGVtZW50KGVsLCBjbHpOYW1lKSB7XG4gICAgZWwuY2xhc3NMaXN0LmFkZChnZXRQcmVmaXhDbHpOYW1lKGNsek5hbWUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldENvZGVMZW5ndGgobGVuZ3RoLCBjb2RlKSB7XG4gICAgY29uc3QgY2x6TmFtZSA9IGxlbmd0aCA+IDk5OSA/ICdvdmVyLXRob3VzYW5kJyA6IGxlbmd0aCA+IDk5ID8gJ292ZXItaHVuZHJlZCcgOiAndW5kZXItaHVuZHJlZCc7XG4gICAgYWRkUHJlZml4Q2x6VG9FbGVtZW50KGNvZGUsIGNsek5hbWUpO1xuICB9XG5cbn0pKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29kZS1saW5lLmpzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vY29kZS1saW5lLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9jb2RlLWxpbmUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2NvZGUtbGluZS5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy9jb2RlLWxpbmUuY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcInByZSwgcHJlICoge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5LCBtYXJnaW47XFxuICAtby10cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5LCBtYXJnaW47XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5LCBtYXJnaW47XFxuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IC41cztcXG4gIC1vLXRyYW5zaXRpb24tZHVyYXRpb246IC41cztcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IC41c1xcbn1cXG5cXG4uY2xqcy13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZVxcbn1cXG5cXG4uY2xqcy10b2dnbGUtYnRuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBvcGFjaXR5OiAwO1xcbiAgcGFkZGluZzogMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjUlO1xcbiAgdG9wOiAuNmVtO1xcbiAgcmlnaHQ6IC42ZW1cXG59XFxuXFxuLmNsanMtdG9nZ2xlLWJ0bi1lbmFibGVkIHtcXG4gIG9wYWNpdHk6IC41XFxufVxcblxcbi5jbGpzLXRvZ2dsZS1idG46OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyByZXF1aXJlKFwiLi4vaW1nL251bWJlcmVkLWxpc3Quc3ZnXCIpICsgXCIpIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpblxcbn1cXG5cXG4uY2xqcy10b2dnbGUtYnRuOmhvdmVyIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogaW5pdGlhbDtcXG4gIC1vLXRyYW5zaXRpb246IGluaXRpYWw7XFxuICB0cmFuc2l0aW9uOiBpbml0aWFsO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXB4LCAtMXB4KTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXB4LCAtMXB4KTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIC0xcHgpXFxufVxcblxcbnByZS5jbGpzIGNvZGUge1xcbiAgb3ZlcmZsb3ctd3JhcDogbm9ybWFsO1xcbiAgd29yZC13cmFwOiBub3JtYWw7XFxuICB3b3JkLWJyZWFrOiBub3JtYWw7XFxuICBvdmVyZmxvdy14OiBhdXRvO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICAtLWNsanMtY29kZS1saW5lLWhlaWdodDogMS40NTtcXG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1jbGpzLWNvZGUtbGluZS1oZWlnaHQpO1xcbiAgcGFkZGluZy1sZWZ0OiAwO1xcbiAgY291bnRlci1yZXNldDogbGluZW51bWJlcjtcXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbiAgLW1vei10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbiAgdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuNXM7XFxuICAtby10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC41cztcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjVzXFxufVxcblxcbi5jbGpzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtaW4td2lkdGg6IDEwMCVcXG59XFxuXFxuLmNsanMtY29udGFpbmVyLCAuY2xqcy1yb3cge1xcbiAgYmFja2dyb3VuZDogaW5oZXJpdFxcbn1cXG5cXG5wcmUuY2xqcyAuY2xqcy1yb3ctaGlnaGxpZ2h0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjlhOWE7XFxuICBjb2xvcjogI2ZmZlxcbn1cXG5cXG5wcmUuY2xqcyAuY2xqcy1udW1iZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcXG4gIHBhZGRpbmctbGVmdDogLjNlbTtcXG4gIG9wYWNpdHk6IC45O1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RkZDtcXG4gIGNvdW50ZXItaW5jcmVtZW50OiBsaW5lbnVtYmVyO1xcbiAgbGluZS1oZWlnaHQ6IGNhbGModmFyKC0tY2xqcy1jb2RlLWxpbmUtaGVpZ2h0LCAxLjM1KSArIC4xKVxcbn1cXG5cXG5wcmUuY2xqcyAuY2xqcy1udW1iZXI6aG92ZXIge1xcbiAgLXdlYmtpdC1maWx0ZXI6IGJyaWdodG5lc3MoMjAwJSk7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMjAwJSlcXG59XFxuXFxucHJlLmNsanMgLmNsanMtbnVtYmVyOjpiZWZvcmUge1xcbiAgY29udGVudDogY291bnRlcihsaW5lbnVtYmVyKTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgcGFkZGluZy1yaWdodDogLjVlbTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZVxcbn1cXG5cXG5wcmUuY2xqcyAuY2xqcy1yb3cgKiB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3hcXG59XFxuXFxucHJlLmNsanMgY29kZS5jbGpzLXVuZGVyLWh1bmRyZWQgLmNsanMtbnVtYmVyIHtcXG4gIHdpZHRoOiAyLjFlbVxcbn1cXG5cXG5wcmUuY2xqcyBjb2RlLmNsanMtdW5kZXItaHVuZHJlZCAuY2xqcy1jb250ZW50IHtcXG4gIG1hcmdpbi1sZWZ0OiAzLjJlbVxcbn1cXG5cXG5wcmUuY2xqcyBjb2RlLmNsanMtb3Zlci1odW5kcmVkIC5jbGpzLW51bWJlciB7XFxuICB3aWR0aDogMi42ZW1cXG59XFxuXFxucHJlLmNsanMgY29kZS5jbGpzLW92ZXItaHVuZHJlZCAuY2xqcy1jb250ZW50IHtcXG4gIG1hcmdpbi1sZWZ0OiAzLjdlbVxcbn1cXG5cXG5wcmUuY2xqcyBjb2RlLmNsanMtb3Zlci10aG91c2FuZCAuY2xqcy1udW1iZXIge1xcbiAgd2lkdGg6IDMuMWVtXFxufVxcblxcbnByZS5jbGpzIGNvZGUuY2xqcy1vdmVyLXRob3VzYW5kIC5jbGpzLWNvbnRlbnQge1xcbiAgbWFyZ2luLWxlZnQ6IDQuMmVtXFxufVxcblxcbnByZS5jbGpzIHtcXG4gIHdoaXRlLXNwYWNlOiBwcmVcXG59XFxuXFxucHJlLmNsanMgLnNvZnQtd3JhcCB7XFxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXBcXG59XFxuXFxucHJlLmNsanMgY29kZS5zb2Z0LXdyYXAgLmNsanMtcm93IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZVxcbn1cXG5cXG5wcmUuY2xqcyBjb2RlLnNvZnQtd3JhcCAuY2xqcy1udW1iZXIge1xcbiAgaGVpZ2h0OiAxMDAlXFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9zcmMvc3R5bGVzL2NvZGUtbGluZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vW3NlbGVjdG9yXSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZm4uY2FsbCh0aGlzLCBzZWxlY3Rvcik7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1tzZWxlY3Rvcl0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bc2VsZWN0b3JdXG5cdH07XG59KShmdW5jdGlvbiAodGFyZ2V0KSB7XG5cdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldClcbn0pO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50byArIFwiIFwiICsgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC8pL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqIFBhc3MgYSBmdW5jdGlvbiB0byB3aGVuUmVhZHkoKSBhbmQgaXQgd2lsbCBiZSBpbnZva2VkIChhcyBhIG1ldGhvZCBvZiB0aGVcbiAqIGRvY3VtZW50KSB3aGVuIHRoZSBkb2N1bWVudCBpcyBwYXJzZWQgYW5kIHJlYWR5IGZvciBtYW5pcHVsYXRpb24uIFJlZ2lzdGVyZWRcbiAqIGZ1bmN0aW9ucyBhcmUgdHJpZ2dlcmVkIGJ5IHRoZSBmaXJzdCBET01Db250ZW50TG9hZGVkLCByZWFkeXN0YXRlY2hhbmdlLCBvclxuICogbG9hZCBldmVudCB0aGF0IG9jY3Vycy4gT25jZSB0aGUgZG9jdW1lbnQgaXMgcmVhZHkgYW5kIGFsbCBmdW5jdGlvbnMgaGF2ZVxuICogYmVlbiBpbnZva2VkLCBhbnkgZnVuY3Rpb25zIHBhc3NlZCB0byB3aGVuUmVhZHkoKSB3aWxsIGJlIGludm9rZWQgXG4gKiBpbW1lZGlhdGVseS5cbiAqL1xudmFyIHdoZW5SZWFkeSA9IChmdW5jdGlvbiAoKSB7IC8vIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgd2hlblJlYWR5KCkgZnVuY3Rpb25cbiAgdmFyIGZ1bmNzID0gW107ICAgIC8vIFRoZSBmdW5jdGlvbnMgdG8gcnVuIHdoZW4gd2UgZ2V0IGFuIGV2ZW50XG4gIHZhciByZWFkeSA9IGZhbHNlOyAvLyBTd2l0Y2hlcyB0byB0cnVlIHdoZW4gdGhlIGhhbmRsZXIgaXMgdHJpZ2dlcmVkXG5cbiAgLy8gVGhlIGV2ZW50IGhhbmRsZXIgaW52b2tlZCB3aGVuIHRoZSBkb2N1bWVudCBiZWNvbWVzIHJlYWR5XG4gIGZ1bmN0aW9uIGhhbmRsZXIoZSkge1xuICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgcnVuIG9uY2UsIGp1c3QgcmV0dXJuXG4gICAgaWYgKHJlYWR5KSByZXR1cm47XG5cbiAgICAvLyBJZiB0aGlzIHdhcyBhIHJlYWR5c3RhdGVjaGFuZ2UgZXZlbnQgd2hlcmUgdGhlIHN0YXRlIGNoYW5nZWQgdG9cbiAgICAvLyBzb21ldGhpbmcgb3RoZXIgdGhhbiBcImNvbXBsZXRlXCIsIHRoZW4gd2UncmUgbm90IHJlYWR5IHlldFxuICAgIGlmIChlLnR5cGUgPT09IFwicmVhZHlzdGF0ZWNoYW5nZVwiICYmIGRvY3VtZW50LnJlYWR5U3RhdGUgIT09IFwiY29tcGxldGVcIilcbiAgICAgIHJldHVybjtcblxuICAgIC8vIFJ1biBhbGwgcmVnaXN0ZXJlZCBmdW5jdGlvbnMuXG4gICAgLy8gTm90ZSB0aGF0IHdlIGxvb2sgdXAgZnVuY3MubGVuZ3RoIGVhY2ggdGltZSwgaW4gY2FzZSBjYWxsaW5nXG4gICAgLy8gb25lIG9mIHRoZXNlIGZ1bmN0aW9ucyBjYXVzZXMgbW9yZSBmdW5jdGlvbnMgdG8gYmUgcmVnaXN0ZXJlZC5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZ1bmNzLmxlbmd0aDsgaSsrKVxuICAgICAgZnVuY3NbaV0uY2FsbChkb2N1bWVudCk7XG5cbiAgICAvLyBOb3cgc2V0IHRoZSByZWFkeSBmbGFnIHRvIHRydWUgYW5kIGZvcmdldCB0aGUgZnVuY3Rpb25zXG4gICAgcmVhZHkgPSB0cnVlO1xuICAgIGZ1bmNzID0gbnVsbDtcbiAgfVxuXG4gIC8vIFJlZ2lzdGVyIHRoZSBoYW5kbGVyIGZvciBhbnkgZXZlbnQgd2UgbWlnaHQgcmVjZWl2ZVxuICBpZiAoZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGhhbmRsZXIsIGZhbHNlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLCBoYW5kbGVyLCBmYWxzZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGhhbmRsZXIsIGZhbHNlKTtcbiAgfVxuICBlbHNlIGlmIChkb2N1bWVudC5hdHRhY2hFdmVudCkge1xuICAgIGRvY3VtZW50LmF0dGFjaEV2ZW50KFwib25yZWFkeXN0YXRlY2hhbmdlXCIsIGhhbmRsZXIpO1xuICAgIHdpbmRvdy5hdHRhY2hFdmVudChcIm9ubG9hZFwiLCBoYW5kbGVyKTtcbiAgfVxuXG4gIC8vIFJldHVybiB0aGUgd2hlblJlYWR5IGZ1bmN0aW9uXG4gIHJldHVybiBmdW5jdGlvbiB3aGVuUmVhZHkoZikge1xuICAgIGlmIChyZWFkeSkgZi5jYWxsKGRvY3VtZW50KTsgLy8gSWYgYWxyZWFkeSByZWFkeSwganVzdCBydW4gaXRcbiAgICBlbHNlIGZ1bmNzLnB1c2goZik7ICAgICAgICAgIC8vIE90aGVyd2lzZSwgcXVldWUgaXQgZm9yIGxhdGVyLlxuICB9XG59KCkpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHdoZW5SZWFkeTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvd2hlblJlYWR5LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==