// allows for numbers to be entered in the CL

var diceRolls = process.argv;

// keeps only the number of the process.argv array
var numberOfRolls = diceRolls[2];

// empty string for concat of results
var listTheRolls = "";

// loops until it reaches the number associated with numberOfRolls
for ( var i = 0; i < numberOfRolls; i++ ) {
  var number = Math.floor(Math.random() * 6) +1;
  if ( i === 0 ) {
    listTheRolls = number;
  } else {
    listTheRolls = listTheRolls + ", " + number;
  }
}
console.log("Rolled " + number + " dice : " + listTheRolls)

// currently looping through until we reach the "numberOfRolls";