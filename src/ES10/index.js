// flat and flatMap
let array = [1,2,3, [1,2,3, [1,2,3]]];
console.log(array.flat(2));

let array = [1,2,3,4,5];
console.log(array.flatMap(value => [value, value * 2]));

// trimStart and trimEnd
let hello = '         hello world';
console.log(hello);
console.log(hello.trimStart());

let hello = 'hello world            ';
console.log(hello);
console.log(hello.trimEnd());

// Object.fromEntries
let entries = [['name', 'ogied'], ['age', 26]];
console.log(Object.fromEntries(entries));

// Symbol
let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);