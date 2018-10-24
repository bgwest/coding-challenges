'use strict';

const multiBracketValidation = require('../lib/multi-bracket_validation');

describe('testing multi-bracket_validation.js', () => {
  test('test that validStrings[2] returns true', () => {
    const testBuild = multiBracketValidation.functions.buildStack(multiBracketValidation.testStrings.validStrings['2']);
    const testValidate = multiBracketValidation.functions.validateBuild(testBuild);
    expect(testValidate).toEqual(true);
  });
  test('test that invalid string test \'0\' returns false', () => {
    const testBuild = multiBracketValidation.functions.buildStack(multiBracketValidation.testStrings.invalidStrings['0']);
    const testValidate = multiBracketValidation.functions.validateBuild(testBuild);
    expect(testValidate).toEqual(false);
  });
  test('test that invalid string test \'1\' returns false', () => {
    const testBuild = multiBracketValidation.functions.buildStack(multiBracketValidation.testStrings.invalidStrings['1']);
    const testValidate = multiBracketValidation.functions.validateBuild(testBuild);
    expect(testValidate).toEqual(false);
  });
});
