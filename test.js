const operations = require('./operations.js');
const assert = require('assert');

// Check general Calculator operations
it('Return correct total of 2 and 3', () => {
  assert.equal(operations.add(2, 3), 5);
});

it('Return correct total of -1 and -1', () => {
  assert.equal(operations.add(-2, -1), -3);
});

it('Return correct substraction of 47 and 11', () => {
  assert.equal(operations.subtract(47, 11), 36);
});

it('Return correct product of 12 and 12', () => {
  assert.equal(operations.multiply(12, 12), 144);
});

it('Return correct result of divition of 36 и 6', () => {
  assert.equal(operations.divide(36, 6), 6);
});

// Tests check that numbers was entered rather then strings
it('Error: one of the entry is string instead of number.', () => {
  assert.equal(operations.validateNumbers('sammy', 5), false);
});

it('Error: enter strings instead of numbers', () => {
  assert.equal(operations.validateNumbers('sammy', 'sammy'), false);
});

it('Correct entry', () => {
  assert.equal(operations.validateNumbers(5, 5), true);
});
