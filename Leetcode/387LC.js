const firstUniqCharacter = s => {
    const repeated = {}
    for (let i = 0; i < s.length; i++) {
        if(s[i] in repeated) continue;
        let repeat = false;
        for (let j = i +1; j < s.length; j++) {
            if (s[i] === s[j]) {
                repeat = true;
                repeated[s[i]] = true;
                break;
            }
        }
        if (!repeat) return i;
    }
    return -1;
}

console.log(firstUniqCharacter('aabb')) // -1
console.log(firstUniqCharacter('leetcode')) // 0
console.log(firstUniqCharacter('abcdefg')) // 0
console.log(firstUniqCharacter('eeggffa')) // 6
console.log(firstUniqCharacter('aacabb')) // 2