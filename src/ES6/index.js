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

// Start of chapter 2 - Arrow functions, promises and object parameters
let name = 'ogied';
let age = 26;
// es5 - object props
obj = {name: name, age: age};
// es6
obj2 = { name, age};
console.log(obj2);

// arrow functions
const names = [
    { name: 'jett', age: 23 }, 
    { name: 'phoenix', age: 22 }
];

// ES5
let listOfName2 = names.map(function(item) {
    console.log(item);
    return item.name;
});

/**
 * ES6 Version. Important points:
 * If we are simply returning a value, we don't have to add the return statement. Simply put the parameter.
 * If we are using only one param, we don't need to add the parenthesis.
 * Arrow functions have there own context. If we want to use the global one we would need to call bind and pass 'this'.
 */
const listOfNames2 = names.map(item => item.name);
const square = num => num * num;

// Promises - They allow us to handle async task in a more friendly way and getting rid of the callbacks.
let helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('hey, everything is ok');
        } else {
            reject('Something went wrong');
        }
    });
};
helloPromise()
    .then(result => console.log(result))
    .catch(err => console.log(err));

// Class, modules & generators.

// Class
class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    
    sum(valueA, valueB) {
        // this.valueA = valueA;
        // this.valueB = valueB;
        return valueA + valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

// modules
import { hello } from './module';
console.log(hello());

/**
 *  Generators - They return values based in the algorithm
 * Through the yield special word, we save the state.
 * .next property returns the state of the generator.
 * .value returns the value of the current state.
 * If no more states are stored the generator will return undefined.
 */
// Generators - They return values based in the algorithm
// .next property returns the state of the generator.
// .value returns the value of that state
function* helloWorld() {
    if (true) {
        yield 'hello, ';
    }
    if (true) {
        yield 'World';
    }
};
const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);