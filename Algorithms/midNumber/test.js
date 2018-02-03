const midNumber = require('./index.js');

test('midNumber function exists', () => {
  expect(typeof midNumber).toEqual('function');
});

test('3 is the mid number of the array [1,4,3]', () => {
  expect(midNumber([1,4,3])).toEqual(3);
});

test('21 is the mid number of the array [21,6,120]', () => {
  expect(midNumber([21,6,120])).toEqual(21);
});

test('120 is NOT the mid number of the array [21,6,120]', () => {
  expect(midNumber([21,6,120])).not.toEqual(120);
});

