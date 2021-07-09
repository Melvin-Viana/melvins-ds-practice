class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedLIst {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        const node = new Node(val);
        if (!this.head) {
            this.head = this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail; 
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) return;
        const res = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;    
        } else {
            this.tail = res.prev;
            this.tail.next = null;
            res.prev = null;
        }
        this.length--;
        return res;
    }

    shift() {
        if (!this.head) return;
        const res = this.head;
        if (this.length === 1) {
            this.head = this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            res.next = null;
        }
        this.length--;
        return res;
    }

    unshift(val) {
        if (this.length==0) return this.push(val);
        const node = new Node(val);
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        const half = Math.floor(this.length/2);
        const traverse = (startIndex, startNode, nodeChange, indexChange) => {
            let node = this[startNode];
            let i = startIndex;
            while (i != index) {
                node = node[nodeChange];
                i += indexChange;
            }
            return node;
        }
        return (index <= half) ? traverse(0, 'head', 'next', 1):
            traverse(this.length-1, 'tail', 'prev', -1);
    }

    set(index,val) {
        const node = this.get(index);
        if(!node) return false;
        node.val = val;
        return true;
    }
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        else if (index === 0) return !!this.unshift(val);
        else if (index === this.length) return !!this.push(val);
        const prevNode = this.get(index - 1);
        const newNode = new Node(val);
        const currNode = prevNode.next;
        prevNode.next = newNode;
        newNode.prev = prevNode;
        newNode.next = currNode;
        currNode.prev = newNode;
        this.length++;
        return true;
    
    }
    remove(index) {
        if (index < 0 || index >= this.length) return;
        else if (index === 0) return this.shift();
        else if (index === this.length - 1) return this.pop();
        else{
            const node = this.get(index);
            const {prev,next} = node;
            prev.next= node.next;
            next.prev = node.prev;
            node.prev = null;
            node.next = null;
            this.length--;
            return node;
        }
    }
 
    reverse() {
        // Store head and a temp variable
        let temp = null;
        let current = this.head;
        this.tail = this.head;
        while (current) {
            // Store prev
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            current = current.prev;
        }
        this.head = temp.prev;
        return this;
    }
}   
   

const getRandomData = require('../RandomDataSet');
const data = ['Harry', 'Ron', 'Hermione', 'Fred'];
const head = new DoublyLinkedLIst();
for (let num of data) {
    head.push(num);
}
// // console.log(head.pop())
// head.unshift(-1)
// // console.log(head.shift())
// // console.log(head.get(-1));
// // console.log(head.get(1));
// // console.log(head.get(3));
// // console.log(head.get(4));
// head.set(3,'Draco')
// head.tail
// head.insert(5,'bobby')
// console.log(head.remove(5))
// console.log(head)
// // console.log(head
// console.log(head.reverse())

var doublyLinkedList = new DoublyLinkedLIst();
[5,10,15,20].forEach((num) => doublyLinkedList.push(num));
console.log(doublyLinkedList.get(0).val)
console.log(doublyLinkedList.get(1).val)
console.log(doublyLinkedList.get(2).val)
console.log(doublyLinkedList.get(3).val)
console.log(doublyLinkedList.get(4))