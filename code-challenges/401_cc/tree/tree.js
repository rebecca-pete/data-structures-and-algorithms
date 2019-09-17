'use strict';

class Node {
    constructor (node) {
        this.value = value;
        this.leftChild = leftChild;
        this.rightChild = rightChild;
    }
}
class Binary Tree {
    constructor () {
        this.value = value;
    }
    //Root, Left, Right
    preOrder (node.value) {
        if(node.value !== null) {
            console.log(node.value);
            preOrder(node.leftChild);
            preOrder(node.rightChild);
            return;
        }
    }
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
    }
}

//in process, stretch
class Binary Search Tree {
    constructor () {
        this.value = value;
    }
    add(value) {
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
    //contains is incomplete
    contains(value) {

    }//almost there
    findLargest() {
        const maxValue = 0;
        const Q = new Queue ();
            Q.enqueue(root);
            while(Q.length > 0) {
            let current = Q.dequeue();
            if(current > maxValue) {
                let maxValue = current;
            }
            }
        Q.enqueue(current.left);
        Q.enqueue(current.right);
    }
}