'use strict';

function insertShiftArray(arr, item) {
  if (typeof item === 'undefined') throw new TypeError();
  if (!Array.isArray(arr)) throw new TypeError();
  if (arr.length === 0){
    arr[0] = item;
    return arr;
  }
  for (let i = arr.length; i > Math.floor(arr.length / 2); i--) {
    arr[i] = arr[i - 1];
  }
  arr[Math.floor(arr.length / 2)] = item;

  return arr;
}
module.exports = insertShiftArray;
