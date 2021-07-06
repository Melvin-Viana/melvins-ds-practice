const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const pivot = (arr, start, end = arr.length -1) => {
     
    const pivot = arr[start];
    let swapIndex = start;
    for (let i = start + 1; i <= end; i++){
        if (pivot > arr[i]){
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }
    console.log(arr,start,end)
    console.log('=====')

    swap(arr, start, swapIndex)

    return swapIndex;
}


const quickSort = (arr, left=0, right = arr.length - 1) => {
    if (left < right) {
        let pivotIndex = pivot(arr, left ,right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex+1, right)
    }
    return arr;
}

console.log(quickSort([4,6,9,1,3,2,7,8]))
// [4,1,9,6,3,2,7,8]
// [4,1,3,6,9,2,8]
// [2,1,3,4,9,6,8]
// [2,1,3,4] [9,6,8]
// [1,2,3,4]  [6,8,9]
// [1,2] [3,4] [6,8] [9]
// arr[1] swapping with arr[1]
// // [2,1,3,4] [9,8,6]
//                 swapIndx = start + 1
//                 i = start + 1;
//            [9,8, 6]