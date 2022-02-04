
//for in statement loops through the properties of an Object:(including arrays)
//for in with object
const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person) {

  text = person[x];
  console.log(text)
}

//forin with array
const numbers = [45, 4, 9, 16, 25];

let num = "";
for(let x in numbers){
let num = numbers[x];
console.log(num)
}

const o = ['first', 'second', false];

// 'p' is the index
for (let p in o) {
    console.log(p + ' ' + o[p]);
}

output
0 first
1 second
2 false