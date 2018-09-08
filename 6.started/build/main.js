"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Table = require('./table.js');

var heading = React.createElement('h1', {
  'data-type': "title"
}, "Learning React");
var list = React.createElement('ul', {
  class: "list-group"
}, React.createElement('li', {
  class: "list-group-item"
}, "Tomatoes"), React.createElement('li', {
  class: "list-group-item"
}, "Potatoes"), React.createElement('li', {
  class: "list-group-item"
}, "Cabbage"));
ReactDOM.render(heading, document.getElementById('react-heading'));
ReactDOM.render(list, document.getElementById('react-content'));
var items = ["tomatoes", "potatoes", "onion"];
var items_list = React.createElement('ul', {
  class: 'list-group'
}, items.map(function (item, i) {
  return React.createElement('li', {
    key: i,
    class: "list-group-item"
  }, item);
}));
ReactDOM.render(items_list, document.getElementById('react-content-2'));

var GuitarList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GuitarList, _React$Component);

  function GuitarList() {
    _classCallCheck(this, GuitarList);

    return _possibleConstructorReturn(this, _getPrototypeOf(GuitarList).apply(this, arguments));
  }

  _createClass(GuitarList, [{
    key: "render",
    value: function render() {
      var guitars = ["Fender", "ESP", "Ibanez"];
      return React.createElement('ul', {
        class: 'list-group'
      }, guitars.map(function (guitar, i) {
        return React.createElement('li', {
          key: i,
          class: 'list-group-item'
        }, guitar);
      }));
    }
  }]);

  return GuitarList;
}(React.Component);

ReactDOM.render(React.createElement(GuitarList, null), document.getElementById('react-content-guitars'));

var Footer =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Footer, _React$Component2);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, _getPrototypeOf(Footer).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return React.createElement("p", {
        class: "lead",
        className: "footer"
      }, React.createElement("span", null, "2018 \xA9 Photon Enterprise", React.createElement("small", null, " Build with react app")));
    }
  }]);

  return Footer;
}(React.Component);

ReactDOM.render(React.createElement(Footer, null), document.getElementById('footer'));

var Person =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(Person, _React$Component3);

  function Person() {
    _classCallCheck(this, Person);

    return _possibleConstructorReturn(this, _getPrototypeOf(Person).apply(this, arguments));
  }

  _createClass(Person, [{
    key: "render",
    value: function render() {
      var samith = {
        name: "Samith Zaman",
        age: 27,
        salary: 50000,
        hobbies: "none"
      };
      return React.createElement("div", {
        class: "card"
      }, React.createElement("div", {
        class: "card-header"
      }, React.createElement("span", null, "Name: ", samith.name)), React.createElement("div", {
        class: "card-body"
      }, React.createElement("div", null, "Age: ", samith.age), React.createElement("div", null, "Salary: ", samith.salary)), React.createElement("div", {
        class: "card-footer"
      }, React.createElement("div", null, "Hobbies: ", samith.hobbies)));
    }
  }]);

  return Person;
}(React.Component);

ReactDOM.render(React.createElement(Person, null), document.getElementById('samith'));
ReactDOM.render(React.createElement(Table, null), document.getElementById('some-data'));