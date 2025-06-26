//https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
//3. Longest Substring Without Repeating Characters

//Time complexity: O(n);
//Sapce complexity: O(n);
function lengthOfLongestSubstring(s) {
    let maxLength = 0;
    let left = 0;
    let set = new Set();
    for(let right = 0; right<s.length; right++){

        while(set.has(s[right])){
            set.delete(s[left]);
            left++;
        }

        set.add(s[right]);
        maxLength = Math.max(maxLength, right-left+1);
    }
    return maxLength;
    
}

console.log(lengthOfLongestSubstring('abcaabcdab')); //4