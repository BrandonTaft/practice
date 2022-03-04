const nums = [1, 2, 3, 8];

var numberOfArithmeticSlices = function (nums) {
    let x = [];
    for (i = 0; i < nums.length - 1; i++) {
        x.push(nums[i + 1] - nums[i])
    }
    let y = 0
    for (j = 1; j < x.length; j++) {
        if (x[j] == x[0]) {
            y++
        }
    } if (y == x.length - 1) {
        console.log("Its Arithmetic")
    } else {
        console.log("Its Not Arithmetic")
    }
};
numberOfArithmeticSlices(nums)

const nums = [1, 2, 3, 4, 5,6];

var numberOfArithmeticSlices = function(nums) {
    let count = 0, diff, ans = 0
    for (let i = 1; i < nums.length; i++) {
        let newDiff = nums[i] - nums[i-1]
        
       if (newDiff === diff) ans += count++
       
       
        else diff = newDiff, count = 1
    }
   return ans
};