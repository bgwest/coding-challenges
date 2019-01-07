'use strict';

class Node {
  constructor(value) {
    this.value = value;
    // next is a pointer
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // the head has it's own pointer as well
    this.head = null;
    this.length = 0;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    this.length += 1;
    return this.head;
  }

  append(value) {
    const newNode = new Node(value);
    let head = this.head;

    while (head.next) {
      head = head.next;
    }
    head.next = newNode;
    this.length += 1;
    return head;
  }
}


const newList = new LinkedList();
newList.prepend('D');
newList.prepend('O');
newList.prepend('G');

console.log(newList);

// head --> [ 'G' | next ] --> [ 'O' | next ] --> [ 'D' | next ] --> null
//

function reverseLinkedList(head) {
  let previous = null;
  let current = head;
  let nextRef;

  while (current.next) {
    nextRef = current.next;
    current.next = previous;
    previous = current;
    current = nextRef;
  }
  return current;
}

const testing = reverseLinkedList(newList.head);
console.log(testing);
