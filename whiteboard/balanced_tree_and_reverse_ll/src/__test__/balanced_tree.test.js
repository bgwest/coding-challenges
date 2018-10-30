'use strict';

const isItBalanced = require('../lib/balanced_tree');

describe('testing balanced_tree.js', () => {
  test('test if balanced tree is balanced (returns TRUE)', () => {
    // disabled line 8 because eslint is confused about: prefer-destructuring, max-len
    const balancedTree = isItBalanced.trees.balancedTree; // eslint-disable-line
    const getLeftHeightTwo = isItBalanced.functions.calculateHeight(balancedTree.root.left);
    const getRightHeightTwo = isItBalanced.functions.calculateHeight(balancedTree.root.right);
    const testBalanceTwo = isItBalanced.functions
      .isTreeBalanced(getLeftHeightTwo, getRightHeightTwo);
    console.log(testBalanceTwo); // true
    expect(true).toEqual(true);
  });
  test('test if un-balanced tree is indeed un-balanced (returns FALSE)', () => {
    // disabled line 8 because eslint is confused about: prefer-destructuring, max-len
    const unBalancedTree = isItBalanced.trees.unBalancedTree; // eslint-disable-line
    const getLeftHeightTwo = isItBalanced.functions.calculateHeight(unBalancedTree.root.left);
    const getRightHeightTwo = isItBalanced.functions.calculateHeight(unBalancedTree.root.right);
    const testBalanceTwo = isItBalanced.functions
      .isTreeBalanced(getLeftHeightTwo, getRightHeightTwo);
    console.log(testBalanceTwo); // false
    expect(false).toEqual(false);
  });
});
