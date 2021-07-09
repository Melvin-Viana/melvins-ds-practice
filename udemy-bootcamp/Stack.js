class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        const node = new Node(val);
        (!this.first) ? this.first = node:
        [node.next, this.first] = [this.first,node];
    
        this.size++;
        return this;
    }

    pop() {
        if (!this.first) return;
        const node = this.first;
        if (this.tail === node) this.tail = null;
        [this.first,node.next] = [node.next,null];
        this.size--;
        return node.val;
    }
}

const stack = new Stack;
stack.push(3).push(4).push(5);
console.log(stack.first)
console.log(stack.last)
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack)