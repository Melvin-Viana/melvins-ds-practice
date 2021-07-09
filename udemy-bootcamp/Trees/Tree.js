class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
} 

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(val) {
      const node = new Node(val);
      if(!this.root) {
          this.root = node;
          return this;
      }
      let curr = this.root;
      while (true) {
          if (curr.val > val) {
              if (!curr.left) {
                curr.left = node;
                return this;
              }
              curr = curr.left;
          } else {
              if (!curr.right) {
                  curr.right = node;
                  return this;
              }
              curr = curr.right;
          }
      }
    }
    find(val) {
        if (!this.root) return false;
        let curr = this.root;
        while (curr) {
            if (curr.val === val) return true;
            if (curr.val > val) {
                curr = curr.left;
            } else {
                curr = curr.right;
            }
        }
        return false;
    }
    bfs(){
        if(!this.root) return null;
        const queue = [this.root];
        var data = [];
        while (queue.length) {
            const curr = queue.shift();
            data.push(curr.val)
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }
        return data;
    }
    
    dfsPreorder() {
        if (!this.root) return [];
        const data = []
        const dfs = node => {
            if (!node) return data;
            data.push(node.val);
            dfs(node.left);
            dfs(node.right);
            return data; 
        }
        return dfs(this.root);
    }
    dfsPostOrder() {
        if(!this.root) return [];
        const data = [];
        const dfs = node => {
            if(node.left) dfs(node.left)
            if (node.right) dfs(node.right);
            data.push(node.val);
        }
        dfs(this.root);
        return data;
    }
    dfsInOrder() {
        if(!this.root) return [];
        const data = [];
        const dfs = node => {
            if(node.left) dfs(node.left)
            data.push(node.val)
            if(node.right) dfs(node.right);
        }
        dfs(this.root);
        return data;
    }
}
const BST = new BinarySearchTree;
BST.insert(10).insert(6)
.insert(15).insert(3)
.insert(8).insert(20)
console.log(BST.find(-1))
console.log(BST.bfs());
console.log(BST.dfsPreorder());
console.log(BST.dfsPostOrder());
console.log(BST.dfsInOrder());