"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var test = function test() {
  return console.log(123);
};

var Employee =
/*#__PURE__*/
function () {
  function Employee(name, age, salary) {
    _classCallCheck(this, Employee);

    this.name = name;
    this.age = age;
    this.salary = salary;
  }

  _createClass(Employee, [{
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }, {
    key: "getAge",
    value: function getAge() {
      return this.age;
    }
  }, {
    key: "getSalary",
    value: function getSalary() {
      return this.salary;
    }
  }]);

  return Employee;
}();

photon = new Employee("Shabuktagin Photon Khan", 27, 35000);
console.log(photon.getName());
console.log(photon.getAge());
console.log(photon.getSalary());