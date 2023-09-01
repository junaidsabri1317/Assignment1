// Q1 - Write a program to convert the temperature 
// from Celsius to Fahrenheit and vice verse.C = (F − 32) × 5⁄9
//F = C(9⁄5) + 32
var temp:number=96
var cels:number=(temp- 32) * 5/9
console.log("The temprature in celsiusis is",cels);
var faranH:number=(temp*5/9) +32
console.log("The temprature in Faranhite is",faranH);

// Q2 - Write a program that calculates the percentage.
var total:number=678
var obt:number=645
var perc:number=(obt/total)*100
console.log ("The Percentage of the given number is =", perc)

// Q3 - Write a program that converts given number of 
// days in to weeks and days such as 17 days = 2 weeks and 3 days.
var num1:number=91
var weeks:number=num1/7
var roundWeeks:number=Math.floor(weeks)
var days:number=num1%7
console.log(roundWeeks,"weeks and",days,"Days")

// Q4 - Write a program that calculates the discount for a 
// product based on its price. If the price is above $100, 
// apply a 10% discount; otherwise, apply a 5% discount.
var price:number=100
var disc1:number=price*10/100
var disc2:number=price*5/100
if (price>100) 
{
    console.log("Total price after 10% discount is,",price-disc1)
} 
else 
{
    console.log("Total price after 5% discount is,",price-disc2)    
}

// Q5 - Create a program that determines the category of a user-provided 
// age. If the age is between 0 and 12, print "Child." 
// If it's between 13 and 19, print "Teenager." Otherwise, 
// print "Adult."
var age:number=25
if(age>=0 && age<=12){
    console.log("You are a Child")
}
else if(age>12 && age<=19)
{
    console.log("You are a Teenager")
}
else
{
    console.log("You are an Adult")
}

// Q No.6.	Write a program that takes temperature and check it. 
// If it is cold then suggest the user to wear warm 
// clothes and so on according to the weather.
var tempr:number=36
if (tempr>=35) 
{
    console.log("Its Very Hot weather outside..Use Heat Stroke precautions")    
}
else if (tempr<35 && tempr>=25)
{
    console.log("The weather is warm outside. use soft clothes")
}
else if (tempr<25 && tempr>=18)
{
    console.log("The weather is normal outside")
}
else if (tempr<18 && tempr>=15)
{
    console.log("Its Autumn starting")
}
else 
{
    console.log("The weather is Cold outside. wear warm clothes")
}

// Q No.7.	Write a program that checks if the given number 
// is  divisible by 3 or 5 or both or not divisible by anyone 
// show output accordingly.
var num:number=20
if (num%3==0 && num%5==0) 
{
    console.log("The given number is divisible by 5 and 3 both")    
} 
else if (num%3==0 && num%5!=0) 
{
    console.log("The given number is divisible by 3 but not by 5")        
}
else if (num%3!=0 && num%5==0) 
{
    console.log("The given number is divisible by 5 but not by 3")        
}
else 
    console.log("The given number is not divisible by 3 nor by 5")

    // Q No.8.	Write a program that checks if the given year 
// is leap year or not.
var year:number=1999
if (year%4==0) 
{
    console.log("The year" ,year, " is Leap Year")    
} 
else 
{
    console.log("The year", year, "is not a Leap year")    
}

// Q No.9.	Develop a program that determines the day of the week. 
// Ask the user for a number (1-7) and use nested
// if statements to print the corresponding day's name.
var day:number=6
if (day==1) 
{
    console.log("Monday")
} 
else if (day==2)
{
    console.log("Tuesday")
}
else if (day==3)
{
    console.log("Wednesday")
}
else if (day==4)
{
    console.log("Thursday")
}
else if (day==5)
{
    console.log("Friday")
}
else if (day==6)
{
    console.log("Satureday")
}
else
{
    console.log("Sunday")
}


// Q No.10.	Write a program that takes the number of units consumed 
// by a user if it is greater than 100 then add 10% tax if greater 
// than 200 then add 15% of tax so on up to if greater than 500 then 
// add 25% of tax. Where the tax amount will be calculated by the 
// amount of bill.
var unitsConsumed:number=80
var unitPrice:number=10
var billAmount:number=unitsConsumed*unitPrice
var tax10:number=(0.1*billAmount)
var tax15:number=(0.15*billAmount)
var tax20:number=(0.20*billAmount)
var tax25:number=(0.25*billAmount)
var tax35:number=(0.35*billAmount)

if (unitsConsumed>100 && unitsConsumed<=200) 
{
    console.log("Bill Amount=", billAmount, "added 10% Tax is", (tax10),"Total Bill Amount plus tax is =", billAmount+tax10)
}
else if (unitsConsumed>200 && unitsConsumed<=300) 
{
    console.log("Bill Amount=", billAmount, "added 15% Tax is", tax15, "Total Bill Amount plus tax is =", billAmount+tax15)
}
else if (unitsConsumed>300 && unitsConsumed<=400) 
{
    console.log("Bill Amount=", billAmount, "added 20% Tax is", tax20, "Total Bill Amount plus tax is =", billAmount+tax20)
}
else if (unitsConsumed>400 && unitsConsumed<=500) 
{
    console.log("Bill Amount=", billAmount, "added 25% Tax is", tax25, "Total Bill Amount plus tax is =", billAmount+tax25)
}
else if (unitsConsumed>500) 
{
    console.log("Bill Amount=", billAmount, "added 35% Tax is", tax35, "Total Bill Amount plus tax is =", billAmount+tax35)
}
else 
{
    console.log("The Units Consumed are less than 100, Bill amount wihtout Tax is=", billAmount)
}


