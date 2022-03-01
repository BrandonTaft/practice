const n = 5

var countBits = function(n) {
const ans = [];
  ans.length = n + 1;
    for(let i = 0; i < ans.length; i++){
    ans[i] = i.toString(2)
    }
    for (var k = 0; k < ans.length; k++) {
    		let bit = ans[k];
        let x = [];
        let a = 0;
        for(j=0; j < bit.length; j++){
        if(bit[j] == "1"){ 
    a++
   }
        }
        ans[k] = a
    }
    return ans
};

console.log(countBits(n))
