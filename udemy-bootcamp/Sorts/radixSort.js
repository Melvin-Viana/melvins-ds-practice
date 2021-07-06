const getDigit = (num, place) => {
    // num = num.toString();
    // const N = num.length;

    // if (place >= num.length) return 0;

    // return Number(num[N - place - 1])

    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

// const digitCount = (num) => num.toString().length - 1;

const digitCount = num => Math.floor(Math.log10(Math.abs(num))) + 1;

const mostDigits = nums => {
    let maxDigits = 0;
    for (let i = 0 ; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}


const radixSort = (nums) => {
    const largestDigits = mostDigits(nums);

    for (let k = 0; k < largestDigits; k++) {
        const buckets = Array.from({length:10}, () => []);
        for (let num of nums) {
            const digit = getDigit(nums[i], k);
            buckets[digit].push(nums[i]);
        }
        let i = 0;
        for (bucket of buckets) {
            for (let j = 0; j < bucket.length; j++) {
                nums[i] = bucket[j];
            }
        }
    }
    return nums;
}
console.log(radixSort([3,51234,123,123,23,199]));