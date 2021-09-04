const stringLength = require('./stringLength');

test('if string length is greater than 1 and less than or equal to 10', () => {
  expect(stringLength('Adedamola')).toBe(true);
});

test('if string length is greater than 1 and less than or equal to 10', () => {
  expect(stringLength('Adedamola Shittu')).toBe(false);
});

test('if string length is greater than 1 and less than or equal to 10', () => {
  expect(stringLength('Zeenat')).toBe(true);
});

test('if string length is greater than 1 and less than or equal to 10', () => {
  expect(stringLength('Zeenat Lawal')).toBe(false);
});