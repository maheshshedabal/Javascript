//Ways to get a character outside ASCII:
//1. Using String.fromCharCode() with a value > 127:
const char = String.fromCharCode(200);  // Example: È (Latin Capital Letter E with Grave)
console.log(char); // Output: È

function encode(strs) {
    return strs.map(s => s.split(' ').join('#')).join(':');
}

function decode(str) {
    let words = str.split(':');
    return words.map(s => s.split('#').join(' '));
}


var res = encode(['hello world', 'hi fi']);
console.log(res);

const original = decode(res)
console.log(original)