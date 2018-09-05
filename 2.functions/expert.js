/**
 * Recursion
 */
const countdown = (value, fn) => {
    fn(value)
    return (value > 0) ? countdown(value-1, fn) : value;
}

countdown(10, value => console.log(value));

/**
 * Timer Countdown
 */
const timercountdown = (value, fn, delay=1000) => {
    fn(value)
    return (value > 0) ? 
        setTimeout(() => countdown(value-1, fn), delay) :
        value;
}
// timercountdown(1, value => console.log(value));

/**
 * Searching Data Structure
 */
var photon = {
    type: "person",
    data: {
        gender: "male",
        info: {
            id: 25,
            fullname: {
                first: "Shabuktagin",
                last: "Khan",
                info: "Nickname"
            }
        }
    }
}

/**
 * Destructuring the Data Structure
 * @param {object.properties} fields 
 * @param {object} object 
 */
const deepPick = (fields, object = {}) => {
    const [first, ...remainings] = fields.split(".");
    return(remainings.length) ?
        deepPick(remainings.join("."), object[first]) :
        object[first];
}
console.log(deepPick('type', photon));
console.log(deepPick('data.info', photon));