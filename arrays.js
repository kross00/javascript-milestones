let coolArray = [24,8,81,2,'mamba'];  // you can place numbers and strings in the same array
console.log(`The length of this array is: ${coolArray.length}.`);

console.log('---------');

console.log(`The first element in coolArray is: ${coolArray[0]}.`);   // this returns the first element of the array

console.log('---------');

console.log(`The second element in coolArray is: ${coolArray[1]}.`); // this returns the second element

console.log('---------');

console.log(`The last element in coolArray is: ${coolArray[4]}.`);    // this returns the last element of array

console.log('---------');

let k = 3;    // I'm assigning the number 3 to variable k
console.log(`The element k in the array is: ${coolArray[k]}.`);   // this returns the k element in the array which is the number 3 element of the array which is '2'

console.log('---------');

coolArray[0] = 'goat';
console.log(`Here's the array with a new first element: ${coolArray}.`);

console.log('---------');

coolArray[1] = 'legend';
console.log(`Here's the array with a new second element: ${coolArray}.`);

console.log('---------');

coolArray[4] = 'mambacita';
console.log(`Here's the array with a new last element: ${coolArray}`);

console.log('---------');
k = 2;
console.log(`The element k is now: ${coolArray[k]}.`);

console.log('---------');

coolArray.push('champion');
console.log(coolArray);

console.log('---------');

let index = coolArray.indexOf('champion');
if (index > -1) {
coolArray.splice(index, 1);
}
console.log(coolArray);


console.log('---------');

coolArray.unshift('bean');
console.log(coolArray);

console.log('----------');

coolArray.shift('bean');
console.log(coolArray);

console.log('----------');
