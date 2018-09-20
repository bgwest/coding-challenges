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

  autoAppend(value) {
    for (let i = 0; i < value; i++) {
      this.append(i * 2);
    }
  }
};

linkedLists.find = class CountList {
  constructor(node, k) {
    this.k = k;
    this.node = node;
  }

  kthFromEnd() {
    // replace from the tail (null) of list
    let currentNode = this.node.head;
    this.length = 0;
    // current.next will equal null when you are at the start of the list
    while (currentNode.next !== null) {
      this.length += 1;
      currentNode = currentNode.next;
    }
    currentNode = this.node.head;
    let stop = 0;
    const here = this.length - this.k;
    // ensure you cannot give number that makes you extend the list
    if (here <= -1) {
      return 'Exception';
    }
    while (stop !== here) {
      stop += 1;
      currentNode = currentNode.next;
    } // else
    return currentNode.value;
  }
};

//! Ben - uncomment for a testing example
// const newLinkedList = new linkedLists.make();
// newLinkedList.autoAppend(10);
// const test = new linkedLists.find(newLinkedList, 4).kthFromEnd();
// console.log(test);

module.exports = linkedLists;
