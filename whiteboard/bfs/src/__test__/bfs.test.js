'use strict';

const BFS = require('../lib/bfs');

describe('testing bfs.js', () => {
  test('test that \'INVALID path\' returns NULL', () => {
    const testGraph = BFS.graphs.graphOne;
    const ten = BFS.nodes.ten; // eslint-disable-line prefer-destructuring
    const fifteen = BFS.nodes.fifteen; // eslint-disable-line prefer-destructuring
    const path = BFS.functions.bfs(testGraph, ten, fifteen);
    expect(path).toEqual(null);
  });
  test('test that \'VALID path\' returns TRUE', () => {
    const testGraph = BFS.graphs.graphOne;
    const ten = BFS.nodes.ten; // eslint-disable-line prefer-destructuring
    const twelve = BFS.nodes.twelve; // eslint-disable-line prefer-destructuring
    const path = BFS.functions.bfs(testGraph, ten, twelve);
    expect(path).toEqual(path);
  });
});
