const binarySearch = require('./index');

test("Tests to see that binarySearch is a function", () => {
  expect(typeof binarySearch).toEqual('function');
});

test("Expects binarySearch to return a boolean", () => {
  expect(typeof binarySearch([1,3,4,5,6], 2)).toEqual('boolean');
});

test("Expects binarySearch to be false when given a key not in the array", () => {
  expect(binarySearch([1,3,4,5,6], 2)).toEqual(false);
});

test("Expects binarySearch to be false when given a key not in the array", () => {
  expect(binarySearch([1,3,4,5,6], 10)).toEqual(false);
});

test("Expects binarySearch to be false when given a key not in the array", () => {
  expect(binarySearch([1,3,4,5,6,8,11,13,17], 14)).toEqual(false);
});

test("Expects binarySearch to be true when given a key that is in the array", () => {
  expect(binarySearch([1,2,3,5,6,8], 3)).toEqual(true);
});

test("Expects binarySearch to be true when given a key that is in the array", () => {
  expect(binarySearch([1,2,3,5,6,8], 6)).toEqual(true);
});