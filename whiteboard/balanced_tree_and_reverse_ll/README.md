![CF](./src/lib/assests/reverse_ll.jpg) 

![Build Status](https://travis-ci.com/bgwest/coding-challenges.svg?branch=balanced_tree_and_reverse_ll)

## Code Challenge 39: balanced_tree and reverse_ll

### Objective
This is a 4 fold challenge that requires writing one script to determine if a binary tree is balance and another script to reverse a linked list in 3 different ways.

#### Edge Cases
* No matches return null
* Multiple matches should not set duplicate values in the returned object/array

#### BigO

##### balanced_trees

- Time: O(N + N + N + H) = O(N)
- Space: O(N)

##### reverse_ll

- Time: O(N + N + N + H) = O(N)
- Space: O(N)

### Run Examples

#### balanced_tree

[x] run balanced_tree to determine if a binary tree is balanced
```
// test for balancedTree
const getLeftHeight = treeIntersection.functions.calculateHeight(balancedTree.root.left);
const getRightHeight = treeIntersection.functions.calculateHeight(balancedTree.root.right);
console.log(getLeftHeight);
console.log(getRightHeight);
const testBalance = treeIntersection.functions.isTreeBalanced(getLeftHeight, getRightHeight);
console.log(testBalance); // true

// test for unBalancedTree
const getLeftHeightTwo = treeIntersection.functions.calculateHeight(unBlancedTree.root.left);
const getRightHeightTwo = treeIntersection.functions.calculateHeight(unBlancedTree.root.right);
console.log(getLeftHeightTwo);
console.log(getRightHeightTwo);
const testBalanceTwo = treeIntersection.functions.isTreeBalanced(getLeftHeightTwo, getRightHeightTwo);
console.log(testBalanceTwo); // false
```

#### reverse_ll

```
blah
```

*NOTE: uncomment out debugging section in code to run tests as well.*

### Tests Performed with Jest

#### balanced_tree.js
- test 1
- test 2
- test 3

#### reverse_ll.js
- test 1
- test 2
- test 3

### Installing

To use this in your code:

- git clone repo 
- npm install 
- require('../src/lib/balanced_tree');

## Built With

* Node
* Eslint
* jest

## Authors

![CF](http://i.imgur.com/7v5ASc8.png) **Benjamin West** 
