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

// Get characters with mass greater than 100
const greaterMass = characters.filter(character => character.mass > 100);
console.log(JSON.stringify(greaterMass));
// Get characters with height less than 200
const lesserHeight = characters.filter(character => character.height < 200);
console.log(JSON.stringify(lesserHeight));
// Get all male characters
const maleCharacters = characters.filter(character => character.gender === 'male');
console.log(JSON.stringify(maleCharacters));
// Get all female characters
const femaleCharacters = characters.filter(character => character.gender === 'female');
console.log(JSON.stringify(femaleCharacters));