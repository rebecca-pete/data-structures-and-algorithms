'use strict';

const LinkedList = require('../lib/linked-list.js');

describe('Testing LinkedList', () => {
  it(`Creates a new linked list instance`, () => {
    let list = new LinkedList();
    expect(list.head).toEqual(null);
    expect(list.tail).toEqual(null);
    expect(list.length).toEqual(0);
  });
  it(`The head property points to the first node in the linked list`, () => {
    let list = new LinkedList();
    list.insert(2);
    list.insert(3);
    list.insert(4);

    expect(list.head.value).toEqual(4);
  });
  it(`Returns true if the given value exists in the linked list, fales if it does not`, () => {
    let list = new LinkedList();

    list.insert(7);
    list.insert(8);
    list.insert(9);

    expect(list.includes(7)).toBeTruthy();
    expect(list.includes(8)).toBeTruthy();
    expect(list.includes(9)).toBeTruthy();

    expect(list.includes(32)).toBeFalsy();
  });

  it(`Returns an array of all values in the linked list`, () => {
    let list = new LinkedList();

    list.insert(4);
    list.insert(5);
    list.insert(6);

    list = list.print();

    expect(list[0]).toEqual(6);
    expect(list[1]).toEqual(5);
    expect(list[2]).toEqual(4);
  });
});

describe(`Testing LinkedList insertion method`, () => {
  it(`The method .insert(value) inserts a value correctly and at the head of the linked list`, () => {
    let list = new LinkedList();

    list.insert(42);

    expect(list.head.value).toEqual(42);
    expect(list.tail.value).toEqual(42);
    expect(list.length).toEqual(1);

    list.insert(43);
    list.insert(44);
    list.insert(45);

    expect(list.head.value).toEqual(45);
    expect(list.head.next.value).toEqual(44);
    expect(list.head.next.next.value).toEqual(43);
    expect(list.head.next.next.next.value).toEqual(42);

    expect(list.tail.value).toEqual(42);
    expect(list.tail.next).toEqual(null);

    expect(list.length).toEqual(4);
  });
  it(`The method .append(value) adds a given value to the end of the linked list`, () => {
    let list = new LinkedList();

    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(3);
    expect(list.length).toEqual(3);

  });
  it(`The method .insertBefore(value, newVal) adds the newVal before value`, () => {
    let list = new LinkedList();

    list.append(1);

    list.insertBefore(1, 2);
    
    list.insertBefore(2, 3);
    //Becky - At this point, the linked list should look like 3 -> 2 -> 1 -> null
    expect(list.head.value).toEqual(3);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(1);
    expect(list.head.next.next.next.value).toEqual(null);
  });
  it(`The method .insertBefore(value, newVal) throws an exception if the given value is NOT in the linked list`, () => {
    let list = new LinkedList();

    expect(() => list.insertBefore(2, 4)).toThrow();
    expect(() => list.insertBefore()).toThrow();
  });

  it(`The method .insertAfter(value, newVal) adds newVal after value in linked list`, () => {
    let list = new LinkedList();

    list.append(11);
    list.insertAfter(11, 12);
    list.insertAfter(12, 13);
    //Becky - The list should now be 11 -> 12 -> 13 -> null

    expect(list.head.value).toEqual(11);
    expect(list.head.next.value).toEqual(12);
    expect(list.head.next.next.value).toEqual(13);
    expect(list.head.next.next.next.value).toEqual(null);
  });
  it(`The method .insertAfter(value, newVal) throws an exception if the given value is NOT in the linked list`, () => {
    let list = new LinkedList();

    expect(() => list.insertAfter(2, 4)).toThrow();
    expect(() => list.insertAfter()).toThrow();
  });
  it(`The method .kFromEnd(k) returns the kth value from the end or throws an exception if it does not exist`, () => {
    let list = new LinkedList();
    //Becky - This is an empty linked list, so any value should throw an error
    expect(() => list.kFromEnd(10)).toThrow();
    expect(() => list.kFromEnd(30)).toThrow();
    expect(() => list.kFromEnd(-1)).toThrow();

    list.append(8);
    //Becky - the linked list now has one node

    expect(list.kFromEnd(0)).toEqual(8);
    expect(() => list.kFromEnd(10)).toThrow();
    expect(() => list.kFromEnd(81)).toThrow();

    list.append(9);
    //Becky - the linked list now has two nodes

    expect(list.kFromEnd(0)).toEqual(9);
    expect(list.kFromEnd(1)).toEqual(8);
    expect(() => list.kFromEnd(4)).toThrow();
    expect(() => list.kFromEnd(-4)).toThrow();

    list.append(10);
    list.append(11);

    expect(list.kFromEnd(0)).toEqual(11);
    expect(list.kFromEnd(1)).toEqual(10);
    expect(list.kFromEnd(2)).toEqual(9);
    expect(list.kFromEnd(3)).toEqual(8);
    expect(() => list.kFromEnd(8)).toThrow();
    expect(() => list.kFromEnd(-8)).toThrow();

  });

});

