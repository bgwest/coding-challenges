'use strict';

const repeatedWord = require('../lib/repeated_word');

describe('testing repeated_word.js', () => {
  test('test0: test should return "null"', () => {
    const testString = 'This sentence is void of any repeated words so it should return null';
    const test = repeatedWord.run(testString);
    expect(test).toEqual(null);
  });
  test('test1: test should return "we"', () => {
    const testString = 'WE are almost there so that means WE are there';
    const test = repeatedWord.run(testString);
    expect(test).toEqual('we');
  });
  test('test2: test should return "no"', () => {
    const testString = 'And so it goes therefore we are here now NO actually NO';
    const test = repeatedWord.run(testString);
    expect(test).toEqual('no');
  });
  test('test3: test should return "tragedy"', () => {
    const testString = 'After the TRAGEDY there was nothing left but TRAGEDY';
    const test = repeatedWord.run(testString);
    expect(test).toEqual('tragedy');
  });
});
