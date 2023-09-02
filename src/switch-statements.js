/**
 * This quiz is to test your knowledge of Switch Statements.
 *
 * 1. Create a repository by cloning: https://github.com/jorgecarmona/npm-project-template
 * 2. Follow the README for instructions
 * 3. When you finish the quiz, create a PR on you repository
 * 4. Submit to your lead
 */

/**
 * Question 1
 * Given a variable color with a value "red", use a switch statement to set a variable feeling to "passionate" for "red", "calm" for "blue", and "neutral" for other colors.
 */
const color = "red";

let feeling;

switch (color) {
  case "red":
    feeling = "passionate";
    break;
  case "blue":
    feeling = "calm";
    break;
  default:
    feeling = "neutral";
}

console.log(`Feeling:  ${feeling}`);

/**
 * Question 2
 * Using a switch statement, check the value of the variable day (e.g., "Monday"). Return "Working day" for weekdays and "Weekend" for Saturday and Sunday.
 */
const day = "Thursday";
switch (day) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    console.log("Working day");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weeked");
}
/**
 * Question 3
 * Given a variable score of 85, set a grade: "A" for 90 and above, "B" for 80-89, "C" for 70-79, "D" for 60-69, and "F" for below 60.
 */

const score = 85;

let grade;

switch (true) {
  case score >= 90:
    grade = "A";
    break;
  case score >= 80:
    grade = "B";
    break;
  case score >= 70:
    grade = "C";
    break;
  case score >= 60:
    grade = "D";
    break;
  default:
    grade = "F";
}

console.log(`Grade:  ${grade}`);

/**
 * Question 4
 * Use a switch statement to determine if the variable fruit is a "berry". Set "berry" for strawberries, blueberries, and raspberries. "Not a berry" for other fruits.
 */
const fruit = "blueberries";
switch (fruit) {
  case "strawberries":
  case "blueberries":
  case "raspberries":
    console.log("berry");
    break;
  default:
    console.log("not a berry");
}
/**
 * Question 5
 * Check the value of the variable month (e.g., "January") and return which quarter of the year it belongs to.
 */
const month = "September";
switch (month) {
  case "January":
  case "February":
  case "March":
    console.log("First Quarter");
    break;
  case "April":
  case "May":
  case "June":
    console.log("Second Quarter");
    break;
  case "July":
  case "August":
  case "September":
    console.log("Third Quarter");
    break;
  case "October":
  case "November":
  case "December":
    console.log("Fourth Quarter");
}
/**
 * Question 6
 * Use a switch statement to determine if a number is "small", "medium", or "large". Consider numbers 1-3 as "small", 4-6 as "medium", and 7-9 as "large".
 */
const number = 5;
switch (number) {
  case 1:
  case 2:
  case 3:
    console.log("small");
    break;
  case 4:
  case 5:
  case 6:
    console.log("medium");
    break;
  case 7:
  case 8:
  case 9:
    console.log("large");
}
/**
 * Question 7
 * Determine the type of the variable pet (e.g., "dog"). Return "Canine" for a dog, "Feline" for a cat, and "Unknown" for other pets.
 */
const pet = "dog";

let petCategory;

switch (pet) {
  case "dog":
    petCategory = "Canine";
    break;
  case "cat":
    petCategory = "Feline";
    break;
  default:
    petCategory = "Unknown";
}

console.log(`Pet: ${petCategory}`);

/**
 * Question 8
 * Given a variable transportMode with a value like "car", return "Fast" for "plane", "Medium" for "car", and "Slow" for "bicycle".
 */
const transportMode = "bicycle";

switch (transportMode) {
  case "plane":
    console.log("Fast");
    break;
  case "car":
    console.log("Medium");
    break;
  case "bicycle":
    console.log("Slow");
}
/**
 * Question 9
 * For a variable direction with values like "N", determine the full direction name. "N" for "North", "S" for "South", etc.
 */
const direction = "N";

switch (direction) {
  case "N":
    console.log("North");
    break;
  case "S":
    console.log("South");
}

/**
 * Question 10
 * Determine the type of drink based on the variable drink. "Water" for "H2O", "Coffee" for "C8H10N4O2", and "Unknown" for other values.
 */
const drink = "H2O";

switch (drink) {
  case "H2O":
    console.log("Water");
    break;
  case "C8H10N4O2":
    console.log("Coffee");
    break;
  default:
    console.log("Unknown");
}
