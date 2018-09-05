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

/**
 * Data Transformation
 */
const authors = [
    "J.K Rowling",
    "Dan Brown"
]

console.log(authors.join(', '));

/** Old Style Array Filter */
function authorFilter(author){
    return author[0] === "D";
}

console.log(authors.filter(authorFilter));

const authorFilterTwo = (author) => author[0] === 'J';
/** New Style Array Filter */
console.log(authors.filter(authorFilterTwo));

/**
 * Array Map
 */
const books = [
    "Harry Potter",
    "Angels & Demons",
    "Da Vinci Code",
    "Oliver Twist"
]
/** Old Style */
function changeBooks(book){
    return `${book} Book`;
}

console.log(books.map(changeBooks));

/** New Style */
const changeBooksTwo = (book) => `${book} Book`;
console.log(books.map(changeBooksTwo));

/**
 * Create a pure function (one thing to another)
 */
let groceries = [
    {item: "potatoes"},
    {item: "tomatoes"},
    {item: "carrot"},
    {item: "onion"},
];

/**
 * 
 * @param {string} oldname 
 * @param {string} newname 
 * @param {string} groceries 
 */
function editGroceries(oldname, newname, groceries){
    function updatingGroceries(groceries){
        if(groceries.item === oldname){
            return newname;
        }else{
            return groceries.item;
        }
    }
    return groceries.map(updatingGroceries);
}

console.log(editGroceries('tomatoes', 'cucumber', groceries));

const editNameTwo = (oldname, newname, groceries) => 
    groceries.map( (groceries) => {
        if(groceries.item === oldname){
            return newname;
        } else {
            return groceries.item;
        }
    });

console.log(editNameTwo("carrot", "cabbage", groceries));

/**
 *  All of this can be written into a single line
 */
const editNameThree = (oldname, newname, groceries) =>
groceries.map( groceries => (groceries.item === oldname) ? newname : groceries.item);
console.log(editNameThree("onion", "cauli flower", groceries));

/** 
 * Transform Objects into arrays
 */
const uberDriver = {
    "Muhib" : "3",
    "Sajid" : "5",
    "Samith": "3.8"
}

const uberDriverArray = Object.keys(uberDriver).map(key => 
    ({
        name: key,
        rating: uberDriver[key]
    })
)
console.log(uberDriverArray);

/**
 * Reduce
 */

const ages = [23, 28, 19, 43];
let initialValue = 0;
const maxAge = ages.reduce((previous,current) => {
    if(previous > current) {
        return previous;
    } else {
        return current;
    }
}, initialValue);
console.log(maxAge);

/**
 * Transform Array to Objects using Reduce
 */
const typicalcolors = [
    {
        id: 1,
        title: "Indigo",
        rating: 5
    },
    {
        id: 13,
        title: "Yellow",
        rating: 2
    },
    {
        id: 35,
        title: "Green",
        rating: 3.7
    }
]

const hashColors = typicalcolors.reduce(
    (hash, {id, title, rating}) => {
        hash[id] = {title, rating}
        return hash;
    },
    {}
)
console.log(hashColors);
