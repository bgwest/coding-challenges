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

  autoAppend(value, variable) {
    let randomizer;
    if (variable === 'A') {
      randomizer = 3;
    } else if (variable === 'B') {
      randomizer = 2;
    }
    for (let i = 0; i < value; i++) {
      this.append(i * randomizer);
    }
  }
};

linkedLists.find = class CountList {
  constructor(node, k) {
    this.k = k;
    this.node = node;
  }

  mergeLists(lista, listb) {
    const listCopyA = lista.head;
    let listCopyB = listb.head;
    let saveA;
    let saveB = true;
    // let counter = 0;

    // //////////// 1 ------------------------------- ////////////// //
    saveA = listCopyA.next; // 1
    saveB = listCopyB.next; // 1

    listCopyA.next = listCopyB; // 1
    listCopyA.next.next = saveA; // 2

    listCopyB = saveB;
    console.log(listCopyB);

    // //////////// 2 ------------------------------- ////////////// //

    saveA = listCopyA.next.next.next; // 3
    saveB = listCopyB.next; // 1

    listCopyA.next.next.next = listCopyB; // 3
    listCopyA.next.next.next.next = saveA; // 4

    listCopyB = saveB;
    console.log(listCopyB);

    // //////////// 3 ------------------------------- ////////////// //

    saveA = listCopyA.next.next.next.next.next;
    saveB = listCopyB.next;

    listCopyA.next.next.next.next.next = listCopyB;
    listCopyA.next.next.next.next.next.next = saveA;

    listCopyB = saveB;
    console.log(listCopyB);

    // //////////// 4 ------------------------------- ////////////// //

    saveA = listCopyA.next.next.next.next.next.next.next;
    saveB = listCopyB.next;

    listCopyA.next.next.next.next.next.next.next = listCopyB;
    listCopyA.next.next.next.next.next.next.next.next = saveA;
    listCopyB = saveB;
    console.log(listCopyB);

    // //////////// 5 ------------------------------- ////////////// //

    saveA = listCopyA.next.next.next.next.next.next.next.next.next;
    saveB = listCopyB.next;
    console.log(saveB);

    listCopyA.next.next.next.next.next.next.next.next.next = listCopyB;
    listCopyA.next.next.next.next.next.next.next.next.next.next = saveA;

    listCopyB = saveB;
    console.log(listCopyB);

    // while (saveB) {
    //   // merge list loop
    //
    //   // saveB increases at a constant of 1
    //   saveB = listCopyB.next;
    //
    //   // next's are at different values to start but increase at same interval
    //   // use this if statement to do initial next's and then double moving forward
    //   if (counter === 0) {
    //     saveA = listCopyA.next; // begin next @ 1
    //     listCopyA.next = listCopyB; // begin next @1
    //     listCopyA.next.next = saveA; // begin next @2
    //   }
    //
    //   if (counter > 0) {
    //     for (let doubleNextCount = counter; doubleNextCount > 0; doubleNextCount--) {
    //       saveA = listCopyA.next; // begin next @ 1
    //       listCopyA.next = listCopyB; // begin next @1
    //       listCopyA.next = saveA; // begin next @2
    //     }
    //     saveA = listCopyA.next;
    //     listCopyA.next = listCopyB;
    //     listCopyA.next = saveA;
    //   }
    //
    //   listCopyB = saveB;
    //   console.log(listCopyB);
    //   counter += 1;
    // }

    return lista;
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
const listA = new linkedLists.make();
const listB = new linkedLists.make();

listA.autoAppend(10, 'A');
listB.autoAppend(5, 'B');

const test = new linkedLists.find();
const mergedList = test.mergeLists(listA, listB);
console.log(mergedList);

// const test = new linkedLists.find(listA, 4).kthFromEnd();
// console.log(test);

module.exports = linkedLists;
