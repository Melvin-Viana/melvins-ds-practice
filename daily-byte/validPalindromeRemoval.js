/**
 * This question is asked by Facebook. 
 * Given a string and the ability to 
 * delete at most one character, 
 * return whether or not it can form a palindrome.

    Reverse String type algorithm:
    Have two pointers:
        - Start
        - End

        Compare the pointers and converge towards the middle.
        If all characters are the same return true

        If one character isn't the same:
            I would check if end - 1 === start?
                start + 1 === end?
            Change the pointers accordingly

*/

const isPalindrome = (s, start, end, hasDelete = false) => {
    while (start < end) {
        if (s[start] !== s[end]) {
            if(hasDelete) return false;
            return isPalindrome(s, start+1, end, true) || isPalindrome(s, start, end-1, true);
        }
        start++;
        end--;
    }
    return true
}

const validPalindromeDelete = (str, e) => {
    return isPalindrome(str, 0, str.length - 1);
}

console.log(validPalindromeDelete('abcba'.split('')))
console.log(validPalindromeDelete('racdcecar'.split('')))
console.log(validPalindromeDelete('abccab'.split('')))
console.log(validPalindromeDelete('foobof'.split('')))

