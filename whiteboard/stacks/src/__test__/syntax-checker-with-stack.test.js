'use strict';

const SyntaxChecker = require('../lib/syntax_checker_with_stack');

// test open and closing for correct syntax
const validStrings = {
  one: '{}',
  two: '{{(())}}',
  three: '{}(){}',
  four: '()[[ExtraCharacters]]',
  five: '(){}[[]]',
  six: '{}{Code}[Fellows](())',
};

const invalidStrings = {
  one: '[({}]',
  two: '(](',
  three: '{(})',
  four: '[{}(){)]',
  five: '}({})[{}]',
  six: '',
};

describe('testing syntax_checker_with_stack.js', () => {
  // valid string tests
  Object.values(validStrings).forEach((stringToCheck) => {
    test('test all VALID strings return TRUE', () => {
      expect(SyntaxChecker.main(stringToCheck)).toEqual(true);
    });
  });
  // invalid string tests
  Object.values(invalidStrings).forEach((stringToCheck) => {
    test('test all INVALID strings return FALSE or NULL', () => {
      if (stringToCheck === '') {
        expect(SyntaxChecker.main(stringToCheck)).toEqual(null);
      }
      if (stringToCheck !== '') {
        expect(SyntaxChecker.main(stringToCheck)).toEqual(false);
      }
    });
  });
});
