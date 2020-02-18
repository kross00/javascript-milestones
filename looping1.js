console.log('Let us Begin');
let array = [40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60];
function fortyToSixty(array) {
let count = [];
  for ( let i of array ) {
  if ( 40 <= i <= 60) {
    count.push(i);
  }
}
return count
}
console.log(fortyToSixty(array));   // this was the long hard way, but it got the job done

console.log('-----------');

//  let newArray = [40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60];
// function fortyToSixty(array) {
// let count = [];
//   for ( let i of array ) {
//   if (i%2===0) {          // this prints all evens
//     count.push(i);
//   }
// }
// return count
// }
// console.log(fortyToSixty(newArray));

console.log('------------');

let anotherArray = [10,11,12,13,14,15,16,17,18,19,20];
function minToMax(array) {
  let count = [];
  for (let i of array) {
    if (10<=i<=20) {
      count.push(i);
    }
  }
  return count
}
console.log(minToMax(anotherArray));

console.log('--------------');

// let theArray = [10,11,12,13,14,15,16,17,18,19,20];
// function minToMax(array) {
//   let count = [];
//   for (let i of array) {
//     if (i%2===0) {
//       count.push(i);
//     }
//   }
//   return count
// }
// console.log(minToMax(theArray));

// some of these are commented out because they can't all run at the same time
