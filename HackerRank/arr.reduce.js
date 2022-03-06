let x = [3, 2, 1, 1, 12, 13];
let y = 1;

//******MAY BE RECOMENDED TO ALWAYS PASS IN INITIAL VALUE AT END */
//****** EVEN IF YOU JUST PUT 0 */
//****Start value is the first number in array unless specified otherwise */


console.log(x.reduce((startValue,nextValue) => startValue + nextValue) )

console.log(x.reduce((startValue,nextValue) => startValue + nextValue, y) )


const numbers = [175, 50, 25];

function myFunc(total, num) {
console.log(num)
  return total + num;
}

//console.log(numbers.reduce(myFunc))