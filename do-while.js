//The do while loop is a variant of the while loop. 
//This loop will execute the code block once, 
//before checking if the condition is true, 
//then it will repeat the loop as long as the condition is true.
// ***Do not forget to increase the variable used in the condition, 
//***otherwise the loop will never end!



do {
    // code block to be executed
  }
  while (condition);



  let i = 0;
do {
  console.log(i);
  i++;
}
while (i < 10);

///********** COMPARED TO FOR LOOP ***************/
//USE FOR LOOP IF YOU KNOW HOW MANY TIMES ITLL RUN
//DO WHILE IF U NEED IT TO RUN ONCE

const cars = ["BMW", "Volvo", "Saab", "Ford"];

//for(let i = 0; i < cars.length; i++){
//console.log(cars[i])
//}
let i = 0;
do{
console.log(cars[i])
i++
}
while(i < cars.length)

for (let i = 0; i < cars.length; i++){
    console.log(cars[i])
    }