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


students.print();

module.exports = LinkedList;