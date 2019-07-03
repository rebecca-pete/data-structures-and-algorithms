'use strict';

//helper function
const swap = (arr, i, payload) => {
  let arr[i] = payload;

}

const arr = ['blue', 'blue', 'white', 'white', 'shield'];

const flag = (arr) => {
  let shieldIdx = (arr.length -1)/2;
  let WL = shieldIdx - 1;
  let WR = shieldIdx + 1;
  let BL = 0;
  let BR = arr.length - 1;
  let BCount = 0;
  let WCount = 0;
  let i = 0;

  while ((BL !== WL) || (BR !== WR)) {
    if (arr[i] === 'shield') {
      swap(arr, i, shieldIdx);
    }
    if (arr[i] === 'blue') {
      if(BCount % 2 === 0 ) {
        swap(arr, i, BR);
        BR--;
      } else {
        swap(arr, i, BL);
        BL++;
      }
      BCount++;
    }
    if (arr[i] === 'white'){
      if (WCount % 2 ===0){
        swap(arr, i, WR);
        WR++;
      } else {
        swap(arr, i, WL);
        WL--;
      }
      WCount++;
    }
    i++;
  }

};
