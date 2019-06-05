'use strict';

const {Node} = require('../depth-binary-tree.js');

describe('node', () => {
  it('creates an instance', () => {
    let node = new Node();
    expect(node instanceof Node).toBeTruthy();
  });
//start here
  describe('peek()', () => {
    it('returns null on an empty stack', () => {
      let stack = new Stack();
      expect(stack.peek()).toBeNull();
    });