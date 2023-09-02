// Q No.1.	Create a function that takes an array, an index, 
// and a value as parameters. Inside the function, use the 
// splice method to insert the value at the specified index in 
// the array. Return the modified array.

let studeNames1:string[]=["Adnan","Asif","Ghani","Mani"]
function takeValueInarray(index1:number,index2:number,studentName:string)
{
    studeNames1.splice(index1,index2,studentName)
    return studeNames1}
var newArray=takeValueInarray(2,0,"Sabri")
console.log(newArray)

// Q No.2.	Implement a simple shopping cart program using an array. 
// Create functions to add items, remove items,and update quantities
//  using the splice method. Print the cart's contents after each operation
var shoppingCart:string[]=["Egg","Bread","Milk","Jam", "Biscuits"]
function changeInCart(index1:number,index2:number,item:string) 
{
    shoppingCart.splice(index1,index2,item)
    return shoppingCart
}
var updatedCart=changeInCart(shoppingCart.length,0,"Baqarkhani")
console.log(updatedCart)
console.log("-----------------------------------------------------------")
updatedCart.splice(updatedCart.length-1,1)
console.log(updatedCart)
console.log("-----------------------------------------------------------")



// Q No.3.	Write a program that uses a while loop 
// to print the first 25 integers.
let integer:number=1
while (integer<=25)
{
    console.log(integer)
    integer++    
}



//Q No.4.	Write a program that uses a while loop to 
// print the first 10 even numbers. 

let numbers = 1;
let evenNumbers = 0;
while (evenNumbers < 10) 
{
  if (numbers % 2 === 0) 
  {
    console.log(numbers);
    evenNumbers++;
  }
  numbers++;
}


//Q No.5.	Create a function that takes a positive integer as 
//parameter and uses a while loop to calculate and return the 
//factorial of that number.

function factorial(num:number) 
{
    var num1:number=1
    while (num>0) 
    {
        num1 = num1*num
        num--
    }
    return num1;
}
var newFactorial:number=factorial(5)
console.log(newFactorial)


// //Q6 - Write a program having an array of numbers 
// //if the number is negative it should remove the negative number 
// //from the array
var array1:number[]= [1, 2, 3, -4, 5, 6, -7, 8,9,19,11,12,13,14];
for (let i = 0; i < array1.length; i++)
{
 if (array1[i] < 0) 
{
  array1.splice(i,1) 
    i--;   
} }
console.log(array1)


// //Q6 - Write a program having an array of numbers 
// //if the number is negative it should remove the negative number 
// //from the array
var array1:number[]= [1, 2, 3, -4, 5, 6, -7, 8,9,19,11,12,13,14];
for (let i = 0; i < array1.length; i++)
{
 if (array1[i] < 0) 
{
  array1.splice(i,1) 
    i--;   
} }
console.log(array1)

//Q No.7.	Create a function that takes an array of numbers as parameter. Use a while loop
// to calculate and return the sum of all the numbers in the array

var numbersa:number[]=[2,2,2,2,2]
function sumofAll(numbersa:number[])
{
    let totalSum:number=0
    let index:number=0
    while (index < numbersa.length)
    {
        totalSum =totalSum+numbersa[index];
        index++;
    }
    return totalSum
    //console.log(totalSum)
    
}
var grandtotal:number=sumofAll(numbersa)
console.log(grandtotal)


//Q No.8.	Implement a program that takes a list of temperatures in Celsius as input 
//from the user. Convert each temperature to Fahrenheit using the formula 
//F = (C * 9/5) + 32 and store the converted temperatures in an array. 
//Use a while loop to perform the conversion for each temperature.


var tempInCels: number[] = [40, 0, -10, 15];

function convertToFahrenheit(celsius: number): number 
{
  return (celsius * 9/5) + 32;
}

function convertCelsToFh(celsiusTemperatures: number[]): number[] 
{
  var fahrenheitTemperatures: number[] = [];
  
  let index = 0;
  while (index < celsiusTemperatures.length) 
  {
    var celsius = celsiusTemperatures[index];
    var fahrenheit = convertToFahrenheit(celsius);
    fahrenheitTemperatures.push(fahrenheit);
    index++;
  }
  return fahrenheitTemperatures;
}
var tempInFh: number[] = convertCelsToFh(tempInCels);

console.log("--------------------------------------------------------------------");
console.log("Temperatures in Celsius   :",tempInCels);
console.log("--------------------------------------------------------------------");
console.log("Temperatures in Fahrenheit:", tempInFh);
console.log("--------------------------------------------------------------------");


