// Write a function to find non-repetitive numbers in a given array?
// Input:
// [2, 3, 4, 3, 3, 2, 4, 9, 1, 2, 5, 5]

// Output:
// [9, 1]
const input = [2, 3, 4, 3, 3, 2, 4, 9, 1, 2, 5, 5]

function nonRepetNumbers(input){
    let nonRepNO = [];
    for (let i = 0; i < input.length; i++) {
        const val = input[i];
        let sliceInput = [...input.slice(0, i), ...input.slice(i+ 1, input.length)];
        if(!sliceInput.includes(val)){
            nonRepNO.push(val);
        } 
         //input = spliceInput;
    }
    return nonRepNO;
}



console.log(nonRepetNumbers(input));