'use strict';

const treeInsertion = require('../lib/tree_intersection');

describe('testing tree_insertion.js', () => {
  test('test that returned object is blank when no matches are found', () => {
    const testTreeInsertion = treeInsertion.functions
      .tree_intersection(treeInsertion.trees.treeUno.root,
        treeInsertion.trees.treeTres.root);
    expect(testTreeInsertion).toEqual({});
  });
  test('test that returned object first value is 4 when compared to object with matches', () => {
    const testTreeInsertion = treeInsertion.functions
      .tree_intersection(treeInsertion.trees.treeUno.root,
        treeInsertion.trees.treeDos.root);
    expect(testTreeInsertion['4']).toEqual(4);
  });
  test('test that returned object second value is 7 when compared to object with matches', () => {
    const testTreeInsertion = treeInsertion.functions
      .tree_intersection(treeInsertion.trees.treeUno.root,
        treeInsertion.trees.treeDos.root);
    expect(testTreeInsertion['7']).toEqual(7);
  });
});
