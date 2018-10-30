'use strict';

// !: I find quokka to be a useful tool but I cannot afford to pay for it
//     ( If you didn't know, only pro version of quokka works on module files)
//     I am putting all the code in this one file so I can use quokka
//     It helps me develop faster, at least for the time being

// !: this library has vulnerabilities skipping on using it for now
// const Stack = require('stack-lifo');

// development notes = !:

// !: Stack - LIFO
class Stack {
  constructor() {
    this.stack = [];
  }

  // !: Stack methods:
  //   - .push - pushes (value) onto stack
  //   - .pop - pops (value) off the stack
  //   - .peek - peek at top value without 'the pop'

  push(value) {
    return this.stack.push(value);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  size() {
    return this.stack.length;
  }
}

const dfs = (graph, startNode, goalNode) => {
  //-----------------------------------------------
  const stack = new Stack(); // !: change this for a QUEUE for next week's challenge
  const visitedNodes = new Set();
  const parentPath = new Map(); // !:  this holds the final path at the end
  //-----------------------------------------------
  stack.push(startNode);
  visitedNodes.add(startNode);
  //-----------------------------------------------
  // MAIN LOOP
  //-----------------------------------------------
  while (stack.size() > 0) {
    console.log(stack.size());
    const currentNode = stack.peek();
    // THEN pop
    stack.pop();
    console.log(currentNode);

    if (currentNode === goalNode) {
      console.log(currentNode);
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

      stack.push(neighborNode); // O(1)
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
    console.log(vertex);
    if (!this._adjacencyList.has(vertex)) {
      // console.log(this._adjacencyList);
      throw new Error('__ERROR__ Invalid Vertex');
    }

    return [...this._adjacencyList.get(vertex)];
  }
}


const graph = new Graph();

const ten = new Vertex(10);
const two = new Vertex(2);
const six = new Vertex(6);
const seven = new Vertex(7);
const three = new Vertex(3);
const eight = new Vertex(8);
const twelve = new Vertex(12);
const fourteen = new Vertex(14);

graph.addVertex(ten);
graph.addVertex(two);
graph.addVertex(six);
graph.addVertex(seven);
graph.addVertex(three);
graph.addVertex(eight);
graph.addVertex(twelve);
graph.addVertex(fourteen);

graph.addDirectedEdge(ten, two);
graph.addDirectedEdge(ten, six);
graph.addDirectedEdge(ten, three);
graph.addDirectedEdge(ten, seven);
graph.addDirectedEdge(two, seven);
graph.addDirectedEdge(six, seven);
graph.addDirectedEdge(six, eight);
graph.addDirectedEdge(three, eight);
graph.addDirectedEdge(eight, seven);
graph.addDirectedEdge(eight, twelve);

console.log(ten);
const path = dfs(graph, ten, eight);
// const neighbors = graph.getNeighbors(ten);
// console.log(neighbors);

console.log('return path:');
console.log(path);
