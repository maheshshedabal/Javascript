
//example for sliding window variable size
//find either size or maxSum
//Refs: https://leetcode.com/problems/maximum-subarray/description/
//Refs: https://www.geeksforgeeks.org/dsa/largest-sum-contiguous-subarray/

//Time complexity: O(n^2)
//Space complexity:O(1);
function maxSubarraySum(arr) {
    let res = arr[0];
  
    // Outer loop for starting point of subarray
    for (let i = 0; i < arr.length; i++) {
        let currSum = 0;
      
        // Inner loop for ending point of subarray
        for (let j = i; j < arr.length; j++) {
            currSum = currSum + arr[j];
          
            // Update res if currSum is greater than res
            res = Math.max(res, currSum);
        }
    }
    return res;
}

const arr = [2, 3, -8, 7, -1, 2, 3];
console.log(maxSubarraySum(arr));


//Time complexity: O(n)
//Space complexity:O(1);
var maxSubArray = function (arr) {
   // Stores the result (maximum sum found so far)    
    let res = arr[0];
    
    // Maximum sum of subarray ending at current position
    let maxEnding = arr[0];

    for (let i = 1; i < arr.length; i++) {
        
        // Either extend the previous subarray or start 
        // new from current element
        maxEnding = Math.max(maxEnding + arr[i], arr[i]);
        
        // Update result if the new subarray sum is larger
        res = Math.max(res, maxEnding);
    }
    return res;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));