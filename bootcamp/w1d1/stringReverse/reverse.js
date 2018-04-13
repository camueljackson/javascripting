function reverse(str) {
  var newString = str.split("");
  var reversedString = [];

  for ( var index = newString.length; index >= 0 ; index-- ) {
    console.log(newString[index]);
  }
  return "hi";
}
console.log(reverse("dog"));