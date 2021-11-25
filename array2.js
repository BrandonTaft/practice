//JavaScript arrays are zero-indexed. The first element of an array is at index 0, 
//and the last element is at the index value equal to the value of the array's length property minus 1.

let arr = ['this is the first element', 'this is the second element', 'this is the last element']
console.log(arr[0])              // logs 'this is the first element'
console.log(arr[1])              // logs 'this is the second element'
console.log(arr[arr.length - 1]) // logs 'this is the last element'

//A JavaScript array's length property and numerical properties are connected.

//Several of the built-in array methods (e.g., join(), slice(), indexOf(), etc.) 
// take into account the value of an array's length property when they're called.

//Other methods (e.g., push(), splice(), etc.) 
// also result in updates to an array's length property.

const fruits = []
fruits.push('banana', 'apple', 'peach')

console.log(fruits.length) //


//When setting a property on a JavaScript array when the property is a valid array index
// and that index is outside the current bounds of the array, the engine will update the array's length property accordingly:

fruits[5] = 'mango'
console.log(fruits[5])            // 'mango'
console.log(Object.keys(fruits))  // ['0', '1', '2', '5']
console.log(fruits.length)        // 6

//Increasing the length.

fruits.length = 10
console.log(fruits)              // ['banana', 'apple', 'peach', empty x 2, 'mango', empty x 4]
console.log(Object.keys(fruits)) // ['0', '1', '2', '5']
console.log(fruits.length)       // 10
console.log(fruits[8])           // undefined

//Decreasing the length property does, however, delete elements.

fruits.length = 2
console.log(Object.keys(fruits)) // ['0', '1']
console.log(fruits.length)       // 2

//Creating an array
//The following example creates an array, msgArray, with a length of 0,
// then assigns values to msgArray[0] and msgArray[99], 
//changing the length of the array to 100.

let msgArray = []
msgArray[0] = 'Hello'
msgArray[99] = 'world'

if (msgArray.length === 100) {
  console.log('The length is 100.')
}

//Creating a two-dimensional array
//the following creates a chessboard as a two-dimensional array of strings. 
//The first move is made by copying the 'p' in board[6][4] to board[4][4]. 
//The old position at [6][4] is made blank.

let board = [
  ['R','N','B','Q','K','B','N','R'],
  ['P','P','P','P','P','P','P','P'],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  ['p','p','p','p','p','p','p','p'],
  ['r','n','b','q','k','b','n','r'] ]

console.log(board.join('\n') + '\n\n')

// Move King's Pawn forward 2
board[4][4] = board[6][4]
board[6][4] = ' '
console.log(board.join('\n'))

//Here is the output:

R,N,B,Q,K,B,N,R
P,P,P,P,P,P,P,P
 , , , , , , ,
 , , , , , , ,
 , , , , , , ,
 , , , , , , ,
p,p,p,p,p,p,p,p
r,n,b,q,k,b,n,r

R,N,B,Q,K,B,N,R
P,P,P,P,P,P,P,P
 , , , , , , ,
 , , , , , , ,
 , , , ,p, , ,
 , , , , , , ,
p,p,p,p, ,p,p,p
r,n,b,q,k,b,n,r

//Using an array to tabulate a set of values
values = []
for (let x = 0; x < 10; x++){
 values.push([
  2 ** x,
  2 * x ** 2
 ])
}
console.table(values)

Results in

// The first column is the index
0	1	0
1	2	2
2	4	8
3	8	18
4	16	32
5	32	50
6	64	72
7	128	98
8	256	128
9	512	162