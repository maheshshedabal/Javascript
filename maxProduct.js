//Refs: https://leetcode.com/problems/maximum-product-subarray/
//Dunamic poniters with two pointers

//for every value we are going to compare with 3 value self, min and max

//arr = [5,3,1,-2,0,-5,8,-3]

//let current = 5 
//arr[0]
//min: 5 
//max:5 
//ans: 5

//let current = arr[1] = 3
//calculate 3 values
//(3,3*min, 3*max)=(3,15,15)
//update the min and max and ans
//min: 3
//max: 15
//ans:15

//let current = 1
//calculate 3 values
//(1,1*min, 1*max)=(1,3,15)
//update the min and max and ans
//min: 1
//max: 15
//ans:15

//let current = -2
//calculate 3 values
//(-2,-2*min, -2*max)=(-2,-2,-30)
//update the min and max and ans
//min: -30
//max: -2
//ans:15

//let current = 0
//calculate 3 values
//(0,0*min, 0*max)=(0,0,0)
//update the min and max and ans
//min: 0
//max: 0
//ans:15

//let current = -5
//calculate 3 values
//(-5,-5*min, -5*max)=(-5,0,0)
//update the min and max and ans
//min: -5
//max: 0
//ans:15

//let current = 8
//calculate 3 values
//(8,8*min, 8*max)=(8,-40,0)
//update the min and max and ans
//min: -40
//max: 8
//ans:15

//let current = -3
//calculate 3 values
//(-3,-3*min, -3*max)=(-3,120,-24)
//update the min and max and ans
//min: -24
//max: 120
//ans:120

//return 120


//Time complexity: O(n)
//Space complexity: O(1)
var maxProduct = function (nums) {

    if (nums.legth <= 1) {
        return nums[0] || 0;
    }

    let min = nums[0];
    let max = nums[0];
    let ans = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let curr = nums[i];
        let cmin = nums[i] * min;
        let cmax = nums[i] * max;

        min = Math.min(curr, cmin, cmax);
        max = Math.max(curr, cmin, cmax);
        ans = Math.max(ans, max);

    }
    return ans;
};

console.log("maxProduct: ", maxProduct([5, 3, 1, -2, 0, -5, 8, -3]));