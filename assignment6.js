"use strict";
//Q Node.1.	Write a program that uses filter to remove all negative numbers from an 
//array of numbers
function removeNegativeNumbers(arr) {
    var filteredArray = arr.filter((num) => num >= 0);
    return filteredArray;
}
var numbersA = [10, -5, 8, -20, 3, 15];
var positiveNumbers = removeNegativeNumbers(numbersA);
console.log('Original array:', numbersA);
console.log('Array with negative numbers removed:', positiveNumbers);
//2.	Given an array of numbers [1, 2, 3, 4, 5], use the map method to create 
//a new array where each number is multiplied by 2.
var numbersA = [1, 2, 3, 4, 5];
var multipliedNumbers = numbersA.map((num) => num * 2);
console.log('Original array:', numbersA);
console.log('New array with each number multiplied by 2:', multipliedNumbers);
//3.	Given an array of strings ["apple", "banana", "cherry", "date", "grape"], 
//use the filter method to create a new array containing only the fruits with more 
//than 5 characters.
var fruits = ["apple", "banana", "cherry", "date", "grape"];
var longFruits = fruits.filter((fruit) => fruit.length > 5);
console.log('Original array:', fruits);
console.log('New array with fruits having more than 5 characters:', longFruits);
//4.	Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 
//use the map and filter methods together to create a new array containing
// the squares of even numbers.
var numbersA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evenNumbersB = numbersA.filter((num) => num % 2 === 0);
var squaresOfEvenNumbers = evenNumbersB.map((num) => num * num);
console.log('Original array:', numbersA);
console.log('Squares of even numbers:', squaresOfEvenNumbers);
//5.	Given an array of temperatures in Celsius [0, 10, 20, 30, 40], 
//use the map method to create a new array where each temperature is 
//converted to Fahrenheit using the formula (Celsius * 9/5) + 32.
var celsiusTemperatures = [0, 10, 20, 37, 40];
var fahrenheitTemperatures = celsiusTemperatures.map((celsius) => (celsius * 9 / 5) + 32);
console.log('Celsius Temperatures:', celsiusTemperatures);
console.log('Fahrenheit Temperatures:', fahrenheitTemperatures);
//6.	Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and 
//filter methods together to create a new array containing the doubled values 
//of odd numbers.
var numbersAB = [3, 6, 9, 12, 15, 18];
var oddNumbers = numbersAB.filter((num) => num % 2 !== 0);
var doubledOddNumbers = oddNumbers.map((num) => num * 2);
console.log('Original array:', numbersAB);
console.log('Doubled values of odd numbers:', doubledOddNumbers);
//7.	Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], 
//use the forEach method to log each name with an exclamation mark at the 
//end, e.g., "Alice!".
var names = ["Adnan", "Asif", "Ghani", "Sabri", "Shafi", "Sajid"];
names.forEach(name => {
    console.log(name + "!");
});
