![CF](./src/lib/assests/tree_intersection.JPG) 

[![Build Status](https://travis-ci.com/bgwest/coding-challenges.svg?branch=tree_intersection)

## Code Challenge 28: tree_intersection

##### Objective
write a fn() called tree_intersection that takes two binary trees as parameters and returns a set of values found in both trees.

##### Edge Cases
* No matches return null
* Multiple matches should not set duplicate values in the returned object/array

##### Limitations
* must solve in O(n^2) or less

##### BigO
- Space: O(N + N + N + H) = O(N)
- Time: O(N)

### Running

Examples

[x] run tree_intersection to compare created trees
```
const finalCompareValues = tree_intersection(treeUno.root, treeDos.root);
console.log(finalCompareValues); // { '4': 4, '7': 7, '11': 11, '19': 19 }
```

*NOTE: uncomment out debugging section in code to run tests as well.*

### Tests Performed with Jest
- test that returned object is blank when no matches are found
- test that returned object first value is 4 when compared to object with matches
- test that returned object second value is 7 when compared to object with matches

### Installing

To use this in your code:

- git clone repo 
- npm install 
- require('../src/lib/tree_intersection');

## Built With

* Node
* Eslint
* jest

## Authors

![CF](http://i.imgur.com/7v5ASc8.png) **Benjamin West** 
