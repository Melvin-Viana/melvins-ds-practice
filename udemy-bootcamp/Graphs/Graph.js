class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        this.adjacencyList[vertex] = [];
    } 
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v=> v !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v=> v !== v1);
    }
    removeVertex(vertex) {
        for (let key of this.adjacencyList[vertex]) this.removeEdge(vertex, key)
        delete this.adjacencyList[vertex];
    }
    dfsRecursive(start) {
        const result = [];
        const visited = {};
        const {adjacencyList} = this;
        (function dfs(vertex){
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(node => {
                if(!visited[node]) return dfs(node);
            })
        })(start)
        return result;
    }
    dfsIterative(start) {
        const result = [];
        const visited = {};
        const {adjacencyList} = this;
        const stack = [start];
        while (stack.length) {
            const curr = stack.pop();
            if(curr in visited) continue;
            result.push(curr);
            visited[curr] = true;
            stack.push(...adjacencyList[curr]);
        }
        return result;
    }

    bfsIterative(start) {
        const result = [];
        const visited = {};
        const {adjacencyList} = this;
        const queue = [start];
        while (queue.length) {
            const curr = queue.shift();
            if (curr in visited) continue;
            visited[curr] = true;
            result.push(curr);
            adjacencyList[curr].forEach(node => {
                queue.push(node);
            });
        }
        return result;
    }
    
}

let g = new Graph();
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")
console.log(g.dfsIterative('A'))
console.log(g.dfsRecursive('A'))
console.log(g.bfsIterative('A'))