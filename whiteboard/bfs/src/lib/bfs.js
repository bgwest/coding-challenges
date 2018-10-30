'use strict';

// !: I find quokka to be a useful tool but I cannot afford to pay for it
//     ( If you didn't know, only pro version of quokka works on module files)
//     I am putting all the code in this one file so I can use quokka
//     It helps me develop faster, at least for the time being

// !: import queue to avoid creating a queue - saves on lines of code and energy
const Queue = require('queue-fifo');

// development notes = !:

const bfs = (graph, startNode, goalNode) => {
  //-----------------------------------------------
  const queue = new Queue(); // !: change this for a QUEUE for next week's challenge
  const visitedNodes = new Set();
  const parentPath = new Map(); // !:  this holds the final path at the end
  //-----------------------------------------------
  queue.enqueue(startNode);
  visitedNodes.add(startNode);
  //-----------------------------------------------
  // MAIN LOOP
  //-----------------------------------------------
  while (queue.size() > 0) {
    const currentNode = queue.peek();
    // THEN pop
    queue.dequeue();

    if (currentNode === goalNode) {
      return parentPath; // !: this returns the path from start to goal
    }

    const neighbors = graph.getNeighbors(currentNode);

    for (let neighbor of neighbors) { // eslint-disable-line
      const neighborNode = neighbor.vertex;

      if (visitedNodes.has(neighborNode)) {
        // !: stop, go to the next neighbor
        // !: this line is avoiding loops
        continue; // eslint-disable-line
      } else {
        visitedNodes.add(neighborNode);
      }
      parentPath.set(neighborNode, currentNode);

      queue.enqueue(neighborNode); // O(1)
    }
  }
  // !: if I get to this line...I didn't find a path
  return null;
};

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    // this.startNode = vertex;
    // this.endNode = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    // !: - this variable keeps track of Edges (neighbors)
    this._adjacencyList = new Map();
  }

  addVertex(vertex) {
    this._adjacencyList.set(vertex, []);
  }

  addDirectedEdge(startVertex, endVertex, weight = 0) {
    if (!this._adjacencyList.has(startVertex) || !this._adjacencyList.has(endVertex)) {
      throw new Error('__ERROR__ Invalid Nodes');
    }

    const adjacencies = this._adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight));
  }

  getNeighbors(vertex) {
    if (!this._adjacencyList.has(vertex)) {
      throw new Error('__ERROR__ Invalid Vertex');
    }

    return [...this._adjacencyList.get(vertex)];
  }
}

function testPathWasValid() { // eslint-disable-line
  // go to each set that should end with your start value

}

// start -- module exports build
const BFS = {};

const graphOne = new Graph();

const ten = new Vertex(10);
const two = new Vertex(2);
const six = new Vertex(6);
const seven = new Vertex(7);
const three = new Vertex(3);
const eight = new Vertex(8);
const twelve = new Vertex(12);
const fourteen = new Vertex(14);
const fifteen = new Vertex(15);

// add -- nodes to export
BFS.nodes = {};
BFS.nodes.ten = ten;
BFS.nodes.two = two;
BFS.nodes.six = six;
BFS.nodes.seven = seven;
BFS.nodes.three = three;
BFS.nodes.eight = eight;
BFS.nodes.twelve = twelve;
BFS.nodes.fourteen = fourteen;
BFS.nodes.fifteen = fifteen;

graphOne.addVertex(ten);
graphOne.addVertex(two);
graphOne.addVertex(six);
graphOne.addVertex(seven);
graphOne.addVertex(three);
graphOne.addVertex(eight);
graphOne.addVertex(twelve);
graphOne.addVertex(fourteen);

graphOne.addDirectedEdge(ten, two);
graphOne.addDirectedEdge(ten, six);
graphOne.addDirectedEdge(ten, three);
graphOne.addDirectedEdge(ten, seven);
graphOne.addDirectedEdge(two, seven);
graphOne.addDirectedEdge(six, seven);
graphOne.addDirectedEdge(six, eight);
graphOne.addDirectedEdge(three, eight);
graphOne.addDirectedEdge(eight, seven);
graphOne.addDirectedEdge(eight, twelve);

// add -- graphs to export
BFS.graphs = {};
BFS.graphs.graphOne = graphOne;

// add -- classes to export
BFS.classes = {};
BFS.classes.Graph = Graph;
BFS.classes.Queue = Queue;

// add -- functions to export
BFS.functions = {};
BFS.functions.bfs = bfs;

// uncomment for testing / debugging
// console.log(ten);
// const path = bfs(graphOne, ten, eight);
// const neighbors = graph.getNeighbors(ten);
// console.log(neighbors);
//
// console.log('return path:');
// console.log(path);

module.exports = BFS;
