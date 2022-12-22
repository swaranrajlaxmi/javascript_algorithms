//Write a function to find out number of occurrences of a character in a given string?
function solution(char, str) {
    const string = str;
    let charOccurenceCount = 0;
    for (let i = 0; i < string.length; i++) {   
        if (char == string[i]) {
            charOccurenceCount++;
        }
    }
    return charOccurenceCount;
}


// Test Cases:
console.log(solution('m', 'how many times does the character occur in this sentence?')); // Expected 2
console.log(solution('h', 'how many times does the character occur in this sentence?')); // Expected 4
console.log(solution('?', 'how many times does the character occur in this sentence?')); // Expected 1