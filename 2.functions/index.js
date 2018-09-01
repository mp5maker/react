// In JavaScript functions acts like variables
var log = function(message){
    console.log(message);
}
log("In Javascript functions act like variables");

// We can write the same program using arrow function
var new_log = message => {
    console.log(message);
}

new_log("Writing the small function using arrow function")

// Functions are variable, we can add them in objects
const obj = {
    message: "Functions are variables, we can add them in objects",
    log(message){
        console.log(message);
    }
}

obj.log(obj.message);

// We can also add the functions in array
const arr = [
    message => console.log(message),
    (message="John Doe") => console.log(message),
    "We can pass message like this also"
]
arr[0]("Passing Functions in array");
arr[1](arr[2]);
arr[1]();

// Functions can be sent like other variables to another function
function area(width, length){
    return width*length;
}

// By using the keyword apply
function calculate(...args){
    [width, length] = args;
    console.log(area.apply(width, length));
}

console.log(area(2,4))
calculate(area, [5, 7]);

// Another way to include one function to another
const insideFunction = logger => 
    logger("It can be sent to other functions as arguments");

insideFunction(message => console.log(message));

// This can also be done
var everythingUpper = function(word){
    return function(message){
        word(message.toUpperCase());
    }
}

// Higher order functions
const upper = everythingUpper(message => console.log(message));
upper('Hello, dayum son');

// Alternative way to create higher order functions
const everythingUpperTwo = word => message => word(message.toUpperCase());
const upperTwo = everythingUpperTwo(message => console.log(message));
upperTwo('I also work in this way');