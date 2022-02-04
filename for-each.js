
//function can take 3 args. value,index,array
//args can be named anything
//args dont have to be passed in but function will always 
//think 1st is value and 2nd is index so(index,array) will be seen as (val,index)
const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);

function myFunction( x,y) {
  let txt = y;
  console.log(txt)
}






const arr = ['a', 'b', 'c', 'd'];

arr.forEach((value, index, array) => {
    console.log(array[index])
   
});

output= a 
    b
    c
    d

    arr.forEach((value, index) => {
        console.log('index', index, 'has a value of', value);
    });

    output= index 0 has a value of a
    index 1 has a value of b
    index 2 has a value of c
    index 3 has a value of d


    arr.forEach((value) => {
        console.log('value:', value);
    });

    output= value: a
    value: b
    value: c
    value: d