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

// binary node treeTwo

// for sake of mocking, use A, B, C, D etc. to help compare matches
// A = 11
// B = 19
// C = 7
// D = 4

const A = new TreeConstructors.Node(11);
const twelve = new TreeConstructors.Node(12);
const fourteen = new TreeConstructors.Node(14);
const B = new TreeConstructors.Node(19);
const seventeen = new TreeConstructors.Node(17);
const eighteen = new TreeConstructors.Node(18);
const C = new TreeConstructors.Node(7);
const twentytwo = new TreeConstructors.Node(22);
const D = new TreeConstructors.Node(4);

//  construct the binary treeTwo

//  visual representation of treeTwo
//                    11
//                   /  \
//                 12    17
//                /     / \
//               14   18   22
//              /    /      \
//            19    7        4
A.left = twelve;
twelve.left = fourteen;
fourteen.left = B;
A.right = seventeen;
seventeen.left = eighteen;
eighteen.left = C;
seventeen.right = twentytwo;
twentytwo.right = D;

// binary node treeThree
// all different values to test 'null compare'
const E = new TreeConstructors.Node(10);
const F = new TreeConstructors.Node(12);
const G = new TreeConstructors.Node(14);
const H = new TreeConstructors.Node(26);
const I = new TreeConstructors.Node(17);
const J = new TreeConstructors.Node(18);
const K = new TreeConstructors.Node(29);
const L = new TreeConstructors.Node(22);
const M = new TreeConstructors.Node(32);

//  construct the binary treeThree

//  visual representation of treeThree
//                    10
//                   /  \
//                 12    17
//                /     / \
//               14   18   22
//              /    /      \
//            26    29      32
E.left = F;
F.left = G;
G.left = H;
E.right = I;
I.left = J;
J.left = K;
I.right = L;
L.right = M;

const treeUno = new TreeConstructors.BinaryTree(eleven);
const treeDos = new TreeConstructors.BinaryTree(A);
const treeTres = new TreeConstructors.BinaryTree(E);

function tree_intersection(treeOne, treeTwo) {
  const treeOneMap = new Map();
  const valueCompareObj = {};
  // console.log(treeOneMap);

  function preOrderTraversalOne(rootNode) {
    if (!rootNode) {
      // this is 'default' when null is reached
      // without returning undefined, the recursion would stop at null
      return undefined;
    }
    treeOneMap.set(rootNode.value);
    preOrderTraversalOne(rootNode.left);
    preOrderTraversalOne(rootNode.right);
    return treeOneMap;
  }

  preOrderTraversalOne(treeOne);

  function preOrderTraversalTwo(rootNode) {
    if (!rootNode) {
      // this is 'default' when null is reached
      // without returning undefined, the recursion would stop at null
      return undefined;
    }

    if (treeOneMap.has(rootNode.value) && !valueCompareObj[`${rootNode.value}`]) {
      valueCompareObj[`${rootNode.value}`] = rootNode.value;
    }

    preOrderTraversalTwo(rootNode.left);
    preOrderTraversalTwo(rootNode.right);
    return valueCompareObj;
  }

  return preOrderTraversalTwo(treeTwo);
}

// exports for testing
const treeIntersection = {};

// store trees for testing
treeIntersection.trees = {};
treeIntersection.trees.treeUno = treeUno;
treeIntersection.trees.treeDos = treeDos;
treeIntersection.trees.treeTres = treeTres;

// store functions for testing
treeIntersection.functions = {};
treeIntersection.functions.tree_intersection = tree_intersection;

// uncomment for debugging or testing
// const finalCompareValues = tree_intersection(treeUno.root, treeDos.root);
// console.log(finalCompareValues); // { '4': 4, '7': 7, '11': 11, '19': 19 }

module.exports = treeIntersection;
