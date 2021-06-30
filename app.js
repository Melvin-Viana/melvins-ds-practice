// PASTE AT THE TOP OF YOUR FILE
//
// Step 3: we want to write a comparator class that takes in the arguments for
//         the key and order being compared, and then has a compare
//         function that returns:
//         -1 if the first record should come first
//         1 if the second record should come first
//         0 both records are tied
//
//         Once you're done, re-implement first_by_key using the Comparator
//
//         We've added some tests here, but make sure you test every case!

class Comparator {
    constructor(key, direction) {
        this.key = key;
        this.direction = direction;
    }
    // return -1 for the first + 1 for the second, tied = 0
    compare(record1, record2){
        
        // Min
        let value1 = record1[this.key] === undefined ? 0 : record1[this.key];
        let value2 = record2[this.key] === undefined ? 0 : record2[this.key];
        let comparison = this.direction === 'asc' ? value1 < value2: value1 > value2;

        if (value1 === value2) {
            return 0;
        } else if (comparison) {
            return -1;
        } else {
            return 1;
        }
    }
}

const cmp = new Comparator("a", "asc");
const cmp1 = new Comparator("a", "desc");
const cmp2 = new Comparator("b", "asc");
const cmp3 = new Comparator("b", "desc");
const cmp4 = new Comparator("c", "desc");

const r0 = { a: 1, b: 4 };
const r1 = { a: 3, b: 1 };

console.log(cmp.compare(r0, r1)); // -1
console.log(cmp1.compare(r0, r1)); // 1
console.log(cmp2.compare(r0, r1)); // 1
console.log(cmp3.compare(r0, r1)); // -1
console.log(cmp4.compare(r0, r1)); // 0

// As a part of this problem, we're going to build, piece-by-piece,
// the part of a relational database that can take a list of rows and
// sort them by multiple fields:

// i.e., the part that implements
//       ORDER BY name ASC, age DESC

// Step 1: we want to write a function that returns the record
//         with the smallest entry of a given key
//
//         Treat keys that don't exist as 0

function minByKey(arr, key) {
    // Your code goes here
    return firstByKey(arr, key, 'asc');
  }
  
  let records = [
    { a: 1, b: 4 },
    { a: 3, b: 1 },
    { a: 2 },
    { a: -2, b: 2 },
    { b: 3 },
  ];
  
  console.log("minByKey");
  console.log(minByKey(records, "a")); // -> {a: -2, b: 2}
  console.log(minByKey(records, "b")); // -> {a : 2};
  

// Step 2: we want to extend this so that it gets either the lowest
//         or the highest value:

//         Once done, refactor minByKey so that it uses firstByKey

function firstByKey(arr, key, direction) {
    let index = 0;
    let record1 = arr[0];
    // Track value
    for (let i = 1; i < arr.length; i++) {
        const cmp = new Comparator(key, direction);
        const record2 = arr[i];        
        if (cmp.compare(record1,record2) == 1) {
            record1 = arr[i];
            index = i;
        }
    }
    return arr[index];       
}

console.log("firstByKey");

console.log(firstByKey(records, "a", "asc")); // -> {a: -2, b: 2}
console.log(firstByKey(records, "b", "asc")); // -> {a : 2};

console.log(firstByKey(records, "a", "desc")); // -> {a: 3, b: 1}
console.log(firstByKey(records, "b", "desc")); // -> {a: 1, b: 4}



// First by the multiple keys a and directions
function firstByKeys(arr, keys, directions) {

}

let records2 = [
    {a:1, b:2},
    {a:3, b:1},
    {a:5},
    {a:-2, b:4},
    {a:-2, b:5},
    {a:5, b:2},
]
firstByKeys(records,['asc','desc'],['a','b'])//{a:2, b:5}
firstByKeys(records,['desc','desc'],['a','b'])//{a:5, b:5}

