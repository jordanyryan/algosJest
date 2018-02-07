const anagrams = require('./index.js');

test('anagrams function exists', () => {
  expect(typeof anagrams).toEqual('function');
});

test('anagrams function returns a boolean', () => {
  expect(typeof anagrams('hello', 'llohe')).toEqual('boolean');
})

test('"hello" is an anagram of "llohe"', () => {
  expect(anagrams('hello', 'llohe')).toEqual(true);
});

test('"Whoa! Hi!" is an anagram of "Hi! Whoa!"', () => {
  expect(anagrams('Whoa! Hi!', 'Hi! Whoa!')).toEqual(true);
});

test('"One One" is not an anagram of "Two two two"', () => {
  expect(anagrams('One One', 'Two two two')).toEqual(false);
});

test('"One one" is not an anagram of "One one c"', () => {
  expect(anagrams('One one', 'One one c')).toEqual(false);
});

test('"A tree, a life, a bench" is not an anagram of "A tree, a fence, a yard"', () => {
  expect(
    anagrams('A tree, a life, a bench', 'A tree, a fence, a yard')
  ).toEqual(true);
});