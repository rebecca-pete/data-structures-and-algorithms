'use strict';

const hasIsland = (graph) => {
  const total = Object.keys(graph.adjList);
  const connectedList = dft(graph.adjList);
  return total.length() === connectedList.length();
};
