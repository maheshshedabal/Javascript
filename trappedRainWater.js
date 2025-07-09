//Ref: https://leetcode.com/problems/trapping-rain-water/description/
//Trapping Rain Water
//Given n non-negative integers representing an elevation map where the width of each bar is 1, 
// compute how much water it can trap after raining.
//Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
//Output: 6
//Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. 
// In this case, 6 units of rain water (blue section) are being trapped.
//Example 2:
//Input: height = [4,2,0,3,2,5]
//Output: 9

//BF
//Time complexity: O(n^2)
//Space complexity: O(n)
function trappingRainWater1(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        //find maximum in left height
        let lMax = i < 1 ? 0 : findMax(arr.slice(0, i));
        //finf maximum in right hieght
        let rMax = findMax(arr.slice(i + 1));

        let cur = Math.min(lMax, rMax) - arr[i]

        if (cur > 0) {
            sum += cur;
        }         
    }
    return sum;    
}

function findMax(arr){
    return !arr? 0: Math.max.apply(null, arr);
}

//Approach2
//find left max height lMax
//find right max height rMax
//use formula min(lMax,rMax)-currentHeight
//Time complexity: O(3n) ~ O(n)
//Space Complexity: O(3n) ~ O(n)
function trappingRainWater2(arr) {
    let lMax = [];
    let rMax = new Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
        lMax[i] = Math.max(arr[i], (lMax[i - 1] || 0));
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        rMax[i] = Math.max(arr[i], (rMax[i + 1] || 0));
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let res = Math.min(lMax[i], rMax[i]) - arr[i];
        if (res > 0) {
            sum += res;
        }
    }
    return sum;
}

//Approach3
//calculate the lMax and rMax dynamically, assuming first as and last as max later update the max value 
// using Math.max(lmax, arr[left]) and Math.max(rMax, arr[right])
//Time complexity: O(n)
//Space Complexity: O(1)
function trappingRainWater3(arr) {
    let sum = 0;
    let left = 0;
    let right = arr.length - 1;
    let lMax = arr[0]; //make first height as default max for left array
    let rmax = arr[right];//make last height as default max for right array
    while (left < right) {
        //start with array whichever is small
        if (arr[left] < arr[right]) {
            //update the max 
            lMax = Math.max(lMax, arr[left]);
            //check if we can store the water
            //let max height - currentHeight
            if (lMax - arr[left] > 0) {
                sum = sum + lMax - arr[left];
            }
            //move towards right
            left++;        
        }
        else {
            //update max for right array
            rmax = Math.max(rmax, arr[right]);
            //check if we can store water
            if (rmax - arr[right] > 0) {
                sum = sum + rmax - arr[right];
            }
            //move towards left
            right--;
       }
        
    }

    return sum;
}


console.log("trappingRainWater1: ",trappingRainWater1([4,2,0,3,2,5])); //9
console.log("trappingRainWater2: ",trappingRainWater2([0,1,0,2,1,0,1,3,2,1,2,1])); //6
console.log("trappingRainWater3: ",trappingRainWater3([4,2,0,3,2,5]))