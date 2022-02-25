const nums = [3, 2, 4, 15];
const target = 18

function twoSum(nums, target) {
    for (i = 0; i < nums.length; i++) {
        for (j = 0; j < nums.length; j++) {
            if (nums[i] + nums[j] == target && i != j) {

                return [i, j]
            }
        }
    }
}
console.log(twoSum(nums, target))


//pass in arr and target
var twoSums = function (nums, target) {
    //loop thru each number in array
    for (let index = 0; index < nums.length; index++) {
        //define diff is target minus each number    
        const diff = target - nums[index];
        //define diffIndex is index of diff(target minus number)     
        const diffIndex = nums.indexOf(diff);
        //if  
        if (diffIndex !== -1 && diffIndex !== index) {
            return [index, diffIndex];
        }
    }
};

console.log(twoSums(nums, target))

var twoSumss = function(nums, target) {
    let mm=new Map();
    for(let i=0;i<nums.length;i++){
        mm.set(nums[i],i);
    }
    let diff=0;
    let j;
    for(let i=0;i<nums.length;i++){
        diff=target-nums[i];
        if(mm.has(diff) && i!=mm.get(diff)){
           j=mm.get(diff);
            if(j>i){
                return [i,j];
            }else{
               return [j,i];
            }
        }
    }
};



function getSum(nums, target){
//loops thru each number and 
//sets diff as target minus that number
for(i = 0; i < nums.length; i++){
let diff = target - nums[i] 
//then takes the answer(diff) and sees if it has an index
// if it does that is the answer(nums[i] 
//and the index of the difference)
//if the # u get from target - nums[I] is in the array
//indexOf will find it and give u its index
//if its not in the array it gives you -1
//so if index of (diffindex) is not -1 and not the same 
//then it has to be our answer
let diffIndex = nums.indexOf(diff);
if (diffIndex !== -1 && diffIndex !== i) {
            return [i, diffIndex];
        }

}
}


console.log(nums.indexOf(5))
//console.log(getSum(nums, target))




var twoSum = function(nums, target) {
    for (let index = 0; index < nums.length; index++) {
        const diff = target - nums[index];
        const diffIndex = nums.indexOf(diff);
        // "diffIndex !== index" takes care of same index not being reused
        if (diffIndex !== -1 && diffIndex !== index) {
            return [index, diffIndex];
        }
    }
};



console.log(twoSum(nums,target))




function getSum(nums, target) {
    for (i = 0; i < nums.length; i++) {
        for (j = 0; j < nums.length; j++) {
            if (nums[i] + nums[j] == target && i != j) {
                return [i, j]
            }
        }
    }
}






var twoSum = function (nums, target) {
    for (let i = 0; i <= nums.length; i++) {
        for (let j = 0; j <= nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j]
            }
        }
    }
};

console.log(twoSum(nums, target))



