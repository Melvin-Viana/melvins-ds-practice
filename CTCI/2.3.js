const {Node, SinglyList} = require("../Data-Structures/DataStructures.js");

const deleteMiddleNode = ({head}) => {
 
    let fast = head;
    let dummy = new Node(0);
    dummy.next = head;
    while (fast.next && fast.next.next) {
        dummy = dummy.next;
        fast = fast.next.next;
    }
    dummy.next = dummy.next.next;
}

const node = new SinglyList();
node.addNodes(['a', 'b', 'c', 'd', 'e', 'f'])
console.log(node.getAllNodeVals()) // ['a', 'b', 'c', 'd', 'e', 'f']
deleteMiddleNode(node);
console.log(node.getAllNodeVals()) // ['a', 'b', 'd', 'e', 'f']
