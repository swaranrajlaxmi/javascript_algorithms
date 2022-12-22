// Write a function that return the nth character from a given string?

function solution(str, num) {

    const nthChar = str.charAt(num-1);
        return nthChar;
    }



// Test Cases:
console.log(solution('abcd', 1));   // Expected Output 'a'
console.log(solution('zyxbpl', 5));// Expected Output 'p'
console.log(solution('gfedcba', 3));// Expected Output 'e'
console.log(solution('abcd', 5)=='');   // Expected Output blank