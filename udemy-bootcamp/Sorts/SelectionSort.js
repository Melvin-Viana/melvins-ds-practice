/**
 * Similar to bubble sort, 
 * instead placing large values into sorted position, 
 * it places small values to sorted position
 */

const selectionSort = (arr) => {
    // Store the first element as the smallest value you've seen
    for (let i  = 0; i < arr.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (i !== min) {
            [arr[min], arr[i]] = [arr[i], arr[min]];
            // let temp = arr[min];
            // arr[min] = arr[i];
            // arr[i] = temp;
        }
    }
    // If the value is smaller update the current min

    // At the end
    return arr;
};

const getRandomDataSet = require('../../RandomDataSet');
console.time('selectionSort')
console.log(selectionSort([5,3,4,2,1]))
console.timeEnd('selectionSort');
console.time('selectionSort')
console.log(selectionSort([5,4,3,2,1]))
console.timeEnd('selectionSort');

const dataSet1 = getRandomDataSet(10)
const dataSet2 = getRandomDataSet(1000)
const dataSet3 = getRandomDataSet(10000)
console.log(dataSet1)
console.time('selectionSort1');
console.log(selectionSort(dataSet1))
console.timeEnd('selectionSort1');

// console.time('selectionSort2');
// console.log(selectionSort(dataSet2))
// console.timeEnd('selectionSort2');

// console.time('selectionSort3');
// console.log(selectionSort(dataSet3))
// console.timeEnd('selectionSort3');
// console.log(dataSet3[10000-2])