
// imagine that scope is a box.

// 2 passes, one compile and one execution
// 1st pass) compile - only looking at variable and function declaration, and make a list of those. (but the content isnt set)
// 2nd pass) execution -
// with set of (), it means execute function

// in compile, JS is looking for Var and Functions, and creates scopes (not looking at values given to vars (with =)).
// ex, in functions with a parameter, the parameter is a "var"
// functoin declaration = global scope

var alpha = 'Mercury'

function beta() {
  console.log(gamme);
  var gamma = 'Venus';
  console.log(gamma);
  alpha = 'Earth';
}
console.log(alpha); // logs Mercury
beta();
console.log(alpha); // logs Earth

/* const can have a different value.  ex: if const points to array,
the array can change.  But the const cannot point to a fully new array */


// EXAMPLE 2

var alpha = 'Mercury'

function beta() {
  var gamma = 'Venus';
  alpha = 'Earth';
  // this is not declared
  delta = 'Jupiter'; // JS will declare delta as a global variable
}

beta();

// EXAMPLE 3

var alpha = 'Mercury'

function beta() {
  var gamma = 'Venus';
  alpha = 'Earth';
  // this is not declared
  console.log(delta);
  delta = 'Jupiter';
}

beta();
console.log(delta); // will show reference error since delta is not declared and we try to log it


// FURTHER EXAMPLE:


function lambda () {
  //lambdaa will be skipped over in the first pass since it doesnt have "var"
  lambda = 'pluto';
}

console.log(lambda); // will print "function"
lambda();
console.log(lambda);

