// Learning to code without using the html

/**
 * Constant
 */
const pizza = true;
console.log(pizza);

/**
 * This section will cause error in console.log
 */
// pizza = false
// console.log(pizza);

/**
 * Let [Lexical Variable Scoping]
 */

// Old Example
var topic = "Javascript";
if (topic) {
    var topic = "React";
    console.log('Inside the block', topic);
}
console.log('Global ', topic);

// New way 
var new_topic = "New Javascript";
if (new_topic) {
    let new_topic = "New React";
    console.log("Inside the block", new_topic);    
}
console.log("Global", new_topic);

/**
 * Template String
 */
var html = `
  <div class="container">
    <div class="row">
        <div class="col">
            ${new_topic}
        </div>
    </div>
  </div>
`
console.log(html);

/**
 * Default Parameters
 */
function area(width=1, length=1) {
    return width*length;
}
console.log(area(2,3));
console.log(area());

/**
 * Old way of calling a function
 */
greet = function(name){
    return `Hello, ${name}`;
};

console.log(greet("Photon"));

/**
 * New way of calling a function
 */
new_greet = (name) => {
    return `Hello, ${name}`;
}

console.log(new_greet("Photon Khan"));

/**
 * Destructuring Assignments of Objects
 */
var sandwich = {
    bread: "dutch crunch",
    meat: "tuna",
    cheese: "swiss",
    toppings: ["lettuce", "tomato", "mustard"],
};

// Copies the exactly named properties from the object and createa a variable
var {bread, meat, toppings} = sandwich;
console.log(bread);
console.log(meat);
console.log(toppings);
