'use strict';

class Node {
    constructor (node) {
        this.value = value;
        this.leftChild = leftChild;
        this.rightChild = rightChild;
    }
}
class Binary Tree {
    constructor (node) {
      
    }
    //Root, Left, Right
    preOrder (node.value) {
      if(node.value !== null) {
        console.log(node.value);
        preOrder(node.leftChild);
        preOrder(node.rightChild);
        return;
      };
    },
    //Left, Root, Right
    inOrder (node.value) {
      if (node.leftChild !== null) {
        inOrder(node.leftChild);
      }
      console.log(node.value);
      if (node.rightChild !== null) {
        inOrder(node.rightChild);
      }
    },
    //Left, Right, Root
    postOrder (node.value) {
      if (node.leftChild !== null) {
        inOrder(node.leftChild);
      }
      if (node.rightChild !== null) {
        inOrder(node.rightChild);
      }
      console.log(node.value);
    },
}
class Binary Search Tree {
    constructor (node) {

      add (node.value) {
        if(node.value === null){
          return null;
        }
        while (!node.leftChild && !node.rightChild) {
          let node.leftChild = node.value;
        }
        while (node.leftChild < node.value){
          let node.rightChild = node.value;
          }
        while (node.rightChild > node.value){
          let node.leftChild = node.value;
        }
      };
      //need to finish
    contains(node.value) {
      if(node.value !== null){
        if(node.value === root)
      }
      // while (!node.leftChild && !node.rightChild) {
      //   if(node.leftChild === node.value){
      //     return node;
      //   }

      // while(node.value > currentNode.value){
      //   let node.rightChild = node.value;
        
      }


    }
}