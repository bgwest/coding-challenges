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

// start - balancedTree

//  visual representation of blanacedTree
//                 3
//               /   \
//             9      20
//           /  \    /  \
//         1     0 15    7
//                        \
//                         8
// absolute height = 1

// branching the balancedTree
const three = new TreeConstructors.Node(3);
const nine = new TreeConstructors.Node(9);
const one = new TreeConstructors.Node(1);
const zero = new TreeConstructors.Node(0);
const twenty = new TreeConstructors.Node(20);
const fifteen = new TreeConstructors.Node(15);
const seven = new TreeConstructors.Node(7);
const eight = new TreeConstructors.Node(8);

//  constructing the balancedTree

// left
three.left = nine;
nine.left = one;
nine.right = zero;

// right
three.right = twenty;
twenty.left = fifteen;
twenty.right = seven;
seven.right = eight;

const balancedTree = new TreeConstructors.BinaryTree(three);

// start - unBalancedTree

//  visual representation of unBalancedTree
//                 3
//               /   \
//             9      20
//           /  \    /  \
//         1     0 15    7
//                        \
//                         8
//                          \
//                           100
// absolute height = 2

// branching the balancedTree
const threeB = new TreeConstructors.Node(3);
const nineB = new TreeConstructors.Node(9);
const oneB = new TreeConstructors.Node(1);
const zeroB = new TreeConstructors.Node(0);
const twentyB = new TreeConstructors.Node(20);
const fifteenB = new TreeConstructors.Node(15);
const sevenB = new TreeConstructors.Node(7);

// extra nodes to throw tree off balance
const eightB = new TreeConstructors.Node(8);
const hundredB = new TreeConstructors.Node(100);

//  constructing the unBalancedTree

// left
threeB.left = nineB;
nineB.left = oneB;
nineB.right = zeroB;

// right
threeB.right = twentyB;
twentyB.left = fifteenB;
twentyB.right = sevenB;
sevenB.right = eightB;
// extra node to throw original tree off balance
eightB.right = hundredB;

const unBlancedTree = new TreeConstructors.BinaryTree(threeB);

// functions

function isTreeBalanced(leftTree, rightTree) {
  const heightDifference = Math.abs(leftTree - rightTree);
  console.log(heightDifference);
  if (heightDifference > 1) {
    return false;
  } // else
  return true;
}

const calculateHeight = (tree) => {
  // this starts the process
  return recursiveHeightHelper(tree); // eslint-disable-line no-use-before-define
};


let recursiveHeightHelper = (root) => {
  // base case
  if (root === null) {
    return -1;
  }
  if (root.left === null && root.right === null) {
    // if I am a leaf, my height is 0
    return 0;
  }
  // recursive case
  //   Thought process
  //     Hey...I have no idea how to solve this.
  //     Let me just calculate the height of my left and right children
  //     Let them deal with that calculation, and I'm just going to
  //     add one their results, because I know I'm one level higher.
  const leftChildHeight = recursiveHeightHelper(root.left);
  const rightChildHeight = recursiveHeightHelper(root.right);
  const highestValue = Math.max(leftChildHeight, rightChildHeight);
  return highestValue + 1;
};

// start exports
const treeIntersection = {};

// store trees for testing
treeIntersection.trees = {};
treeIntersection.trees.balancedTree = balancedTree;
treeIntersection.trees.unBalancedTree = unBlancedTree;

// store functions for testing
treeIntersection.functions = {};
treeIntersection.functions.calculateHeight = calculateHeight;
treeIntersection.functions.isTreeBalanced = isTreeBalanced;

// uncomment for debugging or testing

// test for balancedTree
// const getLeftHeight = treeIntersection.functions.calculateHeight(balancedTree.root.left);
// const getRightHeight = treeIntersection.functions.calculateHeight(balancedTree.root.right);
// console.log(getLeftHeight);
// console.log(getRightHeight);
// const testBalance = treeIntersection.functions.isTreeBalanced(getLeftHeight, getRightHeight);
// console.log(testBalance); // true
//
// // test for unBalancedTree
// const getLeftHeightTwo = treeIntersection.functions.calculateHeight(unBlancedTree.root.left);
// const getRightHeightTwo = treeIntersection.functions.calculateHeight(unBlancedTree.root.right);
// console.log(getLeftHeightTwo);
// console.log(getRightHeightTwo);
// const testBalanceTwo = treeIntersection.
// functions.isTreeBalanced(getLeftHeightTwo, getRightHeightTwo);
// console.log(testBalanceTwo); // false

module.exports = treeIntersection;
