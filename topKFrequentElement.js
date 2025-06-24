//to display the top k elements in the given array
//Ex: [1,1,1,2,2,3] k=2
//returns [1,2]

//Time complexity of O(nlogn) as sort is used
//space complexity of O(n)
function topKFrequent(arr, k) {
    let frequency = {};

    for (let el of arr) {
        frequency[el] = (frequency[el] || 0) + 1;
    }

    let sortedArray = Object.keys(frequency).sort((a, b) => frequency[b] - frequency[a]);

    return sortedArray.slice(0, k).map(Number);

}

//Time complexity of O(n)
//space complexity of O(n)
function topKFrequentE(nums, k) {
  const freqMap = {};

  // Step 1: Build frequency map
  for (let num of nums) {
    freqMap[num] = (freqMap[num] || 0) + 1;
  }

  // Step 2: Create buckets where index = frequency
  const buckets = Array(nums.length + 1).fill().map(() => []);

  for (let num in freqMap) {
    const freq = freqMap[num];
    buckets[freq].push(Number(num));
  }

  // Step 3: Collect top k elements from buckets (starting from the highest frequency)
  const result = [];
  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    for (let num of buckets[i]) {
      result.push(num);
      if (result.length === k) break;
    }
  }

  return result;
}

console.log('topKFrequentElement: ',topKFrequent([1, 1, 1, 2, 2, 3,3,3,3], 2)); 
console.log('topKFrequentElement: ',topKFrequentE([1, 1, 1, 2, 2, 3,3,3,3], 2)); 