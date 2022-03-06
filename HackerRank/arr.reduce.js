let x = [3, 2, 1, 1, 12, 13];
let y = 1;



console.log(x.reduce((initialValue,nextValue) => initialValue + nextValue) )

console.log(x.reduce((initialValue,nextValue) => initialValue + nextValue, y) )


const numbers = [175, 50, 25];

function myFunc(total, num) {
console.log(num)
  return total + num;
}

//console.log(numbers.reduce(myFunc))