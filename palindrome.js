//Q. Write a function to check whether given string is a Palindrome or not?

function checkPalindrome(str) {
    for (let i = 0; i < str.length/2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return "Not a palindrome"
        }
    }
    return "Palindrome"
}
//OR

function isPalindrome(str) {
    const reverseString = str.split('').reverse().join('');
    if (reverseString === str) {
        return "Palindrome"
    }
    return "Not a palindrome"
}



// Test Cases:
console.log(checkPalindrome("aba"));    // Palindrome
console.log(checkPalindrome("ABCDCBA")); // Palindrome
console.log(checkPalindrome("Hello"));   // Not a palindrome
console.log(isPalindrome("aba"));    // Palindrome
console.log(isPalindrome("ABCDCBA")); // Palindrome
console.log(isPalindrome("Hello"));   // Not a palindrome