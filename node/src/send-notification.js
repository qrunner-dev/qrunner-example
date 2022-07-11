
const chalk = require('chalk');

function processData() {
  console.log(chalk.yellowBright('Hello world!'));
  if (process.argv.length >2) {
    console.log("Getting your arguments:  opt#1");
    console.log("process.argv[2]: ",process.argv[2]);
    console.log("Getting your arguments:  opt#2");
    console.log("process.env.QRUNNER_SCRIPT_ARGS: ",process.env.QRUNNER_SCRIPT_ARGS)
  }
}

processData();
