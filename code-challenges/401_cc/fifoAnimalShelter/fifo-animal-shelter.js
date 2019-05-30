'use strict';

class AnimalShelter {
    class Queue {
        constructor(){
            this.length = 0;
            this.storage = [];
        };
    };

    let queueOne = new Queue();

    enqueue(animal) {
         //since the storage array represents a queue, the front of the array is the same as the front of the queue
    //unshift adds one or more items at the beginning of an array
    //put at the beginning so that it is seen at the front of the array, not sure why ***
        this.length ++;
        return this.storage.unshift(entry);
    }
    peek() {
        return this.storage[0];
    }
    dequeue(pref){
  //since the storage array represents a queue, the front of the array is the same as the front of the queue.
        this.length && this.length --;
        return this.storage.pop() || null;
    }
};

module.exports = { AnimalShelter };
