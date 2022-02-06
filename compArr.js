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