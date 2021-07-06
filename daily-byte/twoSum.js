/**
 * This question is asked by Google. 
 * Given an array of integers, 
 * return whether or not two numbers sum to a given target, k.
Note: you may not sum a number with itself.
 */

const twoSum = (nums, k) => {
    const uniq =  new Set();

    for (num of nums) {
        let targetNum = k - num;
        if (uniq.has(targetNum)) return true
        uniq.add(num);
    }
    return false;
}

console.assert(twoSum([1,3,8,2], 10), 'return true (8+2)')
console.assert(!twoSum([3, 9 ,13, 7] , 8), 'return false')
console.assert(twoSum([2, 9 ,13,2] , 4), 'return false')