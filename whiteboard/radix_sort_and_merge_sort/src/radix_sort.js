'use strict';

const sort = {};
sort.radixSort = {};

sort.queues = {};
sort.queues.testQueueOne = {
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

sort.arrays = {};
sort.arrays.testArrayOne = ['1000', '20', '5', '901', '77', '0', '54'];
sort.arrays.testArrayTwo = ['9', '3000', '60', '20', '100', '45', '90000', '0'];

sort.functions = {};
sort.functions.findLongestIndex = function findLongestIndex(array) {
  let highestValue = array[0].length - 1;
  for (let largestIndex = 0; largestIndex <= array.length - 1; largestIndex++) {
    if (array[largestIndex].length - 1 > highestValue) {
      highestValue = array[largestIndex].length - 1;
    } // else
    // continue
  }
  return highestValue;
};

function radixSort(passedQueue, passedArray, passedHV) {
  // function scoped closures
  const myQueue = passedQueue;
  let testArray = passedArray;
  let highestValue = passedHV;
  let theDecrementer = 0;

  for (let mainIndex = 0; mainIndex <= testArray.length - 1; mainIndex++) {
    // slowly move the left position -- highestValue is what ultimately stops this
    const positionToQueueBy = (testArray[mainIndex].length - 1) + theDecrementer;
    let charToQueueBy = testArray[mainIndex].charAt(positionToQueueBy);
    // this ensures that the 0 queue will continue to fill if the string
    // is past it's possible left positions
    if (charToQueueBy === '') {
      charToQueueBy = '0';
    }
    myQueue[charToQueueBy].push(testArray[mainIndex]);

    if (mainIndex === testArray.length - 1 && highestValue >= 0) {
      // reset masterArray each time so it can be re-built
      myQueue.masterArray = [];
      // before the loop resets, clear out queues and overwrite master queue
      for (let objectIndex = 0; objectIndex <= 9; objectIndex++) {
        if (typeof myQueue[objectIndex][0] !== 'undefined') {
          myQueue.masterArray.push(...myQueue[objectIndex]);
          myQueue[objectIndex] = [];
        }
      }

      // restarts the loop if highest value still has work to do
      highestValue -= 1;
      // mainIndex needs to be reset but will be immediately incremented...
      mainIndex = -1;
      // Decrement the Decrementer
      theDecrementer -= 1;
      // reset looping array to be the newly sorted array
      testArray = myQueue.masterArray;
      // continue
    }
  }
  return myQueue.masterArray;
}

sort.functions.radixSort = radixSort;

// uncomment below code for testing and debugging
// please note:
//   Leaving the below code uncommeneted while running jest tests will screw the result.
//   The master object needs to be reset each time or the masterArray will be off
//   due to latent values in the 0-9 buckets..

// const highestValue = sort.functions.findLongestIndex(sort.arrays.testArrayOne);
// const sorted = radixSort(sort.queues.testQueueOne, sort.arrays.testArrayOne, highestValue);
// console.log(sorted);

module.exports = sort;
