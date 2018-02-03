const isHoppable = require('./index');

test("Tests to see if isHoppable is a function", () => {
  expect(typeof isHoppable).toEqual('function');
});

test("Tests to see if return value from isHoppable is a boolean", () => {
  expect(typeof isHoppable([4,1,2,3,6])).toEqual('boolean');
});

test("Expects to return true if the array can be traversed successfully", () => {
  expect(isHoppable([4,2,0,0,2,0])).toEqual(true);
});

test("Expects to return true if the array can be traversed successfully", () => {
  expect(isHoppable([4,1,2,3,6])).toEqual(true);
});

test("Expects to return false if the array can NOT be traversed successfully", () => {
  expect(isHoppable([2,0,1,0,3])).toEqual(false);
});

test("Expects to return false if the array begins with a value of 0 at starting index", () => {
  expect(isHoppable([0,2,3,0,1])).toEqual(false);
});
