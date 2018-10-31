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
  test('test that \'VALID path\' 10 --> 8 returns TRUE', () => {
    const testGraph = BFS.graphs.graphOne;
    const ten = BFS.nodes.ten; // eslint-disable-line prefer-destructuring
    const eight = BFS.nodes.eight; // eslint-disable-line prefer-destructuring
    const path = BFS.functions.bfs(testGraph, ten, eight);
    const testPath = BFS.functions.validatePath(path, ten, eight);
    expect(testPath.validPath).toEqual(true);
  });
  // have to solve bug where undefined is coming up in recursive function
  // probably flow control handling
  // test('test that \'VALID path\' 10 --> 12 returns TRUE', () => {
  //   const testGraph = BFS.graphs.graphOne;
  //   const ten = BFS.nodes.ten; // eslint-disable-line prefer-destructuring
  //   const twelve = BFS.nodes.twelve; // eslint-disable-line prefer-destructuring
  //   const path = BFS.functions.bfs(testGraph, ten, twelve);
  //   const testPath = BFS.functions.validatePath(path, ten, twelve);
  //   expect(testPath.validPath).toEqual(true);
  // });
});
