'use strict';

class LinkedList {
    constructor(){
        this.head = null;
    }

    insert(value) {
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

    printOut(){
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

students.insert('Homer');
students.insert('Maggie');
students.insert('Lisa');
students.insert('Marg');
students.insert('Bart');

console.log(students);

students.printOut();