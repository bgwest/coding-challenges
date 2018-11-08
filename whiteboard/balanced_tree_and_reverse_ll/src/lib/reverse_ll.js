'use strict';

//   Stack
//     - LIFO
class Stack {
  constructor() {
    this.stack = [];
  }

  // Stack methods:
  //   - .push - pushes (value) onto stack
  //   - .pop - pops (value) off the stack
  //   - .peek - peek at top value without 'the pop'

  push(value) {
    return this.stack.push(value);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }
}


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    };
  }

  getLength() {
    return this.data.length;
  }

  // 'insert at head' -- add new node to head of list
  prepend(value) {
    const node = new Node(value);
    node.next = this.head;
    // e.g.
    // if I wanted to insert 'E' at the head
    // const node = new linkedListCopy.newNode('E');
    // node.next = this.head;
    // [E][next]--->[A][next]--=>[B][next]--->[C][next]--->[D[next]--->NULL
    // [head] = [E][next]--->[A][next]--=>[B][next]--->[C][next]--->[D[next]--->NULL
    this.head = node;
    this.data.length = this.data.length + 1;
    return this;
  }

  // replace value/next at tail (null) of list
  append(value) {
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    const node = new Node(value);
    currentNode.next = node;
    this.data.length = this.data.length + 1;
    return currentNode;
  }
}

// start -- create export objects
const reverseLinkedList = {};

// creating a linked list to work with
const newList = new LinkedList();
newList.prepend(10);
newList.prepend(11);
newList.prepend(12);
newList.prepend(13);
newList.prepend(14);
newList.prepend(15);
newList.prepend(16);
newList.prepend(17);
newList.prepend(18);
newList.prepend(19);

// add -- singly linked list to exports module
reverseLinkedList.structure = {};
reverseLinkedList.structure.newList = newList;

// add -- container for new functions
reverseLinkedList.functions = {};

// Reverse Linked List Method # 1 -- Using a stack and a loop
reverseLinkedList.functions.loopAndStack = (linkedList) => {
  // create new stack : )
  const reverseMe = new Stack();

  // set node head
  let currentNode = linkedList.head;

  // utilizing getLength method, but could also do this with .next = null
  let listLength = linkedList.getLength(); // O(1)

  while (listLength > 0) { // O(n)
    reverseMe.push(currentNode.value); // O(1)
    currentNode = currentNode.next;
    listLength -= 1;
  }
  return reverseMe;
};

reverseLinkedList.functions.popAndLink = (fullStack) => {
  // now that we have the stack, build the new linked list
  const reversedList = new LinkedList();

  // initialize list with first value -- add to head
  reversedList.prepend(fullStack.pop()); // O(1)

  while (fullStack.stack[0] !== undefined) { // O(n)
    reversedList.append(fullStack.pop()); // O(1)
  }
  return reversedList;
};


// uncomment for testing and debugging
// Reverse Linked List Method # 1 -- Using a stack and a loop
// const reversalWithStackStepOne = reverseLinkedList.functions.loopAndStack(newList);
// console.log(reversalWithStackStepOne);
// const reversalWithStackStepTwo = reverseLinkedList.functions
// .popAndLink(reversalWithStackStepOne);
// console.log(reversalWithStackStepTwo);
// console.log(reversalWithStackStepTwo.getLength());

module.exports = reverseLinkedList;
