'use strict';

let arr = [2, 3, 5, 7, 9];

const findIt = (arr) => {
    let result = [];
    for (let i in arr){
        let x = arr.length;
        let indexPos = (x - i);
        result.push(arr[indexPos]);
    }
    return result;
  };