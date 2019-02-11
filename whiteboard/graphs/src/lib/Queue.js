'use strict';

class Queue {
  constructor() {
    this.storage = [];
  }

  enqueue(value) {
    return this.storage.push(value);
  }

  dequeue() {
    return this.storage.shift();
  }

  isEmpty() {
    if (this.storage[0] === undefined) {
      return true;
    } // else
    return false;
  }
}

module.exports = Queue;
