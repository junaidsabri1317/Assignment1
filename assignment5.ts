function sumOfFirstNEvenNumbers(n:number):number 
{
  var sum = 0;
  for (let i = 1; i <= n; i++) 
  {
        var evenNumber = i * 2;
    sum += evenNumber;
  }

  return sum;
}


var n = 5; 
var result = sumOfFirstNEvenNumbers(n);
console.log("Sum of the first",n,"even numbers is:",result);


function printEvenNumbers(numbers: number[]): void 
{
    for (let i = 0; i < numbers.length; i++) 
    {
      var currentNumber = numbers[i];
      if (currentNumber % 2 === 0) {
        console.log(currentNumber);
      }
    }
  }
  
  // Example usage:
  var numberArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log("Even numbers in the array:");
  printEvenNumbers(numberArray);
  

  function removeEvenNumbers(numbers: number[]): number[] {
    // Use the filter method to create a new array with only odd numbers
    var oddNumbers = numbers.filter((number) => number % 2 !== 0);
    return oddNumbers;
  }
  
  // Example usage:
  var numberArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var oddNumbersArray = removeEvenNumbers(numberArray);
  
  console.log("Array with even numbers removed:");
  console.log(oddNumbersArray);
  

  // Q No.4.	Write a program that defines a function to calculate the area of a circle. 
// The function should take the radius as input and return the calculated area.

function calculateCircleArea(radius: number): number 
{
    var area = Math.PI * Math.pow(radius, 2);
    return area;
  }
  
  
  var radius = 4; 
  var area = calculateCircleArea(radius);
  console.log("The area of the circle with radius", radius, "is:", area);
  

  //Q No.5. Develop a program that reads a list of grades and uses the splice method to 
//remove failing grades (below 50) from the array.

function removeFailingGrades(grades: number[]): number[] {
    for (let i = grades.length - 1; i >= 0; i--) {
      if (grades[i] < 50) {
        grades.splice(i, 1); // Remove the failing grade
      }
    }
    return grades;
  }
  
  // Example usage:
  var gradeList: number[] = [85, 45, 60, 30, 70, 55, 40];
  console.log("Original grades:", gradeList);
  
  var passingGrades = removeFailingGrades(gradeList);
  console.log("Passing grades:", passingGrades);
  

  //Q No.6.	Q6 - Write a program that uses a function to find the largest element 
//in an array of numbers.

function findLargestElement(arr: number[]): number | undefined 
{
    if (arr.length === 0) {
      return undefined; 
    }
  
    let largest = arr[0]; 
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i]; 
      }
    }
  
    return largest;
  }
  
  var numbersA = [10, 5, 8, 20, 3, 15];
  var largestNumber = findLargestElement(numbersA);
  
  if (typeof largestNumber !== 'undefined') 
  {
    console.log(`The largest number in the array is: ${largestNumber}`);
  } else 
  {
    console.log('The array is empty.');
  }
  