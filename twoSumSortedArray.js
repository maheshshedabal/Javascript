//given sorted array of integers 'nums' and an integer 'target' return indices of the two numbers such that they add up to target
//Ex: nums = [2, 3, 7, 15] target=9
//returns [0,2]

function twoSumSortedArray(nums, target) {

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        if (nums[left] + nums[right] > target) {
            right--;
        }
        else if (nums[left] + nums[right] < target) {
            left++;
        }
        else {
            return [left, right];
        }
    }

    return null;
    
}

let res = twoSumSortedArray([2, 3, 7, 15], 9);
console.log(res);
