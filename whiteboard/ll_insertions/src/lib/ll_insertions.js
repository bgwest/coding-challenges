'use strict';

const linkedListCopy = {};

linkedListCopy.newNode = class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
};

linkedListCopy.linkedList = class LinkedList {
  constructor() {
    this.head = null;
    this.data = {
      node: '',
      length: 0,
    };
  }

  // adds new node to end of list -- 'insert at head'
  append(value) {
    const node = new linkedListCopy.newNode(value);
    node.next = this.head;
    this.head = node;
    this.data.length = this.data.length + 1;
    return this;
  }

  // replace value/next at tail (null) of list
  prependReplace(value) {
    let currentNode = this.head;
    console.log(currentNode.next.next);
    while (currentNode.next.next !== null) {
      currentNode = currentNode.next;
    }
    const node = new linkedListCopy.newNode(value);
    console.log(currentNode.next);
    currentNode.next.next = node.next;
    currentNode.next.value = node.value;
    console.log(currentNode.next);
    return this;
  }
};

module.exports = linkedListCopy;
