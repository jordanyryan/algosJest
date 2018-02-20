const queensPossibleMovies = require('./index');

test("Tests to see that queensPossibleMovies is a function", () => {
  expect(typeof queensPossibleMovies).toEqual('function');
});

test("Tests to see that queensPossibleMovies returns a number", () => {
  expect(typeof queensPossibleMovies(5, [4,3], [[5,5], [4,2], [2,3]])).toEqual('number');
});