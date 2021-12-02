//Complete the function in the editor. It has one parameter: an array,NUMS
//It must iterate through the array performing one of the following actions
// on each element:

//If the element is even, multiply the element by .
//If the element is odd, multiply the element by .
//The function must then return the modified array.

//Input Format

//The first line contains an integer,n , denoting the size of NUMS
//The second line contains n space-separated integers describing
// the respective elements of NUMS

//Output Format
//Return the modified array where every even element is doubled 
//and every odd element is tripled.

//Sample Input 0

//5
//1 2 3 4 5

//Sample Output 0
//3 4 9 8 15

//Explanation 0

//Given nums=[1,2,3,4,5], we modify each element so that all even elements 
//are multiplied by 2 and all odd elements are multipled by 3 
//In other words,[1,2,3,4,5] => [1*3,2*2,3*3,4*2]=>[3,4,9,8]
//We then return the modified array as our answer.

const nums=[1,2,3,4,5]

function modifyArray(nums) {
    return (nums || []).map(num => num * (num % 2 === 0 ? 2 : 3));
}

console.log(modifyArray(nums))

output=[3,4,9,8,15]

EXAMPLES
const makeArray = (...values) => { return values };
console.log('Array:', makeArray(1, 2, 3, 4));

prints[1,2,3,4]

//*****************************

const getSum = (a, b) => { return a + b };
console.log('1 + 2 =', getSum(1, 2));
prints 3

//******************************

const greeting = 'Hello, World.';
const capitalize = (myString) => { return myString.toUpperCase() };
console.log(greeting, '=>', capitalize(greeting));
prints