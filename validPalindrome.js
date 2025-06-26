
//Time complexity: O(n)
//Space complexity: O(1)
function validPalindrome1(str) {
    let nStr = str.replace(/[^a-zA-Z0-9 ]/g, '');
    return nStr === nStr.split('').reverse().join('');
}


//Time compliexity: O(n/2);
//Space complexity: O(1)
function validPalindrome2(str) {
    let nStr = str.replace(/[^a-zA-Z0-9 ]/g, '');

    const n = Math.floor(nStr.length / 2)
    for (let i = 0; i < n; i++){
        if (nStr[i] !== nStr[nStr.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

let res = validPalindrome1('mad;a m!!');
console.log('validPalindrome: ',res);
res = validPalindrome2('mad;a m!!');
console.log('validPalindrome: ', res);