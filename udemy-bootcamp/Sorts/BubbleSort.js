const bubbleSort = (arr) => {
    let noSwaps;
    for (let i = arr.length - 1; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j <= i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) return arr;
    }
    return arr;
}

// const bubbleSort = (arr) => {
//     for (let i = 0; i < arr.length-1; i++) {
//         let noSwaps = true;
//         for (let j = 0; j < arr.length - i; j++) {
//             if (arr[j] < arr[j-1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j-1];
//                 arr[j-1] = temp;
//                 noSwaps = false;
//             }
//         }
//         console.log(arr)
//         if (noSwaps) return arr;
//     }
//     return arr;
// }


console.log(bubbleSort([5,3,4,1,2]))
console.log(bubbleSort([6,5,4,3,2,1]))