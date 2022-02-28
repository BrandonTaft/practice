const nums = [3, 2, 2, 3]
const val = 3;

var removeElement = function (nums, val) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[j++] = nums[i];
        }
    }

    //nums.length = j; // Chop the surplus values - not needed for LC submission
    return j;
};

function removeElement(nums, val) {
    const k = [];
    for (i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            k.push(nums[i]);

        }
    }
    return k;
}

var removeElement = (nums, val) => {
    for (i = 0; i < nums.length; i++) {
        if (nums[i] == val) {
            delete nums[i];
        }
    }
    return nums.sort();
};
