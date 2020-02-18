let num = 1234;
console.log(num.toString());  // this prints the number as a string
// console.log(num);          // this prints the number as a number

console.log('-------');

let string = '1234';
console.log(parseInt(string));  // string to a number

console.log('-------');

let str = 'apples';
// let array = [];
let array = str.split('');      // this pushed each character in the word into an array
console.log(array);

console.log('-------');

let arr = ['one', '--two--', 'three'];
console.log(arr.toString());    // turns elements of array into one string

console.log('--------');

arr = ['one', '|two|', 'three'];    // renamed arr
console.log(arr.toString());        // this is supposed to look a little different but it works
