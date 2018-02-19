const {scheduleMeetings, schedules} = require('./index.js');

test("Tests to see that scheduleMeetings is a function", () => {
  expect(typeof scheduleMeetings).toEqual('function');
});

test("Tests to see that scheduleMeetings returns a string", () => {
  expect(typeof scheduleMeetings(schedules, "60")).toEqual('string');
});