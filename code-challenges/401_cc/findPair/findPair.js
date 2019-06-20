'use strict';

let arr = [3, 1, -5, 12, 3];
let int = -4; 

let arr2 = [];
let target;

function findPair (arr, int) {
  for (var i = 0; i < arr.length; i++) {
    target = int - arr[i];
    for (var j = i + 1; j < arr.length; j++) {
      if(target === arr[i]){
        arr2.push(arr[i]);
        arr2.push(arr[j]);
        return arr2;
      }
    }
  }
}
findPair(arr, int);
//currently returns undefined; need to review
