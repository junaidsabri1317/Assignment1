"use strict";
// Assignment No.2
// Q 1:  Write a program that calculates the area of a rectangle.
var lenghth = 12;
var width = 15;
console.log("The area of rectangle is");
console.log(lenghth * width);
// Q 2: Write a program that takes input and calculates the volume of a cube.
var height = 10;
var width = 10;
var length = 10;
var area = height * length * width;
console.log(area);
// Q 3:  Write a program that checks if a given number is positive, negative, or zero.
var num = -2;
if (num > 0) {
    console.log("The given number is Positive");
}
else if (num < 0) {
    console.log("The given number is Negative");
}
else
    ("The given number is Zero");
// Q 4:   Write a program that checks if a given number is even or odd.
var num = 78;
if (num % 2 == 0) {
    console.log("The given number is Even ");
}
else {
    console.log("The given number os Odd");
    // Q 5:  Write a program that determines if a person is eligible to vote based on their age.
    var age = 18;
    if (age >= 18) {
        console.log("The person is eligible to vote");
    }
    else {
        console.log("The person is not eligible to vote");
    }
    // Q 6:  Write a program that calculates the result of a mathematical expression.	((10 + 5) * 3 - 2) / (4 % 3)  - 7)
    var num1 = 10;
    var num2 = 5;
    var num3 = 3;
    var num4 = 2;
    var num5 = 4;
    var num6 = 7;
    var result = (((num1 + num2) * num3 - num4) / (num5 % 3) - num6);
    console.log(result);
}
