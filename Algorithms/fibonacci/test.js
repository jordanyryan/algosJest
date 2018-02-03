const {fibonacci, memoize} = require('./index');

test('fibonacci is a function', () => {
  expect(typeof fibonacci).toEqual('function');
});


test('expects fibonacci of 5 to equal 5', () => {
  expect(fibonacci(5)).toEqual(5);
});

test('expects fibonacci of 6 to equal 8', () => {
  expect(fibonacci(6)).toEqual(8);
})

test('expect fibonacci of 10 is 55', () => {
  expect(fibonacci(10)).toEqual(55);
})

test('expects fibonacci of 15 to equal 610', () => {
  expect(fibonacci(15)).toEqual(610);
});

test('expects fibonacci of 7 to NOT equal 21', () => {
  expect(fibonacci(7)).not.toEqual(21);
});

// test('memoize is a function', () => {
//   expect(typeof memoize).toEqual('function');
// });

// test('you can memoize the fibonacci function', () => {
//     expect(typeof memoize(fibonacci)).toEqual('function');
// });

// test('memoization of fibonacci of 5 is still 5', () => {
//     fibonacci = memoize(fibonacci);
//     expect(fibonacci(5)).toEqual(5);
// });
