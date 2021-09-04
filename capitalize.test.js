const capitalize = require('./capitalize');

test('make first letter capitalize', () => {
  expect(capitalize('green')).toMatch('Green');
});

test('make first letter capitalize', () => {
  expect(capitalize('subsequently')).toMatch('Subsequently');
})

test('throw error if empty', () => {
  expect(() => {
    capitalize('');
  }).toThrow();
})