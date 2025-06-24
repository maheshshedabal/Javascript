//Given two string s and t, return true if t is anagram of s and false otherwise
//B.F O(n)^2

//time complexity: O(n log n) due to sorting
function isAnagram(s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("");
}

//time complexity: O(n)
function isAnagramE(s, t) {
  if (s.length !== t.length) return false;

  const count = {};

  //loop to get char count
  for(let char of s){
    count[char]=(count[char] || 0) + 1;
  }

  //loop to check if s is present in t
  for(let char of t){
    //if char count is 0 return false
    if(!count[char]){
        return false;
    }
    //if fount decrement the counter
    count[char]--;
  }

  //all chars are matching
  return true;
}

const s = 'aacc';
const t = 'ccac';
console.log('isAnagram: ' +isAnagram(s,t));
console.log('isAnagram: ' +isAnagramE(s,t));

