// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

const reverse = number => {
    let output = 0;
    let isNegative = number < 0;
    let numString = number.toString();
    let places = isNegative ? numString.length - 1 : numString.length;
    for (let i = numString.length - 1; i >= 0; i--) {
        let num = numString[i]
        if (num === "-") break;
        output += parseInt(num) * (10 ** places);
        places--;
    }
    output/= 10;
    // Math.pow(2, 31) or Math.pow(-2, 31)
    if (output < -2147483648 || output > 2147483648) return 0
    return isNegative ? -output: output;

};

