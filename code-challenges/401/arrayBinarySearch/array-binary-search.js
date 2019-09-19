'use strict';

module.exports = (arr, key) => {

  if(typeof key === 'undefined') {
    throw new TypeError('Invalid key variable');
  }
  if(!Array.isArray(arr)) {
    throw new TypeError('Invalid arr variable');
  } else if (arr.length === 0) {
    return -1;
  } else if(arr.length === 1){
    if(arr[0] !== key){
      return -1;
    } else {
      return 0;
    }
  }
  return findKeyIndex(arr, key, 0, arr.length -1);
};

function findKeyIndex(arr, key, left, right){

  if (right - left < 0){
    return -1;
  }
  let midIdx = Math.floor((left+right)/2);

  if(arr[midIdx] === key){
    return midIdx;
  } else if (arr[midIdx] > key) {
    //Checks the left half
    return findKeyIndex(arr, key, left, midIdx-1);
  } else {
    //Checks the right half
    return findKeyIndex(arr, key, midIdx+1, right);
  }

}
