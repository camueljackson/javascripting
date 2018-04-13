

function getNumbers(elements) {
  // var numbers is empty array for pushing things later
  var numbers = [];

  // way to reach indexed arrray
  for (var i = 0; i < elements.length; i++) {
    // isolation of each element to convert to number
    var element = elements[i];
    //
    var number = Number(element);
    // push "numbers" to empty array numbers
  if (!isNaN(number)) {
    numbers.push(number);
  }
}
return numbers;
}
// now you can add the actul numbers
function sum(numbers) {
  var total = 0;

  for ( var i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
return total;
}
// lets you put numbers into the CL and use the function on it
var args = process.argv.slice(2);

// var numbers = getNumbers(args);
// var total = sum(numbers);

console.log(
  "The total is: " ,
  sum(getNumbers(args))
  );


