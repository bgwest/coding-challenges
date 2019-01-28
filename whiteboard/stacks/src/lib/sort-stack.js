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
    return this.stack[this.stack.length - 1];
  }

  sortStack(stackOne) {
    console.log(stackOne.stack);
    // new empty stack
    const stackTwo = new Stack();
    stackTwo.push(stackOne.peek());
    while (!this.isEmpty()) {
      console.log(stackOne.pop());
    }
    return stackOne;
  }

  isEmpty() {
    if (!this.stack[this.stack.length - 1]) {
      return true;
    } // else
    return false;
  }
}

const myStack = new Stack();
// this push method does not accept comma separated entries
// creating simple look to iterate and push
[20, 21, 22, 25, 30, 0, 1].forEach((elem) => {
  myStack.push(elem);
});

myStack.sortStack(myStack);
