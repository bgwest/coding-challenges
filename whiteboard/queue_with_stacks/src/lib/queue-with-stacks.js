'use strict';

const stacksAndQueues = {};

// development notes:
//   conceptualizing stacks and queues as arrays:
//     - push method pushes to 'end of array'
//     - pop method removes from 'end of array'
//     - unshift inserts at 'front of array'
//     - shift removes at 'front of array'
//   Stack
//     - in a normal case a stack would work as LIFO
//   Queue
//     - in a normal case a queue would work as FIFO

class Stack {
  constructor() {
    this.stack = [];
  }

  push(value) {
    return this.stack.unshift(value);
  }

  pop() {
    return this.stack.shift();
  }
}

class Queue {
  constructor() {
    this.stackA = new Stack();
    this.stackB = new Stack();
  }

  // inserts value into the Queue using a first-in, first-out
  enqueue(value) {
    return this.stackA.push(value);
  }

  dequeue() {
    // stackA is transformed from LIFO to FIFO by inserting into stackB
    // clear queue 'now' as FIFO
    if (this.stackB.stack.length > 0) {
      // stackB should only have value after
      return this.stackB.pop();
    } // else
    let popValue = null;
    // re-stack LIFO to FIFO
    while (this.stackA.stack.length - 1 >= 0) { // eslint-disable-line no-cond-assign
      popValue = this.stackA.pop();
      this.stackB.push(popValue);
    }
    return this.stackB.pop();
  }

  clearQueue() {
    while (this.stackB.stack.length - 1 >= 0) {
      this.stackB.pop();
    }
    return this.stackB;
  }
}

const myQueue = new Queue();
stacksAndQueues.Queue = myQueue;
// uncomment these enqueues and dequeue to simulate functionality, test, and or debug
// myQueue.enqueue(1);
// myQueue.enqueue(2);
// myQueue.enqueue(3);
// myQueue.enqueue(4);
// myQueue.enqueue(5);
//
// myQueue.dequeue();
// myQueue.clearQueue();
//
// console.log(myQueue);

module.exports = myQueue;
