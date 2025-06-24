//Given and array of strings str, group the anagrams togeather. You can return the answers in ay order
//Ex: ['eat', 'ate', 'tan', 'tea', 'bat', 'nat']
//retrns [['eat', 'ate', 'tea'],['tan', 'nat'],['bat']]

//Time complexity: O(n*k) where k is length of each string elements
//Space complexity: )(n*k)

function groupAnagrams(strs) {
  let hashMap = {};

  for (let word of strs) {
    const count = new Array(26).fill(0);

    for (let c of word) {
      count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    const key = count.join('#');

    if (!hashMap[key]) {
      hashMap[key] = [];
    }

    hashMap[key].push(word)

  }

  return Object.values(hashMap);
}

//time complexity of O(n log n) because of sort 
//Space complexity: )(n*k)
function groupAnagramsWithBuiltInFn(strs) {
  let hashMap = {};

  for (let word of strs) {
    let key = word.split('').sort().join('#');

    if (!hashMap[key]) {
      hashMap[key] = [];
    }

    hashMap[key].push(word)
  }
  return Object.values(hashMap);
}

const strs = ['eat', 'ate', 'tan', 'tea', 'bat', 'nat'];
console.log('Group Anagram: ',groupAnagrams(strs));
console.log('Group Anagram ',groupAnagramsWithBuiltInFn(strs));