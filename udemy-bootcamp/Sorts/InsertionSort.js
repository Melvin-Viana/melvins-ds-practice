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

const getRandomDataSet = require('../../RandomDataSet');
const dataSet1 = getRandomDataSet(10)
const dataSet2 = getRandomDataSet(1000)
const dataSet3 = getRandomDataSet(10000)

console.time('insertionSort')
console.log(insertionSort([5,3,4,2,1]))
console.timeEnd('insertionSort');
console.time('insertionSort')
console.log(insertionSort([1,2,3,4,5]))
console.timeEnd('insertionSort');


console.time('insertionSort1');
console.log(insertionSort(dataSet1))
console.timeEnd('insertionSort1');

console.time('insertionSort2');
console.log(insertionSort(dataSet2))
console.timeEnd('insertionSort2');

console.time('insertionSort3');
console.log(insertionSort(dataSet3))
console.timeEnd('insertionSort3');
console.log(dataSet3[10000-2])