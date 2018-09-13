// array_reverse.js
const arrayReverse = {};

// example valid test params
// const inputArray = [1, 2, 3, 4, 5, 7, 8, 9, 10];
// const inputNumber = 24;

// input any array to reverse the order
arrayReverse.runShift = function insertShiftArray(arr, number) {
  // validation
  if (!Array.isArray(arr)) {
    return null;
  }

  if (Number.isNaN(number) || typeof (number) === 'string') {
    return null;
  }

  for (let arrIndex = 0; arrIndex <= arr.length - 1; arrIndex++) {
    if (Number.isNaN(arr[arrIndex]) || typeof (arr[arrIndex]) === 'string') {
      return null;
    }
  }

  const newArr = [number];
  const getMiddleIndex = Math.round(arr.length / 2);
  for (let restOfArr = getMiddleIndex; restOfArr <= arr.length - 1; restOfArr++) {
    newArr.push(arr[restOfArr]);
  }
  const ogArrSliced = arr.slice(0, getMiddleIndex);
  return ogArrSliced.concat(newArr);
};

module.exports = arrayReverse;
