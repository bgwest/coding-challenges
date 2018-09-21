/* eslint-disable */
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
    // testing merge idea
    console.log(listCopyA);
    console.log(listCopyB);
    let saveA; let 
      saveB;
    const counter = 0;

    // //////////// 1 ------------------------------- ////////////// //
    saveA = listCopyA.next;
    console.log(saveA);

    saveB = listCopyB.next;
    console.log(saveB);

    listCopyA.next = listCopyB;
    console.log(listCopyA);


    listCopyA.next.next = saveA;
    console.log(listCopyA);

    listCopyB = saveB;
    console.log(listCopyB);

    // //////////// 2 ------------------------------- ////////////// //

    saveA = listCopyA.next.next.next;
    console.log(saveA);
    saveB = listCopyB.next;
    console.log(saveB);

    listCopyA.next.next.next = listCopyB;
    listCopyA.next.next.next.next = saveA;
    console.log(listCopyA);

    listCopyB = saveB;
    console.log(listCopyB);

    // //////////// 3 ------------------------------- ////////////// //

    saveA = listCopyA.next.next.next.next.next;
    console.log(saveA);
    saveB = listCopyB.next;
    console.log(saveB);

    listCopyA.next.next.next.next.next = listCopyB;
    listCopyA.next.next.next.next.next.next = saveA;

    listCopyB = saveB;
    console.log(listCopyB);


    // //////////// 4 ------------------------------- ////////////// //

    saveA = listCopyA.next.next.next.next.next.next.next;
    console.log(saveA);
    saveB = listCopyB.next;
    console.log(saveB);

    listCopyA.next.next.next.next.next.next.next = listCopyB;
    listCopyA.next.next.next.next.next.next.next.next = saveA;
    listCopyB = saveB;
    console.log(listCopyB);

    // //////////// 5 ------------------------------- ////////////// //

    saveA = listCopyA.next.next.next.next.next.next.next.next.next;
    console.log(saveA);
    saveB = listCopyB.next;
    console.log(saveB);

    listCopyA.next.next.next.next.next.next.next.next.next = listCopyB;
    listCopyA.next.next.next.next.next.next.next.next.next.next = saveA;

    listCopyB = saveB;
    console.log(listCopyB);

    //
    // listCopyA.next.next = saveA;
    // console.log(listCopyA);
    //
    // listCopyB = saveB;
    // console.log(listCopyB);
    //
    // listCopyA.next.next.next = saveA.next;
    // console.log(listCopyA.next.next);

    // /////////////////////// blah /////////////

    // listA is the return head so we stop when B is done
    // while (listCopyB.next !== null) {
    //   saveA = listCopyA.next;
    //   saveB = listCopyB.next;
    //   listCopyA.next = listCopyB;
    //   for (let i = 0; i <= counter; i++) {
    //     console.log(i);
    //   }
    //   counter += 1;
    //   listCopyA.next.next = saveA;
    //   listCopyB = saveB;
    // }
    // // for now just run code 1 last time for full list
    // // figure out better solution
    // saveA = listCopyA.next;
    // saveB = listCopyB.next;
    // listCopyA.next = listCopyB;
    // counter += 1;
    // listCopyA.next.next = saveA;
    // listCopyB = saveB;

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
