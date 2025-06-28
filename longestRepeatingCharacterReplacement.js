//Refs: https://leetcode.com/problems/longest-repeating-character-replacement/

//Sliding window example
//Time complexity: O(n)
//Space complexity: O(26)~ O(n)

var characterReplacement = function(str, k) {

    let left = 0;
    //create an array to store the chacacters count at index position
    //like a in 0 index, b in 1 index ....... z in 25 index
    //later use it to update the repetation count for each character in given string
    let occurance = new Array(26).fill(0);
    let maxOccurance = 0; 
    let res = 0;

    for (let right = 0; right < str.length; right++){
        const index = str[right].charCodeAt(0) - 'A'.charCodeAt(0);
        occurance[index]++;
        //update the character count at index, index is calculates using charCodeAt(0) function
        maxOccurance = Math.max(maxOccurance, occurance[index]);
        //formula: length - maxoccurance > k
        //length = right - left + 1(window size)
        //increment left pointer and decrement the count in array for that character        
        while (right - left + 1 - maxOccurance > k) {       
            const leftIndex = str[left].charCodeAt(0) - 'A'.charCodeAt(0);    
            occurance[leftIndex]--;
            left++;
        }
        //formula: length-maxoccurance < k
        //increment right pointer
        //right++ in for loop
        res = Math.max(res, right - left + 1);          
    }

    return res;
};

var res = characterReplacement("ABAB", 0);
console.log(res); //1

var res = characterReplacement("ABAB", 2); //AAAA
console.log(res); //4

var res = characterReplacement("AABABBA", 1); //AAAABBA
console.log(res); //4