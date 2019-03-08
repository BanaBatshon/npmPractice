var chalk = require("chalk");

var message = chalk.bold.black("Hello ") + chalk.bold.green("beautiful ") + chalk.yellow("World");
console.log(message);