// Async-Await, Object.entries-values and padStart/padEnd

/**
 *  Object.entries - This function returns an array of arrays.
 * If an object is passed, each array will have two items: property and value. And they will
 * be strings.
 */

const data = {
    frontend: 'ogied',
    backend: 'Mike',
    desing: 'Lamia'
};
const entries = Object.entries(data);
console.log(entries);
console.log(`Our object has ${entries.length} properties`);

// Object. values - returns an array with the values of each property.
const objectValues = Object.values(data);
console.log(values);

const string = 'hello';
console.log(string.padStart(7, 'hi '));
console.log(string.padEnd(12, ' ------'));

// Async - Await
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true) 
            ? setTimeout(() => resolve('hello world'), 3000)
            : reject(new Error('Something failed'));
    });
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
};
helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch(error) {
        console.log(error);
    }
};
anotherFunction();