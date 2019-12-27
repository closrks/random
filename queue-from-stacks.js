
class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

const s = new Stack();
console.log(s.push(1));
console.log(s.pop(1));
console.log(s.isEmpty());


class Queue {
    constructor(items) {
        this.fifo = new Stack();
        this.temp = new Stack();
    }

    dequeue() {
        return this.fifo.pop();
    }

    enqueue(item) {
        // temp them all away
        while (!this.fifo.isEmpty()) {
            this.temp.push(this.dequeue());
        }

        // add the new one
        this.fifo.push(item);

        // move them all back over
        while (!this.temp.isEmpty()) {
            this.fifo.push(this.temp.pop());
        }
    }
}

const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());