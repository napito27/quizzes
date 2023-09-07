/**
 * This quiz is to test your knowledge of while-Loop.
 *
 * 1. Create a repository by cloning: https://github.com/jorgecarmona/npm-project-template
 * 2. Follow the README for instructions
 * 3. When you finish the quiz, create a PR on you repository
 * 4. Submit to your lead
 */

/**
 * Question 1
 * Using a while loop, sum all numbers from 1 to 10 and store the result in a variable called sum.
 */
let sum = 0;
let a = 0;
while (a < 10) {
  a++;
  sum += a;
}
console.log(`Question #1: ${sum}`);

/**
 * Question 2
 * Using a while loop, create a string of numbers from 5 to 15 separated by commas, e.g., "5,6,7,...,15".
 */
let numberStr = "";
let b = 4;
let bb = 15;
while (b < bb) {
  b++;
  if (b !== bb) {
    numberStr += b + ", ";
  } else {
    numberStr += b;
  }
}
console.log(`Question #2: ${numberStr}`);

/**
 * Question 3
 * Print all even numbers between 10 and 30 using a while loop.
 */
let evenNumber = "";
let c = 9;
let cc = 30;
while (c <= cc) {
  if (c % 2 === 0 && c !== cc) {
    evenNumber += c + " ";
  } else if (c % 2 === 0 && c === cc) {
    evenNumber += c;
  }
  c++;
}
console.log(`Question #3: ${evenNumber}`);

/**
 * Question 4
 * Determine the smallest power of 2 greater than 1000 using a while loop.
 */
let result = 0;
let d = 1;
while (d < 50) {
  d++;
  let dd = Math.pow(d, 2);
  if (dd > 1000) {
    firstResult = d;
    result = dd;
    break;
  }
}
console.log(`Question #4: Value is ${firstResult}, and result is ${result}`);

/**
 * Question 5
 * Reverse a string "HelloWorld" using a while loop.
 */
const wordStr = "HelloWorld";
let reverseStr = "";
let e = wordStr.length - 1;

while (e > 0) {
  e--;
  reverseStr += wordStr[e];
}
console.log(`Question #5: ${reverseStr}`);

/**
 * Question 6
 * Using a while loop, count how many times the letter 'a' appears in the string "banana".
 */
let word1 = "banana";
let counter = 0;
let f = 0;
while (f < word1.length - 1) {
  f++;
  if (word1[f] === "a") counter++;
}
console.log(`Question #6: ${counter}`);

/**
 * Question 7
 * Using a while loop, compute the factorial of 5.
 */
let factNumber = 5;
let factResult = 1;

while (factNumber > 1) {
  factResult *= factNumber;
  factNumber--;
}

console.log(`Question #7: ${factResult}`);

/**
 * Question 8
 * Print all numbers from 100 to 80 in descending order using a while loop.
 */
let high = 100;
let low = 80;
let descNumber = "";

while (high >= low) {
  if (high !== low) {
    descNumber += high + " ";
  } else {
    descNumber += high;
  }
  high--;
}

console.log(`Question #8: ${descNumber}`);
/**
 * Question 9
 * Using a while loop, find the greatest common divisor (GCD) of two numbers, 56 and 98.
 */
let num1 = 56;
let num2 = 98;

while (num1 != num2) {
  if (num1 > num2) {
    num1 = num1 - num2;
  } else {
    num2 = num2 - num1;
  }
}
console.log(`Question #9: GCD is ${(num1, num2)}`);

/**
 * Question 10
 * Calculate the sum of all odd numbers between 1 and 50 using a while loop.
 */

let oddNumber = 0;
let g = 1;
let gg = 50;
while (g <= gg) {
  if (g % 2 === 1) {
    oddNumber += g;
  }
  g++;
}
console.log(`Question #10: ${oddNumber}`);
