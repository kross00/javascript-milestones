function multiplesOf(numbers,number) {
  let multiples = [];
  for(let i = 0; i<numbers.length; i++) {
    if(numbers[i]%number === 0) {
      multiples.push(numbers[i]);
    }
  }
  return multiples
}
console.log(multiplesOf([7,14,21,28,35,800,42,49,56,63,70], 7));

console.log('----------');

let coolArray = ['hello',4,'tree',8];
for (let i = 0; i<coolArray.length; i++) {
  console.log(coolArray[i]);        // prints each element of array
}

console.log('-----------');

 coolArray = ['hello',4,'tree',8];
for (let i = 0; i<coolArray.length; i++) {
  console.log(coolArray[0]);
  console.log(coolArray[2]);
}

console.log('-----------');

coolArray = ['hello',4,'tree',8];
let newArray = coolArray.reverse();
console.log(newArray);

console.log('------------');

function largest(array) {
  let largestSoFar = array[0];

  for (let element of array) {
    if (element > largestSoFar) {
      largestSoFar = element;
    }
  }

  return largestSoFar;
}
let listOfNumbers = [1,2,3,4,5,7,14,24,3]
console.log(largest(listOfNumbers));

console.log('--------------');

function smallest(array) {
  let smallestSoFar = array[0];

  for (let element of array) {
    if (element < smallestSoFar) {
      smallestSoFar = element;
    }
  }
  return smallestSoFar;
}
//let list = [1,2,3,4,5,7,14,24,3]
console.log(smallest(listOfNumbers));

console.log('--------------');

function greaterThanZero(array) {
  let count = [];

  for (let element of array) {
    if (element > 0) {
      count.push(element);
    }
  }
  return count;
}
listOfNumbers = [-2,3,4,-5,7];
console.log(greaterThanZero(listOfNumbers));

console.log('--------------');
