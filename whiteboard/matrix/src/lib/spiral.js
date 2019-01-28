'use strict';

class Node {
  constructor(value) {
    this.next = null;
    this.value = value;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.data = {
      length: 0,
    };
  }

  getLength() {
    return this.data.length;
  }

  // 'insert at head' -- add new node to head of list
  prepend(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.data.length = this.data.length + 1;
    return this;
  }

  makeCircular() {
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = this.head;
    return currentNode;
  }
}

class SpiralMatrix {
  constructor(n) {
    // matrix must be 3x3 or greater or return null -- throughout program
    this.height = n >= 3 ? n : null;
    this.endingInt = this.height !== null ? n * n : null;
    this.matrix = this.height !== null ? this.fillMatrix(this.height) : null;
    this.firstRun = true;
    this.oneByOne = 0;
    this.currentNode = this.setupLinkedList();
    this.currentNode = this.currentNode.head;
    this.currentDirection = this.currentNode.value;
    this.lastKnownPos = [0, 0];
    this.startingPoint = [0, 0];
  }

  setupLinkedList() {
    // create linked list for array population guidance
    const linkedList = new LinkedList();
    linkedList.prepend('up');
    linkedList.prepend('left');
    linkedList.prepend('down');
    linkedList.prepend('right');
    linkedList.makeCircular();
    return linkedList;
  }

  fillMatrix(height) {
    if (height) {
      const matrixToBeFilled = [];
      for (let col = 0; col <= height - 1; col++) {
        matrixToBeFilled.push(Array(height).fill(0));
      }
      return matrixToBeFilled;
    } // else
    return null;
  }

  stagingPattern() {
    if (this.currentDirection === 'right') {
      for (let rightIdx = 0; rightIdx <= this.matrix[0].length - 1; rightIdx++) {
        this.oneByOne += 1;
        this.matrix[0][rightIdx] = this.oneByOne;
      }
      this.currentNode = this.currentNode.next;
      this.currentDirection = this.currentNode.value;
    }
    if (this.currentDirection === 'down') {
      for (let downIdx = 1; downIdx <= this.matrix.length - 1; downIdx++) {
        this.oneByOne += 1;
        this.matrix[downIdx][this.matrix[downIdx].length - 1] = this.oneByOne;
      }
      this.currentNode = this.currentNode.next;
      this.currentDirection = this.currentNode.value;
    }
    if (this.currentDirection === 'left') {
      const lastRowMinusOne = this.matrix[this.matrix.length - 1].length - 2;
      for (let leftIdx = lastRowMinusOne; leftIdx >= 0; leftIdx--) {
        this.oneByOne += 1;
        this.matrix[this.matrix.length - 1][leftIdx] = this.oneByOne;
        // record lastKnowPos as precursor for remainder of the program
        this.lastKnownPos[0] = this.matrix.length - 1;
        this.lastKnownPos[1] = leftIdx;
      }
      this.currentNode = this.currentNode.next;
      this.currentDirection = this.currentNode.value;
      this.firstRun = false;
    }
    return this.lastKnownPos;
  }

  directionalSwitch() {
    // trying to reduce repeated code with a switch statement
    switch (this.currentDirection) {
      // notes:
      // up: pre while: -1 lastKnownPos[0], in while: this.startingPoint [0]-=, post while: [0]+= / [0]+=
      // right: in while: this.startingPoint: [1]+=, post while: [0]+= / [1]-=
      // down: in while: this.startingPoint [0]+=, post while: [0]-= / [1]-=
      // left: in while: this.startingPoint [1]-=, post while: [1]+= / n/a
      case 'up':
        return {
          preWhile: () => { this.startingPoint = [this.lastKnownPos[0] - 1, this.lastKnownPos[1]]; return this.startingPoint; },
          inWhile: () => { this.startingPoint[0] -= 1; return this.startingPoint; },
          postWhile: () => { this.startingPoint[0] += 1; this.startingPoint[1] += 1; return this.startingPoint; },
        };
      case 'right':
        return {
          preWhile: () => { console.log('nothing to do'); },
          inWhile: () => { this.startingPoint[1] += 1; return this.startingPoint; },
          postWhile: () => { this.startingPoint[0] += 1; this.startingPoint[1] -= 1; return this.startingPoint; },
        };
      case 'down':
        return {
          preWhile: () => { console.log('nothing to do'); },
          inWhile: () => { this.startingPoint[0] += 1; return this.startingPoint; },
          postWhile: () => { this.startingPoint[0] -= 1; this.startingPoint[1] -= 1; return this.startingPoint; },
        };
      case 'left':
        return {
          preWhile: () => { console.log('nothing to do'); },
          inWhile: () => { this.startingPoint[1] -= 1; return this.startingPoint; },
          postWhile: () => { this.startingPoint[1] += 1; return this.startingPoint; },
        };
      default:
        // should never hit default -- null = issues
        return null;
    }
  }

  spiral() {
    // runs in order: up, right, down, left
    const directionalSwitchFn = this.directionalSwitch();
    directionalSwitchFn.preWhile();
    while (this.matrix[this.startingPoint[0]][this.startingPoint[1]] === 0) {
      this.oneByOne += 1;
      this.matrix[this.startingPoint[0]][this.startingPoint[1]] = this.oneByOne;
      directionalSwitchFn.inWhile();
    }
    // setup this.lastKnownPos to begin in next needed area
    directionalSwitchFn.postWhile();
    this.lastKnownPos = this.startingPoint;

    // head in next direction e.g up points to right
    this.currentNode = this.currentNode.next;
    this.currentDirection = this.currentNode.value;
  }

  main() {
    // ensure this function only runs if proper n value is given for matrix
    if (!this.height) {
      return null;
    }
    while (this.oneByOne < this.endingInt) {
      // initially runs once first loop through, then new logic
      // takes place in bottom off loop for remaining loops
      if (this.firstRun) {
        this.stagingPattern();
      }
      this.spiral();
      // end program
      if (this.oneByOne >= this.endingInt) {
        return this.matrix;
      }
    }
    return this.matrix;
  }
}

const spiral = new SpiralMatrix(7);
console.log(spiral.endingInt);
spiral.main();
console.log(spiral.matrix);
