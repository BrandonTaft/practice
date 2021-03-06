const makeArray = (...values) => { return values };
console.log('Array:', makeArray(1, 2, 3, 4));
console.log('Array:', makeArray(1, 2, 3, 4, 5, 6));

const getSum = (a, b) => { return a + b };
console.log('1 + 2 =', getSum(1, 2));

const greeting = 'Hello, World.';
const capitalize = (myString) => { return myString.toUpperCase() };
console.log(greeting, '=>', capitalize(greeting));

output
Array: [ 1, 2, 3, 4 ]
Array: [ 1, 2, 3, 4, 5, 6 ]
1 + 2 = 3
Hello, World. => HELLO, WORLD.


//************************************

const arr = [1, 2, 3, 4, 5];

const sum = arr.reduce(function (a, b) {
    return a + b;
}, 0);

console.log('Sum:', sum); 

const arr = [1, 2, 3, 4, 5];

const sum = arr.reduce((a, b) => { return a + b }, 0);
console.log('Sum:', sum);

const arr = [1, 2, 3, 4, 5];

const sum = arr.reduce((a, b) => a + b, 0);
console.log('Sum:', sum);

output 15 for all 3

//******************************

const arr = ['first', 'second', 'third', 'fourth', 'fifth'];

const len = arr.map(function(s) { return s.length });
console.log('Lengths:', len);

const arr = ['first', 'second', 'third', 'fourth', 'fifth'];

const len = arr.map(s => s.length);

console.log('Lengths:', len);

output for both= Lengths: [ 5, 6, 5, 6, 5 ]

//**************************** */

const arr = [1, 2, 3, 4, 5];

const greaterThan3 = arr.filter(function(a) {
    return a > 3;
});

console.log('Elements Greater Than 3:', greaterThan3);

const arr = [1, 2, 3, 4, 5];

const greaterThan3 = arr.filter(a => a > 3);

console.log('Elements Greater Than 3:', greaterThan3);

output for both= Elements Greater Than 3: [ 4, 5 ]