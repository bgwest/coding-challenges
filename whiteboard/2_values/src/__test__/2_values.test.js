'use strict';

const treeFun = require('../lib/2_values');

describe('testing tree_insertion.js', () => {
  test('test false is returned if JUST CHILD is NOT found', () => {
    const tree = treeFun.trees.treeUno;
    const testTrees = treeFun.functions.twoValues(tree.root, 15, 3);
    expect(testTrees).toEqual(false);
  });
  test('test false is returned if child AND parent are NOT found', () => {
    const tree = treeFun.trees.treeUno;
    const testTrees = treeFun.functions.twoValues(tree.root, 29, 19);
    expect(testTrees).toEqual(false);
  });
  test('test true is returned if child AND parent are FOUND', () => {
    const tree = treeFun.trees.treeUno;
    const testTrees = treeFun.functions.twoValues(tree.root, 8, 19);
    function checkIfBothAreTrue() {
      if (testTrees) {
        // if false was not returned...
        return true;
      } // else
      return false;
    }
    expect(checkIfBothAreTrue()).toEqual(true);
  });
});
