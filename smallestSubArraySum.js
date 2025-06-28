//Given arr and target find the smallest size of subarray(window) which adds up to target
//[4] < 8; add new item(2) to get sum
//[4,2] < 8; add new item(2) to get sum
//[4,2,2] >= 8; capture size: 3, remove item(4) from start, 
//[2,2] < 8; add new item(1) to get sum
//[2,2,1] < 8; still less than 8, add new item(3)
//[2,2,1,3] >=8; capture size: 4, remove item(2) from start
//[2,1,3] < 8; add new item(1) to get sum
//[2,1,3,1] < 8; add new item(6) to get sum
//[2,1,3,1,2] >= 8; capture size: 5, remove item(2) from start
//[1,3,1,2] < 8; add new item(6) to get sum
//[3,1,2,6] >= 8; capture size: 4, remove item(3) from start
//[1,2,6] >= 8; capture size: 3 ,remove item(1) from start
//[2,6] >= 8; capture size: 2 ,remove item(1) from start
//[6] < 8; add new item(1) 
//[6,1] < 8; no item to add
//return  min captured size(2)

//Time complexity:O(n)
//Space complexity:(1)
var smallestSubArraySum = function (arr, target) {

    let maxSize = Number.MAX_SAFE_INTEGER;
    let currentSum = 0;
    let start = 0;
    for (let end = 0; end < arr.length; end++){
        currentSum += arr[end];

        while (currentSum >= target) {
            let size = end - start + 1;
            maxSize = Math.min(maxSize, size);
            currentSum -= arr[start];
            start++;
        }
    }

    return maxSize;
    
}

console.log("smallestSubArraySum: ",smallestSubArraySum([4, 2, 2, 1, 3, 1, 2, 6, 1], 8)); //2