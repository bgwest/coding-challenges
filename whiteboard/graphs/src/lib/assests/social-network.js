'use strict';

// social network as a graph

const Graph = require('../../lib/Graph');
const Vertex = require('../../lib/Vertex');

// instantiate vertices -- in this case we will use people
// to mimic a social network
const cindy = new Vertex({
  name: 'cindy', age: 34, location: 'MD', status: 'coffee date yall',
});
const cory = new Vertex({
  name: 'cory', age: 26, location: 'WA', status: 'snowpocalypse',
});
const gary = new Vertex({
  name: 'gary', age: 22, location: 'FL', status: 'sleuthin',
});
const nala = new Vertex({
  nala: 'nala bear', age: 34, location: 'CA', status: 'cant stop wont stop',
});
const matty = new Vertex({
  name: 'matty', age: 19, location: 'TX', status: 'im offended',
});
const brad = new Vertex({
  name: 'brad', age: 31, location: 'TX', status: 'my mail order bride is here',
});
const guadalupe = new Vertex({
  name: 'guadalupe', age: 58, location: 'IL', status: 'the games against me',
});
const scott = new Vertex({
  name: 'scott johnson', age: 58, location: 'IL', status: 'the games against me',
});
const tk = new Vertex({
  name: 'tk', age: 45, location: 'WI', status: 'the games against me',
});

// instantiate new Graph
const graph = new Graph();

graph.addVertex(cory);
graph.addVertex(tk);
graph.addVertex(gary);
graph.addVertex(brad);
graph.addVertex(nala);
graph.addVertex(scott);
graph.addVertex(matty);
// technically, these people have no friends other than themselves
graph.addVertex(guadalupe);
graph.addVertex(cindy);

graph.addEdge(cory, tk);
graph.addEdge(cory, gary);
graph.addEdge(cory, nala);
graph.addEdge(cory, brad);
graph.addEdge(tk, brad);
graph.addEdge(gary, brad);
graph.addEdge(gary, scott);
graph.addEdge(nala, scott);
graph.addEdge(scott, brad);
graph.addEdge(scott, matty);
// 'island friends'
graph.addEdge(guadalupe, cindy);

// start, end -- to search
graph.search = {};
graph.search.start = cory;
graph.search.end = matty;

module.exports = graph;
