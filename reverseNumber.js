
//Time complexity:O(n)
//space complexity:O(1)
var numReverse = function (num) {
    let isNegative = num < 0;
    let result = 0;
    num = Math.abs(num);
    while (num > 0) {
        let digit = num % 10;
        result = result * 10 + digit;
        num = Math.floor(num / 10);
    }
    return isNegative ? -result : result;

}

console.log(numReverse(-123))