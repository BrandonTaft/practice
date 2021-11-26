//Complete the reverseString function; it has one parameter S
//You must perform the following actions:

//Try to reverse string s using the split, reverse, and join methods.
//If an exception is thrown, catch it and print the contents
//of the exception's message on a new line.
//Print s on a new line. If no exception was thrown, 
//then this should be the reversed string; if an exception was thrown,
// this should be the original string.

//Output Format

//You must write two print statements using console.log():

//Print the contents of a caught exception's message on a new line. 
//If no exception was thrown, this line should not be printed.
//Print s on a new line. If no exception was thrown, 
//then this should be the reversed string; if an exception was thrown, 
//this should be the original string

//s ="1234"  is a string type, so it can be reversed without throwing an exception. 
//Thus, we print the reversed value, 4321, as our answer.

//Sample Input 1

//Number(1234)
//Sample Output 1

//s.split is not a function
//1234

//Explanation 1

// s = Number(1234)is not a string type, so it can't be reversed using string functions. 
//When we try to reverse it anyway, it throws an exception. 
//We then catch the exception and print its message, which is s.split is not a function. 
//Next, we finally print s which, because it wasn't able to be reversed, is Number(1234).

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try {
         s = s.split('').reverse().join('');
    } catch (e) {
         console.log('s.split is not a function');
    }

    console.log(s);
}