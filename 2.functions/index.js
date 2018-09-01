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

console.log(obj.message);

// We can also add the functions in array
const arr = [
    message => console.log(message),
    (message="John Doe") => console.log(message),
    "We can pass message like this also"
]
arr[0]("Passing Functions in array");
arr[1](arr[2]);