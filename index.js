// two arguments and returns the difference between the first and second arguments.
function calculateDifference(a, b) {
    return a - b;
}
let difresult = calculateDifference(10, 5);
console.log(difresult);  


// one argument and returns true if the number is odd, and false if it is not.
function isOdd(num) {
    return num % 2 !== 0;
}
console.log(isOdd(3));
console.log(isOdd(4));


// an array of numbers and returns a new array containing only the even numbers
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
let filnumbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = filterEvenNumbers(filnumbers);
console.log(evenNumbers);


// an array of numbers and returns a new array sorted in descending order.
function sortArrayDescending(arr) {
    return arr.slice().sort((a, b) => b - a);
}
let numbers = [5, 3, 8, 1, 9];
let sortedNumbers = sortArrayDescending(numbers);
console.log(sortedNumbers);  


// a string and returns the same string with the first letter lowercased.
function lowercaseFirstLetter(str) {
    if (str.length === 0) return str;  
    return str.charAt(0).toLowerCase() + str.slice(1);
}
let result = lowercaseFirstLetter("Hello");
console.log(result);  

let result2 = lowercaseFirstLetter("JavaScript");
console.log(result2);  


// an array of numbers and returns the average of all elements.
function findAverage(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    const sum = numbers.reduce((total, num) => total + num, 0); 
    return sum / numbers.length; 
    }
    const nums = [10, 20, 30, 40, 50];
console.log(findAverage(nums)); 


// Write a function named isLeapYear that takes a year as an argument and returns true if the year is a leap year, and false if it is not.
function isLeapYear(year) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    }
    return false;  
    }
    console.log(isLeapYear(2020));
    console.log(isLeapYear(1900));
    console.log(isLeapYear(2000));
    console.log(isLeapYear(2023));
    