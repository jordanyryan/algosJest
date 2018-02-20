const {scheduleMeetings, schedules} = require('./index.js');

test("Tests to see that scheduleMeetings is a function", () => {
  expect(typeof scheduleMeetings).toEqual('function');
});

test("Tests to see that scheduleMeetings returns a string", () => {
  expect(typeof scheduleMeetings(schedules, "60")).toEqual('string');
});

test("Tests to see that scheduleMeetings returns correct meeting", () => {
  expect(scheduleMeetings(schedules, "60")).toEqual("12:15");
});

test("Tests to see that scheduleMeetings returns null if no meeting is possible", () => {
  expect(scheduleMeetings(schedules, "90")).toEqual(null);
});

test("Tests to see that scheduleMeetings returns null if no meeting is possible", () => {
  expect(scheduleMeetings(schedules, "120")).toEqual(null);
});

