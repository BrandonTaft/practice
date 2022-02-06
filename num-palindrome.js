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

// number version

var isPalindrome = function(x) {
    const isNegative = x< 0 ? true : false;
      
    if (isNegative){
        return false;
    }
      
    const temp = x;
    let reversed = 0;
      
    while(x>0){
        reversed = (reversed * 10) + (x%10);
        x = parseInt(x/10);
        console.log("reversed is ", reversed)
        console.log("x is", x)
    }
      
    return reversed == temp;
  };
  //console.log(isPalindrome(x)) 

// two pointer method

var isPalindrome = function (x) {

    if (x < 0) {
      return false;
    }
  
    if (x < 10) {
      return true;
    }
  
    if (x % 10 === 0 && x !== 0) {
      return false;
    }
  
    const str = String(x);
    let i = 0, j = str.length - 1;
  
    while (i < j) {
      if (str[i] !== str[j]) {
        return false;
      }
  
      i++;
      j--;
    }
  
    return true;
  };