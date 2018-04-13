function obfuscate(str) {
var newString = str.split("");
var foundChar = "";


for ( var index = 0; index <= newString.length-1; index++ ) {

  if ( newString[index] === "a") {
    foundChar += 4;

  } else if ( newString[index] === "e") {
    foundChar += 3;

  } else if ( newString[index] === "o") {
    foundChar += 0;

  } else if ( newString[index] === "l" ) {
    foundChar += 1;

  } else {
    foundChar += newString[index];
  }
}
return foundChar;
}

console.log(obfuscate("E-audaciously"));
