
// Variable a is declared in the main function using the var keyword 
// and initialized with the given value, 11.
// a%1 evaluates to true because a=11 is odd, so we enter the if block.
// Variable a is declared a second time inside the if block (still using the var keyword) 
// and initialized with a value of 11+1=12 . We print the value of a=12.
// We exit the if block and print the value of a in main.
//  This value is 12 because the scope of the initial declaration of a in main
//   includes the if block.

// INPUT = 11
// OUTPUT = if(a): 12   main(a): 12

function main(input) {
    var a = input;

    // If 'a' is odd:
    if (a % 2 == 1) {
        var a = input + 1;
        console.log("if(a): " + a);
        
    }

    console.log("main(a): " + a);
    return "cool"
    
}

