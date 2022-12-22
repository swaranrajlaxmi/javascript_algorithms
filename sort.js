const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

// const array = [9, 4, 10, 2, 5, 12]
// const sortedArray = array.sort(function(a,b){
//     return a - b
//   })
// console.log(sortedArray);
// //sorting algorithm
// array.sort((a,b) => {
//     console.log(`comparing ${a},${b}`);
//     return a > b ? 1
//                  : a === b ? 0 
//                            : -1;
//   });
// Sort by name
const sortCharactersByName = characters.sort((char1, char2) => char1 - char2);
console.log(JSON.stringify(sortCharactersByName));