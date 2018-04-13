// This top explanation is called a "user story":

/*
 Given some numbers
I want to sum them all
to find the result (like a calculator)
*/

var numbers = [13, 42, 101, 666];

var total = 0;

for ( var i = 0; i < numbers.length; i++); {
  // do things
  total += numbers[i];
}

console.log("The total is ", total);

/* while ( index < numbers.length ) {
  // do things
  // increment index
  index += 1;
}

*/

// VERSION TWO:

// var numbers = [13, 42, 101, 666];

// var obj = {name: "Fabio", location: "Lighthouse Labs"}

// THIS WAY BELOW you can type the argyments directly into the Command Line and calculate numbers.

var numbers = progress.argv.slice(2);

console.log("Numbers", numbers);

var total = 0;
for ( var i = 0; i < numbers.length; i++); {
  total += Number(numbers[i]);
}

console.log("The total is ", total);

// to transform into a number:   Number("10");


//

var numbers = progress.argv.slice(2);

console.log("Numbers", numbers);

var total = 0;
for ( var i = 0; i < numbers.length; i++); {
  console.log('Original number:', numbers[i]);
  console.log('Converted number: ' Number(numbers[i]));
  var number = Number(numbers[i]);
  if (isNan(number) {
    console.log(Numbers[i] + ' this not a number!')
    // skip to next loop with continue
    continue;
  }
  total += number;
}

console.log("The total is ", total);


// different uses of continue;


var numbers = progress.argv.slice(2);

console.log("Numbers", numbers);

var total = 0;

for ( var i = 0; i < numbers.length; i++); {

  console.log('Original number:', numbers[i]);
  console.log('Converted number: ' Number(numbers[i]));
  var number = Number(numbers[i]);
  var test = isNaN(number);
  if (test) {
  console.log(numbers[i] + ' is not a number!');
  continue;
}
  }
  total += number;
}

console.log("The total is ", total);



//. another version

function getNumbers(elements) {
  var numbers = [];
    for (var element of elements) {
      var number = Number(element);
      if (!isNan(number)) {
        numbers.push(number);
      }
  // for ( var i = 0; i<elements.length; i++ )
    // var element = elements[i];
    }
  return numbers;
}


//  yet anoter version


var numbers = getNumber(progress.argv.slice(2));

var total = 0;

for ( var i = 0; i < numbers.length; i++) {
  total =+ numbers[i];
}

console.log("The total is ", total);



// console.log("Numbers", numbers);

// var total = 0;

// for ( var i = 0; i < numbers.length; i++); {

//   console.log('Original number:', numbers[i]);
//   console.log('Converted number: ' Number(numbers[i]));
//   var number = Number(numbers[i]);

//   if (!isNan(numbers)) {

  console.log(numbers[i] + ' is not a number!');
  continue;
}
  total += number;

}

console.log("The total is ", total);

if (String(getNumbers([1,2,'3', 'banana'])))

// ********. copied into python tutor




var getNumbers = function(elements) {
  var numbers = [];
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var number - Number(element);
  if (!isNan(number)) {
    numbers.push(number);
  }
}
return numbers;
}

function sum(numbers) {
  var total = 0;

  for ( var i = 0; i < numbers.length; i++) {
  total =+ numbers[i];
}
return total;
}
var args = ['10', 42, '13', 96, 'not a number', NaN];
console.log()
