

//************FACTORIAL*******************//

// Return the factorial of the provided integer.
// If the integer is represented with the letter n,
// a factorial is the product of all positive integers less than or equal to n.
// Factorials are often represented with the shorthand notation n!
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

//Implement a function named factorial that has one parameter: an integer,n.
//It must return the value of n! 

function factorial(n) {
    if (n < 1) {
        return console.log(n);
    } else {
        return n * factorial(n - 1)
    }
}


//return area of rectangle (l*w)

function getArea(length, width) {
    let area;
    area = +length * +width
    return area;
}

//return perimeter of rectangle (2 * (l + w))

function getPerimeter(length, width) {
    let perimeter;
    perimeter = 2 * (+length + +width)
    return perimeter;
}


//   Print three lines:
// 1. The sum of 'firstInteger' and the Number representation of 'secondInteger'.
// 2. The sum of 'firstDecimal' and the Number representation of 'secondDecimal'.
// 3. The concatenation of 'firstString' and 'secondString' ('firstString' must be first).

// Parameter(s):
// secondInteger - The string representation of an integer.
// secondDecimal - The string representation of a floating-point number.
// secondString - A string consisting of one or more space-separated words.


function performOperation(secondInteger, secondDecimal, secondString) {
    const firstInteger = 4;
    const firstDecimal = 4.0;
    const firstString = 'HackerRank ';
    
    //print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number type)
    
    console.log(firstInteger + +secondInteger)
    
    
    //print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number type) on a new line.
    
   
    console.log(firstDecimal + +secondDecimal)
    
    // print the concatenation of 'firstString' and 'secondString' on a new line. The variable 'firstString' must be printed first.

    console.log(firstString + secondString )
}