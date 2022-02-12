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


//number version
function isPalindrome(){
	if (x < 0) return false;
  let reversed = 0
  let y = x;
  while (y > 0){
  //Get the last digit of the number using the modulo (%) operator.
  	const lastDigit = y % 10; //2
  //multiply reversed by 10 on the right side of the assignment to ensure that we're always appending lastDigit to the ones column.
  //reverse of y % 10, to put lastdigit at end
    reversed = (reversed * 10) + lastDigit;//2
    //Remove the last digit from y by dividing it by 10, and truncating the last decimal. We can do this using the bitwise OR operator |. This is another trick that can help you in future JS problems. In this case, we're converting the result into an integer, and then return the new integer:
    y = (y / 10) | 0
  }
  return x === reversed
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