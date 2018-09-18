![CF](./src/lib/assests/ll_insertions.JPG) coding-challenge-06: ll_insertions
===
[![Build Status](https://travis-ci.com/bgwest/coding-challenges.svg?branch=master)](https://travis-ci.com/bgwest/coding-challenges)

### Summary

* .append -- adds new node to end of list
* .prependReplace -- replaces node at beginning of list

// stretch goals
* .insertBefore -- adds new node to the beginning of the list
* .insertAfter -- adds new node to 2nd position from beginning

### Running

Example:
```
let newLinkedList = new LinkedList();
newLinkedList.append(10);
newLinkedList.append(2);
newLinkedList.append(8);

newLinkedList.prependReplace(1);
```

### Tests Performed with Jest
- creating a new node with Node class. Expecting an object.
- Instantiate new linkedList class. Expecting an object.
- Create a new linked list and append a value. Should equal 10.

### Installing

To use this in your code:

- git clone repo 
- npm install 
- require('../src/lib/ll_insertions');

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
