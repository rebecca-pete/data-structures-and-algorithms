'use strict';

//Becky - graph is a hashmap
//Becky - adjList is a property on the hashmap object
const dft = (graph, node, results = []) => {
  if(node.val !== null && helper(node.val, results)){
    results.push(node.val);
  }
  if(graph.adjList.has(node.val)){
    let temp = graph.adjList.get(node.val);
    for(let i = 0; i < results.length; i++){
      for(let j = 0; j < temp.length; j++) {
        if(temp[i] !== results[i]) {
          results.push(temp[j]);
          dft(graph, temp[j], results);
        }
      }
    }
  } 
  return results;
}

const helper = (node.val, results) => {
  for(let i = 0; i < results.length; i++){
    if(results[i] === node.val){
      return false;
    }
  }
  return true;
}