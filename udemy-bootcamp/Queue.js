class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }    
    enqueue(val) {
        const node = new Node(val)
        !this.first ? this.first = this.last = node:
        [this.last.next, this.last] = [node, node];
        this.size++;
        return this;
    }
    dequeue() {
        if(!this.size) return null;
        const node = this.first;
        if (!this.first) {
            this.first = null;
            this.last = null;
        } else {
            this.first = node.next;
            node.next = null;
        }
        this.size--;
        return node.val;
    }
}
const queue = new Queue;
console.log(queue.dequeue())
queue.enqueue(1).enqueue(2).enqueue(3);
console.log(queue.dequeue());
