'use strict';

class PseudoQueue {
    constructor () {
        this.length = 0;
        // this.storage = [];
        this.stackA = [];
        this.stackB = [];
    }

    enqueue(value) {
        this.stackA.push(value);
        return stackA;
    }

    dequeue() {
        if(stackA.length > 0){
            this.stackB.push(stackA[0]);
            return stackB;
        }

    }
}