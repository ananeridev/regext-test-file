const readline = require('readline-sync');

const pattern = /^(CLASS|CLASS2)\/(app|hml|dev)\/(routepayment|routepayment_payment)$/;

function testRegex(input) {
  return pattern.test(input);
}

while (true) {
  const input = readline.question('Enter a string to test against the regex (or "exit" to quit): ');

  if (input.toLowerCase() === 'exit') {
    break;
  }

  const isMatch = testRegex(input);
  console.log(`String: "${input}" - Match: ${isMatch}`);
}
