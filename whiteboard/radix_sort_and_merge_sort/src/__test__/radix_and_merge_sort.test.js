'use strict';

const sorts = require('../radix_sort');

const resetContainer = {
  0: [],
  1: [],
  2: [],
  3: [],
  4: [],
  5: [],
  6: [],
  7: [],
  8: [],
  9: [],
  masterArray: [],
};

describe('radix sort and merge sort', () => {
  test('manually reversed testArrayTWO and testing radixSort is returning the same value', () => {
    const testArray = sorts.arrays.testArrayTwo;
    const testQueue = sorts.queues.testQueueOne;
    const highestValue = sorts.functions.findLongestIndex(testArray);
    const allSorted = sorts.functions.radixSort(testQueue, testArray, highestValue);
    const expectedSort = ['0', '9', '20', '45', '60', '100', '3000', '90000'];
    expect(allSorted).toEqual(expectedSort);
  });
  test('manually reversed testArrayONE and testing radixSort is returning the same value', () => {
    const testArray = sorts.arrays.testArrayOne;
    sorts.queues.testQueueOne = resetContainer;
    const testQueue = sorts.queues.testQueueOne;
    const highestValue = sorts.functions.findLongestIndex(testArray);
    const allSorted = sorts.functions.radixSort(testQueue, testArray, highestValue);
    const expectedSort = ['0', '5', '20', '54', '77', '901', '1000'];
    expect(allSorted).toEqual(expectedSort);
  });
});
