/**
 * This question is asked by Microsoft. 
 * Given an array of strings, 
 * return the longest common prefix 
 * that is shared amongst all strings.
    Note: you may assume all strings only 
    contain lowercase alphabetical characters.
 */

/**
 * 
 * @param {String[]} strings
 * @return {String} 
 */

// const longestCommonPrefix = (strings) => {
//     const N = strings.length;
//     // With the shortest string find 
//     let shortestStringIndex = 0;
//     for (let i = 1; i < N; i++) {
//         if (strings[shortestStringIndex].length > strings[i].length) shortestStringIndex = i;
//     }
//     const prefixes = {};
//     let shortestString = strings[shortestStringIndex];
//     for (let i = 0; i < N; i++) {
//         if (shortestStringIndex === i) continue
//         let currString = strings[i];
//         for (let j = 0; j < shortestString.length; j++) {
//             let currPrefix = shortestString.slice(0, j + 1);
//             if (currString.length < currPrefix.length) break;
//             if (currPrefix === currString.slice(0, j+1)) {
//                 prefixes[currPrefix] = prefixes[currPrefix] ? prefixes[currPrefix] + 1 : 1;
//             }
//         }
//     }

//     let longestPrefix = "";
//     for (prefix in prefixes) {
//         if (prefixes[prefix] !== N -1) continue
//         if (prefix.length > longestPrefix.length) longestPrefix = prefix;
//     }
//     return longestPrefix;
// };

// Choose an arbitray index in the array

// Use that index to compare to the rest of the array

const longestCommonPrefix = (strings) => {
    // const prefixes = [''];
    // let longest = 0;
    // let firstStr = strings[0];
    // for (let i = 1; i < strings.length; i++) {
    //     let currStr = strings[i];
    //     for (let j = 0; j < firstStr.length; j++) {
    //         let currPrefix = firstStr.slice(0, j+1);
    //         if (currPrefix.length > currStr.length) break;
    //         if (currPrefix === currStr.slice(0, j+1) ) {
    //             if (longest < currPrefix.length) {
    //                 prefixes.push(currPrefix)
    //                 longest++;
    //             } 
    //         } else {
    //             break;
    //         }
    //     }
    // }
    // return prefixes[longest];

    let longestCommonPrefix = '';
    if (strings == null  || strings.length === 0) return longestCommonPrefix;
    let i = 0;
    for (char of strings[0]) {
        for (let j = 1; j < strings.length; j++) {
            if (i >= strings[j].length || char !== strings[j][i]) return longestCommonPrefix;
        }
        longestCommonPrefix += char;
        i++;
    }
    return longestCommonPrefix;
}

console.log(longestCommonPrefix(["spotty", "spot", "spotted"]));