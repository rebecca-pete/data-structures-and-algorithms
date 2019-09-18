'use strict';

const LinkedList = require('../lib/linked-list.js');

describe('Testing LinkedList', () => {
  it(`Creates a new linked list instance`, () => {
    let list = new LinkedList();
    expect(list.head).toEqual(null);
    expect(list.tail).toEqual(null);
    expect(list.length).toEqual(0);
  });
  //   it(`Returns the index of a key that exists in the array`, () => {
  //     let arr = [4, 8, 15, 16, 23];
  //     let key = 23;
  //     let result = 4;
  //     let index = arrayBinarySearch(arr, key, 0, arr.length-1);
  //     expect(index).toEqual(result);
  //   });
  //   it(`If the key does NOT exist in the array, returns -1`, () => {
  //     let arr = [4, 8, 15, 16, 23, 42];
  //     let key = 61;
  //     let result = -1;
  //     let index = arrayBinarySearch(arr, key, 0, arr.length-1);
  //     expect(index).toEqual(result);
  //   });
  //   it(`If the array is empty, return -1`, () => {
  //     let arr = [];
  //     let key = 5;
  //     let result = -1;
  //     let emptyArr = arrayBinarySearch(arr, key, 0, arr.length-1);
  //     expect(emptyArr).toEqual(result);
  //   });
  //   it(`If the array has one item and that value does NOT match the key, return -1`, () => {
  //     let arr = [1];
  //     let key = 5;
  //     let result = -1;
  //     let emptyArr = arrayBinarySearch(arr, key, 0, arr.length-1);
  //     expect(emptyArr).toEqual(result);
  //   });
  //   it(`If the array has one item and that value DOES match the key, return 0`, () => {
  //     let arr = [5];
  //     let key = 5;
  //     let result = 0;
  //     let emptyArr = arrayBinarySearch(arr, key, 0, arr.length-1);
  //     expect(emptyArr).toEqual(result);
  //   });

//   it(`Throws an error on an invalid linked list`, () => {
//     expect(() => {
//       LinkedList({});
//     }).toThrow(TypeError);
//   });
});
