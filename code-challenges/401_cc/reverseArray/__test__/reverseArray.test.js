'use strict';

const {reverseArray} = require('../reverseArray.js');

xdescribe('reverseArray', () => {
  it('returns a reversed array', () => {
      let arr = [1, 3, 5, 7];
    let newArr = [];
    for (let i = arr.length -1; i >= 0; i --) {
        newArr.push(arr[i]);
      }
      return newArr;
    expect(newArr).toBe(7, 5, 3, 1);
  });
}
