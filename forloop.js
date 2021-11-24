// The head of a for loop typically looks like for (var i = 0; i < maxValue; i++), 
// where maxValue is the maximum value you wish to iterate until.

//prints 1 - (input)
function loop(input) {
    for (var i = 1; i <= input; i++) {
        console.log(i + " ");
    }
}

//In this example, we omit the initialization expression and instead initialize
//  the variable used in condition and finalExpression before our loop:

function main(input) {
    var i = 1;

    for (; i <= input; i++) {
        process.stdout.write(i + " ");
    }
}

// Condition
// In this example, we omit the condition expression and instead 
// add an if statement inside the loop that terminates the loop once 
// the condition i > input is satisfied:

function main(input) {

    for (var i = 1;; i++) {
        if (i > input) {
            break;
        }

        console.log(i + " ");
    }
}

