/**
 * Immutabiliy Vs Mutability
 */
let field = {
    type: "muddy",
    color: "greenish-brown",
    rating: 0,
}

function rate(field, rating){
    field.rating = rating;
    return field;
}

// This is mutable
console.log(field.rating);
console.log(rate(field, 4));
console.log(field.rating);

let fieldTwo = {
    type: "muddy",
    color: "greenish-brown",
    rating: 0,
}

// Using Object Assign for Immutability
function rateTwo(field, rating){
    return Object.assign({}, field, {rating: rating});
}
console.log(fieldTwo.rating);
console.log(rateTwo(fieldTwo, 3));
console.log(fieldTwo.rating);

// Using Spread Operator for Immutability
const newRate = (field, rating) => ({
    ...field,
    rating
});

console.log(fieldTwo.rating);
console.log(newRate(fieldTwo, 2));
console.log(fieldTwo.rating);


// Array Mutable
let colors = [
    {color: "Red"},
    {color: "Blue"},
    {color: "Green"},
    {color: "Yellow"},
]

var addColor = function(colors, color){
    colors.push({color: color})
    return colors;
}

addColor(colors, "Violet");
console.log(colors);

// Array Immutable Using array.concat
var colorsTwo = [
    {color: "Red"},
    {color: "Blue"},
    {color: "Green"},
    {color: "Yellow"},
]

const addColorTwo = (colors, color) => colors.concat({color})
console.log(addColor(colorsTwo, "Indigo"));

// Array Immutable using spread operator
const addColorThree = (colors, color) => [...colorsTwo, {color}]
console.log(addColorThree(colorsTwo, "Brown"));

// Impure Functions
var imran = {
    name: "Imran Hossain",
    position: "midfielder",
    team: "Bonkers",
};

function modifyImran(){
    imran.team = "Honka";
    return imran;
}

modifyImran();
console.log(imran);

/**
 * Impure Function
 */
const shahriar = {
    name: "Shahriar Sami",
    education: "zero"
}

const educateSami = (person) => {
    person.education = "Class Six";
    return person;
}

console.log(educateSami(shahriar));
console.log(shahriar);

/**
 * Pure Functions
 */
const samith = {
    name: "Samith Zaman",
    education: "Masters",
};

const educateSamith = (person) => ({
    ...person,
    education: "PHD"
});

console.log(educateSamith(samith));
console.log(samith);