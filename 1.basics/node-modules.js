/**
 * JavasScript Module is a piece of reusable that can easily be incorporated into other Javascript files
 * One file per module
 * Node JS supports ES5 doesn't support ES6/ES7 fully yet
 */

// ES6 Modules [Currently Node JS doesn't support export, import]
var employee = require('./employee/employee');
employee.data("Shabuktagin Photon Khan", 27, 45000);

// import Employee from './employee/employee'