
// *******************FASTEST*********************
// While loop -
// Time complexity: O(N)
// Space complexity: Constant
// Function calls: 51
// Time needed: 0.000001ms


function fibonacci(num) {
    var a = 1, b = 0, temp;

    while (num >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }

    return b;
}
// ****************Memoization*******************
// Is an optimization technique used primarily to speed up computer 
// programs by storing the results of expensive function calls.
// if we just store the value of each index in a hash, we will avoid 
// the computational time of that value for the next N times.
// This change will increase the space complexity of algorithm to O(n)
// but will dramatically decrease the time complexity to 2N
// which will resolve to linear time since 2 is a constant.

// Time complexity: O(2N)
// Space complexity: O(n)
// Function calls: 99
// Time needed: 0.000001ms

// function fibonacci(num, memo) {
//     memo = memo || {};
  
//     if (memo[num]) return memo[num];
//     if (num <= 1) return 1;
  
//     return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
//   }


// *******************SLOWEST**********************
// RECURSIVE
// Time complexity: O(2^N)
// Space complexity: O(n)
// Function calls: 20.365.011.074
// Time needed: 176.742ms

// function fibonacci(n) {
//     if (n <= 2) return 1;
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }



function submitBtn() {
    // get the two numbers from the text input fields
    // parseInt() changes string to number 
    var num = parseInt(document.getElementById("number").value);


    var result = fibonacci(num);
    // write the result into the HTML
    var answer = document.getElementById("answerBox");
    answer.innerHTML = result;
}

var theButton = document.getElementById("btn");
theButton.onclick = submitBtn;