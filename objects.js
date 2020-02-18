let personalData = {};
personalData['Jean'] = {preferredName: 'Jean', firstName: 'Jean-Luc', lastName: 'Picard', age: 79};
personalData['Phil'] = {preferredName: 'Phil', firstName: 'Phillip', lastName: 'Peters', age: 56};

let personPreferredName = 'Jean';
let person = personalData[personPreferredName];

if(person === undefined) {
  console.log('Sorry, I cannot find this person. Check if you entered the correct credentials.');
} else {
  console.log(`${personPreferredName} is found! Their legal name is ${person.firstName} ${person.lastName}.`);
}
console.log('------');

let daysInMonth = {
  January: 31,
  Febraury: 29,
  March: 31,
  April: 30,
  May: 31,
  June: 30,
  July: 31,
  August: 31,
  September: 30,
  October: 31,
  November: 30,
  December: 31,
}
let monthName = 'January';
let numDays = daysInMonth[monthName];
console.log(`There are ${numDays} in the month of ${monthName}.`);
console.log(`${monthName} is also the month I was born in!`);
