//given an array of integers nums should return an array with product of array except self 
//Ex: [1,2,3,4]
//returns [24,12,8,6]

//Approach 1
//Time complexity: O(nlogn)
//Space complexity: O(n)
function productExceptSelf1(nums) {
    const res = [];
    const prod = nums.reduce((acc, c) => acc * c, 1);
    for (const el of nums) {
        res.push(prod / el);
    }
    return res;
}

//Approach 2
//Time complexity: O(n)
//Space complexity: O(3n) ~ O(n)
function productExceptSelf2(nums) {
    const res = [];
    const pre = [];
    const post = [];

    for (let i = 0; i < nums.length; i++) {
        pre.push((nums[i - 1] || 1) * (pre[i - 1] || 1));
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        const c = (nums[i + 1] || 1) * (post[i + 1] || 1);
        post[i] = c;
    }

    for (let i = 0; i < nums.length; i++) {
        res.push(pre[i] * post[i])
    }

    return res;
}

//Approach 3
//Time complexity: O(n)
//Space complexity: O(2n) ~ O(n)
function productExceptSelf3(nums) {
    const res = [];
    let pre = 1, post = 1;

    for (let i = 0; i < nums.length; i++) {
        res[i] = pre;
        pre = pre * nums[i];
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        res[i] = post * res[i];
        post = post * nums[i]
    }

    return res;
}


console.log('productExceptSelf: ', productExceptSelf1([1, 2, 3, 4]))
console.log('productExceptSelf: ', productExceptSelf2([1, 2, 3, 4]))
console.log('productExceptSelf: ', productExceptSelf3([1, 2, 3, 4]))