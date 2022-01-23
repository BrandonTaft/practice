// A callback function is a function that is passed as an argument 
// to another function, to be “called back” at a later time.
// A function that accepts other functions as arguments is called higher-order
// which contains the logic for when the callback function gets executed.
// It’s the combination of these two that allow us to extend our functionality.


//createQuote is the higher-order function,
//which accepts two arguments, the second one being the callback
//logQuote function is being used to pass in as our callback function
function createQuote(quote, callback){ 
    var myQuote =  quote;
    callback(myQuote); // 2
  }
  
  function logQuote(quote){
    console.log(quote);
  }
  
  createQuote("eat your vegetables!", logQuote); // 1
  
  // Result in console: 
  // Like I always say, eat your vegetables!
  