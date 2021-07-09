class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }
    insert(val) {
        this.values.push(val);
        this.bubbleUp();
    }
    bubbleUp() {
        const {values} = this;
        let index = values.length - 1;
        let parentIndex = Math.floor((index - 1) / 2);
        while (index > 0 && values[index] > values[parentIndex]) {
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
                if (leftChild > element) swap = left;
            }
            if (right < length) {
                rightChild = this.values[right];
                if (swap !== null && leftChild < rightChild || swap === null && rightChild > element) swap = right;
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
            console.log(this.values)
        }
    }

    extractMax() {
        const max = this.values[0];
        const end = this.values.pop();
        this.values[0] = end;
        this.sinkDown();
        return max;
    }
}
const maxHeap = new MaxBinaryHeap;
maxHeap.insert(41);
maxHeap.insert(39);
maxHeap.insert(33);
maxHeap.insert(18);
maxHeap.insert(27);
maxHeap.insert(12);
maxHeap.insert(34);
console.log(maxHeap.extractMax())
console.log(maxHeap);