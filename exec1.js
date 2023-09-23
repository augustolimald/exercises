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
  return input.split(' ').map(data => new Number(data));
}

function process(data) {
  const [x1, y1, x2, y2] = data;
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

function convertOutput(data) {
  return data.toFixed(2);
}
