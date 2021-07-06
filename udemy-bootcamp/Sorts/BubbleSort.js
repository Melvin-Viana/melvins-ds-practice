// const bubbleSort = (arr) => {
//     let noSwaps;
//     for (let i = arr.length - 1; i > 0; i--) {
//         noSwaps = true;
//         for (let j = 0; j <= i - 1; j++) {
//             if (arr[j] > arr[j+1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//                 noSwaps = false;
//             }
//         }
//         if (noSwaps) return arr;
//     }
//     return arr;
// }

const bubbleSort = (arr) => {
    // Number of loops = i to arr.length - 1
    for (let i = 0; i < arr.length - 1; i++) {
        let noSwaps = true;
        // Number of loops = starting element to last element minus current i
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] < arr[j-1]) {
                [arr[j], arr[j-1]] = [arr[j-1], arr[j]]
                noSwaps = false;
            }
        }
        if (noSwaps) return arr;
    }
    return arr;
}
const getRandomDataSet = require('../../RandomDataSet');
const dataSet1 = getRandomDataSet(10)
const dataSet2 = getRandomDataSet(1000)
const dataSet3 = getRandomDataSet(10000)

console.time('bubbleSort')
console.log(bubbleSort([5,3,4,2,1]))
console.timeEnd('bubbleSort');
console.time('bubbleSort')
console.log(bubbleSort([1,2,3,4,5]))
console.timeEnd('bubbleSort');


console.time('bubbleSort1');
console.log(bubbleSort(dataSet1))
console.timeEnd('bubbleSort1');

console.time('bubbleSort2');
console.log(bubbleSort(dataSet2))
console.timeEnd('bubbleSort2');

console.time('bubbleSort3');
console.log(bubbleSort(dataSet3))
console.timeEnd('bubbleSort3');
console.log(dataSet3[10000-2])
// console.log(bubbleSort(dataSet2))
// console.log(bubbleSort([6,5,4,3,2,1]))
