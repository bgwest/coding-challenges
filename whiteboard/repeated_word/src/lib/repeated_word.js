'use strict';

const repeatedWord = {};

repeatedWord.run = (longString) => {
  console.log(longString);
  const longStringLC = longString.toLowerCase();
  const dividedString = longStringLC.split(' ');
  const dividedSet = new Map();
  let firstfound = false;
  dividedString.map((currString) => {
    // must happen first
    if (dividedSet.has(currString) && !firstfound) {
      firstfound = currString;
    }

    dividedSet.set(currString);

    return currString;
  });

  if (!firstfound) {
    return null;
  } // else
  return firstfound;
};

// uncomment for debugging or testing
// example string
// const longstring = 'This is a test this is only a test';
// const testRun = repeatedWord.run(longstring);
// console.log(testRun);


module.exports = repeatedWord;
