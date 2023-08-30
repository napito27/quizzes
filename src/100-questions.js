/*
JavaScript Quiz

Directions: Uncomment the // console.log() lines one at a time as you are working on the quiz so you don't see any errors.

Hint: If you want to print the test results on your terminal, you can do it by using node
Example to see the answers in your terminal. 

Open terminal and type:
node /path/to/100-quiz.js
*/

/* Questions */

/*
==========================
 Primitives
===========================
*/
// 1. Create a variable named `adds` of type const where the numbers 2 and 20 are added using the addition operator
const adds = 2 + 20;

console.log("[Question #1]: ", adds); // should print 22

// 2. Declare a variable named 'stringVar' of type let and assign it a value of "Hello".
let stringVar = "Hello";

console.log("[Question #2]: ", stringVar); // should print Hello

// 3. Create a constant named 'numberVar' with a value of 5.
const numberVar = 5;

console.log("[Question #3]: ", numberVar); // should print 5

// 4. Let 'booleanVar' be a variable that holds the value false.
booleanVar = false;

console.log("[Question #4]: ", booleanVar); // should print true or false

/*
==========================
 Object
===========================
*/
// 5. Create an object named 'student' with keys 'name' and 'age' having values 'John' and 20 respectively.
student = {
  name: "John",
  age: 20
};

// 6. Access the 'name' property of the 'student' object and store it in a variable named 'studentName'.
studentName = student.name;

console.log("[Question #6]: ", studentName); // should print John

// 7. Add a new property 'grade' to 'student' and set its value to 'A'.
student.grade = "A";

console.log("[Question #7]: ", student);
/*
==========================
 Array
===========================
*/
// 8. Declare an array named 'fruits' with values 'apple', 'banana', and 'cherry'.
fruits = ["apple", "banana", "cherry"];

// 9. Access the second element of 'fruits' and store it in a variable named 'secondFruit'.
secondFruit = fruits[1];

console.log("[Question #9]: ", secondFruit); // should print banana

// 10. Add 'orange' to the end of the 'fruits' array.
fruits.push("orange");

console.log("[Question #10]: ", fruits);
/*
==========================
 let and const
===========================
*/
// 11. Create a variable of type let named 'temperature' and assign it a value of 25.
let temperature = 25;

console.log("[Question #11]: ", temperature); // should print 25

// 12. Change the value of 'temperature' to 30. Print a console again.
temperature = 30;

console.log("[Question #12]: ", temperature); // should print 30

/*
==========================
 If Statements
===========================
*/
// 13. Write an if statement that checks if 'temperature' is greater than 28 and logs "It's hot!" to the console.
if (temperature > 28) {
  console.log("[Question #13]: ", "It's hot!");
}

// 14. Extend the previous if statement to check if 'temperature' is less than 15 and logs "It's cold!" to the console.
// temperature = 14; // change the temperature to show the `else if value`

if (temperature > 28) {
  console.log("[Question #13]: ", "It's hot!");
} else if (temperature < 15) {
  console.log("[Question #14]: ", "It's cold!");
}

/*
==========================
 Math Operators
===========================
*/
// 15. Declare a constant named 'product' which is the result of multiplying 5 and 7.

const product = 5 * 7;

console.log("[Question #15]: ", product); // should print 35

// 16. Create a variable 'remainder' which stores the remainder when 15 is divided by 4.

remainder = Math.trunc(15 % 4);

console.log("[Question #16]: ", remainder); // should print 3

/*
==========================
 Comparative Operators
===========================
*/
// 17. Check if 'numberVar' is equal to 5 using the strict equality operator.
compare1 = numberVar === 5;

console.log("[Question #17]: ", compare1); // should print true

// 18. Check if 'stringVar' is not equal to "Hello World".
compare2 = stringVar !== "Hello Word";

console.log("[Question #18]: ", compare2); // should print true

/*
==========================
 Logical Operators
===========================
*/
// 19. Check if 'temperature' is less than 5 or greater than 29.
logicOper1 = temperature < 5 || temperature > 29;

console.log("[Question #19]: ", logicOper1); // should print true

// 20. Confirm that 'stringVar' is "Hello" and 'numberVar' is not 6.
logicOper2 = stringVar === "Hello" && numberVar !== 6;

console.log("[Question #20]: ", logicOper2); // should print true

/*
==========================
 Assignment Operators
===========================
*/
// 21. Add 10 to 'temperature' using the += assignment operator.
temperature += 10;

console.log("[Question #21]: ", temperature); // should print 40

// 22. Subtract 5 from 'temperature' using the -= operator.
temperature -= 5;

console.log("[Question #22]: ", temperature); // should print 35

// 23. Multiply 'temperature' by 2 using the *= operator.
temperature *= 2;

console.log("[Question #23]: ", temperature); // should print 70

// 24. Divide 'temperature' by 5 using the /= operator.
temperature /= 5;

console.log("[Question #24]: ", temperature); // should print 14

// 25. Check if the type of 'stringVar' is "string".

quest25 = typeof stringVar === "string";
console.log("[Question #25]: ", quest25); // should print true

// 26. Compare the values of 'numberVar' and the string "5" using the loose equality operator.
quest26 = numberVar == "5";
console.log("[Question #26]: ", quest26); // should print true

// 27. Declare an array named 'colors' and push 'red' and 'blue' into it.
const colors = [];
colors.push("red", "blue");

console.log("[Question #27]: ", colors); // should print array with red and blue

// 28. Remove the last element from 'fruits' array.
fruits.pop();

console.log("[Question #28]: ", fruits); // should print [ 'apple', 'banana', 'cherry' ]

// 29. Check if 'numberVar' is greater than or equal to 5.
quest29 = numberVar >= 5;

console.log("[Question #29]: ", quest29); // should print true

// 30. Determine if the length of 'stringVar' is strictly equal to 5.
quest30 = stringVar.length === 5;

console.log("[Question #30]: ", quest30); // should print true

// 31. Use the modulo operator to determine if 10 is even.
quest31 = 10 % 2 === 0;
console.log("[Question #31]: ", quest31); // should print true

// 32. Create a variable 'result' and assign it the result of 10 raised to the power of 3.
const result = Math.pow(10, 3);
console.log("[Question #32]: ", result); // should print 1000

// 33. Compare the value of 'stringVar' to the string "hello" in a case insensitive manner.
quest33 = stringVar.toLowerCase(stringVar) === "hello";

console.log("[Question #33]: ", quest33); // should print true

// 34. Check if 'booleanVar' is truthy.
quest34 = Boolean(booleanVar);

console.log("[Question #34]: ", quest34); // should print falsey

// 35. Log the opposite value of 'booleanVar' to the console using the NOT operator.
quest35 = Boolean(!booleanVar);

console.log("[Question #35]: ", quest35); // should print opposite

// 36. Check if 'fruits' array contains more than 3 elements.
question36 = fruits.length === 3;
console.log("[Question #36]: ", question36); // should print true if it does, false if it does not

// 37. Create an object named 'car' with keys 'make' and 'model'.
const car = {
  make: "",
  model: ""
};

console.log("[Question #37]: ", car); // should print object with above structure and keys with empty strings

// 38. Change the 'make' property of 'car' to 'Toyota'.
car.make = "Toyota";

console.log("[Question #38]: ", car); // should print object with make key = Toyota

// 39. Declare a variable named 'isRainy' and assign it a boolean value based on if 'temperature' is less than 20.
let isRainy;
if (temperature < 20) {
  isRainy = true;
} else isRainy = false;

console.log("[Question #39]: ", isRainy); // should print true

// 40. Write an if statement that checks if 'numberVar' is even.

if (numberVar % 2 === 0) {
  quest40 = "true";
} else quest40 = "false";

console.log("[Question #40]: ", quest40);

// 41. Check if both 'numberVar' is less than 10 and 'temperature' is greater than 20.
quest41 = numberVar < 10 && temperature > 20;

console.log("[Question #41]: ", quest41); // should print false

// 42. Use the ternary operator to assign "cold" or "warm" to a variable 'weather' based if 'temperature' is less than 16 celsius.
weather = temperature < 16 ? "cold" : "warm";

console.log("[Question #42]: ", weather); // should print cold

// 43. Check if 'fruits' includes 'banana'.
quest43 = fruits.includes("banana");

console.log("[Question #43]: ", quest43); // should print warm (true)

// 44. Check if the value of 'numberVar' is between 4 and 6.
quest44 = numberVar >= 4 && numberVar <= 6;

console.log("[Question #44]: ", quest44); // should print true

// 45. Declare a variable named 'divided' which is the result of dividing 100 by 'numberVar'.

divided = 100 / numberVar;
console.log("[Question #45]: ", divided); // should print 20

// 46. Check if 'stringVar' starts with the letter "H".

quest46 = stringVar.charAt(0) === "H";
console.log("[Question #46]: ", quest46); // should print true

// 47. Declare a variable 'squared' and assign it the result of squaring 'numberVar'.
squared = Math.pow(numberVar, 2);
console.log("[Question #47]: ", squared); // should print 25

// 48. Find out if 'stringVar' ends with the letter "o".
quest48 = stringVar.charAt(stringVar.length - 1) === "o";

console.log("[Question #48]: ", quest48); // should print true

// 49. Use the remainder operator to determine if 'numberVar' is odd.
quest49 = numberVar % 2 === 1;
console.log("[Question #49]: ", quest49); // should print true

// 50. Write an if-else statement that checks if 'temperature' is above 25, logs "Too hot!", otherwise logs "Just right!".

if (temperature > 25) {
  quest50 = "Too hot!";
} else quest50 = "Just right!";

console.log("[Question #50]: ", quest50); // should print Just right!

/*
==========================
 Primitives
===========================
*/
// 51. Declare a variable named 'city' of type let and assign it a value of "Paris".
let city = "Paris";

console.log("[Question #51]: ", city); // should print Paris

// 52. Create a constant named 'maxCount' with a value of 100.
const maxCount = 100;

console.log("[Question #52]: ", maxCount); // should print 100

// 53. Let 'isVisible' be a variable that holds the value true.
isVisible = "true";

console.log("[Question #53]: ", isVisible); // should print true

/*
==========================
 Objects
===========================
*/
// 54. Create an object named 'book' with keys 'title' and 'author' having values '1984' and 'George Orwell' respectively.
book = {
  title: "1984",
  author: "George Orwell"
};

// 55. Access the 'title' property of the 'book' object and store it in a variable named 'bookTitle'.
bookTitle = book.title;

console.log("[Question #55]: ", bookTitle); // should print 1984

// 56. Add a new property 'publishedYear' to 'book' and set its value to 1949.
book.publishedYear = 1949;

console.log("[Question #56]: ", maxCount); // should print 100

/*
==========================
 Array
===========================
*/
// 57. Declare an array named 'planets' with values 'Mercury', 'Venus', and 'Earth'.
planets = ["Mercury", "Venus", "Earth"];

console.log("[Question #57]: ", planets); // should print array with above values

// 58. Access the third element of 'planets' and store it in a variable named 'thirdPlanet'.
thirdPlanet = planets[2];

console.log("[Question #58]: ", thirdPlanet); // should print Earth

// 59. Add 'Mars' to the start of the 'planets' array using an appropriate method.
planets.push("Mars");

console.log("[Question #59]: ", planets); // should print ['Mars', 'Mercury', 'Venus', 'Earth']

/*
==========================
 let and const
===========================
*/
// 60. Create a variable of type let named 'weight' and assign it a value of 60.
let weight = 60;

console.log("[Question #60]: ", weight); // should print 60

// 61. Change the value of 'weight' to 65.
weight = 65;

console.log("[Question #61]: ", weight); // should print 65

/*
==========================
 If Statements
===========================
*/
// 62. Write an if statement that checks if 'weight' is less than 58 and logs "Underweight" to the console.
if (weight < 58) {
  console.log("[Question #62]: ", "Underweight");
}

// 63. Extend the previous if statement with an else if to check if 'weight' is over 70 and logs "Overweight" to the console.
if (weight < 58) {
  console.log("[Question #62]: ", "Underweight");
} else if (weight > 70) {
  console.log("[Question #62]: ", "Overweight");
}

/*
==========================
 Math Operators
===========================
*/
// 64. Declare a constant named 'radius' with a value of 7.
const radius = 7;

console.log("[Question #64]: ", radius); // should print 7

// 65. Calculate the area of a circle using 'radius' (area = πr^2) and store it in a variable named 'circleArea'.
circleArea = Math.PI * (radius * radius);

console.log("[Question #65]: ", circleArea); // should print 153.93804002589985

/*
==========================
 Comparative Operators
===========================
*/
// 66. Check if 'weight' is less than or equal to 65.

quest66 = weight <= 65;
console.log("[Question #66]: ", quest66);

// 67. Confirm that 'city' is strictly not equal to "London".

quest67 = city !== "London";
console.log("[Question #67]: ", quest66);

/*
==========================
 Logical Operators
===========================
*/
// 68. Check if 'isVisible' is false using the NOT operator.

quest68 = isVisible != false;
console.log("[Question #68]: ", quest68); // should print true

// 69. Verify if 'city' is "Paris" or 'bookTitle' is "Brave New World".

quest69 = city === "Paris" || bookTitle === "Brave New World";
console.log("[Question #69]: ", quest69); // should print true

/*
==========================
 Assignment Operators
===========================
*/
// 70. Increment 'weight' by 1 using the appropriate operator.

quest70 = ++weight;
console.log("[Question #70]: ", quest70); // should print 66

// 71. Halve the value of 'weight' using the /= operator.
quest71 = weight /= 2;
console.log("[Question #71]: ", quest71); // should print 33

// 72. Confirm that 'city' is a type of string using the typeof operator.
quest72 = typeof city === "string";

console.log("[Question #72]: ", quest72); // should print true

// 73. Declare an array named 'days' and add 'Monday' and 'Tuesday' to it.
const days = ["Monday", "Tuesday"];
console.log("[Question #73]:", days);

// 74. Remove the first element from 'planets' array.
planets.shift();
console.log("[Question #74]: ", planets);

// 75. Determine if the length of 'city' is strictly greater than 6.
quest75 = city.length === 6;
console.log("[Question #75]: ", quest75);

// 76. Check if 'maxCount' is less than or equal to 105.
quest76 = maxCount <= 105;
console.log("[Question #76]: ", quest76);

// 77. Check if 'isVisible' is a type of boolean.
quest77 = typeof isVisible === "boolean";
console.log(quest77);

// 78. Add 25 to 'circleArea' using the += assignment operator.
circleArea += 25;
console.log(circleArea);

// 79. Find out if 'book' has a property named 'genre'.
quest79 = "genre" in book;
console.log(quest79);

// 80. Check if 'days' array has exactly 2 elements.
quest80 = days.length === 2;
console.log(quest80);

// 81. Using the ternary operator, check if 'isVisible' is true and assign "visible" or "not visible" to a variable named 'status'.
const status = isVisible === "true" ? "visible" : "not visible";
console.log(status);

// 82. Confirm that 'planets' does not include 'Jupiter'.

quest82 = !planets.includes("Jupiter");
console.log(quest82);

// 83. Check if 'radius' is between 5 and 10 using logical operators.

quest83 = radius > 5 && radius < 10;
console.log(quest83);

// 84. Calculate the perimeter of the circle using 'radius' (perimeter = 2πr) and store it in a variable named 'circlePerimeter'.

circlePerimeter = 2 * Math.PI * radius;
console.log(circlePerimeter);

// 85. Check if 'city' contains the substring "ar".

quest85 = city.includes("ar");
console.log(quest85);

// 86. Declare a variable 'cubeVolume' and assign it the result of cubing 'radius' (volume = s^3).

const cubeVolume = Math.pow(radius, 3);
console.log(cubeVolume);

// 87. Determine if 'bookTitle' ends with the word "1984".
console.log(bookTitle.endsWith("1984"));

// 88. Check if the 'days' array is not empty.
console.log(days.length !== 0);

// 89. Add a new key-value pair 'pages' and '328' to the 'book' object.
book.pages = 328;
console.log(book);

// 90. Write an if-else statement that checks if 'circleArea' is above 150, logs "Large Circle", otherwise logs "Small Circle".
if (circleArea > 150) {
  quest90 = "Large Circle";
} else quest90 = "Small Circle";

console.log(quest90);

// 91. Use the AND operator to check if 'weight' is more than 50 and less than 70.
quest91 = weight > 50 && weight < 70;
console.log(quest91);

// 92. Declare a variable 'squareArea' and assign it the result of squaring 'radius'.
squareArea = Math.pow(radius, 2);
console.log(squareArea);

// 93. Check if 'bookTitle' starts with the word "The".
console.log(bookTitle.startsWith("The"));

// 94. Using the appropriate method, reverse the order of elements in the 'planets' array.
quest94 = planets.reverse();
console.log(quest94);

// 95. Convert 'weight' into a string and store it in a variable named 'weightStr'.
weightStr = weight.toString();

console.log(weightStr);
console.log(typeof weightStr);

// 96. Compare 'weight' and 'weightStr' using the loose equality operator.
quest96 = weight == weightStr;
console.log(quest96);

// 97. Create an array named 'numbers' and fill it with numbers 1 through 5.
numbers = [1, 2, 3, 4, 5];

// 98. Find out if 'book' has a property named 'isbn'.
//console.log(book.hasOwnProperty('isbn'));
console.log("isbn" in book);

// 99. Calculate the difference between 'circlePerimeter' and 'squareArea' and store it in a variable named 'shapeDifference'.
shapeDifference = squareArea - circlePerimeter;
console.log(shapeDifference);

// 100. Create an object named 'album' with properties 'name', 'artist', and 'releaseYear'.
const album = {
  name: "",
  artist: "",
  releaseYear: ""
};
console.log(album);
