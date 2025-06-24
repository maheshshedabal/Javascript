//example for sliding window
//Given an array of integers [2, 1, 5, 1, 3, 2] and size k, find the maximum sum of sub array of size k
//Time complexity: O(n)
//Space complexity: O(1)
function maxSumSubArray(arr, k) {

    if(arr.length < k) 
        return 0;
    
    let total = 0;
    let sum = 0;

    for (let i = 0; i < k; i++) {
        sum += arr[i] 
    }

    total = sum;

    for (let i = k; i < arr.length; i++) {
        sum += arr[i] - arr[i - k];
        total = Math.max(total, sum);
    }

    return total;

}

const arr = [2, 1, 5, 1, 3, 2];
const k = 3;
console.log("maxSumSubArray: ", maxSumSubArray(arr, k)); // Output: 9