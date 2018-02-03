const handshakes = require('./index');

test('expect handshakes is a function', () => {
  expect(typeof handshakes).toEqual('function');
});

test('expect handshakes of 5 to equal 10', () => {
  expect(handshakes(5)).toEqual(10);
});

test('expect handshakes of 6 to equal 15', () => {
  expect(handshakes(6)).toEqual(15);
});

test('expect handshakes of 10 to equal 45', () => {
  expect(handshakes(10)).toEqual(45);
});

test('expect handshakes of 7 to NOT equal 22', () => {
  expect(handshakes(7)).not.toEqual(22);
});