// includes and exponential operator

// includes (array) - through this method we can check if the array includes a certain value.
let numbers = [1,3,5,7,9];
if (numbers.includes(2)) {
    console.log('number 7 exists in the array');
} else {
    console.log('number doesn\'t exist');
}

// Exponent - with this new way, we avoid having to call math.pow.
let base = 4;
let exponent = 3;
let result = base ** exponent;
console.log(result);