//You are climbing a staircase. It takes **n** steps to reach the top.
//Each time you can either climb 1 or 2 steps. 
//In how many distinct ways can you climb to the top?

//The pattern we notice here is that 
//*****n**is the sum of (n-1) and (n -2).***** It’s a Fibonacci sequence!

//Fibonacci sequence!
let n = 2
var climbStairs = function (n) {
    if (n == 1 || n == 0) return 1 // our base cases
    let first = 1;
    let second = 2;
    for (let i = 3; i <= n; i++) {
        let third = first + second;
        first = second;
        second = third;
    }
    return second;
};


function fibonacci(n) {
    var a = 1, b = 0, temp;		  //1st run a is 1 b is 0 n is 2
    while (n >= 0) {			  //2nd run a is 1 b is 1 n is 1
        //3rd run a is 2 b is 1 n is 0
        temp = a;                 //temp just remembers what a was
        console.log("1", temp)	  //so on 3rd run temp is 2
        a = a + b;					//1st run a is 1
        console.log("2", a)		//2nd run now a is 2
        //3rd run a is 3
        b = temp;					//1st run b is 1 ** b is changed to 																				what a was
        //2nd run b is what a was to start 																				//run2 which is 1
        // 3rd run b is 2
        console.log("3", b)
        n--;						//1st run n is 1 ** subtrac1 from n
        console.log("4", n)		//2nd run sub 1 from n = 0
        //3rd run now n is -1 which stops
        //the while loop and returns b
        //which is 2
    }

    return b;
}


console.log(fibonacci(n))
//countBits(n)
