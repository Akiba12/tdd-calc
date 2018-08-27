/**
Simple calculator on Node.js, which uses 'readline' interface.
*/
const operations = require('./operations.js');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(`
-------------------------------------------------
  * Calc.js *

  It's a calculator application on Node.js!
  Version: 1.0.0.
-------------------------------------------------

  How to use: Enter two numbers and choose a command.
-------------------------------------------------\n`);

  rl.question('Enter first number: ', (x) => {
    rl.question('Enter second number: ', (y) => {
      rl.question(`
        Choose one of the operations. Enter [number]:

        [1] Addition (+)
        [2] Subtraction (-)
        [3] Multiplication (*)
        [4] Division (/)

        Your choose (number from 1 to 4): `, (choice) => {
          if (!operations.validateNumbers(x, y)) {
            console.log('Only numbers must be entered. Please restart the programme.');
          } else {
            switch (choice) {
              case '1':
              console.log(`Sum of ${x} and ${y} is equal to ${operations.add(x, y)}. [${x} + ${y} = ${operations.add(x, y)}]`);
              break;
              case '2':
              console.log(`Difference of ${x} and ${y} is equal to ${operations.subtract(x, y)}. [${x} - ${y} = ${operations.subtract(x, y)}]`);
              break;
              case '3':
              console.log(`Product of ${x} and ${y} is equal to ${operations.multiply(x, y)}. [${x} * ${y} = ${operations.multiply(x, y)}]`);
              break;
              case '4':
              console.log(`Fraction of ${x} and ${y} is equal to ${operations.divide(x, y)}. [${x} / ${y} = ${operations.divide(x, y)}]`);
              break;
              default:
              console.log('You choosed invalid operation. Please restart the progremme and choose numbers from 1 to 4.');
              break;
            }
          }
          rl.close();
        });
      });
    });
