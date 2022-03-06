var candles = [4,4,1,0]


function birthdayCakeCandles(candles) {
       let a = Math.max(...candles)
       let ans = candles.filter(x => x === a)
       return ans.length
}

//this one passed all cases but one with array w/100000 els
function birthdayCakeCandle(candles) {
		let ans = 1;
    let i = 1;
		candles.sort().reverse()
   while(candles[i] == candles[0]){
			ans++;
      i++
     }
     console.log(ans)
}
