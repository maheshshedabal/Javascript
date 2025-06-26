//Refs: https://leetcode.com/problems/two-sum/

//given array of integers 'nums' and an integer 'target' return indices of the two numbers such that they add up to target
//Ex: nums = [15,2,7,3] target=9
//returns [1,2]

//time complexity: O(n) time complexity is O(n) because we are looping only once 
//space complexity: O(n) created new hashMap of max size n

function twoSum(nums, target) {
    let m = new Map();
    for (let i = 0; i < nums.length; i++) {
        //get the reminder
        let rem = target - nums[i];
        if (rem > 0) {
            //if reminder is already present get the index stored as value against num[i]
            if (m.has(rem)) {
                const ind = m.get(rem);
                //return index which adds to sum
                return [ind, i]; 
                //retuns numbers which adds to sum
                //return [nums[ind], nums[i]]
            }
            //if reminder is not present add to map with key as nums[i] and value as index
            //Ex: { 1->0, 2->1, 7->3, 3->4 }
            m.set(nums[i], i);
        }
    }
    //return empty is no solution is found
    return [];
}



console.log(twoSum([1, 2, 7, 3], 9));

console.log('twoSum: ',twoSum([1, 2, 7, 3], 5))
