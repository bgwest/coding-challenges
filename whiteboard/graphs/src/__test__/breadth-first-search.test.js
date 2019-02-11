'use strict';

// graph(s) to test
const socialNetwork = require('../lib/assests/social-network');

// test helper
const exactPath = require('../lib/assests/exact-path');

// graph searching
const BFS = require('../lib/breadth-first-search');

describe('breadth-first-search.js', () => {
  test('test that from startVertex that endVertex is found', () => {
    const { start, end } = socialNetwork.search;
    const resultPath = BFS(socialNetwork, start, end);
    // return exact path -- starts with ending Vertex to trace back through
    // the map that was created using BFS
    const tracedPath = exactPath(resultPath, end);
    expect(tracedPath.get('cory')).toEqual('gary');
    expect(tracedPath.get('scott johnson')).toEqual('matty');
  });
});
