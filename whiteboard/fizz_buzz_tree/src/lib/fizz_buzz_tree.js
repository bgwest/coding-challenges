'use strict';

const fizzBuzz = {};

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

// binary nodes
const five = new Node(5);
const seven = new Node(7);
const eleven = new Node(11);
const three = new Node(3);
const eight = new Node(8);
const six = new Node(6);
const ninteen = new Node(19);
const four = new Node(4);
const fifteen = new Node(15);

//  construct the binary tree
eleven.left = three;
eleven.right = eight;
three.left = seven;
seven.left = fifteen;
eight.left = four;
eight.right = six;
six.right = ninteen;
four.left = five;
//  visual representation of the above construct
//                    11
//                   /  \
//                 3     8
//                /     / \
//               7     4   6
//              /     /     \
//            15     5       19

// convert applicable node values to either fizz, buzz, or fizzbuzz
function fizzBuzzTree(tree) {
  const fizz = tree.value % 3;
  const buzz = tree.value % 5;
  if (fizz === 0) {
    tree.value = 'fizz';
  }
  if (buzz === 0) {
    tree.value = 'buzz';
  }
  if (fizz === 0 && buzz === 0) {
    tree.value = 'fizzbuzz';
  }
}

function preOrderTraversal(root, typeCounter) {
  if (!root) {
    // this is 'default' when null is reached
    // without returning undefined, the recursion would stop at null
    return undefined;
  }
  fizzBuzzTree(root);
  if (root.value === 'fizz' && typeCounter.type === 'fizz') {
    typeCounter.counter += 1;
  }
  if (root.value === 'buzz' && typeCounter.type === 'buzz') {
    typeCounter.counter += 1;
  }
  if (root.value === 'fizzbuzz' && typeCounter.type === 'fizzbuzz') {
    typeCounter.counter += 1;
  }
  // console.log(`Visiting ${root.value}`);
  preOrderTraversal(root.left, typeCounter);
  preOrderTraversal(root.right, typeCounter);
  if (typeCounter !== 0) {
    return typeCounter;
  }
  return root;
}

const tree = new BinaryTree(eleven);
// adding tree to module.exports
fizzBuzz.tree = tree;

// adding main traversal run to module.exports
fizzBuzz.runTraversal = (tree, typeCounter) => { // eslint-disable-line
  return preOrderTraversal(tree.root, typeCounter);
};

// add testing to module export
fizzBuzz.tests = {};
fizzBuzz.tests.findFizzBuzz = (tree, typeCounter) => { // eslint-disable-line
  return preOrderTraversal(tree.root, typeCounter);
};
// fizzBuzz.tests.countTheFizz =

// uncomment these for testing and or debugging
// const normalRun = fizzBuzz.runTraversal(tree, 0);
// const countTheFizz = fizzBuzz.tests.findFizzBuzz(tree, { type: 'fizz', counter: 0});
// const countTheBuzz = fizzBuzz.tests.findFizzBuzz(tree, { type: 'buzz', counter: 0});
// const countTheFizzBuzz = fizzBuzz.tests.findFizzBuzz(tree, { type: 'fizzbuzz', counter: 0});

// console logs
// console.log(normalRun);
// console.log(countTheFizz);
// console.log(countTheBuzz);
// console.log(countTheFizzBuzz);

module.exports = fizzBuzz;
