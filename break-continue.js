//The break statement "jumps out" of a loop.

//The continue statement "jumps over" one iteration in the loop.
//continue skips the value and goes to next value
//to skip over 3 use continue
for (let i = 0; i < 5; i++){
    if(i === 3){
    continue
    }
    console.log(i)
    }

//to stop once it hits 3
for (let i = 0; i < 5; i++) {
    if (i === 3){
    break;
    }
    console.log(i)
    }

    //0,1,2