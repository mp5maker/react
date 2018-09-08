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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table */ \"./src/table.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\nvar heading = React.createElement('h1', {\n  'data-type': \"title\"\n}, \"Learning React\");\nvar list = React.createElement('ul', {\n  className: \"list-group\"\n}, React.createElement('li', {\n  className: \"list-group-item\"\n}, \"Tomatoes\"), React.createElement('li', {\n  className: \"list-group-item\"\n}, \"Potatoes\"), React.createElement('li', {\n  className: \"list-group-item\"\n}, \"Cabbage\"));\nReactDOM.render(heading, document.getElementById('react-heading'));\nReactDOM.render(list, document.getElementById('react-content'));\nvar items = [\"tomatoes\", \"potatoes\", \"onion\"];\nvar items_list = React.createElement('ul', {\n  className: 'list-group'\n}, items.map(function (item, i) {\n  return React.createElement('li', {\n    key: i,\n    className: \"list-group-item\"\n  }, item);\n}));\nReactDOM.render(items_list, document.getElementById('react-content-2'));\n\nvar GuitarList =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(GuitarList, _React$Component);\n\n  function GuitarList() {\n    _classCallCheck(this, GuitarList);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(GuitarList).apply(this, arguments));\n  }\n\n  _createClass(GuitarList, [{\n    key: \"render\",\n    value: function render() {\n      var guitars = [\"Fender\", \"ESP\", \"Ibanez\"];\n      return React.createElement('ul', {\n        className: 'list-group'\n      }, guitars.map(function (guitar, i) {\n        return React.createElement('li', {\n          key: i,\n          className: 'list-group-item'\n        }, guitar);\n      }));\n    }\n  }]);\n\n  return GuitarList;\n}(React.Component);\n\nReactDOM.render(React.createElement(GuitarList, null), document.getElementById('react-content-guitars'));\n\nvar Footer =\n/*#__PURE__*/\nfunction (_React$Component2) {\n  _inherits(Footer, _React$Component2);\n\n  function Footer() {\n    _classCallCheck(this, Footer);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Footer).apply(this, arguments));\n  }\n\n  _createClass(Footer, [{\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"p\", _defineProperty({\n        className: \"lead\"\n      }, \"className\", \"footer\"), React.createElement(\"span\", null, \"2018 \\xA9 Photon Enterprise\", React.createElement(\"small\", null, \" Build with react app\")));\n    }\n  }]);\n\n  return Footer;\n}(React.Component);\n\nReactDOM.render(React.createElement(Footer, null), document.getElementById('footer'));\n\nvar Person =\n/*#__PURE__*/\nfunction (_React$Component3) {\n  _inherits(Person, _React$Component3);\n\n  function Person() {\n    _classCallCheck(this, Person);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Person).apply(this, arguments));\n  }\n\n  _createClass(Person, [{\n    key: \"render\",\n    value: function render() {\n      var samith = {\n        name: \"Samith Zaman\",\n        age: 27,\n        salary: 50000,\n        hobbies: \"none\"\n      };\n      return React.createElement(\"div\", {\n        className: \"card\"\n      }, React.createElement(\"div\", {\n        className: \"card-header\"\n      }, React.createElement(\"span\", null, \"Name: \", samith.name)), React.createElement(\"div\", {\n        className: \"card-body\"\n      }, React.createElement(\"div\", null, \"Age: \", samith.age), React.createElement(\"div\", null, \"Salary: \", samith.salary)), React.createElement(\"div\", {\n        className: \"card-footer\"\n      }, React.createElement(\"div\", null, \"Hobbies: \", samith.hobbies)));\n    }\n  }]);\n\n  return Person;\n}(React.Component);\n\nReactDOM.render(React.createElement(Person, null), document.getElementById('samith'));\nReactDOM.render(React.createElement(_table__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null), document.getElementById('some-data'));\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/table.js":
/*!**********************!*\
  !*** ./src/table.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar Table =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Table, _React$Component);\n\n  function Table() {\n    _classCallCheck(this, Table);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Table).apply(this, arguments));\n  }\n\n  _createClass(Table, [{\n    key: \"render\",\n    value: function render() {\n      var photon = {\n        name: \"Shabuktagin Photon Khan\",\n        age: 27,\n        salary: 40000\n      };\n      return React.createElement(\"table\", {\n        className: \"table table-striped table-bordered table-hover\"\n      }, React.createElement(\"thead\", {\n        class: \"thead-light\"\n      }, React.createElement(\"tr\", null, React.createElement(\"th\", null, \"Name\"), React.createElement(\"th\", null, \"Age\"), React.createElement(\"th\", null, \"Salary\"))), React.createElement(\"tbody\", null, React.createElement(\"tr\", null, React.createElement(\"td\", null, photon.name), React.createElement(\"td\", null, photon.age), React.createElement(\"td\", null, photon.salary))));\n    }\n  }]);\n\n  return Table;\n}(React.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Table);\n\n//# sourceURL=webpack:///./src/table.js?");

/***/ })

/******/ });