let n = 6

function staircase(n) {
    for (let i = 1; i <= n; i++) {
    console.log(' '.repeat(n-i)+ '#'.repeat(i))
    }
    }


function staircase(n) {
    let i = 1;
    let j = 0;
    let x = "#";
    let y = "\u00A0";
    let ans = ""
    while (i < n + 1) {
    		//console.log(y.repeat(Math.abs(i - n)) + x.repeat(i))
        //ans += y.repeat(Math.abs(i - n)) + x.repeat(i)
       ans += y.repeat(Math.abs(i - n)) + x.repeat(i) + "\n"
        //console.log(y.repeat(Math.abs(i - n)) + x.repeat(i));
      i++
      
    }
    
    console.log(ans)
    
    }
    
   // console.log(staircase(n))
   staircase(n)
   
   let test = "\u00A0 \u00A0 \u00A0 \u00A0 #"
   
   //console.log(test)