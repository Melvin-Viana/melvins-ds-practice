function absSort(arr) { 
  return arr.sort((a,b) => {
    if (Math.abs(a) <  Math.abs(b) || Math.sign(a) === -1 && Math.abs(a) === Math.abs(b)) return -1
    else return 1
  })
}
console.log(absSort([2, -7, -2, -2, 0]))