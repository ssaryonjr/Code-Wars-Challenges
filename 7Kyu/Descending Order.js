// Descending Order - 7 Kyu
//https://www.codewars.com/kata/5467e4d82edf8bbf40000155

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

// FUNDAMENTALSFUNCTIONSCONTROL FLOW

function descendingOrder(n){
    let stringNum = n
        .toString() //Converted the number in the parameter into a string for reasons below.
        .split('') //Turning it into a string allows use to use the string method split to divide it into individual array elements.
        .sort((a,b) => b - a) //From then we can use an array method to sort them in order.
        .join('') //We then use the array method join to put the individual elements back into a single string.
        return parseInt(stringNum) //We then return the numbers from a string to an integer. 
    }
    
    console.log(descendingOrder(5023123))