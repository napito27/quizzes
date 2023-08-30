/**
 * This quiz is to test your knowledge of Teranary Operator.
 */

/**
 * Question 1
 * Declare a variable isSunny with a value of true. Use a ternary operator to set a variable activity to "Go to the beach" if isSunny is true and "Stay indoors" otherwise.
 */
const isSunny = true;
whatToDo = isSunny === true ? "Go to the beach" : "Stay indoors";
console.log(whatToDo);
//variable = (condition) ? expressionTrue :  expressionFalse;
/**
 * Question 2
 * Given a variable age = 20, use a ternary operator to determine if the age is greater than 18. If so, set a variable status to "Adult", otherwise set it to "Minor".
 */
const age = 20;
ageStatus = age > 18 ? "Adult" : "Minor";
console.log(ageStatus);
/**
 * Question 3
 * Using a ternary operator, check if the length of the array [1, 2, 3, 4] is even. If true, set a variable isEvenLength to true, otherwise set it to false.
 */
const numbers = [1, 2, 3, 4];
isEvenLength = numbers.length % 2 === 0 ? true : false;
console.log(isEvenLength);
/**
 * Question 4
 * Given a variable score = 45, use a ternary operator to set a variable result to "Pass" if score is greater than or equal to 50 and "Fail" otherwise.
 */
score = 45;
result = score >= 50 ? "Pass" : "Fail";
console.log(result);
/**
 * Question 5
 * Use a ternary operator to determine whether the number 15 is even or odd. Set a variable parity to the result.
 */
parity = 15 % 2 === 0 ? "Even" : "Odd";
console.log(parity);
/**
 * Question 6
 * Given a variable temperature = 22, use a ternary operator to set a variable outfit to "Wear a jacket" if temperature is below 20 and "T-shirt is fine" otherwise.
 */
let temperature = 22;
outfit = temperature < 20 ? "Wear a jacket" : "T-shirt is fine";
console.log(outfit);
/**
 * Question 7
 * Using a ternary operator, determine if the first element of the array ["apple", "banana", "cherry"] is "apple". If true, set a variable isApple to true, otherwise set it to false.
 */
const fruits = ["apple", "banana", "cherry"];
isApple = fruits.includes("apple", [0]) ? true : false;
console.log(isApple);
/**
 * Question 8
 * Given a variable height = 180, use a ternary operator to set a variable basketball to "You're tall enough to play" if height is greater than 175 and "Might be a bit short" otherwise.
 */
let height = 180;
basketball =
  height > 175 ? "You're tall enough to play" : "Might be a bit short";
console.log(basketball);
/**
 * Question 9
 * Given a variable day = "Sunday", use a ternary operator to set a variable workday to "Weekend" if day is either "Saturday" or "Sunday" and "Workday" otherwise.
 */
let day = "Sunday";
workday = day === "Saturday" || day === "Sunday" ? "Weekend" : "Workday";
console.log(workday);
/**
 * Question 10
 * Use a ternary operator to determine if the string "hello" is of length 5. If true, set a variable isLengthFive to true, otherwise set it to false.
 */
let wordStr = "hello";
isLengthFive = wordStr.length === 5 ? true : false;
console.log(isLengthFive);
