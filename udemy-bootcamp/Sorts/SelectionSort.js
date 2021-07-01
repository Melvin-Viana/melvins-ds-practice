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
            let temp = arr[min];
            arr[min] = arr[i];
            arr[i] = temp;
        }
    }
    // If the value is smaller update the current min

    // At the end
    return arr;
};
console.log(selectionSort([5,3,4,2,1]))