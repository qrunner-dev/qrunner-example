
const chalk = require('chalk');


function processData() {
  process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`)
  })
  console.log(chalk.yellowBright('Hello world!'));
    
}

processData();
