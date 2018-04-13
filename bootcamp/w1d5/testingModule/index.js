var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");
console.log(message);

  console.log(chalk.green(
  'I am a green line ' +
  chalk.blue.underline.bold('with a blue substring') +
  ' that becomes green again!'
));