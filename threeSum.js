function threeSum(nums) {
    nums = nums.sort();
    let triplets = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            twoSumSortedArray(nums,i,triplets);                       
        }
    }
    return triplets;
}

function twoSumSortedArray(nums, i, result) {

    let left = i+1;
    let right = nums.length - 1;
    const target = 0;    

    while (left < right) {
        let sum = nums[i]+ nums[left] + nums[right];

        if (sum > target) {
            right--;
        }
        else if (sum < target) {
            left++;
        }
        else {
            result.push([nums[i],nums[left], nums[right]]);
             right--;
             left++;
        }
    }

}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));