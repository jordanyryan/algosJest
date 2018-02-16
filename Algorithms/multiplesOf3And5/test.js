const sumOfMultiples = require('./index');

test("Tests to see that sumOfMultiples is a function", () => {
  expect(typeof sumOfMultiples).toEqual('function');
});

test("Tests to see that sumOfMultiples returns a number", () => {
  expect(typeof sumOfMultiples(10)).toEqual('number');
});

test("Expects sumOfMultiples to correctly return sum of multiples of 3 and 5", () => {
  expect(sumOfMultiples(10)).toEqual(23);
});

test("Expects sumOfMultiples to correctly return sum of multiples of 3 and 5", () => {
  expect(sumOfMultiples(15).toEqual(45);
});

test("Expects sumOfMultiples to correctly return sum of multiples of 3 and 5", () => {
  expect(sumOfMultiples(20)).toEqual(78);
});

test("Expects sumOfMultiples to correctly return sum of multiples of 3 and 5", () => {
  expect(sumOfMultiples(50)).toEqual(543);
});

test("Expects sumOfMultiples to correctly return sum of multiples of 3 and 5", () => {
  expect(sumOfMultiples(100)).toEqual(2318);
});

test("Expects sumOfMultiples to correctly return sum of multiples of 3 and 5", () => {
  expect(sumOfMultiples(10000)).toEqual(23331668);
});

test("Expects sumOfMultiples to incorrectly return sum of multiples of 3 and 5", () => {
  expect(sumOfMultiples(20)).not.toEqual(45);
});


