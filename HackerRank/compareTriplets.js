a = [1, 2, 3];
b = [3, 2, 1];

function compareTriplets(a, b) {
    let aScore = 0;
    let bScore = 0;
    let ans = [];
        for(let i = 0; i < a.length; i++){
      if(a[i] > b[i])aScore++
      else if(a[i] < b[i]) bScore++
      }
     ans.push(aScore, bScore)
    return ans
    }
    
    console.log(compareTriplets(a, b))

function compareTriplets(a, b) {
	 let aScore = 0;
	 let bScore = 0;
	 let ans = [];
   const x = a.concat(b);
   for(let i = 0; i < a.length; i++){
   if(x[i] > x[i + 3]){
   aScore++
   }else if(x[i] < x[i + 3]){
   bScore++
   }
   }
   ans.push(aScore,bScore)
	 return ans 

}