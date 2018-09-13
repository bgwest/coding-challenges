'use strict';

const _array_shift = require('../lib/array_shift');

describe('Running the _array_shift.runShift method.', () => {
  test('shift: That valid params ( [ ... , ... , ... ], number ), do not return null.', () => {
    expect(_array_shift.runShift([4, 5, 7, 2, 1, 9, 10], 24)).toEqual([4, 5, 7, 2, 24, 1, 9, 10]);
  });
  test('shift: If param1 is not an array, that it returns null.', () => {
    expect(_array_shift.runShift('array, of, strings', 9)).toEqual(null);
  });
  test('shift: If param2 is not NaN, that it returns null.', () => {
    expect(_array_shift.runShift([1, 2, 3, 4, 5, 7, 8], '9')).toEqual(null);
  });
  test('shift: If the array has any values that are NaN, that it returns null.', () => {
    expect(_array_shift.runShift([1, 2, 3, 4, 'a', 9, 10, 19], 30)).toEqual(null);
  });
});
