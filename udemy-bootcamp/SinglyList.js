class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const node = new Node(val)
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = this.tail;
        }
        this.length++;
        return this;
    }

    pop() {
        if(!this.head) return;
        
        let temp = this.head;
        let prev = temp;
        while (temp.next) {
            prev = temp;
            temp = temp.next;
        }
        this.tail = prev;
        this.tail.next = null
        this.length--;
        if (!this.length) this.head = this.tail = null;
        return temp.val;
    }

    shift() {
        if (!this.head) return; 
        let head = this.head;
        this.head = this.head.next;
        this.length--;
        if (!this.length) this.tail = null;
        return head.val; 
    }
    unshift(val) {
        const node = new Node(val);
        if (!this.head) {
            this.tail = this.head = node;
            
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0|| this.length <= index) return null;
        let  current = this.head;
        let count = 0;
        while (count !== index) {
            current =  current.next;
            count++;
        }
        return  current;
    }

    set(index, val) {
        const node = this.get(index);
        if (!node) return false;
        node.val = val;
        return true;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if(index === 0) return this.unshift(val); 
        else if (index === this.length) return this.push(val);
        const prev = this.get(index - 1);
        const node = new Node(val);
        const temp = prev.next
        prev.next = node
        node.next = temp;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        const prev = this.get(index - 1);
        const node = prev.next;
        prev.next = node.next;
        return node;
    }

    reverse() {
        if (!this.head) return;
        let head = this.head
        this.tail = head;
        let next = null;
        let prev = null;
        while (head) {
            next = head.next;
            head.next = prev;
            prev = head;
            head = next;
        }
        this.head = prev;
        return this;
    }
}

const list = new SinglyLinkedList();
list.push('HELLO');
list.push('GOODBYE');
list.push('GOODBYE333333333');
console.log(list.unshift(3))
list.reverse()
console.log(list)