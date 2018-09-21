'use strict';

const linkedLists = require('../lib/ll_merge');

describe('Running the ll_insertions program.', () => {
  test('creating a new node with Node class. Expecting an object.', () => {
    expect(typeof new linkedLists.newNode(10)).toBe('object');
  });
  test('Instantiate new linkedList class. Expecting an object.', () => {
    expect(typeof new linkedLists.make()).toBe('object');
  });
  test('Test program returns 27 head of the newly merged list.', () => {
    const listA = new linkedLists.make();
    const listB = new linkedLists.make();

    listA.autoAppend(10, 'A');
    listB.autoAppend(5, 'B');

    const test = new linkedLists.find();
    const mergedList = test.mergeLists(listA, listB);

    expect(mergedList.head.value).toEqual(27);
  });
  test('Test program .next x 6 returns 4.', () => {
    const listA = new linkedLists.make();
    const listB = new linkedLists.make();

    listA.autoAppend(10, 'A');
    listB.autoAppend(5, 'B');

    const test = new linkedLists.find();
    const mergedList = test.mergeLists(listA, listB);

    expect(mergedList.head.next.next.next.next.next.value).toEqual(4);
  });
});
