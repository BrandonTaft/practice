// A switch statement allows a program to evaluate an expression by attempting 
// to match the expression's value to a case label. If a match is found, 
// the program jumps to the statement(s) associated with the matched label 
// and continues executing at that point. Note that execution will continue sequentially
//  through all the statements starting at the jump point unless there is a 
//  call to break;, which exits the switch statement.
// A switch statement looks like this:

// switch (expression) {
//     case label1:
//         statement1;
//         break;
//     case label2:
//         statement2;
//         break;
//     case label3:
//         statement3;
//         statement4;
//         break;
//     default:
//         statement;
// }
// The program first looks for a case clause with a label matching the value of expression,
// then transfers control to the matching clause and executes the associated statements.
// If no matching label is found, the program looks for the optional default clause
// and, if found, transfers control to that clause and executes the statements associated
// with it. If no default clause is found, the program continues executing 
// after the end of the switch statement.

// function submitBtn() {
//     // get the two numbers from the text input fields
//     // parseInt() changes string to number 
//     var input = parseInt(document.getElementById("number").value);

// 		switch (input) {
//         case 2:
//             console.log("A");
//             break;
//         case 3:
//             console.log("B");
//             break;
//         case 4:
//             console.log("C");
//             break;
//         case 5:
//             console.log("D");
//             break;
//         default:
//             console.log("must be between 2-5");
//     }

//     var result = "exited switch";
//     // write the result into the HTML
//     var answer = document.getElementById("display");
//     answer.innerHTML = result;
// }

// var theButton = document.getElementById("btn");
// theButton.onclick = submitBtn;


// ***************MULTI CRITERIA***************

// function switchDemo() {
//     var n = +(readLine());

//     switch (n) {
//         case 2:
//         case 4:
//         case 6:
//             console.log("A");
//             break;
//         case 3:
//         case 5:
//         case 7:
//             console.log("B");
//             break;
//         default:
//             console.log("C");
//     }

//     console.log("Exited switch."
// **IF THERE ARE NO BREAKS IT WILL RUN THE MATCH AND EVERY STATEMENT AFTER ALSO**

// var input = "";
// process.stdin.on('data', function (data) {
//     input = data;
//     switchDemo();
// });
// function readLine() { return input; }
// /**** Ignore above this line. ****/

// function switchDemo() {
//     var n = parseInt(readLine());

//     switch (n) {
//         case 2:
//             console.log("A");
//         case 3:
//             console.log("B");
//         case 4:
//             console.log("C");
//         case 5:
//             console.log("D");
//         default:
//             console.log("E");
//     }

//     console.log("Exited switCH


// Complete the getLetter(s) function in the editor. It has one parameter:
// a string,s , consisting of lowercase English alphabetic letters
// It must return A, B, C, or D depending on the following criteria:

// If the first character in string s is in the set {aeiou}, then return A.
// If the first character in string s is in the set {bcdfg}, then return B.
// If the first character in string  sis in the set {hjklm}, then return C.
// If the first character in string s is in the set {npqrstvwxyz}, then return D.
// Hint: You can get the letter at some index  in  using the syntax s[i] or s.charAt(i).

// Function Description

// Complete the getLetter function in the editor below.

// getLetter has the following parameters:

// string s: a string
// Returns

// string: a single letter determined as described above

function getLetter(s) {
    let letter;
    // Write your code here
    switch (s[0]) {
        case ('a' || 'e' || 'o' || 'i' || 'u'):
            letter = 'A';
            break;

        case ('b' || 'c' || 'd' || 'f' || 'g'):
            letter = 'B';
            break;

        case ('h' || 'j' || 'k' || 'l' || 'm'):
            letter = 'C';
            break;

        case ('z' || 'n' || 'p' || 'q' || 'r' || 's' || 't' || 'v' || 'w' || 'x' || 'y'):
            letter = 'D';

    }

    return letter;
}
