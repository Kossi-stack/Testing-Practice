const reverseString = require('./reverseStr');

test('reverse a string', () => {
  expect(reverseString('Dammy')).toBe('ymmaD');
})

test('reverse a string', () => {
  expect(reverseString('Microverse')).toBe('esrevorciM');
})