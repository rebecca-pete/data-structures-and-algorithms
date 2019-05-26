'use strict';

const {Stack, Queue} = require('../stacks-and-queues.js');
// let Queue = require('../stacks-and-queues.js');

describe('stack', () => {
  it('creates an instance', () => {
    let stack = new Stack();
    expect(stack instanceof Stack).toBeTruthy();
  });

  describe('peek()', () => {
    it('returns null on an empty stack', () => {
      let stack = new Stack();
      expect(stack.peek()).toBeNull();
    });
    it('returns the last time', () => {
      let stack = new Stack();
      stack.push(1);
      expect(stack.peek()).toEqual(1);
      stack.push(2);
      expect(stack.peek()).toEqual(2);
    });

    it('does not alter the stack', () => {
      let stack = new Stack();
      stack.push(1);
      expect(stack.peek()).toEqual(1);
      expect(stack.peek()).toEqual(1);
    });

    it('following a pop() points to the new head of the stack', () => {
      let stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      stack.pop();
      expect(stack.peek()).toEqual(2);
    });
  });

  describe('push()', () => {

    it('sets the value to the top of the stack', () => {
      let stack = new Stack();
      stack.push(1);
      expect(stack.top).toEqual(1);
    })

    it('adds a value to the top of the stack', () => {
      let stack = new Stack();
      stack.push(1);
      expect(stack.top).toEqual(1);
      stack.push(2);
      expect(stack.top).toEqual(2);
      stack.push(3);
      expect(stack.peek()).toEqual(3);
    });
  });

  describe('pop()', () => {
    it('returns and removes a value from the top of the stack', () => {
      let stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.peek()).toEqual(3);
      expect(stack.pop()).toEqual(3);
      expect(stack.peek()).toEqual(2);
      expect(stack.pop()).toEqual(2);
      expect(stack.peek()).toEqual(1);
      expect(stack.pop()).toEqual(1);
      expect(stack.peek()).toEqual(null);
    });

    it('should return null when called on an empty stack', () => {
      let stack = new Stack();
      expect(stack.pop()).toEqual(null);
    });
  });
  describe('length', () => {
    it('the length should stay at 0 if we pop an empty stack', () => {
      let stack = new Stack();
      stack.pop();
      stack.pop();
      stack.pop();
      stack.pop();
      stack.pop();
      expect(stack.length).toEqual(0);
    });
  });
});

describe('Queue', () => {

  describe('enqueue', () => {
    it('should add an item to the queue', () => {
      let q = new Queue();
      q.enqueue(1);
      console.log(q);
      expect(q.storage[0]).toBe(1);
    });

    it('should increase the length', () => {
      let q = new Queue();
      q.enqueue(5);
      expect(q.length).toBe(1);
      q.enqueue(2);
      expect(q.length).toBe(2);
    });
  });

  it('implements first in first out (FIFO) functionality', () => {
    let q = new Queue();
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    q.enqueue(4);

    expect(q.dequeue()).toEqual(1);
    expect(q.dequeue()).toEqual(2);
    expect(q.dequeue()).toEqual(3);
    expect(q.dequeue()).toEqual(4);

  });

});