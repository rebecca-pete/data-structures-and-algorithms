'use strict';
//rename
const {Queue} = require('../fifo-animal-shelter.js');

describe('queue', () => {
  it('creates an instance', () => {
    let queueOne = new Queue();
    expect(queueOne instanceof Queue).toBeTruthy();
  });

  describe('peek()', () => {
    it('returns null on an empty queue', () => {
      let queueOne = new Queue();
      expect(queueOne.peek()).toBeNull();
    });
