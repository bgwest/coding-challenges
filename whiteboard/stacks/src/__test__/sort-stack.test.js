'use strict';

const SortStack = require('../lib/sort-stack');

describe('sort-stack.js', () => {
  test('return order of sort-stack test case 1 is as expected', () => {
    expect(SortStack.testCases.test1).toEqual([20, 5, 3, 2, 1, 0]);
  });
});
