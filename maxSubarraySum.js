//example for sliding window fixed size
//max sum of subarray of given size k
//arr = [4,2,1,7,8,1,2,8,1,8] K = 3
//[4,2,1] = 7
//[2,1,7] = 9
//[1,7,8] = 16
//[7,8,1] = 16
//[8,1,2] = 11
//[1,2,8] = 11
//[2,8,1] = 11
//[8,1,8] = 17

//return 17
//Time complexity: O(n)
//Space complexity: O(1)
var maxSumOfSubArray = function (arr, k) {

    let maxSum = 0
    let currentSum = 0;

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];
        if (i >= k - 1) {
            maxSum = Math.max(maxSum, currentSum);
            currentSum = currentSum - arr[i - (k - 1)];
        }   
    }
    return maxSum;
};
console.log('maxSumSubArray: ', maxSumOfSubArray([4,2,1,7,8,1,2,8,1,8],3)); 
console.log("maxSumSubArray: ", maxSumOfSubArray([2, 1, 5, 1, 3, 2], 3)); // Output: 9