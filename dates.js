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

//Given a date string, dateString, in the format MM/DD/YYYY, 
//find and return the day name for that date. 
//Each day name must be one of the following strings: 
//Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, or Saturday. 
//For example, the day name for the date 12/07/2016 is Wednesday.

function getDayName(dateString) {
    const x= new Date(dateString);
    const dayName = new Date(x)
    
    ring('en-us', {  weekday: 'long' })
    return dayName;
}

