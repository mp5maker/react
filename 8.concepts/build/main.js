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
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n// Using Create Element\nhelloWorld = React.createElement('h1', {\n  className: \"title\"\n}, \"Hello World\");\nReactDOM.render(helloWorld, document.getElementById('hello-world')); // Embedding Expression in Javscript XML language\n\nvar myName = \"Shabuktagin Photon Khan\";\nvar Name = React.createElement(\"h1\", null, \" Name: \", myName, \" \");\nReactDOM.render(Name, document.getElementById('my-name')); // Embedding Expression including formatting\n\nvar user = {\n  firstName: \"Photon\",\n  lastName: \"Khan\"\n};\n\nfunction formatName(user) {\n  return \"\".concat(user.firstName, \" \").concat(user.lastName);\n}\n\nvar displayName = React.createElement(\"h1\", {\n  className: \"lead\"\n}, \"Full Name: \", formatName(user));\nReactDOM.render(displayName, document.getElementById('display-name')); // Creating a clock\n\nfunction tick() {\n  var element = React.createElement(\"div\", null, React.createElement(\"p\", null, \"Time: \", new Date().toLocaleTimeString()));\n  ReactDOM.render(element, document.getElementById('show-time'));\n}\n\nsetInterval(tick, 1000); // Rendering a Component\n\nfunction Welcome(person) {\n  return React.createElement(\"h1\", null, \"Welcome, \", person.name, \"; Age: \", person.age);\n}\n\nvar personGreeting = React.createElement(Welcome, {\n  name: \"Photon Khan\",\n  age: \"27\"\n});\nReactDOM.render(personGreeting, document.getElementById('person-greeting')); // Converting a clock to a class\n\nvar Clock =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Clock, _React$Component);\n\n  function Clock(props) {\n    var _this;\n\n    _classCallCheck(this, Clock);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Clock).call(this, props));\n    _this.state = {\n      date: new Date().toLocaleTimeString()\n    };\n    return _this;\n  }\n\n  _createClass(Clock, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      // Normal Function not working, only aroow function works\n      this.timerId = setInterval(function () {\n        return _this2.tick();\n      }, 1000);\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      clearInterval(this.timerId);\n    }\n  }, {\n    key: \"tick\",\n    value: function tick() {\n      this.setState({\n        date: new Date().toLocaleTimeString()\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"div\", null, React.createElement(\"h2\", null, \"Time: \", this.state.date));\n    }\n  }]);\n\n  return Clock;\n}(React.Component);\n\nReactDOM.render(React.createElement(Clock, null), document.getElementById('clock')); // Handling Events\n\nvar HandlingEvents =\n/*#__PURE__*/\nfunction (_React$Component2) {\n  _inherits(HandlingEvents, _React$Component2);\n\n  function HandlingEvents(props) {\n    _classCallCheck(this, HandlingEvents);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(HandlingEvents).call(this, props));\n  }\n\n  _createClass(HandlingEvents, [{\n    key: \"handleClick\",\n    value: function handleClick(event) {\n      event.preventDefault();\n      console.log(\"Link was Clicked\");\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"a\", {\n        href: \"#\",\n        onClick: this.handleClick\n      }, \"Click Me\");\n    }\n  }]);\n\n  return HandlingEvents;\n}(React.Component);\n\nReactDOM.render(React.createElement(HandlingEvents, null), document.getElementById('handling-events')); // Toggle\n\nvar Toggle =\n/*#__PURE__*/\nfunction (_React$Component3) {\n  _inherits(Toggle, _React$Component3);\n\n  function Toggle(props) {\n    var _this3;\n\n    _classCallCheck(this, Toggle);\n\n    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(Toggle).call(this, props));\n    _this3.state = {\n      isToggleOn: true // To Make \"this\" work, we need to bind \"this\"\n\n    };\n    _this3.handleClick = _this3.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this3)));\n    return _this3;\n  }\n\n  _createClass(Toggle, [{\n    key: \"handleClick\",\n    value: function handleClick() {\n      this.setState(function (previousState) {\n        return {\n          isToggleOn: !previousState.isToggleOn\n        };\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"button\", {\n        onClick: this.handleClick\n      }, this.state.isToggleOn ? \"ON\" : \"OFF\");\n    }\n  }]);\n\n  return Toggle;\n}(React.Component);\n\nReactDOM.render(React.createElement(Toggle, null), document.getElementById('toggle')); // Alternative to bind\n\nvar LoggingButton =\n/*#__PURE__*/\nfunction (_React$Component4) {\n  _inherits(LoggingButton, _React$Component4);\n\n  function LoggingButton(props) {\n    _classCallCheck(this, LoggingButton);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(LoggingButton).call(this, props));\n  }\n\n  _createClass(LoggingButton, [{\n    key: \"handleClick\",\n    value: function handleClick() {\n      console.log('this is', this);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this4 = this;\n\n      return React.createElement(\"button\", {\n        onClick: function onClick(e) {\n          return _this4.handleClick(e);\n        }\n      }, \"Click me\");\n    }\n  }]);\n\n  return LoggingButton;\n}(React.Component);\n\nReactDOM.render(React.createElement(LoggingButton, null), document.getElementById('logging-button'));\n/**\r\n * Login Control\r\n * @param {*} props \r\n */\n\nfunction UserGreeting(props) {\n  return React.createElement(\"p\", null, \" Welcome Back !\");\n}\n\nfunction GuestGreeting(props) {\n  return React.createElement(\"p\", null, \" Please, sign in\");\n}\n\nfunction Greeting(props) {\n  var isLoggedIn = props.isLoggedIn;\n\n  if (isLoggedIn) {\n    return React.createElement(UserGreeting, null);\n  } else {\n    return React.createElement(GuestGreeting, null);\n  }\n}\n\nfunction LoginButton(props) {\n  return React.createElement(\"button\", {\n    onClick: props.onClick\n  }, \"Login\");\n}\n\nfunction LogoutButton(props) {\n  return React.createElement(\"button\", {\n    onClick: props.onClick\n  }, \"Logout\");\n}\n\nvar LoginControl =\n/*#__PURE__*/\nfunction (_React$Component5) {\n  _inherits(LoginControl, _React$Component5);\n\n  function LoginControl(props) {\n    var _this5;\n\n    _classCallCheck(this, LoginControl);\n\n    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(LoginControl).call(this, props));\n    _this5.handleLoginClick = _this5.handleLoginClick.bind(_assertThisInitialized(_assertThisInitialized(_this5)));\n    _this5.handleLogoutClick = _this5.handleLogoutClick.bind(_assertThisInitialized(_assertThisInitialized(_this5)));\n    _this5.state = {\n      isLoggedIn: false\n    };\n    return _this5;\n  }\n\n  _createClass(LoginControl, [{\n    key: \"handleLoginClick\",\n    value: function handleLoginClick() {\n      this.setState({\n        isLoggedIn: true\n      });\n    }\n  }, {\n    key: \"handleLogoutClick\",\n    value: function handleLogoutClick() {\n      this.setState({\n        isLoggedIn: false\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var isLoggedIn = this.state.isLoggedIn;\n      var button;\n\n      if (isLoggedIn) {\n        button = React.createElement(LogoutButton, {\n          onClick: this.handleLogoutClick\n        });\n      } else {\n        button = React.createElement(LoginButton, {\n          onClick: this.handleLoginClick\n        });\n      }\n\n      return React.createElement(\"div\", null, React.createElement(Greeting, {\n        isLoggedIn: isLoggedIn\n      }), button);\n    }\n  }]);\n\n  return LoginControl;\n}(React.Component);\n\nReactDOM.render(React.createElement(LoginControl, null), document.getElementById('login-control')); // Hide/Show Warning Banner\n\nfunction WarningBanner(props) {\n  var warning = props.warning;\n\n  if (!warning) {\n    return null;\n  }\n\n  return React.createElement(\"button\", {\n    type: \"button\",\n    className: \"btn btn-warning\"\n  }, \"Warning\");\n}\n\nvar WarningPage =\n/*#__PURE__*/\nfunction (_React$Component6) {\n  _inherits(WarningPage, _React$Component6);\n\n  function WarningPage(props) {\n    var _this6;\n\n    _classCallCheck(this, WarningPage);\n\n    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(WarningPage).call(this, props));\n    _this6.handleClick = _this6.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this6)));\n    _this6.state = {\n      showWarning: true\n    };\n    return _this6;\n  }\n\n  _createClass(WarningPage, [{\n    key: \"handleClick\",\n    value: function handleClick() {\n      this.setState(function (previousState) {\n        return {\n          showWarning: !previousState.showWarning\n        };\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"div\", null, React.createElement(\"button\", {\n        onClick: this.handleClick\n      }, this.state.showWarning ? 'Hide' : 'Show'), React.createElement(\"div\", null, React.createElement(WarningBanner, {\n        warning: this.state.showWarning\n      })));\n    }\n  }]);\n\n  return WarningPage;\n}(React.Component);\n\nReactDOM.render(React.createElement(WarningPage, null), document.getElementById('warning-page'));\n/**\r\n * Main Ideas about List and Keys\r\n */\n// Transforming Arrays using Map\n\nvar numbers = [1, 2, 3, 4, 5];\n\nfunction transform(number) {\n  return number * 2;\n}\n\nvar doubled = numbers.map(transform);\nconsole.log(doubled); // Transforming Arrays with Map && Arrow Functions\n\nvar numbers_arrow = [1, 2, 3, 4, 5];\nvar doubled_arrow = numbers_arrow.map(function (number) {\n  return number * 2;\n});\nconsole.log(doubled_arrow); // Transforming Arrays with different styles \n\nvar playerNames = [\"Ronaldo\", \"Messi\", \"Torres\"];\nvar playerList = playerNames.map(function (name, i) {\n  return React.createElement(\"li\", {\n    className: \"list-group-item\",\n    key: i\n  }, name);\n});\nReactDOM.render(React.createElement(\"ul\", {\n  className: \"list-group\"\n}, playerList), document.getElementById('players-list')); // Rendering Map inside a component\n\nvar PlayerMap =\n/*#__PURE__*/\nfunction (_React$Component7) {\n  _inherits(PlayerMap, _React$Component7);\n\n  function PlayerMap(props) {\n    var _this7;\n\n    _classCallCheck(this, PlayerMap);\n\n    _this7 = _possibleConstructorReturn(this, _getPrototypeOf(PlayerMap).call(this, props));\n    _this7.handleClick = _this7.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this7)));\n    _this7.state = {\n      isClicked: false\n    };\n    return _this7;\n  }\n\n  _createClass(PlayerMap, [{\n    key: \"handleClick\",\n    value: function handleClick() {\n      this.setState(function (previousState) {\n        return {\n          isClicked: !previousState.isClicked\n        };\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return (// Use a div if we want to use it properly\n        React.createElement(\"div\", null, React.createElement(\"button\", {\n          type: \"btn\",\n          className: \"btn btn-success\",\n          onClick: this.handleClick\n        }, this.state.isClicked ? \"Show\" : \"Hide\"), React.createElement(ShowPlayersList, {\n          isClicked: this.state.isClicked\n        }))\n      );\n    }\n  }]);\n\n  return PlayerMap;\n}(React.Component);\n\nvar ShowPlayersList =\n/*#__PURE__*/\nfunction (_React$Component8) {\n  _inherits(ShowPlayersList, _React$Component8);\n\n  function ShowPlayersList(props) {\n    var _this8;\n\n    _classCallCheck(this, ShowPlayersList);\n\n    _this8 = _possibleConstructorReturn(this, _getPrototypeOf(ShowPlayersList).call(this, props));\n    _this8.players = ['Ronaldo', 'Messi', 'Torres'];\n    return _this8;\n  }\n\n  _createClass(ShowPlayersList, [{\n    key: \"render\",\n    value: function render() {\n      var isClicked = this.props.isClicked;\n\n      if (!isClicked) {\n        return null;\n      }\n\n      return React.createElement(\"ul\", {\n        className: \"list-group\"\n      }, // Use i as the last resort when we do not have a unique identifier\n      this.players.map(function (player, i) {\n        return React.createElement(\"li\", {\n          className: \"list-group-item\",\n          key: i\n        }, player);\n      }));\n    }\n  }]);\n\n  return ShowPlayersList;\n}(React.Component);\n\nReactDOM.render(React.createElement(PlayerMap, null), document.getElementById('player-map'));\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });