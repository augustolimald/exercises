const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf8');

console.log(execute(input));

function execute(input) {
  const data = convertInput(input);
  const result = process(data);
  const output = convertOutput(result);
  return output;
}

function convertInput(input) {
  return new Number(input);
}

function process(data) {
  const possibilities = [];

  for (let i = 1; i < data / i; i++) {
    if (data % i == 0) {
      possibilities.push([i, data / i]);
    }
  }

  return possibilities;
}

function convertOutput(data) {
  return data.map(([x, y]) => `${x} x ${y}`).join('\n');
}
