'use strict';

// Problem
// sort stack

// Description
// Write a program to sort a stack such that the smallest items are on the top. You can
// use an additional temporary Stack, but you may not copy the elements into any other
// data-structure (such as an array). The Stack supports the following operations:
//   .push(), .pop(), .peek(), and .isEmpty()

// Our Stack -- LIFO
class Stack {
  constructor() {
    this.stack = [];
  }

  // Available Stack methods:
  //   - .push - pushes (value) onto stack
  //   - .pop - pops (value) off the stack
  //   - .peek - peek at top value without 'the pop'
  //   - .isEmpty - returns true if stack is empty

  push(value) {
    return this.stack.push(value);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    // ensure we are dealing with a number
    return Number(this.stack[this.stack.length - 1]);
  }

  isEmpty() {
    if (!this.stack[0]) {
      return true;
    } // else
    return false;
  }
}

const stackOne = new Stack();
// this push method does not accept comma separated entries
// creating simple look to iterate and push
// test case 1
[1, 0, 20, 3, 2, 5].forEach((elem) => {
  stackOne.push(elem);
});

// test case 2
// [20, 21, 22, 25, 30, 0, 1].forEach((elem) => {
//   stackOne.push(elem);
// });

function finalSort(s2) {
  // s2.isEmpty method was not working... had to use .length on stack property
  // to get this while moving... loop back later to solve why
  while (s2.stack.length > 0) {
    stackOne.push(s2.pop());
  }
  return stackOne;
}

function sortStack() {
  if (stackOne.isEmpty()) {
    // end program if stackOne is null
    return null;
  }
  const stackTwo = new Stack();
  let current = stackOne.pop();
  stackTwo.push(current);
  while (!stackOne.isEmpty()) {
    current = stackOne.pop();
    while (current !== null) {
      if (current < stackTwo.peek()) {
        stackOne.push(stackTwo.pop());
      }
      // had to use the actual array property[0] and undefined... isEmpty() was
      // firing incorrectly ... not sure why
      if (current > stackTwo.peek() || stackTwo.stack[0] === undefined) {
        stackTwo.push(current);
        current = null;
      }
    }
  }
  return finalSort(stackTwo);
}

const SortStack = {};
SortStack.testCases = {};
SortStack.testCases.test1 = sortStack().stack;
console.log(SortStack.testCases.test1);

module.exports = SortStack;
