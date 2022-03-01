
const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
//MODIFY ARRAY
var removeDuplicates = function (nums) {
    let k = [];
    for (let i = 0; i < nums.length; i++) {
        if (k.includes(nums[i]) == false) {
            k.push(nums[i])
        }
    }
    // nums.unshift.apply(nums, k)
    nums.unshift(...k)
    nums.length = k.length
    console.log(nums)
    return nums.length
};


//CREATES NEW ARRAY - NOT ALLOWED IN LEET CODE
var removeDuplicates = function (nums) {
    let k = [];
    for (let i = 0; i < nums.length; i++) {
        if (k.includes(nums[i]) == false) {
            k.push(nums[i])
        }
    }
    return k
};


//BEST WAY IS TO MOVE UNIQUE NUMBERS TO FRONT AND CHOP OFF END

var removeDuplicates = function (nums) {
    let uniqueCursor = 1;

    for (let i = 1; i < nums.length; i++) {
        // Find unique values
        if (nums[i] !== nums[i - 1]) {
            console.log(nums[i])	// Move unique values to follow the last unique valhttps://jsfiddle.net/#ue found
            nums[uniqueCursor] = nums[i];

            // Move the unique value cursor onward
            uniqueCursor++;
        }
    }

    nums.length = uniqueCursor; // Chop the surplus values - not needed for LC submission
    console.log(nums)
    return uniqueCursor;
};