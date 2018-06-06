let CLIstr    =   process.argv.slice(2).toString();


// ********************************************************

function pigLatin(str) {

  inputWords = str.split(",");
  let pigLatinString = "";

  for (let i = 0; i < inputWords.length; i++) {
    pigLatinString = pigLatinString + " " + pigLatinWord(inputWords[i])

  }
  return pigLatinString
}

console.log(pigLatin(CLIstr));


// ********************************************************

function pigLatinWord(word) {

  let firstLetter = word[0];
  let endOfWord   = word.slice(1);

  return `${endOfWord}${firstLetter}ay` ;
}
