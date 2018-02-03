const romanToNum = require('./index');

test("Tests to see if romanToNum is a function", () => {
  expect(typeof romanToNum).toEqual('function');
});

test("Expects return value of romanToNum to be a number", () => {
  expect(typeof romanToNum("XXI")).toEqual('number');
});

test("Expects romanToNum to return correct number", () => {
  expect(romanToNum("II")).toEqual(2);
});

test("Expects romanToNum to return correct number", () => {
  expect(romanToNum("III")).toEqual(3);
});

test("Expects romanToNum to return correct number", () => {
  expect(romanToNum("V")).toEqual(5);
});

test("Expects romanToNum to return correct number", () => {
  expect(romanToNum("XCIX")).toEqual(99);
});

test("Expects romanToNum to return correct number", () => {
  expect(romanToNum("MMMCMXCIX")).toEqual(3999);
});


test("Expects romanToNum to return correct number", () => {
  expect(romanToNum("XVI")).toEqual(16);
});

test("Expects romanToNum to return correct number", () => {
  expect(romanToNum("IX")).toEqual(9);
});

test("Expects romanToNum to return correct number", () => {
  expect(romanToNum("XXI")).toEqual(21);
});

test("Expects romanToNum to return correct number", () => {
  expect(romanToNum("MDCLXVI")).toEqual(1666);
});

test("Expects romanToNum to return correct number", () => {
  expect(romanToNum("MMVIII")).toEqual(2008);
});

test("Expects romanToNum to return correct number", () => {
  expect(romanToNum("MCMXC")).toEqual(1990);
});

test("Expects romanToNum to NOT return incorrect number", () => {
  expect(romanToNum("MDCLXVI")).not.toEqual(1766);
});

