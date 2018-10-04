![CF](./src/lib/assests/fizz_buzz.JPG) 

[![Build Status](https://travis-ci.com/bgwest/coding-challenges.svg?branch=fizz_buzz_tree)

## coding-challenge-16: fizz_buzz_tree

##### Objective
Write a fn() called fizzBuzzTree() which takes a tree as an argument. Determine whether or not the value of each node is divisable by 3, 5, or both, and change the value of each of the nodes respectively.

* divisible by 3 = fizz
* divisible by 5 = buzz
* divisible by 3 & 5 = fizzbuzz

##### Limitations
* cannot use any built-in methods

##### BigO
- Space: O(H)
- Time: O(n)

### Running

Examples

[x] normal run
```
const normalRun = fizzBuzz.runTraversal(tree, 0);
console.log(countTheFizzBuzz);
```

[x] countTheFizz
```
const countTheFizz = fizzBuzz.tests.findFizzBuzz(tree, { type: 'fizz', counter: 0});
console.log(countTheFizz);
```

[x] countTheBuzz
```
const countTheBuzz = fizzBuzz.tests.findFizzBuzz(tree, { type: 'buzz', counter: 0});
console.log(countTheBuzz);
```

[x] countTheFizzBuzz
```
const countTheFizzBuzz = fizzBuzz.tests.findFizzBuzz(tree, { type: 'fizzbuzz', counter: 0});
console.log(countTheFizzBuzz);
```

*NOTE: uncomment out debugging section in code to run tests as well.*

### Tests Performed with Jest
- test for the correct amount of fizzes
- test for the correct amount of buzzes
- test for the correct amount of fizzbuzzes

### Installing

To use this in your code:

- git clone repo 
- npm install 
- require('../src/lib/fizz_buzz_tree');

## Built With

* Node
* Eslint
* jest

## Contributing

Please feel free to contribute. Master branch auto merge locked for approval.

## Versioning

*n/a*

## Authors

![CF](http://i.imgur.com/7v5ASc8.png) **Benjamin West** 

## License

*none*
