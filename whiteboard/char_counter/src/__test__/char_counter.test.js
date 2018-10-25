'use strict';

const charCounter = require('../lib/char_counter');

describe('testing char_counter.js', () => {
  test('testing charCounter.test.strings.four', () => {
    const testString = charCounter.test.strings.four;
    const runTest = charCounter.test.functions.returnCharCnt(testString);
    console.log(runTest);
    expect(runTest).toEqual({ 1: 1, ' ': 45, '.': 1 });
  });
  test('testing charCounter.test.strings.three', () => {
    const testString = charCounter.test.strings.three;
    const runTest = charCounter.test.functions.returnCharCnt(testString);
    console.log(runTest);
    expect(runTest).toEqual({ O: 1, n: 1, e: 4, ' ': 9, o: 2, f: 2, t: 3, h: 2, // eslint-disable-line
      b: 1, s: 4, D: 1, B: 1, Z: 1, i: 2, g: 1, G: 1, k: 1, u: 1, v: 1, r: 1, // eslint-disable-line
      C: 1, l: 2, '.': 1 }); // eslint-disable-line
  });
  test('testing charCounter.test.strings.two', () => {
    const testString = charCounter.test.strings.two;
    const runTest = charCounter.test.functions.returnCharCnt(testString);
    console.log(runTest);
    expect(runTest).toEqual({ A: 1, ' ': 7, n: 3, e: 4, w: 1, t: 3, s: 5, r: 2, // eslint-disable-line
      i: 2, g: 1, u: 1, p: 1, c: 1, o: 2, l: 1, b: 1, a: 1, '!': 2 }); // eslint-disable-line
  });
});
