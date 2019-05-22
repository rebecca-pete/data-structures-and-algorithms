'use strict';

class LinkedList {
  constructor(){
    this.head = null;
  }

  insert(value) {
    // let node = new Node(value);
    if(!this.head){
      this.head = {
        value: value,
        next: null
      };
      return;
    }

    let currentStudent = this.head; //start with the first student
    while(currentStudent.next !== null){ //while there is another student in the class
      currentStudent = currentStudent.next; //point at the next student
    }

    currentStudent.next = {
      value: value,
      next: null
    };

  }

  append(value){
    let currentStudent = this.head;
    while(currentStudent.next !== null){
      currentStudent = currentStudent.next;
    }
    currentStudent.next = new Node(value)
    currentStudent.next.next = null;
  }

  insertBefore(existingVal, newVal){
    let currentStudent = this.head;
    while(currentStudent.next && currentStudent.next.value !== existingVal){
      let newNode = new Node(newVal);
      newNode.next = currentStudent.next;
      currentStudent.next = newNode;
      return;
    }
    return 'Exception';
  }
  insertAfter(existingVal, newVal){
    let currentStudent = this.head;
    while (currentStudent.value !== existingVal){
      let newNode = newNode(newVal)
      newNode.next = currentStudent.next;
      currentStudent.next = newNode;
      return;
    }
    return 'Exception';
  }

  kFromEnd(k){
    //WILL NEED HELP FINISHING. NOT SURE HOW TO ASSIGN TAIL
    // let node = new Node(value);
    // if(!this.head){
    //   this.head = {
    //     value: value,
    //     next: null
    //   };
    //   return;
    // }

    // let currentStudent = this.head; //start with the first student
    // while(currentStudent.next !== null){ //while there is another student in the class
    //   currentStudent = currentStudent.next; //point at the next student
    // }

    // currentStudent.next = {
    //   value: value,
    //   next: null
    // };

  }

  print(){
    if(!this.head) return 'I\'m empty';
    let message = '';

    let currentStudent = this.head;
    message +=` ${currentStudent.value}`;
    while(currentStudent.next !== null) { //while there is a next student
      currentStudent = currentStudent.next;
      message +=` ${currentStudent.value}`;
    }
    console.log(message);
    return message;
  }
}

const students = new LinkedList();

students.insert('homer');
students.insert('maggie');
students.insert('lisa');
students.insert('marg');
students.insert('bart');

console.log('This is students:', students);
// console.log(students.next);

console.log('This is APPEND milhouse:', students.append('milhouse')); //for the purpose of testing, does the value have to be defined? If not, use this parameter.
console.log('This is APPEND bart:', students.append('bart'));//Otherwise, use this.
console.log('This is insert maggie BEFORE marg:', students.insertBefore('marg', 'maggie'));
console.log('This is insert bart AFTER lisa:', students.insertAfter('lisa', 'bart')); //adding another bart object
//why should parameters be strings?
students.print();

module.exports = LinkedList;
