var twoSum = function(nums, target) {
    for(let i = 0; i <= nums.length; i++){
        for(let j = 0; j <= nums.length; j++){
            if(nums[i] + nums[j] == target){
                return [i, j]
            }
        }
    }
};

console.log(twoSum(nums, target))
//twoSum(nums, target)

//pas in the arr and the target
var twoSum = function(nums, target) {
//loop thru nums, each loop
  for (let i = 0; i <= nums.length; i++) {
    for (let j = 1; j <= nums.length; j++) {
     console.log(nums[i] , nums[j])
      }
    }
  
};
//pass in arr and target
var twoSum = function(nums, target) {
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

