/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function(s) {
    const N = s.length;
    for (let i = 0 ; i < Number(N/2); i++) {
        let temp = s[i];
        s[i] = s[N - i - 1];
        s[N - i - 1] = temp;
    }
};
