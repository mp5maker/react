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
var guitars = ["Fender", "ESP", "Ibanez"];

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