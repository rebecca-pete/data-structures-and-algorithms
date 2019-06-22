'use strict';

const {HashTable} = require('../hashtable.js');

describe('HashTable class', () => {
    it('Creates a new hashtable instance', () => {
        let table = new HashTable();
      expect(table).toBe(truthy);
    });
    describe('hashtable', () => {
        it('Adding a key/value to your hashtable results in the value being in the data structure', () => {
            let table = new HashTable('cat');
            
            expect(table).toEqual(75);
        });
    }
}