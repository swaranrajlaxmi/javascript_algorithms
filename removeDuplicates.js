// Write a function to remove duplicates from an integer array in JavaScript?

//Input: [3, 2, 4, 5, 8, 9, 3, 8, 1, 7, 8, 4, 3, 2]
//Output: [1, 2, 3, 4, 5, 7, 8, 9]


const input = [3, 2, 4, 5, 8, 9, 3, 8, 1, 7, 8, 4, 3, 2, 0, 0];

function removeDuplicates(input){
    let output = {};
    let deDuplicatedArr = [];
    for (let i = 0; i < input.length; i++) {
        val = input[i]
        // if(!output[val]){ // {}, {3:true}, {3:true, 2: true}
        //     output[val] = true;
        //     deDuplicatedArr.push(input[i])
        // }    
        if (!deDuplicatedArr.includes(val)) {
            deDuplicatedArr.push(val);
        }
    }
    const sortedDeDuplicatedArr  = deDuplicatedArr.sort(function(a,b){
            return a - b; //0, -1. 1
          })
    return sortedDeDuplicatedArr;
}

console.log(removeDuplicates(input));