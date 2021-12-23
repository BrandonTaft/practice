const clumsysquare = num =>{
    let result = 0;
    for (let i = 1; i <= num; i++) {
      for (let j = 1; j <= num; j++) {
        result ++;
      }
    }
    return result;
  }
  console.log(clumsysquare(4));
  console.log(clumsysquare(10));
  console.log(clumsysquare(12));
  console.log(clumsysquare(17));
  console.log(clumsysquare(20));