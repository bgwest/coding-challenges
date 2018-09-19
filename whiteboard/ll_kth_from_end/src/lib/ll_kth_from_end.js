'use strict';

const linkedLists = {};

linkedLists.newNode = class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
};

linkedLists.make = class LinkedList {
  constructor() {
    this.head = null;
    this.data = {
      node: '',
      length: 0,
    };
  }

  // adds new node to end of list -- 'insert at head'
  append(value) {
    const node = new linkedLists.newNode(value);
    node.next = this.head;
    this.head = node;
    this.data.length = this.data.length + 1;
    return this;
  }
};

//! Ben - uncomment for testing and debugging
let newLinkedList = new linkedLists.make();
newLinkedList.append(10);
newLinkedList.append(2);
newLinkedList.append(8);
newLinkedList.append(1);
console.log(newLinkedList);

linkedLists.find = class CountList {
  constructor(node, k) {
    this.k = k;
    this.node = node;
  }

  kthFromEnd() {
    // replace value/next at tail (null) of list
    let currentNode = this.node;
    this.slowest = 0;
    this.fastest = 0;
    console.log(currentNode.next.next);
    while (currentNode.next.value !== undefined) {
      this.fastest += 2;
      this.slowest += 1;
      currentNode = currentNode.next;
    }
    this.fastest -= 1;
    currentNode = this.head;
    let stop = 0;
    while (stop !== this.fastest - this.k) {
      stop += 1;
      currentNode = currentNode.next;
    }
    if (currentNode.value === undefined) {
      return 'Exception';
    } // else
    return currentNode.value;
  }
};

//! Ben - testing
let test = linkedLists.find(newLinkedList, 2).kthFromEnd();
console.log(test);

module.exports = linkedLists;
