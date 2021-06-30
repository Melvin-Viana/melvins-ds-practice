String.prototype.isPalindrome = function(){ 
    const string = this.toString();
    const N = string.length;
    let end = N - 1;
    for (let start = 0; start < N/2; start++) {
        if(string[start] != string[end]) {
            return false;
        }
        end--;
    }
    
    return true;
}

console.log('aba'.isPalindrome())
console.log('abbbbba'.isPalindrome())