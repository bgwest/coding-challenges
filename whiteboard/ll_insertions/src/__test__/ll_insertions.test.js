'use strict';

const llInsertions = require('../lib/ll_insertions');

describe('Running the ll_insertions program.', () => {
  test('creating a new node with Node class. Expecting an object.', () => {
    expect(typeof new llInsertions.newNode(10)).toBe('object');
  });
  test('Instantiate new linkedList class. Expecting an object.', () => {
    expect(typeof new llInsertions.linkedList()).toBe('object');
  });
  test('Create a new linked list and append a value. Should equal 10.', () => {
    const newLinkedList = new llInsertions.linkedList();
    newLinkedList.append(10);
    expect(newLinkedList.head.value).toEqual(10);
  });
});
