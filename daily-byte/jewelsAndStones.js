/**
 * This question is asked by Amazon.
 *  Given a string representing your stones and 
 * another string representing a list of jewels, 
 * return the number of stones 
 * that you have that are also jewels.
 */

const  jewelsAndStones = (jewels, stones) => {
    const jewelSet = new Set(jewels.split(''));
    let count = 0;
    for (let stone of stones) {
        if (jewelSet.has(stone)) count++;
    }
    return count;
}

let jewels = 'abc', stones = 'ac';
console.assert(jewelsAndStones(jewels,stones) === 2, 'return 2' );
console.assert(jewelsAndStones('Af','AaaddfFf') === 3, 'return 3' );
console.assert(jewelsAndStones('AYOPD','ayopd') === 0, 'return 0' );