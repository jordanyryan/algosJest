const findMissingNum = require('./index');

test("Tests to see if findMissingNum is a function", () => {
  expect(typeof findMissingNum).toEqual('function');
});

test("Tests to see that findMissingNum returns a number", () => {
  expect(typeof findMissingNum([1,2,3,4,5], [1,3,4,5])).toEqual('number');
});

test("Expects findMissingNum to return correct missing number", () => {
  expect(findMissingNum([1,2,3,4,5], [1,3,4,5])).toEqual(2);
});

test("Expects findMissingNum to return correct missing number when the missing number's index is 0", () =>{
  expect(findMissingNum([1,2,3,4,5], [2,3,4,5])).toEqual(1);
});

test("Expects findMissingNum to return correct missing number when the missing number's index is arr1.length-1", () => {
  expect(findMissingNum([1,2,3,4,5,6,7,8,9,10], [1,2,3,4,5,6,7,8,9])).toEqual(10);
});

test("Expects findMissingNum to NOT return incorrect values", () => {
  expect(findMissingNum([1,2,3,4,5], [2,3,4,5])).not.toEqual(2);
});

