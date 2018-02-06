const matchParenths = require('./index');

test("Tests to see that matchParenths is a function", () => {
  expect(typeof matchParenths).toEqual('function');
});

test("Tests to see that matchParenths returns a boolean", () => {
  expect(typeof matchParenths("((a+b) * (a-b))")).toEqual('boolean');
});

test("Expects matchParenths to evaluate parentheses in a given string are correct", () => {
  expect(matchParenths("((a+b) * (a-b))")).toEqual(true);
});

test("Expects matchParenths to evaluate parentheses in a given string are correct", () => {
  expect(matchParenths("((a+b) * (a-b) + (((b-a))))")).toEqual(true);
});

test("Expects matchParenths to evaluate parentheses in a given string are correct", () => {
  expect(matchParenths("(a+b) * (a-b) + (((b-a)))")).toEqual(true);
});

test("Expects matchParenths to evaluate parentheses in a given string are incorrect", () => {
  expect(matchParenths("((a+b) * (a-b) + (((b-a))")).toEqual(false);
});

test("Expects matchParenths to evaluate parentheses in a given string are incorrect", () => {
  expect(matchParenths("((a+b) * ((y-b) + b + (a*b) +(a-b) + (b-a)")).toEqual(false);
});