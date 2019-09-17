'use strict';

// this method assumes sorting in acending order
// @params items
// @returns {Array} : sorted array :O)

const mergeSort = items => {
    if (items.length < 2 ) {
        return items; //already sorted
    }
    if (items.length === 2) {
        //if a two item array and the value on the left is smaller than the right, then leave as is
        return items[0] < items [1] ? items : items.reverse();
    }
    //recursive cases
    const middlePoint = Math.floor(items.length / 2);

    //going down in the recursive tree
    const leftSide = mergeSort(items.slice(0, middlePoint));
    const rightSide = mergeSort(items.slice(middlePoint));

    //here we assume that left and right have been pre-sorted

    //while we have values on the left and right side
    const output = [];
    while(leftSide.length > 0 || rightSide.length > 0) {
        //putting a value on the left and then removing it
        if(leftSide[0] <= rightSide[0]){
            output.push(leftSide[0]);
            leftSide.shift();
        }
        else {
            output.push(rightSide[0]);
            rightSide.shift();
        }
        //if we are here, one of the arrays must be empty
        if(leftSide.length === 0 && rightSide.length > 0)
        //we only have values on the right side
        output = ouput.concat(rightSide);
    }
        if(rightSide.length === 0 && leftSide.length > 0) {
              //we only have values on the left side
            output = output.concat(leftSide);
        }
        return output;
    }

};

console.log(mergeSort([1]);
console.log(mergeSort([1, 2]);
console.log(mergeSort([2, 1, 3, 6, 4, 9]);
