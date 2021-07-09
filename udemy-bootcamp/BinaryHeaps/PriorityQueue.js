class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(val, priority) {
        this.values.push(new Node(val, priority));
        this.bubbleUp();
    }
    bubbleUp() {
        const {values} = this;
        let index = values.length - 1;
        let parentIndex = Math.floor((index - 1) / 2);
        while (index > 0 && values[index].priority <= values[parentIndex].priority) {
            [values[index], values[parentIndex]] = [values[parentIndex], values[index]];
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }
    }
    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            let left = 2 * idx + 1;
            let right = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;
            if (left < length) {
                leftChild = this.values[left];
                if (leftChild.priority < element.priority) swap = left;
            }
            if (right < length) {
                rightChild = this.values[right];
                if (swap !== null && leftChild.priority > rightChild.priority || swap === null && rightChild.priority < element.priority) swap = right;
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }

    dequeue() {
        const first = this.values[0];
        const end = this.values.pop();
        this.values[0] = end;
        this.sinkDown();
        return first;
    }
}
let ER = new PriorityQueue();
ER.enqueue('common cold', 5);
ER.enqueue('gunshot wound', 1);
ER.enqueue('high fever', 4);
ER.enqueue('broken arm', 2);
ER.enqueue('glass in foot', 3);
console.log(ER.dequeue())
console.log(ER.dequeue())
console.log(ER.dequeue())
console.log(ER.dequeue())