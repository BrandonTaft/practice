const nums = [1, 3, 6, 4, 1, 2];
//const nums = [3, 2, 4,];
const target = 6;

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
//twoSum(nums, target)

//pas in the arr and the target
var twoSum = function (nums, target) {
    //loop thru nums, each loop
    for (let i = 0; i <= nums.length; i++) {
        for (let j = 1; j <= nums.length; j++) {
            console.log(nums[i], nums[j])
        }
    }

};
//pass in arr and target
var twoSum = function (nums, target) {
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

