const {searchMatrix, matrix} = require('./index');

test("Tests to see if searchMatrix is a function", () => {
  expect(typeof searchMatrix).toEqual('function');
});

test("Tests to see if searchMatrix filled with correct params, returns a boolean", () => {
  expect(typeof searchMatrix(matrix, 5)).toEqual('boolean');
});

test("Expects searchMatrix function to return true when key is inside the matrix", () => {
  expect(searchMatrix(matrix, 1)).toEqual(true);
});

test("Expects searchMatrix function to return true when key is inside the matrix", () => {
  expect(searchMatrix(matrix, 5)).toEqual(true);
});

test("Expects searchMatrix function to return true when key is inside the matrix", () => {
  expect(searchMatrix(matrix, 18)).toEqual(true);
});

test("Expects searchMatrix function to return false when key is NOT inside the matrix", () => {
  expect(searchMatrix(matrix, 0)).toEqual(false);
});

test("Expects searchMatrix function to return false when key is NOT inside the matrix", () => {
  expect(searchMatrix(matrix, 20)).toEqual(false);
});

test("Expects searchMatrix function to return false when key is NOT inside the matrix", () => {
  expect(searchMatrix(matrix, 35)).toEqual(false);
});