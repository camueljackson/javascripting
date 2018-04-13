var originalWords = process.argv.slice(2);

for (var i = 0; i < originalWords.length; i++) {
  var pigLatin = originalWords[i].slice(1);
  var firstLetter = originalWords[i][0];
  console.log(pigLatin + firstLetter + "ay");

}

