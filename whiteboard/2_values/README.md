![CF](./src/lib/assests/2_values.JPG) 

![Build Status](https://travis-ci.com/bgwest/coding-challenges.svg?branch=2_values)

## Code Challenge 28: 2_values

##### Objective
write a fn() called which takes in a tree and two values, and returns rue if the second value is a descendant of the first.

##### Edge Cases
* No child found should return false
* Child found should return true and the child

##### Knowns

* In this instance, there will never be repeat values

##### Limitations
* none given but warned that will be hard to solve in less than O(n^2)

##### BigO
- Space: O(logN)
- Time: O(N)

### Running

Examples

[x] run 2_values to compare created trees
```
const finalCompareValues = 2_values(treeUno.root, treeDos.root);
console.log(finalCompareValues); // { '4': 4, '7': 7, '11': 11, '19': 19 }
```

*NOTE: uncomment out debugging section in code to run tests as well.*

### Tests Performed with Jest
- test false is returned if JUST CHILD is NOT found
- test false is returned if child AND parent are NOT found
- test true is returned if child AND parent are FOUND

### Installing

To use this in your code:

- git clone repo 
- npm install 
- require('../src/lib/2_values');

## Built With

* Node
* Eslint
* jest

## Authors

![CF](http://i.imgur.com/7v5ASc8.png) **Benjamin West** 
