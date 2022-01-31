let cars = [
    {
      "color": "purple",
      "type": "minivan",
      "registration": new Date('2017-01-03'),
      "capacity": 7
    },
    {
      "color": "red",
      "type": "station wagon",
      "registration": new Date('2018-03-03'),
      "capacity": 5
    },
    
  ]

  //To add an object at the first position, use Array.unshift.

let car = {
  "color": "red",
  "type": "cabrio",
  "registration": new Date('2016-05-02'),
  "capacity": 2
}
cars.unshift(car);

//To add an object at the last position, use Array.push.

let car = {
 "color": "red",
 "type": "cabrio",
 "registration": new Date('2016-05-02'),
 "capacity": 2
}
cars.push(car);

//To add an object in the middle, use Array.splice. 
//This function is very handy as it can also remove items. 
//Watch out for its parameters:

Array.splice(
  {index where to start},
  {how many items to remove},
  {items to add}
);

//So if we want to add the red Volkswagen Cabrio on the fifth position, we'd use:

let car = {
    "color": "red",
    "type": "cabrio",
    "registration": new Date('2016-05-02'),
    "capacity": 2
  }
  cars.splice(4, 0, car);

  //****************//Looping through an array of objects***********

 // Find an object in an array by its values - Array.find
//Let's say we want to find a car that is red. 
//We can use the function Array.find.
//This function returns the first matching element:
let car = cars.find(car => car.color === "red");


//It's also possible to search for multiple values:
//In this case we'll get the last car in the list.
let car = cars.find(car => car.color === "red" && car.type === "cabrio");

//Get multiple items from an array that match a condition - Array.filter
//The Array.find function returns only one object. 
//If we want to get all red cars, we need to use Array.filter.

let redCars = cars.filter(car => car.color === "red");
console.log(redCars);
// output:
// [
//   {
//     color: 'red',
//     type: 'station wagon',
//     registration: 'Sat Mar 03 2018 01:00:00 GMT+0100 (GMT+01:00)',
//     capacity: 5
//   },
//   {
//     color: 'red',
//     type: 'cabrio',
//     registration: 'Sat Mar 03 2012 01:00:00 GMT+0100 (GMT+01:00)',
//     capacity: 2
//   }
// ]

//Transform objects of an array - Array.map
//This is something we need very often. 
//Transform an array of objects into an array of different objects. 
//That's a job for Array.map. 
//Let's say we want to classify our cars into three groups based on their size.

let sizes = cars.map(car => {
    if (car.capacity <= 3){
      return "small";
    }
    if (car.capacity <= 5){
      return "medium";
    }
    return "large";
  });
  console.log(sizes);
  // output:
  // ['large','medium','medium', ..., 'small']

  //It's also possible to create a new object if we need more values:

let carsProperties = cars.map(car => {
 let properties = {
   "capacity": car.capacity,
   "size": "large"
 };
 if (car.capacity <= 5){
   properties['size'] = "medium";
 }
 if (car.capacity <= 3){
   properties['size'] = "small";
 }
 return properties;
});
console.log(carsProperties);
// output:
// [
//   { capacity: 7, size: 'large' },
//   { capacity: 5, size: 'medium' },
//   { capacity: 5, size: 'medium' },
//   { capacity: 2, size: 'small' },
//   ...
// ]


//Add a property to every object of an array - Array.forEach
//But what if we want the car size too? 
//In that case we can enhance the object for a new property size. 
//This is a good use-case for the Array.forEach function.

cars.forEach(car => {
 car['size'] = "large";
 if (car.capacity <= 5){
   car['size'] = "medium";
 }
 if (car.capacity <= 3){
   car['size'] = "small";
 }
});

//Sort an array by a property - Array.sort
//When we're done with transforming the objects, 
//we usually need to sort them one way or another.
//Typically, the sorting is based on a value of a property every object has. 
//We can use the Array.sort function, 
//but we need to provide a function that defines the sorting mechanism.
//Let's say we want to sort the cars based on their capacity in descending order.

let sortedCars = cars.sort((c1, c2) => (c1.capacity < c2.capacity) ? 1 : (c1.capacity > c2.capacity) ? -1 : 0);
console.log(sortedCars);
// output:
// [
//   {
//     color: 'purple',
//     type: 'minivan',
//     registration: 'Wed Feb 01 2017 00:00:00 GMT+0100 (GMT+01:00)',
//     capacity: 7
//   },
//   {
//     color: 'red',
//     type: 'station wagon',
//     registration: 'Sat Mar 03 2018 01:00:00 GMT+0100 (GMT+01:00)',
//     capacity: 5
//   },
//   ...
// ]

//The Array.sort compares two objects and puts the first object 
//in the second place if the result of the sorting function is positive. 
//So you can look at the sorting function as if it was a question: 
//Should the first object be placed in second place?
//Make sure to always add the case for zero 
//when the compared value of both objects is the same to avoid unnecessary swaps.

//Checking if objects in array fulfill a condition - Array.every, Array.includes
//Array.every and Array.some come handy when we just need to check each
// object for a specific condition.
//Do we have a red cabrio in the list of cars? 
//Are all cars capable of transporting at least 4 people? 
//Or more web-centric: Is there a specific product in the shopping cart?
//You may remember the function Array.includes which is similar to Array.some, 
//but works only for primitive types.
cars.some(car => car.color === "red" && car.type === "cabrio");
// output: true

cars.every(car => car.capacity >= 4);
// output: false