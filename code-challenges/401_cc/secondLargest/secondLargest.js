'use strict';

let arr = [1, 3, 8, 5];
function secondLargest (arr) {
  for (var i = 0; i < arr.length; 1++) {
    while (arr[i] > arr[i + 1]) {
      let arr[i] = arr[i + 1];
      let arr[i + 1] = arr[i];
    }
    
    return arr[arr.length - 2];
    
  }
}