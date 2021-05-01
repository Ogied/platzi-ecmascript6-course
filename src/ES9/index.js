// Rest Operator - Gathers the properties of an object.
const obj = {
    name: 'ogied',
    age: 26,
    country: 'MX'
};

let { name, ...all } = obj;
console.log(name);
console.log(all);

const obj2 = {
    name: 'Ogied',
    age: '26',
};

const obj3 = {
    ...obj2,
    country: 'MX'
};
console.log(obj3);


// Promise.finally
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('hello world'), 3000)
            : reject(new Error('couldn\'t create the message'));
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(res => console.log('promise finished'));

// RegEx
const regexDate = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexDate.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];
console.log(year, month, day);