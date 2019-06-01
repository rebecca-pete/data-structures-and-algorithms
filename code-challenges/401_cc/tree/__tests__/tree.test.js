'use strict';

const {Binary Tree, Binary Search Tree} = require('../tree.js');

xdescribe('Binary Tree', () => {
  it('creates an instance', () => {
    let stack = new Binary Tree();
    expect(stack instanceof Binary Tree).toBeTruthy();
  });
