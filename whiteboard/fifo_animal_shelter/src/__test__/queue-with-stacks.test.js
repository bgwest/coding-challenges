'use strict';

const AnimalShelter = require('../lib/fifo_animal_shelter');

describe('testing fifo_animal_shelter.js', () => {
  test('dequeue should be "animal agnostic" and simply FIFO', () => {
    const testQueue = AnimalShelter;
    testQueue.enqueue({ type: 'cat', name: 'betsy', placeInLine: AnimalShelter.appointmentNumber });
    testQueue.enqueue({ type: 'cat', name: 'tom', placeInLine: AnimalShelter.appointmentNumber });
    testQueue.enqueue({ type: 'cat', name: 'paul', placeInLine: AnimalShelter.appointmentNumber });
    testQueue.enqueue({ type: 'dog', name: 'frank', placeInLine: AnimalShelter.appointmentNumber });
    testQueue.dequeue();
    expect(testQueue.shelter[2].name).toEqual('tom');
  });
  test('Test dequeue with passing a perf = "cat" to show FIFO will be "dog driven"', () => {
    const testQueue = AnimalShelter;
    testQueue.enqueue({ type: 'cat', name: 'betsy', placeInLine: AnimalShelter.appointmentNumber });
    testQueue.enqueue({ type: 'cat', name: 'tom', placeInLine: AnimalShelter.appointmentNumber });
    testQueue.enqueue({ type: 'cat', name: 'paul', placeInLine: AnimalShelter.appointmentNumber });
    // in FIFO we expect bestsy to be removed like last time but passing 'dog' makes frank
    // the dog we remove since frank arrived before carl.
    testQueue.enqueue({ type: 'dog', name: 'frank', placeInLine: AnimalShelter.appointmentNumber });
    testQueue.enqueue({ type: 'dog', name: 'carl', placeInLine: AnimalShelter.appointmentNumber });
    testQueue.dequeue('dog');
    // "The indexOf() method returns the first index at which a given element can be found
    // in the array, or -1 if it is not present."
    // source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
    expect(testQueue.shelter.indexOf('carl')).toEqual(-1);
  });
  test('Re-uses last tests data but performs a dequeue without a perf to show carl still exists', () => {
    const testQueue = AnimalShelter;
    testQueue.enqueue({ type: 'cat', name: 'betsy', placeInLine: AnimalShelter.appointmentNumber });
    testQueue.enqueue({ type: 'cat', name: 'tom', placeInLine: AnimalShelter.appointmentNumber });
    testQueue.enqueue({ type: 'cat', name: 'paul', placeInLine: AnimalShelter.appointmentNumber });
    testQueue.enqueue({ type: 'dog', name: 'frank', placeInLine: AnimalShelter.appointmentNumber });
    testQueue.enqueue({ type: 'dog', name: 'carl', placeInLine: AnimalShelter.appointmentNumber });
    testQueue.dequeue();
    // "The indexOf() method returns the first index at which a given element can be found
    // in the array, or -1 if it is not present."
    // source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
    expect(testQueue.shelter[0].name).toEqual('carl');
  });
  test('dequeue with perf as dog', () => {
    const testQueue = AnimalShelter;
    testQueue.enqueue({ type: 'cat', name: 'betsy', placeInLine: AnimalShelter.appointmentNumber });
    testQueue.enqueue({ type: 'cat', name: 'tom', placeInLine: AnimalShelter.appointmentNumber });
    testQueue.enqueue({ type: 'dog', name: 'cindy', placeInLine: AnimalShelter.appointmentNumber });
    testQueue.enqueue({ type: 'dog', name: 'alex', placeInLine: AnimalShelter.appointmentNumber });
    testQueue.enqueue({ type: 'cat', name: 'paul', placeInLine: AnimalShelter.appointmentNumber });
    testQueue.enqueue({ type: 'dog', name: 'frank', placeInLine: AnimalShelter.appointmentNumber });
    // cindy is removed
    testQueue.dequeue('dog');
    setTimeout(() => {
      // running too fast needed to have it wait for 100ms
      expect(testQueue.shelter[3].name).toEqual('tom');
    }, 100);
  });
});
