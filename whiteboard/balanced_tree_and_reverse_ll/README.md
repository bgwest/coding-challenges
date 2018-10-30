![CF](./src/lib/assests/reverse_ll.jpg) 

![Build Status](https://travis-ci.com/bgwest/coding-challenges.svg?branch=balanced_tree_and_reverse_ll)

## Code Challenge 39: balanced_tree and reverse_ll

### Objective
This is a 3 fold challenge that requires writing one script to determine if a binary tree is balance and another script to reverse a linked list in 3 different ways.

### BigO 
for each "notable function"

#### balanced_trees.js

###### recursiveHeightHelper()

- Time Complexity: O(H)
- Space Complexity: O(N)

###### isTreeBalanced()

- Time Complexity: O(1)
- Space Complexity: O(2) = O(1)

#### reverse_ll.js

###### LinkedList.prepend()

- Time Complexity: O(1)
- Space Complexity: O(1)

###### LinkedList.append()

- Time Complexity: O(n)
- Space Complexity: O(n)

###### reverseLinkedList.functions.loopAndStack()

- Time Complexity: O(n)
- Space Complexity: O(n)

###### reverseLinkedList.functions.popAndLink()

- Time Complexity: O(n)
- Space Complexity: O(n)

### Run Examples

#### balanced_tree

[x] run balanced_tree to determine if a binary tree is balanced
```
// test for balancedTree
const getLeftHeight = treeIntersection.functions.calculateHeight(balancedTree.root.left);
const getRightHeight = treeIntersection.functions.calculateHeight(balancedTree.root.right);
const testBalance = treeIntersection.functions.isTreeBalanced(getLeftHeight, getRightHeight);
console.log(testBalance); // true

// test for unBalancedTree
const getLeftHeightTwo = treeIntersection.functions.calculateHeight(unBlancedTree.root.left);
const getRightHeightTwo = treeIntersection.functions.calculateHeight(unBlancedTree.root.right);
const testBalanceTwo = treeIntersection.functions.isTreeBalanced(getLeftHeightTwo, getRightHeightTwo);
console.log(testBalanceTwo); // false
```

#### reverse_ll

```
// original order = 19, 18, 17, 16, 15, 14, 13, 12, 11, 10
const reversalWithStackStepOne = reverseLinkedList.functions.loopAndStack(newList);
console.log(reversalWithStackStepOne);
const reversalWithStackStepTwo = reverseLinkedList.functions.popAndLink(reversalWithStackStepOne);
console.log(reversalWithStackStepTwo); // 10, 11, 12, 13, 14, 15, 16, 17, 18, 19
console.log(reversalWithStackStepTwo.getLength()); // 10
```

*NOTE: uncomment out debugging section in code to run tests as well.*

### Tests Performed with Jest

#### balanced_tree.js
- test if balanced tree is balanced (returns TRUE)
- test if un-balanced tree is indeed un-balanced (returns FALSE)

#### reverse_ll.js
- test each value is in reverse order from original linked list value set

### Installing

To use this in your code:

- git clone repo 
- npm install 
- require('../src/lib/balanced_tree_and_reverse_ll');

## Built With

* Node
* Eslint
* jest

## Authors

![CF](http://i.imgur.com/7v5ASc8.png) **Benjamin West** 
