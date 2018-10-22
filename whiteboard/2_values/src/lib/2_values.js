'use strict';

// cannot use 2 files with quokka, using these classes in same file :(
const TreeConstructors = {};

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
}

TreeConstructors.BinaryTree = BinaryTree;
TreeConstructors.Node = Node;

// binary node treeOne
const five = new TreeConstructors.Node(5);
const seven = new TreeConstructors.Node(7);
const eleven = new TreeConstructors.Node(11);
const three = new TreeConstructors.Node(3);
const eight = new TreeConstructors.Node(8);
const six = new TreeConstructors.Node(6);
const ninteen = new TreeConstructors.Node(19);
const four = new TreeConstructors.Node(4);
const fifteen = new TreeConstructors.Node(15);

//  construct the binary treeOne
eleven.left = three;
eleven.right = eight;
three.left = seven;
seven.left = fifteen;
eight.left = four;
eight.right = six;
six.right = ninteen;
four.left = five;

//  visual representation of treeOne
//                    11
//                   /  \
//                 3     8
//                /     / \
//               7     4   6
//              /     /     \
//            15     5       19

const treeUno = new TreeConstructors.BinaryTree(eleven);

function twoValues(tree, fParentValue, fChildValue) {
  // found parent / found child
  let fParent = false;
  let fChild = false;

  function findChild(rootNote, childValue) {
    if (!rootNote) {
      return false;
    }

    if (rootNote.value === childValue) {
      console.log(`found CV: ${childValue}`);
      fChild = rootNote.value;
    }

    findChild(rootNote.left, childValue);
    findChild(rootNote.right, childValue);
    return fChild;
  }

  function findParent(rootNode, parentValue) {
    // pre-order traversal
    if (!rootNode) {
      // this is 'default' when null is reached
      // without returning undefined, the recursion would stop at null
      return undefined;
    }

    if (rootNode.value === parentValue) {
      console.log(`found parentValue: ${parentValue}`);
      // testNode = rootNode;
      fParent = rootNode;
    }

    findParent(rootNode.left, parentValue);
    findParent(rootNode.right, parentValue);
    return fParent;
  }
  const testParent = findParent(tree, fParentValue);
  return findChild(testParent, fChildValue);
}

// exports for testing
const treeFun = {};

// store trees for testing
treeFun.trees = {};
treeFun.trees.treeUno = treeUno;

// store functions for testing
treeFun.functions = {};
treeFun.functions.twoValues = twoValues;

// uncomment for debugging and testing
// console.log(twoValues(treeUno.root, 3, 4));

module.exports = treeFun;
