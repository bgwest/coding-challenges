'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.data = {
      length: 0,
    };
  }

  getLength() {
    return this.data.length;
  }

  // 'insert at head' -- add new node to head of list
  prepend(value) {
    const node = new Node(value);
    node.next = this.head;
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

// creating a linked list to work with
const newList = new LinkedList();
newList.prepend('D');
newList.prepend('C');
newList.prepend('B');
newList.prepend('A');

function reversingLinkedListIteratively(list) {
  // setup
  let currentNode = list.head;
  let previousNode = null;
  let nextNode;
  list.head = previousNode;

  // loop
  while (currentNode) {
    // save node
    nextNode = currentNode.next;
    // break link!
    currentNode.next = previousNode;
    // save broken node into previousNode variable
    previousNode = currentNode;
    // contains the remaining linked nodes to  to carry on the process
    currentNode = nextNode;
  }
  // re-attach head to newly reversed links
  list.head = previousNode;
  return list;
}

const reversedLinkedList = reversingLinkedListIteratively(newList);
console.log(reversedLinkedList);
