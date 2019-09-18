'use strict';

/**
 * A class that represents a single node
 * @param {*} value
 * @param {*} next
 */

class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

module.exports = Node;
