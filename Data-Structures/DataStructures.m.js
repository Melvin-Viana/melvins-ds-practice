export class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

} //https://gist.github.com/laras126/8a057d19d0d4c724e73783b229874d10

export class SinglyList {
  constructor(length = 0, head = null) {
    this.head = head;
    this.tail = null;
  }

  add(value) {
    if (!this.head) {
      this.head = new Node(value);
    } else if (this.head && this.tail === null) {
      this.head.next = new Node(value);
      this.tail = this.head.next;
    } else {
      this.tail.next = new Node(value);
      this.tail = this.tail.next;
    }
  }
  /**
   * 
   * @param {string[]} nodes 
   * @description - Adds all nodes in one linkedList
   */
  addNodes(nodes) {
      for (let i = 0;  i < nodes.length; i++) {
        let node = nodes[i];  
        this.add(node)
      }
  }
  getAllNodeVals() {
    const output = [];
    let node = this.head;

    while (node) {
      output.push(node.data);
      node = node.next;
    }

    return output;
  }

}

