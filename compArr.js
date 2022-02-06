let a = ["1","2","2","4"];
let b = ["1","2","3","4"];

function compArr(a,b){
	return JSON.stringify(a) == JSON.stringify(b);
}

console.log(compArr(a,b))

let arrOne = [1, 5, 6];
let arrTwo = [1, 6, 5];
let result = false;

if (arrOne.length === arrTwo.length) {
  for (let i = 0; i < arrOne.length; i++) {
    result = arrTwo.indexOf(arrOne[i]) !== -1;

    if (result === false) {
      break;
    }
  }
}

console.log(result); // true

function compArr(a,b){
	let equal = a.length == b.length;
  if(equal && a.every((value, index) => value === b[index])){
  return true
}else{
return false
}
}


console.log(compArr(a,b))



// Warn if overriding existing method
if(Array.prototype.equals)
    console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
}
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});


function isEqual()
  {
   var a = [1, 2, 3, 5];
   var b = [1, 2, 3, 5];
    
    // If length is not equal
    if(a.length!=b.length){
    return "False";
    }else{
     
    // Comparing each element of array
     for(var i=0;i<a.length;i++)
     if(a[i]!=b[i])
      return "False";
      
      return "True";
      
      
    }
  }
  var v = isEqual();
 

//console.log(v)