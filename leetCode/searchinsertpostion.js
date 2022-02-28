const nums = [2, 5];
const target = 1;

// FIRST ONE  BY MYSELF***************
var searchInsert = function (nums, target) {
    let x = nums.indexOf(target)
    if (x !== -1) {
        return x
    } else if (target < nums[0]) {
        return 0
    } for (let i = 0; i < nums.length; i++) {
        if (nums[i] < target && nums[i + 1] > target) {
            return [i + 1]
        }
    }

};
console.log(searchInsert(nums, target))