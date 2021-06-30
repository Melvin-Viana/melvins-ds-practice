const maxSubArray = (nums) => {
    let max = nums[0];
    let prfx = max;
    for (let num of nums) {
        prfx = Math.max(prfx+num, num);
        max = Math.max(prfx, max);
    }
    return max;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])) // 6