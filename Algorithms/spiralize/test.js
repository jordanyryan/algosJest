const {spiralize, spirOf4, spirOf5} = require('./index');

test('expect spiralize to be a function', () => {
  expect(typeof spiralize).toEqual('function');
});

test('expect spiralize when n = 5 to have 5 arrays', () => {
  expect(spiralize(5).length).toEqual(5);
});

test('expect spiralize when n = 5 to have 5 elements in each inner array', () => {
  expect(spiralize(5)[0].length).toEqual(5);
});

test('expect spiralize when n = 4 to equal spirOf4', () => {
  expect(spiralize(4)).toEqual(spirOf4);
});

test('expect spiralize when n = 5 to equal spirOf5', () => {
  expect(spiralize(5)).toEqual(spirOf5);
});
