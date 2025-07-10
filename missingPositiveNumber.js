//Given an array arr find the missing first positive number
//Ex: [0, -2, 1, 3, 5, 2]
//retuns 4
//Ex: [0, -2, 7, 8, 9]
//returns 1

//All posivite numners start from 1,2,3...
//index starts from 0
//so add 1 to make it look like natunal number 1,2,3...
//keep checking if current anumber and index+1 are equal
//once not equal return index+1  

//this solution only works for non duplicate array's
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