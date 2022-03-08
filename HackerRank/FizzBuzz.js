function fizzBuzz(n) {
    let  i = 1;
       //for(let i = 0; i < n.length; i++){
       //console.log(n[i])
       //}
       while(i <= n){
       if(i % 5 == 0 && i % 3 == 0){
       console.log("FizzBuzz")
       i++
       }else if(i % 5 == 0){
       console.log("Buzz")
       i++
       }else if(i % 3 == 0){
       console.log("Fizz")
       i++
       }else{
       console.log(i)
       i++
       }
       }