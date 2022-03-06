let arr2= [1,3,5,7,9,10];
let arr =[7,69,2,221,8974]
function miniMaxSum(arr) {
arr.sort(function(a,b){return a-b});
let min = 0;
let max = 0;
let ans = [];
    for(let i = 0; i < 4; i++){
   		min += arr[i]
       }
       for(let j = arr.length - 4;j < arr.length; j++){
   		max+=arr[j]
       }
    console.log(min, max)
    

}

console.log(miniMaxSum(arr))
