//Refs: https://leetcode.com/problems/contains-duplicate-ii/description/

//Time complexity: O(n);
//Space Complexity: O(k)
var containsNearbyDuplicate = function(nums, k) {

    let set = new Set();
    for(let i=0; i< nums.length; ++i){
        if(set.has(nums[i])){
            return true;
        }
        set.add(nums[i]);

        if(set.size > k){
            set.delete(nums[i-k])
        }
    }

    return false;
    
};

console.log("containsNearbyDuplicate: ",containsNearbyDuplicate([1,2,3,1,2,3]), 2); //false
console.log("containsNearbyDuplicate: ",containsNearbyDuplicate([1,2,3,1,2,3]), 3); //false
//creates window pf size 2
//subarrays created are [1,2] [2,3] [3,1] [1,2] [2,3]
// There are no duplicates in any subarray since retruns false

//creates window pf size 3
//subarrays created are [1,2,3] [2,3,1] [3,1,2] [1,2,3]
// There are no duplicates in any subarray since retruns false
