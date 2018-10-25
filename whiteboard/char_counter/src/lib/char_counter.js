'use strict';

// export object
const charCounter = {};

// add test object to export object
charCounter.test = {};

// add test strings to export object
charCounter.test.strings = {};
charCounter.test.strings.one = 'This is my first test string to test with woooo!';
charCounter.test.strings.two = 'A new test string is super cool beans!!';
charCounter.test.strings.three = 'One of the best DBZ fights is Goku vrs Cell.';
charCounter.test.strings.four = '                                             1.';

// Big O
// Time: O(n)
// Space: O(n)
function returnCharCnt(inputString) {
  const strToArr = inputString.split(''); // O(n)
  const mapStore = new Map();
  const charCnt = {};

  for (let index = 0; index <= strToArr.length - 1; index++) { // O(n)
    const currChar = strToArr[index];
    if (mapStore.get(currChar)) {
      charCnt[currChar] += 1;
    } else if (!mapStore.get(currChar)) {
      mapStore.set(strToArr[index], strToArr[index]); // O(1)
      charCnt[currChar] = 1;
    }
  }
  return charCnt;
}

// add functions to export object
charCounter.test.functions = {};
charCounter.test.functions.returnCharCnt = returnCharCnt;

// uncomment to test / debug
// console.log(returnCharCnt(charCounter.test.strings.two));

// export object for testing
module.exports = charCounter;
