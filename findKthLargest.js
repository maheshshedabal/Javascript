function findKthLargest(nums, k, arrayList=[]) {
    let largest = Math.max.apply(this, nums);
    arrayList.push(largest);
    if (arrayList.length === k){
        return arrayList.pop();
    }
    return findKthLargest( nums.filter(n => !arrayList.includes(n)), k, arrayList);    
};

console.log("findKthLargest: ", findKthLargest([2, 4, 5, 1, 3, 6],4));
console.log("findKthLargest: ", findKthLargest([2, 3, 5, 1, 3, 2],4));
console.log("findKthLargest: ", findKthLargest([3,2,3,1,2,4,5,5,6],4));