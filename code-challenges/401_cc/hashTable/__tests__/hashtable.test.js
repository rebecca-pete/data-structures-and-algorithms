'use strict';

const {HashTable} = require('../hashtable.js');

xdescribe('HashTable class', () => {
  it('Creates a new hashtable instance', () => {
    let table = new HashTable();
    expect(table).toBe(true);
  });
  describe('hashtable', () => {
    it('Adding a key/value to your hashtable results in the value being in the data structure', () => {
      let table = new HashTable('cat');
      expect(table).toEqual(75);
    });
  })
})

