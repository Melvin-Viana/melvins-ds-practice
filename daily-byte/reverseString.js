/**
 * @desc - Reverse String given a character array
 * @param {string[]} s 
 * @return {string[]} 
 */

const reverseString = (s) => {
    const N = s.length;
    for (let i = 0; i < N/2; i++) {
        const temp = s[i];
        s[i] = s[N - i - 1];
        s[N - i - 1] = temp;
    }
    return s;
}

// “Cat”, return “taC”
console.log(reverseString('Cat'.split('')))
// “The Daily Byte”, return "etyB yliaD ehT”
console.log(reverseString('The Daily Byte'.split('')))
// “civic”, return “civic”
console.log(reverseString('civic'.split('')))