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

/**
 * Composition
 */
const template = "hh:mm:ss tt";
const clockTime = template.replace("hh", "03")
                        .replace("mm", "33")
                        .replace("ss", "33")
                        .replace("tt", "PM")
console.log(clockTime);

/**
 * Goal of Composition: Genereate Higher Order Functions by combining simple functions
 */

// Simple Clock (Imperative Approach)
function getClockTime(){
    var date = new Date();
    var time = "";

    var time = {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
        AMPM: "AM"
    }

    if(time.hours == 12){
        time.AMPM = "PM"
    } else if (time.hours > 12) {
        time.ampm = "PM"
        time.hours -= 12;
    }

    if(time.hours < 10) {
        time.hours = "0" + time.hours; 
    }

    if(time.minutes < 10) {
        time.minutes = "0" + time.minutes;
    }

    if(time.seconds < 10) {
        time.seconds = "0" + time.seconds;
    }

    return time.hours + ":" + time.minutes + ":" + time.seconds + " " + time.AMPM;
}

function logClockTime() {
    var time = getClockTime();
    console.clear();
    console.log(time);
}

setInterval(logClockTime, 1000);

/**
 * Elegant Approach
 */
const serializeClockTime = date => 
    ({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    })

const civilianHours = clockTime => 
    ({
        ...clockTime,
        hours: (clockTime.hours > 12) ?
            clockTime.hours - 12 :
            clockTime.hours
    })

const appendAMPM = clockTime => 
    ({
        ...clockTime,
        ampm: (clockTime.hours >= 12) ? "PM" : "AM"
    })

const prependZero = key => clockTime => 
    ({
        ...clockTime,
        [key]: (clockTime[key] < 10) ? "0" + clockTime[key] : clockTime[key]
    })

const convertToCivilianTime = clockTime =>
    compose(
        appendAMPM,
        civilianHours
    )(clockTime)

const doubleDigits = civilianTime =>
    compose(
        prependZero("hours"),
        prependZero("minutes"),
        prependZero("seconds")
    )(civilianTime)
