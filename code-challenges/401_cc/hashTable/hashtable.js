'use strict';

class HashTable {
  constructor(){
    this.LENGTH = 100;
    this.data = new Array(this.LENGTH);
    for(let i = 0; i < this.LENGTH - 1; i++){
      this.data[i] = {};
    }
  }

  stringSum(key){
    return key.split('').reduce((accumulator, current) => {
      current = current.charCodeAt(0);
      return accumulator += current;
    }, 0);
  }

  hash(key){
    if(typeof key !== 'string' && typeof key !== 'number') return null;

    let convertedKey = key;
    if(typeof key === 'string') {
      convertedKey = this.stringSum(key);
    } else {
      convertedKey = key;
    }
    return convertedKey * 599 % (this.LENGTH - 1);
  }

  get(key){
    let index = this.hash(key);
    return this.data[index][key] ? this.data[index][key] : null;
  }

  contains(key){
    let index = this.hash(key);
    return !!this.data[index][key];
  }

  add(key, value){
    const index = this.hash(key);
    Object.assign(this.data[index], {[key]: value});
  }
}

module.exports = HashTable;
