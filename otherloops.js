// The while statement creates a loop that executes its internal statement(s)
//  as long as the specified condition evaluates to true. 
//  The condition is evaluated before executing the statement.

function main(input) {
    var i = 1;

    while (i <= input) {
        process.stdout.write(i + " ");

        i++;
    }
}


// do-while
// The do-while statement creates a loop that executes its internal statement(s)
// until the specified condition evaluates to false.
// The condition is evaluated after executing the internal statement(s),
// so the contents of the loop always execute at least once.

// Basic Syntax
// do {
//     statement(s);
// } while (condition);


function main(input) {
    var i = 1;

    do {
        console.log(i + " ");

        i++;
    } while (i <= input);
}


//for-in
//This loop iterates (in an arbitrary order) over the name of each enumerable property
//in an object, allowing statements to be executed for each distinct property.

//Basic Syntax
for (var variable in object) {
    // insert code that uses variable here
}
//VARIABLE A variable that refers to a different property name during each iteration of the loop. You can declare this with var or let.
//OBJECT: The object whose enumerable properties are being iterated through.

var actress = {
    firstName: "Julia",
    lastName: "Roberts",
    dateOfBirth: "October 28, 1967",
    nationality: "American",
    firstMovie: "Satisfaction"
};

for (var property in actress) {
    console.log("actress." + property + " = " + actress[property]);
}

//MORE FOR IN
class Monster {
    constructor(name, home, description) {
        this.name = name;
        this.home = home;
        this.description = description;
    }
}

function main(input) {
    var monster = new Monster(input[0], input[1], input[2]);

    // Print array
    console.log(monster);

    // Print each of its elements on a new line
    for (let property in monster) {
        console.log(property + ": " + monster[property]);
    }
}

// for-of
// This loop iterates over iterable objects such as an Array,
// Map, Set, String, TypedArray, arguments object, etc.
// It essentially iterates over the value of each distinct property in the structure
// such as each letter in a word or each element in an array.

// Basic Syntax
// for (let variable of iterable) {
//     statement(s);
// }
// VARIABLE: A variable that refers to a different property value during each iteration of the loop. You can declare this with var or let.
// OBJECT: The object whose enumerable properties are being iterated through.

function main(input) {
    // Split the words read as input into an array of words
    var array = input.split(new RegExp("[ \n]+"));

    // Print array
    console.log(array);

    // Print each of its elements on a new line
    for (let value of array) {
        console.log(value);
    }
}

//MORE FOR-OF
//In this code, we iterate over the set of Key-Value pairs in a Map,
//first printing each Key-Value pair and then printing each individual Key and its paired Value.

let actress = new Map([
    ["firstName", "Julia"],
    ["lastName", "Roberts"],
    ["dateOfBirth", "October 28, 1967"],
    ["nationality", "American"],
    ["firstMovie", "Satisfaction"]
]);

// Print each Key-Value pair in the map
for (let info of actress) {
    console.log(info);
}

// Print each Key and Value as "Key: Value"
console.log();
for (let info of actress) {
    console.log(info[0] + ": " + info[1]);
}