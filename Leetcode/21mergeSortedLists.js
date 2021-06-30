// Two pointers: l1, l2

// Consolidate thoses lists together
const {Node, SinglyList} = require("../Data-Structures/DataStructures.js");


// [1,2,4]
// [1,3,4]


// [2,4]
// [1,3,4]



// l1 = [1 -> l2.next =
// [2,4]
// [3,4]

// l1 = 1 -> 1 ->2

// [4]
// [3,4]


//  class SinglyList {
//     constructor(length = 0, head = null) {
//       this.head = head;
//       this.tail = null;
//     }

const mergeTwoLists = (l1, l2) => {
    if (!l1 || !l2) return l1 || l2;
    if (l1.data <= l2.data) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
}

const node1 = new SinglyList();
node1.addNodes([1,2,4])

const node2 = new SinglyList();
node2.addNodes([1,3,4])

const node3 = new SinglyList();
node3.addNodes([-1,3,4])

// mergeTwoLists(node1.head, node2.head); // null
mergeTwoLists(node1.head, node3.head); // null
console.log(node3.getAllNodeVals())
// console.log(node3.getAllNodeVals()) // [1,1,2,3,4,4]