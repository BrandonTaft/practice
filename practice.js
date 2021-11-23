

//FACTORIAL
//Implement a function named factorial that has one parameter: an integer,n.
 //It must return the value of n! 



function factorial(n){
    if(n<1){
        return console.log(n);
    }else{
        return n * factorial(n - 1)
    }
}