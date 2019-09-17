'use strict';

const _swap = (items, indexA, indexB) => {
  const helper = items[indexA];

  items[indexA] = items[indexB];
  items[indexB] = helper;
};

//think of leftIndex as zero
//think of rightIndex as (length - 1) of array we're working on right now, could be a piece
const _reslice = (items, leftIndex, rightIndex) => {
  //swapping
  const pivotIndex = rightIndex; //findPivot(items, leftIndex, rightIndex);
  let firstHighIndex = leftIndex;

  for( let i = leftIndex; i < rightIndex; i ++){
    if(items[i] < items[pivotIndex]) {
      _swap(items, i, firstHighIndex);
      firstHighIndex++;
    }
  }

  _swap(items, pivotIndex, firstHighIndex);
  return firstHighIndex; //this becomes the pivot's index

};

const _helper = (items, leftIndex, rightIndex) => {
  //insert sort is faster for smaller arrays; we did not define this today
  // if(rightIndex - leftIndex <= 10){
  //     insertionSort(items);
  // }
  //normally we would make a copy of the array, here we won't
  if(rightIndex > leftIndex){
    //for now I'm going to assume that partition returns the pivot's index
    const resliceIndex = _reslice(items, leftIndex, rightIndex);

    _helper(items, leftIndex, resliceIndex - 1);
    _helper(items, resliceIndex + 1, rightIndex);
  }
};

//not stable, in place
const quicksort = items => {
  _helper(items, 0, items.length -1);
};

let array = [4, 5, 3, 1];
quicksort(array);
console.log(array);

array = [1, 2];
quicksort(array);
console.log(array);

array = [2, 1, 3, 5, 4, 9];
quicksort(array);
console.log(array);

