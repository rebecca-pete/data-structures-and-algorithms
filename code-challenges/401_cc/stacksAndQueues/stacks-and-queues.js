'use strict';

import { isModuleDeclaration } from "@babel/types";

//Node class
class Node {

  //When creating a new node, store its name
  constructor (name) {
    this.name = name;
    this.value = value;
    this.next = next;
  }
}

class Stack {

  constructor (name) {
    this.top = top;
    this.name = name;
    this.value = value;
    this.next = next;
  }

  push(node) {
    this.node = node;
  }
  pop() {

  }
  peek() {

  }
}

class Queue {

  constructor(name) {
    this.front = front;
  }
  enqueue() {

  }
  dequeue() {

  }
  peek() {

  }

}

class Node extends Stack {
    push() {

    }
    pop() {

    }
    peek() {

    }
}

class Node extends Queue {

}

module.exports = Node;
