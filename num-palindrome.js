let x = 121;

//convert to string
//split at each character("")
//reverse it
//join it back to a string so we can compare it
var isPalindromeTwo = function (x) {
    return x == x.toString().split('').reverse().join('');
};

//this is with if else
function isPalindrome(x) {

    if (x == x.toString().split("").reverse().join("")) {
        return true
    } else {
        return false
    }
}
console.log(isPalindrome(x))



