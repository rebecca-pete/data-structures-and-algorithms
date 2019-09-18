'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insert(value) {

    if(!value && value !== 0) throw new Error (`The given value is invalid.`);
    let newHead = new Node(value, this.head);
    if(!this.head && !this.tail ){
      this.tail = newHead;
    }
    this.head = newHead;
    this.length++;
  }

  includes(value){
    try {
      let current = this.head;
      while(current !== null){
        if(current.value === value){
          return true;
        }
        current = current.next;
      }
      return false;
    } catch(error){
      throw new Error(`Error. Please verify the value passed is valid.`);
    }
  }

  //Becky - this method adds a value to the end of the linked list
  append(value){
    if(value || value === 0){
      if(!this.head && !this.tail){
        this.head = new Node(value, null);
        this.tail = this.head;
      } else {
        this.tail.next = new Node(value, null);
        this.tail = this.tail.next;
      }
      this.length++;
    } else {
      throw(`Invalid input`);
    }
  }

  insertBefore(value, newVal){
    if(value || value === 0){
      let newNode = new Node(newVal);

      //Becky - this block of code addresses inserting the passed value at the head of the linked list
      if(this.head.value === value){
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return;
      }

      let current = this.head;
      while(current !== null){
        if(current.next && current.next.value === value) {
          newNode.next = current.next;
          current.next = newNode;
          this.length++;
          return;
        } else {
          current = current.next;
        }
      }
      throw `This is an exception, dummy`;
    }
    throw `This is an invalid input`;
  }

  insertAfter(value, newVal){
    if(value || value === 0){
      let current = this.head;

      //Becky - may need to verify operator
      while(current !== null){
        if(current.value === value){
          let newNode = new Node(newVal, current.next);
          current.next = newNode;
          if(current === this.tail){
            this.tail = newNode;
          }
          this.length++;
          return;
        } else {
          current = current.next;
        }
      }
      throw `This is an Exception, dummy`;
    }
    throw `This is an Invalid Input`;
  }

  kFromEnd(k){
    if(typeof k !== 'number' || k > this.length - 1 || k < 0){
      throw `This is an Exception`;
    }
    if (k === 0) { return this.tail.value; }
    let current = this.head;
    let i = this.length - k - 1;
    while( i > 0){
      current = current.next;
      i -= 1;
    }
    return current.value;
  }

//Becky - need to verify
  print(){
    try {
      let collection = [];
      let current = this.head;

      while(current !== null){
        collection.push(current.value);
        current = current.next;
      }
      return collection;
    } catch(error) {
      throw new Error(`Encountered error when attempting to print linked list.`);
    }
  }

// const students = new LinkedList();

// students.insert('homer');
// students.insert('maggie');
// students.insert('lisa');
// students.insert('marg');
// students.insert('bart');

// console.log('This is students:', students);
// // console.log(students.next);

// console.log('This is APPEND milhouse:', students.append('milhouse')); //for the purpose of testing, does the value have to be defined? If not, use this parameter.
// console.log('This is APPEND bart:', students.append('bart'));//Otherwise, use this.
// console.log('This is insert maggie BEFORE marg:', students.insertBefore('marg', 'maggie'));
// console.log('This is insert bart AFTER lisa:', students.insertAfter('lisa', 'bart')); //adding another bart object
// //why should parameters be strings?
// students.print();

module.exports = LinkedList;
