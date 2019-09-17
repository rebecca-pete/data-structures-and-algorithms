'use strict';

const insertShiftArray = require('../array-shift.js');

describe('Testing insertShiftArray', () => {
  it(`Inserting in the middle of an even-length array`, () => {
    // expect(result).toBeTruthy();
    let arr = [2, 4, 6, 8];
    let item = 5;
    let result = [2, 4, 5, 6, 8];
    insertShiftArray(arr, item);
    expect(arr).toEqual(result);
  });
  it(`Inserting in the middle of an odd-length array`, () => {
    // expect(result).toBeTruthy();
    let arr = [2, 4, 6, 8, 11];
    let item = 5;
    let result = [2, 4, 6, 5, 8, 11];
    insertShiftArray(arr, item);
    expect(arr).toEqual(result);
  });
  it(`Inserting into an empty array`, () => {
    // expect(result).toBeTruthy();
    let arr = [];
    let item = 5;
    let result = [5];
    insertShiftArray(arr, item);
    expect(arr).toEqual(result);
  });
  it(`Throws an error on an invalid array`, () => {
    expect(()=>{
      insertShiftArray({}, 6);
    }).toThrow(TypeError);

  });
  it(`Throws an error on an invalid item`, () => {
    expect(()=>{
      insertShiftArray([]);
    }).toThrow(TypeError);

  });
});
