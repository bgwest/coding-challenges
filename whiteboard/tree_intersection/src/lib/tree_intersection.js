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
//                    10
//                   /  \
//                 12    17
//                /     / \
//               14   18   22
//              /    /      \
//            16    20      31
A.left = twelve;
twelve.left = fourteen;
fourteen.left = B;
A.right = seventeen;
seventeen.left = eighteen;
eighteen.left = C;
seventeen.right = twentytwo;
twentytwo.right = D;


const treeUno = new TreeConstructors.BinaryTree(eleven);
const treeDos = new TreeConstructors.BinaryTree(A);

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
    console.log(rootNode.value);
    treeOneMap.set(rootNode.value);
    // console.log(`Visiting ${root.value}`);
    preOrderTraversalOne(rootNode.left);
    preOrderTraversalOne(rootNode.right);
    return treeOneMap;
  }

  const treeOneValues = preOrderTraversalOne(treeOne);

  function preOrderTraversalTwo(rootNode) {
    if (!rootNode) {
      // this is 'default' when null is reached
      // without returning undefined, the recursion would stop at null
      return undefined;
    }

    if (treeOneMap.has(rootNode.value) && !valueCompareObj[`${rootNode.value}`]) {
      valueCompareObj[`${rootNode.value}`] = rootNode.value;
      console.log(valueCompareObj);
    }

    console.log(rootNode.value);
    treeOneMap.set(rootNode.value);
    // console.log(`Visiting ${root.value}`);
    preOrderTraversalTwo(rootNode.left);
    preOrderTraversalTwo(rootNode.right);
    return valueCompareObj;
  }

  const finalCompareValues = preOrderTraversalTwo(treeTwo);
  console.log(finalCompareValues);
}

tree_intersection(treeUno.root, treeDos.root);
