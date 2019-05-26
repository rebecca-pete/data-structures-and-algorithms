'use strict';

class Node {
  constructor(name) {
    this.name = name;
    this.next = next;
  }
}

class Stack {

  constructor () {
    //since the storage array represents a stack, front is the same as top. The front of the array is the top of the stack.
    this.storage = [];
    this.top = null;
    this.length = 0;
  }

  push(entry) {
    //since the storage array represents a stack, front is the same as top. The front of the array is the top of the stack.
    this.top = entry;
    return this.length = this.storage.push(entry); //.push returns the length of the array
  }

  peek() {
    return this.top;
    // return this.storage[this.length -1] || null;
  }
  pop() {
    let result = this.storage.pop() || null;
    this.top = this.storage[this.storage.length -1] || null;
    //&& REQUIRES everything to be truthy and will short circuit as soon as it finds something falsy
    result && this.length--;
    return result;
  }
}

class Queue {
  constructor() {
    this.length = 0;
    this.storage = [];
    // this.top = null; 
    // this.front = null; 
  }
  enqueue(entry) {
    //since the storage array represents a queue, the front of the array is the same as the front of the queue
    //unshift adds one or more items at the beginning of an array
    //put at the beginning so that it is seen at the front of the array, not sure why ***
    this.length ++;
    return this.storage.unshift(entry);
    // this.top = node; //or null?
  }
  peek() {
    return this.storage[0];
  }
  dequeue() {
  //since the storage array represents a queue, the front of the array is the same as the front of the queue.
    this.length && this.length --;
    return this.storage.pop() || null;
  }

}

module.exports = {Stack, Queue};

