//Ref: https://leetcode.com/problems/container-with-most-water/description/
//Container With Most Water
//You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the 
// ith line are (i, 0) and (i, height[i]).
//Find two lines that together with the x-axis form a container, such that the container contains the most water.
//Return the maximum amount of water a container can store.

//Time complexity: O(n^2);
//Space complixity: O(1);
function containerWithMostWater1(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++){
        for (let j = i; j < arr.length; j++){
            let width = Math.abs(j - i);
            let height = Math.min(arr[j], arr[i]);
            let area = width * height;

            max = Math.max(max, area);
        }
    }

    return max;
}

//Time complexity: O(n);
//Space complixity: O(1);
function containerWithMostWater2(arr) {
    let max = 0;
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let width = right - left;
        let heigth = Math.min(arr[left], arr[right]);
        let area = width * heigth;
        max = Math.max(max, area);

        if (arr[left] < arr[right]) {
            left++;
        }
        else {
            right--;
        }

    }

    return max;
}

const res = containerWithMostWater1([1, 8, 6, 2, 5, 4, 8, 3, 7]);
console.log("containerWithMostWater1: ",res); //49

res = containerWithMostWater2([1, 8, 6, 2, 5, 4, 8, 3, 7]);
console.log("containerWithMostWater2: ",res); //49