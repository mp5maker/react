// ES5 Syntax
module.exports = {
    // Cannot Export Classes
    data: function(name, age, salary){
        console.log(`${name} ${age} ${salary}`);
    }
}

// Export Not Working in NodeJS
// export const
// export 