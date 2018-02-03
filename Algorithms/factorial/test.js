const {factorial, memoize} = require('./index');

test('factorial is a function', () => {
  expect(typeof factorial).toEqual('function');
});


test('expects factorial of 5 is 120', () => {
  expect(factorial(5)).toEqual(120);
});

test('expects factorial of 6 is 720', () => {
  expect(factorial(6)).toEqual(720);
})

test('expect factorial of 10 is 3628800', () => {
  expect(factorial(10)).toEqual(3628800);
})

test('expects factorial of 4 to NOT be 120', () => {
  expect(factorial(4)).not.toEqual(120);
});

// test('memoize is a function', () => {
//   expect(typeof memoize).toEqual('function');
// });

// test('you can memoize the factorial function', () => {
//     expect(typeof memoize(factorial)).toEqual('function');
// });

// test('memoization of factorial of 5 is still 120', () => {
//     factorial = memoize(factorial)
//     expect(factorial(5)).toEqual(120);
// });

