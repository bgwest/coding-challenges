'use strict';

const reverseLinkedList = require('../lib/reverse-linked-list-with-stack');

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

describe('testing reverse-linked-list-with-stack.js', () => {
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
