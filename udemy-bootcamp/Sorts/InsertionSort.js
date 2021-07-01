/**
 * Builds up the sort by gradually creating a larger
 * portion of the array which is always sorted
 * 
 * 
 * [5,3,4,1,2]
    [3,5,4,1,2]
    [3,4,5,1,2]
    [1,3,4,5,2]
    [1,2,3,4,5]
*/

const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
       let currentVal = arr[i];
       let j = i - 1;
       while ( j >= 0 && arr[j] > currentVal){
            arr[j+1] = arr[j];
            j--;
       }
       arr[j+1] = currentVal;
    }
    return arr;
}

console.log(insertionSort([2,1,9,76,4]))