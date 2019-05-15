'use strict';

function insertShiftArray (arr, item) => {

    if(typeof item === 'undefined') throw new TypeError;
    if(typeof item !== 'array') throw new TypeError;
    if(arr.length === 0) return item;
    for(let i = arr.length; i > math.ceiling(arr.length/2; i--){
        arr[i] = arr[i-1];
    }
    arr[math.ceiling(arr.length/2)] = item;

    return arr;
};