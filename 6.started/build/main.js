"use strict";

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