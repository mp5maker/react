# REACT #

## Basics ##
**index**
1) Constant, Lexical Variable Scope
2) Template String, Default Parameters
3) Arrow Functions
4) Destructuring Assignments in Objects
5) Destructuring Incoming Function Arguments
6) Destructuring Array
7) Object Literal Enhancements
8) New Object Syntax
9) Spread Operator ...
10) Copy the Array, ...rest
11) Spread Operator in Function
12) Spread Operator in Objects
13) Small Hint of Promises
14) Classes and Inheritance
**node-modules**
1) Node JS not supporting all arrow functions functionality
2) Node JS not supporting export/import => Use Babel For it (module.exports, require)

## Functions ##
**index**
1) Functions acting as variables
2) Using arrow function
3) Functions like variables in objects
4) Functions like variables in array
5) Apply One function as a variable to another function using spread operator and apply
6) Higher Order Functions
**intermediate**
1) Immutability
2) Object Assign for Immutability
3) Spread Operator for Immutability
4) Array Immutability using array.concat
5) Array Immutability using spread operator
6) Pure Function, Impure Function
7) Array Filter, Array Map
8) Transforming Objects into Array
9) Reduce and Reduce Right
10) Transform Array to Objects using Reduce
**expert**
1) Recursion
2) Traversal
3) Imperative Approach Vs Final Approach
4) Composition [Incomplete Idea]

## Babel ##
```bash
npm install --save-dev babel-core babel-loader babel-preset-env
```
1) Making changes to the package.json add a build  
```bash
"babel src -d build"
```
```bash
npm install -g babel-cli
```

## Gulp ##
```bash
npm install --save-dev gulp-babel @babel/core @babel/preset-env
npm install --save-dev gulp gulp-sass gulp-concat
```
1) Problem Faced: It does not recognize **REACT**

## Started ##
```bash
npm i @babel/core babel-loader @babel/preset-env @babel/preset-react @babel/cli --save-dev
npm install --save-dev @babel/preset-react
npm install --save-dev react react-dom
npm install bootstrap
npm install --save-dev gulp gulp-sass gulp-concat
npm install --save-dev webpack webpack-cli
npm install --save-dev webpack-dev-server
npm install --save-dev prop-types
```

```
* package.json "build": "babel src -d build" [Testing 1]
* package.json "build": "babel src/main.js build/main.js" [Testing 2]
* package.json "start": "webpack-dev-server --open --mode development",
* package.json "build": "webpack --mode development"
* webpack.config.js
```
1) React.createElement(element, {id,class}, data}
2) ReactDom.render(var, domSelector)
3) React.Component
4) import, export 
5) PropTypes

## Webpack and Everything configured [Facebook Team] ##
```bash
npx create-react-app my-app
cd my-app
npm start
``` 
## Concepts ##
```bash
npm install
```

1) Core Concepts about functions
2) Core Concepts about classes
3) Core Concepts about handlingEvents
4) Core Concepts about bindings
5) Core Concepts about eventHandling
6) Core Concepts about togglemode
7) Core Concepts about Map and Arrow Function

## List of React Libraries Integration ##
```bash
npm install isomorphic-fetch --save
npm install d3 --save
npm install deep-freeze --save-dev
npm install jest-css-modules --save-dev
npm install enzyme react-addons-test-utils --save-dev
npm install react-router-dom --save
```

1) Isomorphic: Easily Allow us to make API Promises, calls
2) D3: To interpolate timeline data
3) Deep Freeze: It make sure our state and action object stays immutable 
4) Jest: To ignore css, sass files that are imported directly in the components
5) Enzyme:  Used to render and interact with components
6) Router: Router for React
7) Flux, Redux