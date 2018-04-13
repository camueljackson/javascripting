function lamda () {
  lamda = 'pluto';
}

console.log(lambda);
lambda();
console.log(lambda);

beta


2 types of functions:

// function expression:

var lambda = function() {
  lambda = 'pluto'
}

// function declaration:
function lamda () {
  lamda = 'pluto';
}

// Hoisting

/* takes all variables and puts them at the top of the code */

var alpha;
var beta;

console.log(alpha);
console.log(beta);
alpha = beta; // hosting removed the "var" rom behind alpha
beta = 'Earth'; // hosting removed the "var" rom behind beta
console.log(alpha);
console.log(beta);


/* function declaration gets hoisted, while a function expression doesnt not get
hoisted (but the varilable of the function expression gets hoisted without a value) */