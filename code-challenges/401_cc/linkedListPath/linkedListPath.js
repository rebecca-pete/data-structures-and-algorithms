'use strict';

// let valA;
// let valB;

// let start;
// let end;
let node;


function findPath (valA) {
  if(node.val !== null){
    if(node.val === valA){
      valA = node;
    }
    if(node.leftChild !== null){
      if(node.leftChild === valA){
        valA = node.leftChild;
      }
      if(node.rightChild !== null){
        if(node.rightChild === valA){
          valA = node.rightChild;
        }
        else {
          return null;
        }
      }
      findPath(valA);
    }
  }
};
