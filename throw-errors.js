// The try block is the first step in error handling
//  and is used for any block of code that is likely to raise an exception. 
// It should contain one or more statements to be executed 
// and is typically followed by at least one catch clause
//  and/or the optional finally clause. In other words, 
//  the try statement has three forms:

// try-catch
// try-finally
// try-catch-finally
// The catch block immediately follows the try block and is executed only 
// if an exception is thrown when executing the code within the try block. 
// It contains statements specifying how to proceed and recover from the thrown exception; 
// if no exception is thrown when executing the try block, the catch block is skipped. 
// If any statement within the try block (including a function call to code outside of the block) 
// throws an exception, control immediately shifts to the catch clause.

// It's important to note that we always want to avoid throwing an exception. 
// It's best if the contents of the try block execute without issue but, 
// if an exception is unavoidable, control passes to the catch block which 
// should contain instructions that report and/or recover from the exception.

// The finally block is optional. It executes after the try and catch blocks,
//  but before any subsequent statements following these blocks. 
//  The finally block always executes, regardless of whether or not an exception 
//  was thrown or caught.

// In the code below, the call to getElement(arr, 4) inside the try block will throw
//  an exception because the code declaring  was commented out. 
//  It's immediately followed by a catch block that catches the exception 
//  and prints the message associated with it (arr is not defined). 
//  Because the exception was caught, the program continues executing, 
//  printing the next line after the catch block 
//  (The program continued executing!).


// "use strict"

// function getElement(arr, pos) {

//     return arr[pos];

// }
// //let arr = [1, 2, 3, 4, 5];

// try {

//     console.log(getElement(arr, 4));

// } 

// catch (e) {

//     console.log(e.message);

// }

// console.log("The program continued executing!");

//OUTPUT

//arr is not defined
//The program continued executing!


//If we remove the catch block and add the finally block shown below, 
//it will instead print Finally Block and then terminate due to the 
//uncaught exception (ReferenceError: arr is not defined).

//let arr = [1, 2, 3, 4, 5];

try {
    console.log(getElement(arr, 4));
} 
finally {
    console.log("Finally Block");
}
console.log("The program continued executing!");

//In this example, we create a constant variable, arr, 
//that's an array of integers. We then try to reassign the value of arr 
//to a different array of numbers; this throws an exception 
//because the value of a constant cannot be reassigned or re-declared. 
//Click Run below to execute the code.


"use strict";
const arr = [1, 2, 3, 4, 5];

try {
    arr = [4, 2];
    console.log(arr.sort());
} 
catch (e) {
    console.log(e.message);
}

//output
//Assignment to constant variable.

//Let's say we want to make sure that the contents of arr are printed to stdout 
//regardless of whether or not an exception is thrown or caught; 
//we can do this by adding a finally block:

"use strict";
const arr = [1, 4, 3, 4, 5];
try {

    arr = [4, 2];
    console.log(arr.sort());
} 

catch (e) {

    console.log(e.message);

} 

finally {

    console.log(arr.sort());

}

//output
Assignment to constant variable.
[ 1, 3, 4, 4, 5 ]

//Throw
//We use the throw statement, denoted by the throw keyword, 
//to throw an exception. There are two ways to do this, shown below.

//1. throw value
//We can throw an exception by following the keyword throw with some  
// that we wish to use for the exception being thrown. Click Run below 
// to see this in code.

function throwString() {
    // Generate an exception with a String value
    throw "some exception";
}

function throwFalse() {
    // Generate an exception with a boolean value of false
    throw false;
}

function throwNumber() {
    // Generate an exception with a Number value of -1
    throw -1;
}

try {
    throwString();
}
catch (e) {
    console.log(e);
}

try {
    throwFalse();
}
catch (e) {
    console.log(e);
}

try {
    throwNumber();
}
catch (e) {
    console.log(e);
}

//output

//some exception
//false
//-1

2. throw new Error(customError)
We can throw an exception by following the keyword throw with new Error(customError), where  is the value we want for the  property of the exception being thrown. Click Run below to see this in code.

1
var input = "";
2
process.stdin.on('data', function (data) {
3
    input = String(data).trim();
4
    main();
5
});
6
/** Ignore above this line. **/
7
​
8
function throwMyError() {
9
    // Generate an exception with a value read from stdin
10
    throw new Error(input);
11
}
12
​
13
function main() {
14
    try {
15
        throwMyError();
16
    }
17
    catch (e) {
18
        console.log(e.message);
19
    }
20
}
RunInput
This is my fancy error.

Output
EXAMPLE
In this example, we wrote a simple program that throws an exception if the given integer argument is outside of the bounds of an array. Click Run below to execute the code.

Input Format

Three space-separated integers denoting indices in an array.

1
"use strict";
2
var input = "";
3
var index = 0;
4
process.stdin.on('data', function (data) {
5
    input = String(data).split(" ");
6
    main();    
7
});
8
function readLine() { return +(input[index++]); }
9
/**** Ignore above this line. ****/
10
​
11
/*
12
 * This function returns the value at index pos (i.e., arr[pos]).
13
 * 
14
 * If the index 'pos' is outside of the bounds of the array (i.e., value of arr[pos] is 'undefined'), throw errors.
15
 */
16
function getValue(arr, pos) {
17
    if (pos < 0) {
18
        throw new Error("Index Underflow: " + pos);
19
    }
20
​
21
    let len = arr.length;
22
​
23
    if (pos >= len) {
24
        throw new Error("Index Overflow: " + pos);
25
    }
26
​
27
    return arr[pos];
28
}
29
​
30
function main() {
31
    var index;  
32
    const arr = [1, 2, 3, 4, 5];
33
    try {
34
        index = readLine()
35
        console.log(getValue(arr, index));
36
    } 
37
    catch (e) {
38
        console.log(e.message);
39
    }
40
​
41
    try {
42
        index = readLine();
43
        console.log(getValue(arr, index));
44
    } 
45
    catch (e) {
46
        console.log(e.message);
47
    }
48
​
49
    try {
50
        index = readLine();
51
        console.log(getValue(arr, index));
52
    } 
53
    catch (e) {
54
        console.log(e.message);
55
    }
56
}
Run
5 2 -3

//output

Index Overflow: 5
3
Index Underflow: -3