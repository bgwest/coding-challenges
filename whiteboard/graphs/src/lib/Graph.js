'use strict';

const Edge = require('./Edge');

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    return this.adjacencyList.set(vertex, []);
  }

  // method to help graph class addEdge method read cleaner
  testEdge(fromV, toV) {
    const verticesToTest = {
      from: this.adjacencyList.get(fromV),
      to: this.adjacencyList.get(toV),
    };
    if (!verticesToTest.from || !verticesToTest.to) {
      return new Error('testEdge() ::ERROR:: invalid vertex');
    } // else -- if both vertices are valid...
    return true;
  }

  addEdge(vertexFrom, vertexTo, weight = 0) {
    const makeEdge = this.testEdge(vertexFrom, vertexTo);
    if (makeEdge) {
      const selectAdjacencies = this.adjacencyList.get(vertexFrom);
      return selectAdjacencies.push(new Edge(vertexTo, weight));
    } // else
    return makeEdge; // aka ERROR
  }

  getNeighbors(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      return new Error('getNeighbors() ::ERROR:: invalid vertex');
    } // else
    return this.adjacencyList.get(vertex);
  }
}

module.exports = Graph;
