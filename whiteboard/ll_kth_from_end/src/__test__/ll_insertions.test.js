'use strict';

const linkedLists = require('../lib/ll_kth_from_end');

describe('Running the ll_insertions program.', () => {
  test('creating a new node with Node class. Expecting an object.', () => {
    expect(typeof new linkedLists.newNode(10)).toBe('object');
  });
  test('Instantiate new linkedList class. Expecting an object.', () => {
    expect(typeof new linkedLists.make()).toBe('object');
  });
  test('Test program returns 18 for kth value of 9.', () => {
    const newLinkedList = new linkedLists.make();
    newLinkedList.autoAppend(10);
    const testProgram = new linkedLists.find(newLinkedList, 9).kthFromEnd();
    expect(testProgram).toEqual(18);
  });
  test('Test program returns 10 for kth value of 5.', () => {
    const newLinkedList = new linkedLists.make();
    newLinkedList.autoAppend(10);
    const testProgram = new linkedLists.find(newLinkedList, 5).kthFromEnd();
    expect(testProgram).toEqual(10);
  });
});
