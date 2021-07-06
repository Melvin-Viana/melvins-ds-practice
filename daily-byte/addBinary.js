/**
 * 
 * @param {String*} b1 - binary string 1 
 * @param {String*} b2  - binary string 2
 * @returns {String} - added up binary
 */

// const addBinary = (b1, b2) => {
//     const convertBinary = {0 : ['0', 0] ,1 : ['1', 0],2 : ['0', 1], 3: ['1', 1]}
//     const calcBinary = (s1, s2) => {
//         let carry = 0;
//         let b2Pointer = s2.length - 1;
//         s1 = s1.split('');
//         for (let i = s1.length -1 ; i >= 0; i--) {
//             // Add b2Pointer only if its greater or equal to 0
//             let currChar = s1[i];
//             if (b2Pointer >= 0) {
//                 let sum = parseInt(currChar) + parseInt(s2[b2Pointer]) + carry;
//                 //  0, 1, 2, 3
//                 [s1[i], carry] = convertBinary[sum];
               
//             } else { 
//                 let sum = parseInt(s1[i]) + carry;
//                 [s1[i], carry] = convertBinary[sum];
          
//             }
//             b2Pointer--;
//         }
//         s1 = s1.join('')
//         return carry === 0 ? s1 : '1' + s1;
//     }

//     if (b1.length <= b2.length) {
//         return calcBinary(b2, b1);
//     } else {
//         return calcBinary(b1, b2);
//     }
    
// }

const addBinary = (a, b) => {
    let output = ''
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    while (i >= 0 || j >= 0) {
        let sum = carry;
        if (i >= 0) {
            sum += a.charAt(i--) - '0'; // Converts to integer
        }
        if (j >= 0) {
            sum += b.charAt(j--) - '0';
        }
        output += '' + sum % 2;
        carry = Math.floor(sum / 2);
    }
    if (carry > 0) {
        output += '1';
    }
    return output.split('').reverse().join('');
}


// // const addBinary = (b1, b2) => {
// //     const aString = `0b${b1}`;
// //     const bString = `0b${b2}`;
// //     const sum = BigInt(aString) + BigInt(bString)
// //     return sum.toString(2);
// // }


console.log(addBinary('100','1'));//101
console.log(addBinary('11','1'));//100
console.log(addBinary('1111','1'));//10000
console.log(addBinary('1','0'));//1
console.log(addBinary('111','111'));//1110
console.log(Math.floor(3/2))