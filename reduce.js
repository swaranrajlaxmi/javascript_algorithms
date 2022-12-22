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

// Get the total mass of all characters
const totalMass = characters.reduce((total, character) => total + parseInt(character.mass), 0);
console.log(totalMass);
//Get the total height of all characters
const totalHeight = characters.reduce((total, character) => total + parseInt(character.height), 0);
console.log(totalHeight);
//Get the total number of characters in all the character names
const charactersTotal = characters.reduce((total, character) => total + (character.name).length, 0);
console.log(charactersTotal);
//Get the total number of characters by eye color (hint. a map of eye color to count)