'use strict';

const arr = [1, 3, 5, 7]

function reverseArray (arr) {
  let newArr = [];
  for (let i = arr.length; i > 0; i --) {
    newArr.push(arr[i]);
  }
  return newArr;
}

reverseArray(arr);
