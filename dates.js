//find whole date and time for today
const today= new Date()
console.log("Today's date and time is " + today)

//get digit representing today
const theDay= today.getDay()
console.log("Today is " + theDay)

//get todays digit and display as the name of the day
console.log("Today is " + new Date().toLocaleString('en-us', {  weekday: 'long' }));

//set variable for date you want to find day for
//****DATE MUST BE IN QUOTES****//
const w= new Date("08/14/1982");
//prints the index of the day on the date 0-6 sunday is 0 wed is 3
console.log(w.getDay())


//set variable for date you want to find day for
const x= new Date("08/15/1982");

//prints the name of that day 
console.log(new Date(x).toLocaleString('en-us', {  weekday: 'long' }));
