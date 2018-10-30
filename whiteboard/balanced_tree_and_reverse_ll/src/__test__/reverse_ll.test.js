'use strict';

const reverseLinkedList = require('../lib/reverse_ll');

// ended up not using this function : (
// leaving for posterity
function createArrayToCompare(list) { // eslint-disable-line no-unused-vars
  // the stack is already in reversed form
  // make an array from the original LL to easily compare
  // ( 0 ---> arr.len - 1 )      &&      ( 0 <--- arr.len - 1  )
  const toArray = [];
  let currentNode = list.head;
  while (currentNode.next !== null) {
    toArray.push(currentNode.value);
    currentNode = currentNode.next; // eslint-disable-line no-param-reassign
  }
  // push final value after loop completes
  toArray.push(currentNode.value);
  return toArray;
}

function runCompare(originalArray, reversedAsStack) {
  // we can make the assumption that
  // the new reversed list AND the original linked list as a Stack,
  // should be the same length AND should have the same values running
  // in counter directions
  for (let normalIndex = 0; normalIndex <= originalArray.length - 1; normalIndex++) {
    if (originalArray[normalIndex] !== reversedAsStack.pop()) {
      return false;
    }
    // reverseIndex -= 1;
  }
  // else - if lists do match in reverse order
  return true;
}

describe('testing reverse_ll.js', () => {
  test('test each value is in reverse order from original linked list value set', () => {
    const testList = reverseLinkedList.structure.newList;
    const makeStack = reverseLinkedList.functions.loopAndStack(testList);
    const reverseList = reverseLinkedList.functions.popAndLink(makeStack);
    // const ogLinkedListAsArray = createArrayToCompare(testList);

    // by now, makeStack has been mutated. create a new one to test with.
    const cloneMakeStack = reverseLinkedList.functions.loopAndStack(testList);
    const linkedListWasReversed = runCompare(reverseList, cloneMakeStack);
    expect(linkedListWasReversed).toEqual(true);
  });
});
