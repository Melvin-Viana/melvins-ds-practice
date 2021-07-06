const merge = (left, right) => {
    const res = [];
    let i = 0, j = 0;
    const M = left.length, N = right.length;

    while (i < M && j < N) {
        if (left[i] < right[j]) {
            res.push(left[i])
            i++;
        } else{
            res.push(right[j]);
            j++;
        }
    }

    while (i < M) {
        res.push(left[i]);
        i++;
    }
    while (j < N) {
        res.push(right[j]);
        j++;
    }

    return res;
}

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    const middle = Math.floor(arr.length/2);
   
    return merge(mergeSort(arr.slice(0, middle)), mergeSort(arr.slice(midd)));
}

console.log(mergeSort([5,2,23,12,3,1,42]))