'use strict';

//                                   BFS
// BFS aims to satisfy two things:
//   1. Is there a path from given 'start vertex' to given 'end vertex'?
//   2. What is the shortest path from given 'start vertex' to given 'end vertex'?

// For BFS on a graph, we will need to utilize several data structures.
//   Below Format: e.g. '[0-9].' 'Data-structure' '(JS "equivalent")'
//     1. Queue (array),
//     2. Finite set (set),
//     3. Hash Table (map)

// I have manually coded and required a "Queue Class".
// We could make a hash table class and a set class, but I believe the complexity
//   would overshadow what we are trying to accomplish with BFS.
// Will move forward with described data-structures noted above.

const Queue = require('./Queue');

const bfs = (graph, startVertex, endVertex) => {
  // data-structures needed to perform search
  const parentPath = new Map();
  const visited = new Set();
  const queue = new Queue();

  // setup prior to loop
  queue.enqueue(startVertex);
  visited.add(startVertex);

  // start search
  while (!queue.isEmpty()) {
    const currentVertex = queue.dequeue();
    // 'BASE CASE'
    if (currentVertex === endVertex) {
      return parentPath;
    }

    // else 'LOOP CASE'
    const neighbors = graph.getNeighbors(currentVertex);

    for (const neighbor of neighbors) { // eslint-disable-line no-restricted-syntax
      const neighborVertex = neighbor.vertex;

      // skip to next neighbor or exit loop if neighbor was already examined
      if (visited.has(neighborVertex)) {
        continue; // eslint-disable-line
      }

      // else, if neighbor is 'new'
      visited.add(neighborVertex);
      // think of a way to make this more versatile for additional graph applications
      parentPath.set(neighborVertex.value.name, currentVertex.value.name);
      queue.enqueue(neighborVertex);
    }
  } // else -- if parentPath was not returned or loop didn't run ...
  return null;
};

module.exports = bfs;
