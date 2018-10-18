'use strict';

const fizzBuzz = require('../lib/binary-tree');

describe('testing binary-tree.js', () => {
  test('with current tree, fizz count should = 2', () => {
    const countTheFizz = fizzBuzz.tests.findFizzBuzz(fizzBuzz.tree, { type: 'fizz', counter: 0 });
    expect(countTheFizz.counter).toEqual(2);
  });
  test('with current tree, buzz count should = 1', () => {
    const countTheBuzz = fizzBuzz.tests.findFizzBuzz(fizzBuzz.tree, { type: 'buzz', counter: 0 });
    expect(countTheBuzz.counter).toEqual(1);
  });
  test('with current tree, fizzbuzz count should = 1', () => {
    const countTheFizzBuzz = fizzBuzz.tests.findFizzBuzz(fizzBuzz.tree, { type: 'fizzbuzz', counter: 0 });
    expect(countTheFizzBuzz.counter).toEqual(1);
  });
});
