function newFunction(name, age, country) {
    var name = name || 'ogied';
    var age = age || 26;
    var country = country || 'MX';
    console.log(name, age, country);
}

// ES6
function newFunction2(name = 'ogied', age = 26, country = 'MX') {
    console.log(name, age, country);
};

newFunction2();
newFunction2('Jett', '22', 'KO');

// Template literals
let hello = 'hello';
let world = 'world';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let epicPhraseLiteral = `${hello} ${world}`;
console.log(epicPhraseLiteral);

// Multiline 
let lorem = "Lorem ipsum dolorem ipsum dolorem \n"
+ "another epic phrase";
// Multiline using ES6
let lorem2 = `this is another epic phrase
 using multiline thanks to es6`;
console.log(lorem);
console.log(lorem2);

// Object destructuring
let person = {
    name: 'ogied',
    age: 26,
    country: 'MX'
};
console.log(person.name, person.age);
let { name, age, country } = person;
console.log(name, age, country);

// Spread operator - it will take an iterable and it will convert it into individual elements.
let team1 = ['Ogied', 'Jett', 'Reyna'];
let team2 = ['Raze', 'Sova', 'Phoenix'];
let education = ['Skye', ...team1, ...team2];
console.log(education);

// let & const
// Var variables are part of the global scope so they can be called from anywhere.
{
    var globalVar = 'GlobalVar';
}

//  Let & const variables are part of the scope in which they are declared and they can only be
// called within that scope.
{
    let globalLet = 'GlobalLet';
    console.log(globalLet);
}
console.log(globalVar);

const a = 'b';