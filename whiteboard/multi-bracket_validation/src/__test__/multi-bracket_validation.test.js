'use strict';

const multiBracketValidation = require('../lib/multi-bracket_validation');

describe('testing multi-bracket_validation.js', () => {
  test('test that a string with valid bracket syntax, should return true', () => {
    const testBuild = multiBracketValidation.functions.buildStack(multiBracketValidation.testStrings.validStrings['2']);
    const testValidate = multiBracketValidation.functions.validateBuild(testBuild);
    expect(testValidate).toEqual(true);
  });
});
