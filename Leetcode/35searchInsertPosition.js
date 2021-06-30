/**
 * 
 * @param {Integer[]} nums 
 * @param {Integer{}} target
 * @desc Get the index of target, if it doesnt exist find the index where it should be
 * @returns {Integer} 
 */
// [0... 10] => Right = 0, left = 0, target = 3
const searchInsertPosition = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const middle = Math.floor((right - left));
        if (nums[middle] === target) return middle;
        else if (nums[middle] < target) left = middle + 1;
        else right = middle - 1;
    }
    return left;
}
console.log(searchInsertPosition([1,3,5,6], 5))
console.log(searchInsertPosition([1,3,5,6], 2))