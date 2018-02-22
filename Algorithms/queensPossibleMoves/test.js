const queensPossibleMovies = require('./index');

test("Tests to see that queensPossibleMovies is a function", () => {
  expect(typeof queensPossibleMovies).toEqual('function');
});

test("Tests to see that queensPossibleMovies returns a number", () => {
  expect(typeof queensPossibleMovies(5, [4,3], [[5,5], [4,2], [2,3]])).toEqual('number');
});

test("Tests to see that queensPossibleMovies returns the correct number", () => {
  expect(queensPossibleMovies(5, [4,3], [[5,5], [4,2], [2,3]])).toEqual(10);
});

test("Tests to see that queensPossibleMovies returns the correct number", () => {
  expect(queensPossibleMovies(5, [4,3], [[5,5],[5,2] [4,2], [2,3]])).toEqual(9);
});

test("Tests to see that queensPossibleMovies returns the correct number", () => {
  expect(queensPossibleMovies(5, [4,3], [[5,5],[5,2] [4,2], [2,3], [3,2]])).toEqual(7);
});

test("Tests to see that queensPossibleMovies returns the correct number", () => {
  expect(queensPossibleMovies(5, [4,3], [[5,5],[5,2] [4,2], [2,3], [2,5]])).toEqual(7);
});