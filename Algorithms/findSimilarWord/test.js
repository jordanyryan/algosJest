const {findSimilarWord, words} = require('./index');
// Test for findSimilarWord go here

test("Tests to see that findSimilarWord is a function", () => {
  expect(typeof findSimilarWord).toEqual('function');
});

test("Tests to see that findSimilarWord returns a word", () => {
  expect(typeof findSimilarWord("strawberry", words)).toEqual("string");
});

test("Tests to see that findSimilarWord returns correct word", () => {
  expect(findSimilarWord("strawberry", words)).toEqual("strawberry");
});

test("Tests to see that findSimilarWord returns correct word", () => {
  expect(findSimilarWord("strawbery", words)).toEqual("strawberry");
});

test("Tests to see that findSimilarWord returns correct word", () => {
  expect(findSimilarWord("berry", words)).toEqual("cherry");
});

test("Tests to see that findSimilarWord returns correct word", () => {
  expect(findSimilarWord("heaven", "java"));
});

test("Tests to see that findSimilarWord does NOT return incorrect word", () => {
  expect(findSimilarWord("berry", words)).toEqual("melon");
});
