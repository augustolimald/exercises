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
  const lines = input.split('\n');
  const prices = lines[1].split(' ');
  return lines[2].split(' ').map(order => new Number(prices[order - 1]));
}

function process(data) {
  const sorted = data.sort((a, b) => a - b);

  let price = 0;
  while (sorted.length > 1) {
    const n1 = sorted.shift();
    const n2 = sorted.shift();
    price += n1 > n2 ? n1 : n2;
  }

  const lastRemoved = sorted.shift();
  price += lastRemoved || 0;

  return price;
}

function convertOutput(data) {
  return data;
}
