// Input: ['one', 'two', 'three'] 
// Output: {3: ["one", "two"], 5: ["three"]}

// Input: ['one'] 
// Output: {3: ["one]}

const input = ['one', 'two', 'three'] ;

function arrayToObjects(input){
    const output = {};
    for (let i = 0; i < input.length; i++) {
        let length = input[i].length;
        output[length] = output[length] || [];
        output[length].push(input[i]);

        
    }
    return output;
}
console.log(JSON.stringify(arrayToObjects(input)));
