//567. Permutation in String
//Refs: https://leetcode.com/problems/permutation-in-string/description/

//Time complexity:O(n)
//Space complexity: O(1)
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {

    //check if s1 length less than 21
    if (s1.length > s2.length) {
        return false;
    }

    //two array's to store the map of s1 and s2
    let s1arr = new Array(26).fill(0); //fixed
    let s2arr = new Array(26).fill(0);

    //store the ascii value of a
    let a = 'a'.charCodeAt(0);

    //create hashmap for s1 along with s2
    for (let i = 0; i < s1.length; i++){
        s1arr[s1[i].charCodeAt(0) - a]++;
        s2arr[s2[i].charCodeAt(0) - a]++;
    }

    //Check if both array matches
    if(matchArray(s1arr,s2arr)){
        return true;
    }

    for (let i = 0; i < s2.length - s1.length; i++){
        let previousIndex = s2[i].charCodeAt(0) - a;
        //remove/decrement previous char frequency from s2arr
        s2arr[previousIndex]--;
        //find next element index
        nextIndex = s2[s1.length + i].charCodeAt(0) - a;
        //increment frequency from s2arr
        s2arr[nextIndex]++ ;
        //if equal return true
        if(matchArray(s1arr,s2arr)){
            return true;
        }
    }
    //no permutations are found return false
    return false;
};

function matchArray(arr1, arr2){
    for(let i=0; i< 26; i++){
        if(arr1[i]!==arr2[i]){
            return false;
        }        
    }
    return true;
}

console.log('checkInclusion: ', checkInclusion('ab','ab')); 