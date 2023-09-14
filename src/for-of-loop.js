/**
 * This quiz is to test your knowledge of for-of-Loop.
 *
 * 1. When you finish the quiz, create a PR on you repository
 * 2. Submit to your lead
 */

// Question 1: Loop through the array and print the names of the Apostles
const apostles = ["Peter", "James", "John", "Andrew", "Philip"];

for (const apostle of apostles) {
  console.log(`Question #1:  ${apostle}`);
}

// Answer should be: Peter, James, John, Andrew, Philip (each in a new line)

// Question 2: Calculate the sum of the ages of the Patriarchs
const patriarchAges = [930, 912, 905, 895];
let sumPatAge = 0;

for (const sumAge of patriarchAges) {
  sumPatAge += sumAge;
}
console.log(`Question #2: ${sumPatAge}`);
// console.log(answer) // Answer should be: 3642

// Question 3: Print the plagues of Egypt
const plagues = ["Frogs", "Locusts", "Hail"];

for (const plague of plagues) {
  console.log(`Question #3: ${plague}`);
}

// Answer should be: Frogs, Locusts, Hail (each in a new line)

// Question 4: Convert Bible books to uppercase
const books = ["Genesis", "Exodus", "Leviticus"];

for (const book of books) {
  console.log(`Question #4: ${book.toUpperCase()}`);
}
// Answer should be: GENESIS, EXODUS, LEVITICUS (each in a new line)

// Question 5: Count the number of times 'apple' appears in the array
const fruitsInEden = ["apple", "pear", "apple", "grape"];

let fruitCount = 0;
for (fruit of fruitsInEden) {
  if (fruit === "apple") {
    fruitCount++;
  }
}
console.log(`Question #5: ${fruitCount}`);
// Answer should be: 2

// Question 6: Multiply all elements in the array by 2
const davidStones = [1, 2, 3];
let stoneMult = [];

for (const stone of davidStones) {
  if (stone) {
    stoneMult.push(stone * 2);
  }
}
console.log(`Question #6: ${stoneMult}`);
// Answer should be: [2, 4, 6]

// Question 7: Reverse the string
const nameOfGod = "Yahweh";
let reverseName = "";

for (nameLetter of nameOfGod) {
  reverseName = nameLetter + reverseName;
}
console.log(`Question #7: ${reverseName}`);
// Answer should be: hewhaY

// Question 8: Create a sentence by adding spaces to words
const peaceBeUponYou = ["Peace", "be", "upon", "you"];
let wordFrase = "";
for (wold of peaceBeUponYou) {
  if (wold) {
    wordFrase += wold + " ";
  }
}
console.log(`Question #8: ${wordFrase}`);

// Answer should be: Peace be upon you

// Question 9: Print out every other element from the array
const daysOfCreation = ["Day1", "Day2", "Day3", "Day4", "Day5", "Day6"];
let index = 0;

for (let day of daysOfCreation) {
  if ([index] % 2 === 0) {
    console.log(`Question #9: ${day}`);
  }
  index++;
}
// Answer should be: Day1, Day3, Day5 (each in a new line)

// Question 10: Concatenate all the strings in the array
const attributesOfGod = ["Omnipotent", "Omnipresent", "Omniscient"];
let concatStr = "";

for (attribute of attributesOfGod) {
  if (attribute) {
    concatStr += attribute;
  }
}
console.log(`Question #10: ${concatStr}`);
// Answer should be: OmnipotentOmnipresentOmniscient

// Question 11: Create a new array with only the numbers greater than 3
const biblicalNumbers = [1, 3, 7, 12];
let numbGreater = [];

for (const numb of biblicalNumbers) {
  if (numb > 3) {
    numbGreater.push(numb);
  }
}
console.log(`Question #11: ${numbGreater}`);
// Answer should be: [7, 12]

// Question 12: Calculate the product of all the elements in the array
const disciplesAges = [30, 25, 40, 50];
let product = 1;

for (const age of disciplesAges) {
  product *= age;
}
console.log(`Question #12: ${product}`);
// Answer should be: 1500000

// Question 13: Replace 'Goliath' with 'David' in the array
const combatants = ["Goliath", "Soldier1", "Soldier2"];
let ind = 0;
let combatantList;

for (const combatant of combatants) {
  if (combatant === "Goliath") {
    combatants[ind] = "David";
  }
  ind++;
}
console.log(`Question #13: ${combatants}`);
// Answer should be: ["David", "Soldier1", "Soldier2"]

// Question 14: Print the square of each element in the array
const squaresOfNumbers = [1, 2, 3, 4];

for (const square of squaresOfNumbers) {
  console.log(`Question #14: ${square * square}`);
}

// Answer should be: 1, 4, 9, 16 (each in a new line)
// Question 15: Count the number of vowels in the string
const theWord = "Bible";
let count2 = 0;

for (const word2 of theWord) {
  if ("aeiou".includes(word2)) count2++;
}
console.log(`Question #15: ${count2}`);
// Answer should be: 2

// Question 16: Print the elements that are divisible by 5
const numbersFromBible = [5, 10, 15, 20, 25];

for (const bibleNumber of numbersFromBible) {
  if (bibleNumber % 5 == 0) {
    console.log(`Question #16: ${bibleNumber}`);
  } else {
    console.log("Not divisable by 5");
  }
}

// Answer should be: 5, 10, 15, 20, 25 (each in a new line)

// Question 17: Create a new string where the first letter of each word is capitalized

const phrase = "in the beginning";

function capAll(str) {
  str = str.split(" ");
  let result5 = [];

  for (const word of str) {
    result5.push(word[0].toUpperCase() + word.slice(1));
  }
  return result5.join(" ");
}

console.log(`Question #17: ${capAll(phrase)}`);

// Answer should be: In The Beginning

// Question 18: Create a new array where each element is double the original
const loavesAndFishes = [2, 5];
let doubleFood = [];

for (const food of loavesAndFishes) {
  doubleFood.push(food * 2);
}
console.log(`Question #18: ${doubleFood}`);
// Answer should be: [4, 10]

// Question 19: Count the number of elements that are equal to 'manna'
const foodInDesert = ["manna", "quail", "manna", "manna"];
let foodCount = 0;

for (const food of foodInDesert) {
  if (food === "manna") {
    foodCount++;
  }
}
console.log(`Question #19: ${foodCount}`);
// Answer should be: 3

// Question 20: Create a new array by picking every 3rd element from the original array
const theCommandments = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArr = [];
let commandArray = [];
for (const command of theCommandments) {
  if (command % 3 === 0) newArr.push(command);
}
console.log(`Question #20: ${newArr}`);
// Answer should be: [3, 6, 9]
