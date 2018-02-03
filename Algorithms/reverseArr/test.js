const {reverseSameArr, reverseNewArr} = require('./index');

test('expect reverseArr to be a function', () => {
  expect(typeof reverseSameArr).toEqual('function');
});

test('expect reverseNewArr to be a function', () => {
  expect(typeof reverseNewArr).toEqual('function');
});

test('expect reverseSameArr([1,2,3]) to return the same array reversed of [3,2,1]', () => {
  let arr = [1,2,3];
  reverseSameArr(arr);
  expect(arr).toEqual([3,2,1]);
});

test('expect reverseSameArr([1,2,3,4,5]) to return the same array reversed of [5,4,3,2,1]', () => {
  let arr = [1,2,3,4,5];
  reverseSameArr(arr);
  expect(arr).toEqual([5,4,3,2,1]);
});

test('expect reverseSameArr(["a","b","c","d"]) to return the same array reversed of ["d","c","b","a"]', () => {
  let arr = ["a","b","c","d"];
  reverseSameArr(arr);
  expect(arr).toEqual(["d","c","b","a"]);
});

test('expect reverseNewArr([1,2,3]) to not change original array', () => {
  let arr = [1,2,3];
  reverseNewArr(arr);
  expect(arr).toEqual([1,2,3]);
});

test('expect reverseNewArr([1,2,3]) to equal [3,2,1]', () => {
  let arr = [1,2,3];
  expect(reverseNewArr(arr)).toEqual([3,2,1]);
});

test('expect reverseNewArr([1,2,3,4,5]) to return a new array reversed of [5,4,3,2,1]', () => {
  let arr = [1,2,3,4,5];
  expect(reverseNewArr(arr)).toEqual([5,4,3,2,1]);
});