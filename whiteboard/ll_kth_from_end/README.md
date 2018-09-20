![CF](./src/lib/assests/ll_kth_from_end.JPG) coding-challenge-07: ll_kth_from_end
===
[![Build Status](https://travis-ci.com/bgwest/coding-challenges.svg?branch=master)](https://travis-ci.com/bgwest/coding-challenges)

### Summary

* .llKthFromEnd - return the kth value from the end of a linked list

### Running

Example:
```
const newLinkedList = new linkedLists.make();
newLinkedList.autoAppend(10);
const test = new linkedLists.find(newLinkedList, 4).kthFromEnd();
console.log(test); // 8
```

### Tests Performed with Jest
- creating a new node with Node class. Expecting an object.
- Instantiate new linkedList class. Expecting an object.
- Test program returns 18 for kth value of 9.
- Test program returns 10 for kth value of 5.

### Installing

To use this in your code:

- git clone repo 
- npm install 
- require('../src/lib/ll_kth_from_end');

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
