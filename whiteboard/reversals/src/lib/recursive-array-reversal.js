'use strict';

const testInput = [1, 4, 3, 2];
const testInputCopy = testInput.map((each) => { return each; });
const { length } = testInput;
let multiplier = 2;

// Complete the reverseArray function below.
function reverseArray(n, arr, inputCopy) {
  // BASE CASE
  if (n === 0) {
    return n;
  }

  // RECURSIVE CASE
  reverseArray(n - 1, arr, inputCopy);
  console.log(arr[(n + length) - multiplier]);
  inputCopy[n - 1] = arr[(n + length) - multiplier];
  multiplier += 2;
  return inputCopy; // eslint-disable-line consistent-return
}

console.log(reverseArray(length, testInput, testInputCopy));
