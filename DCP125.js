const getTwoNodes = (tree, K) => {
    if (!tree) return;
    const nodeValues = {};
    const output = []
    const dfs = (node) => {
        if (!node || node.val > K) return 
        if (!nodeValues[node.val]) {
            nodeValues[node.val] = node
        }
        let diff =  K - node.val;
        if (!nodeVals[diff]) {     
            dfs(node.left)
            dfs(node.right)
        } else {
            output.push([node, nodeVals[diff]])
        }
    }
    dfs(tree);
    return output
    
}

// [10,5,15, null, null, 11, 15], 20 => 5 and 15
// 
// getTwoNodes
