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

// creating a linked list to work with
const newList = new LinkedList();
newList.prepend(10);
newList.prepend(11);
newList.prepend(12);
newList.prepend(13);

function reverse(head) {
  // BASE CASE
  if (head.next === null) {
    return head;
  }

  // RECURSIVE CASE
  const remaining = reverse(head.next);

  // stack unwinds
  head.next.next = head;
  head.next = null;
  return remaining;
}

const reversedList = reverse(newList.head);
console.log(reversedList);
