/**
 * This question is asked by Facebook. 
 * Given two strings s and t return whether or not s is an anagram of t.
Note: An anagram is a word formed by reordering the letters of another word.

**/

const validAnagram = (str1, str2) => {
    if (str1.length !== str2.length) return false;
    const count = {}
    for (let i = 0; i < str1.length; i++) {
        count[str1[i]] = count[str1[i]] ? count[str1[i]] + 1: 1;
        count[str2[i]] = count[str2[i]] ? count[str2[i]] + 1: 1;
    }
    let hasOdd = false
    for (let num of Object.values(count)) {
        if (num % 2 !== 0) {
            if (hasOdd) return false;
            hasOdd = true;
        }
    }
    return true;
}

console.assert(validAnagram('cat', 'tac'), 'true')
console.assert(validAnagram('listen', 'silent'), 'true')
console.assert(!validAnagram('program', 'silent'), 'false')