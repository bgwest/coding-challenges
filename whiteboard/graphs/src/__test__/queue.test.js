const Queue = require('../lib/Queue');

describe('Queue.js', () => {
  const testQueue = new Queue();
  test('testing Queue.js for enqueue capabilities', () => {
    testQueue.enqueue(10);
    testQueue.enqueue(11);
    testQueue.enqueue(12);
    expect(testQueue.storage).toEqual([10, 11, 12]);
  });
  test('testing Queue.js for dequeue capabilities', () => {
    testQueue.dequeue();
    testQueue.dequeue();
    expect(testQueue.storage).toEqual([12]);
  });
  test('testing Queue.js for isEmpty functionality -- should be false', () => {
    expect(testQueue.isEmpty()).toEqual(false);
  });
  test('testing Queue.js for isEmpty functionality -- should be true', () => {
    testQueue.dequeue();
    expect(testQueue.isEmpty()).toEqual(true);
  });
});
