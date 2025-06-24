function secondLargestInArray(arr) {

    if(arr.legth < 2) return null;

    let max1 = 0;
    let max2 = 0;

    for (let a of arr) {
        if (a > max1) {
            max2 = max1;
            max1 = a;
        }
        else if (a > max2 && a < max1) {
            max2 = a;
        }
    }
    return max2;
}

console.log('secondLargestInArray: ',secondLargestInArray([1, 7, 4, 6, 5, 8]))