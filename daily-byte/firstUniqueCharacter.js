/**
 * This question is asked by Microsoft. 
 * Given a string, return the index of its first unique character. 
 * If a unique character does not exist, return -1.

 */

const firstUniqueChar = (str) => {
    const count = {}
    for (let i = 0; i < str.length -1 ; i++) {
        let char = str[i];
        count[char] = count[char]? [2, -1] : [1,i];
    }
    for (let [val, index] of Object.values(count)){
        if (val == 1) return index;
    }
    return -1;
}

console.log(firstUniqueChar('abcadc'));