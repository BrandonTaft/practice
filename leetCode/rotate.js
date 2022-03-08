var rotate = function(nums, k) {
    let x = nums.length
for(let i = 0; i < k; i++){
nums.unshift(nums[x - 1])

}
 nums.splice(-k, k)

return nums
};