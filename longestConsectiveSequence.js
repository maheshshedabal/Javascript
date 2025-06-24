//Given an unsorted array of integers return the longest consecutive elements sequence
//nums=[100, 4, 200, 3, 2,1]
//returns 4 //[1,2,3,4]- is length 4
//nums=[0,3,4,2,6,5,7,8,0,1]
//returns 9 //[0,1,2,3,4,5,6,7,8] is length 9
function longestConsectiveSequence(nums) {

    if (nums.length === 0) return 0;
    if (nums.length === 1) return 1;

    let hashSet = new Set();
    let lcs = 0;
    for (const n of nums) {
        hashSet.add(n);
    }

    for (const n of nums) {
        let num = n;

        if (hashSet.has(num - 1)) {
            continue;
        }

        let currentSeq = 0;
        while (hashSet.has(num++)) {
            currentSeq++;
        }

        lcs = Math.max(lcs, currentSeq);

    }

    return lcs;
    
 }

let res = longestConsectiveSequence([100, 101, 102, 1, 200, 3, 2, 4, 5]);
console.log('longestConsectiveSequence ', res); //5
res = longestConsectiveSequence([0, 3, 4, 2, 6, 5, 7, 8, 0, 1]);
console.log('longestConsectiveSequence ', res); //9
res = longestConsectiveSequence([0, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
console.log('longestConsectiveSequence ', res); //2
