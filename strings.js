let str1 = 'Fulfill';   // here I'm labeling a variable a string instead of a number like earlier
let str2 = 'Destiny';
console.log(str1);
console.log('----------');  // just printing this to help me read the code
console.log(str2);
console.log('----------');
let thanos = str1 + str2  // you can set a variable to help carry out a function. In this case, it's combining the strings
console.log(`The strings should join saying: ${thanos}`);
// when I call the program, I used a ` character to allow myself to include a variable in the quote
// I also printed those words to help viewers read the code when I run it
console.log('-----------');
// String.prototype.includes(str1);   // wtf is this

let waffles = 'pancakes';
console.log(`The count of characters in this string is: ${waffles.length}`);

console.log('-----------');
 let string = 'panda';
console.log(string.toUpperCase());  // this function will uppercase my string

console.log('-----------');
string = 'KRYPTON';
console.log(string.toLowerCase());    // this function will lowercase my string


console.log('------------');
waffles = 'pancakes';
console.log(waffles.charAt(0));    // this tells the code to print the first element of the string
// since it's js the count starts at 0

console.log('-------------');
console.log(waffles.charAt(1));
// by calling for the 1 index it calls the second letter in the string

console.log('--------------');
console.log(waffles.charAt(7));   // this is calling for the last character

console.log('--------------');
let k = 5;
console.log(waffles.charAt(k));   // here i assigned a number on the index to the variable k so when i call it, it prints the number character I assigned k to

console.log('--------------');
let newWaffles = waffles + 'a';
console.log(newWaffles);  // running this should print 'pancakesa' since we added an 'a' to the existing string

console.log('--------------');
let firstName = 'Shimmy';
let lastName = 'Jenkins';
if (firstName.length < lastName.length) {
  console.log(`Hello there ${firstName}.`); // if firstName has less characters then this should be printed
}
