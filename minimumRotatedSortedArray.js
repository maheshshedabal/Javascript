//153. Find Minimum in Rotated Sorted Array
//Refs: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/


//arr=[1,2,3,4,5,6,7]
//arr=[7,1,2,3,4,5,6] rotated 1 times
//arr=[6,7,1,2,3,4,5] roted 2 times



//minimumRotatedSortedArray

var minRotatedSortedArray = function (nums) {
    debugger
 let left = 0, right = nums.length - 1;

    if (nums.length === 1) return nums[0];

    while (left < right) {

        let mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[right]) {
            left = mid + 1;
        }
        else {
            right = mid;
        }
    }
    return nums[left];
}

console.log(minRotatedSortedArray([3,1,2]))