var nums= ['zoo','cats','rock','pencil','cart']
let results =  nums.sort((a, b) => a - b)
console.log(results)

var numbers= ['2','6','5','6','3']
let resultsNum =  numbers.sort((a, b) => a - b).filter((el, index, array) => index === array.indexOf(el));


console.log(numbers)
console.log(resultsNum)
console.log(resultsNum[resultsNum.length - 2])

var compnumbers= ['5','1000','9','2','3']
let resultsCompNum =  compnumbers.sort()
console.log(resultsCompNum)

