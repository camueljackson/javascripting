// object are key/value type

// so var x is an object by doing {}.  So:

var x = {
  one: 1,
  two: 2
};

// to show x
console.log(x);
// to show the value of one
console.log(x.1)

//
console.log(x.['one']) vs console.log(x.1)


// contract re; execution
// first step of contract for sum function, it expects 2 values and declares a third.  saves the return into a third alue (c)

function sum(a, b) {
  var c = a + b;
  return c;
}

function multiply(a, b) {
var c = a * b;
  return c;
}

console.log(sum(1)); // this wouldnt work because it's missing value of b
console.log(multiple);



/// module is internal piece of file that you can use in other files
// if you have sum function, want to use it in diff file, create new file,
// if you want ot link to file, use 'module' => ex:
module.exports = {
  sum: sum;
  multiply: multiply
}
// on new file to export the above:
var basicMath = require('./basicMath.js');

// then, ON NEW FILE, try to run sum function using linked code this way:
console.log(basicMath.sum(1, 2));



//better approach than above because


// keys and values are sum and multiply, and values are

var basicMathModule = { };

basicMathModule.ten = 10;

basicMathModule.sum = function sum. (a, b) {
  var c = a + b + basicMathModule.ten;
  return c;
}

module.exports = basicMathModule;

// module.exports is a type of variable which can be assigned any value.

basicMath is the value assigned to the module.exports

// what does object.keys do?

module.exports = 10;

// Packages

// in Node.js, packages are external modules (such as npm)
// ex: npm init
//ex: Mocha is installed globally: npm install --globa mocha (this will install globally) so Mocha canbe accessed from terminal

// for local install: (somehow this fills out the dependencies of the programm?)
npm install --save left-pad
// var leftPad = require('left-pad');

npm install --save-dev mocha assert //
npm install // this installs everything about the package.








