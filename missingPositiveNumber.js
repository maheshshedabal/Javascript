//Given an array arr find the missing first positive number
//Ex: [0, -2, 1, 3, 5, 2]
//retuns 4

//Time complexity O(nlogn)
function missingPositiveNumber(arr) {
    arr = arr.filter(a => a > 0).sort();

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != i + 1) {
            return i + 1;
        }
    }

    return arr.length + 1;

}

console.log('missingPositiveNumber: ', missingPositiveNumber([5, 3, 1, 2]));
console.log('missingPositiveNumber: ', missingPositiveNumber([0, -2, 7, 8, 9]));