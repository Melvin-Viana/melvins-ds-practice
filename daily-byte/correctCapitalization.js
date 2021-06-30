/**
 * 
 * @param {String} str - String of characters, ASCII characters 0-128
 * @returns {Boolean} - Whether the string is captialized correctly: 1. All caps 2. Only first is capped 
 */
const correctCapitalize = (str) => {

    const isCapital = (char) => {
        const code = char.charCodeAt(0) 
        return code >= 65 && code <= 90;
    } 

    let firstIsCap = isCapital(str[0]);
    if (str.length == 1) return true;
    let secondIsCap = isCapital(str[1]);
    if (!firstIsCap && secondIsCap) return false;
    let i = 2;
    while (i < str.length) {
        const currCharIsCap = isCapital(str[i]);
        if (firstIsCap && !secondIsCap && currCharIsCap) return false;
        if (firstIsCap && secondIsCap && !currCharIsCap) return false;
        if (!firstIsCap && currCharIsCap) return false;
        i += 1;
    }
    return true;
}

console.log(correctCapitalize('Abcde')) // True
console.log(correctCapitalize('AbA')) // False
console.log(correctCapitalize('A')) // True
console.log(correctCapitalize('bbbbbA')) // False
console.log(correctCapitalize('bbbbb')) // True

