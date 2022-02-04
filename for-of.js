//for of statement loops through the values of an iterable object.

//It lets you loop over iterable data structures such as 
//Arrays, Strings, Maps, NodeLists, and more:
//For every iteration the value of next property is assigned to the variable 
//Variable can be declared with const, let, or var.


for (variable of iterable) {
    // code block to be executed
  }

// ********* ITERATE STRING ********* //

let language = "Java";

for (let x of language){
console.log(x)
}
//"J","a","v","a"

// ********* ITERATE ARRAY ********* //

const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  console.log(x)
}

//"BMW", "Volvo", "Mini"