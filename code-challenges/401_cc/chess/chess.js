'use strict';

let k = arr[d[e]]
let kn = arr[x[y]];
let rook = arr[b[c]];
let column = j;
let row = i;
let inigo = 'You killed my father, prepare to die!';


const findK = (arr) => {
  for(let i = 0; i < arr.length; i++) {
    for(let j= 0; j < arr[i[j]].length; j++) {
      if (arr[i[j]] === king.val) {
        k = arr[i[j]];
        return k;
      }
    }
  }
};

const findKn = (arr) => {
  if( (kn === arr[i +1[j+2]]) || (kn === arr[i +1[j-2]]) || (kn === arr[i -1[j+2]]) || (kn === arr[i -1[j-2]]) || (kn === arr[i -2[j+1]]) || (kn === arr[i -2[j-1]]) || (kn === arr[i +2[j+1]]) || (kn === arr[i +2[j-1]]) ) {
    console.log(inigo);
    return kn;
  }
}

const findRook = (arr) => {
  if ( rook === k[i] || rook === k[j]) {
    console.log(inigo);
    return rook;
  }
}