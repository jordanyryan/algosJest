const numToRoman = require('./index');

test("Tests to see if numToRoman is a function", () => {
  expect(typeof numToRoman).toEqual('function');
});

test("Expects return value of numToRoman to be a string", () => {
  expect(typeof numToRoman(21)).toEqual('string');
});

test("Expects numToRoman to return correct string", () => {
  expect(numToRoman(2)).toEqual("II");
});

test("Expects numToRoman to return correct string", () => {
  expect(numToRoman(3)).toEqual("III");
});

test("Expects numToRoman to return correct string", () => {
  expect(numToRoman(5)).toEqual("V");
});

test("Expects numToRoman to return correct string", () => {
  expect(numToRoman(9)).toEqual("IX");
});

test("Expects numToRoman to return correct string", () => {
  expect(numToRoman(16)).toEqual("XVI");
});

test("Expects numToRoman to return correct string", () => {
  expect(numToRoman(21)).toEqual("XXI");
});

test("Expects numToRoman to return correct string", () => {
  expect(numToRoman(99)).toEqual("XCIX");
});

test("Expects numToRoman to return correct string", () => {
  expect(numToRoman(1666)).toEqual("MDCLXVI");
});

test("Expects numToRoman to return correct string", () => {
  expect(numToRoman(1990)).toEqual("MCMXC");
});

test("Expects numToRoman to return correct string", () => {
  expect(numToRoman(2008)).toEqual("MMVIII");
});

test("Expects numToRoman to NOT return incorrect string", () => {
  expect(numToRoman(1766)).not.toEqual("MDCLXVI");
});

test("Expects numToRoman to return correct string", () => {
  expect(numToRoman(3999)).toEqual("MMMCMXCIX");
});