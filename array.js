// Array of size n is a block of cells sequentially indexed from 0 - n-1
// the length n is fixed and cannot be resized w/o creating new array
// To store an element,VALUE , in some index i of array A, use the syntax A[i]
// Treat it as u would any other variable  A[i ]= value

//Create an Array

let fruits = ['Apple', 'Banana']

console.log(fruits.length)
// 2

//Access an Array item using the index position

let first = fruits[0]
// Apple

let last = fruits[fruits.length - 1]
// Banana////

//Loop over an Array

fruits.forEach(function(item, index, array) {
  console.log(item, index)
})
// Apple 0
// Banana 1

//Add an item to the end of an Array

let newLength = fruits.push('Orange')
// ["Apple", "Banana", "Orange"]

//Remove an item from the end of an Array

let last = fruits.pop() // remove Orange (from the end)
// ["Apple", "Banana"]

//Remove an item from the beginning of an Array

let first = fruits.shift() // remove Apple from the front
// ["Banana"]

//Add an item to the beginning of an Array

let newLength = fruits.unshift('Strawberry') // add to the front
// ["Strawberry", "Banana"]


//add item to end of array
fruits.push('Mango')

// ["Strawberry", "Banana", "Mango"]

//Find the index of an item in the Array
let pos = fruits.indexOf('Banana')
// 1

//Remove an item by index position

let removedItem = fruits.splice(pos, 1) // this is how to remove an item

// ["Strawberry", "Mango"]

//Remove items from an index position

let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot']
console.log(vegetables)
// ["Cabbage", "Turnip", "Radish", "Carrot"]

let pos = 1
let n = 2

let removedItems = vegetables.splice(pos, n)
// this is how to remove items, n defines the number of items to be removed,
// starting at the index position specified by pos and progressing toward the end of array.

console.log(vegetables)
// ["Cabbage", "Carrot"] (the original array is changed)

console.log(removedItems)
// ["Turnip", "Radish"]

//Copy an Array

let shallowCopy = fruits.slice() // this is how to make a copy
// ["Strawberry", "Mango"]


