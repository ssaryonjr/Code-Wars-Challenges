// Sum Mixed Array - 8 Kyu  
// https://www.codewars.com/kata/57eaeb9578748ff92a000009

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.


function sumMix(x){
    return x.reduce((p,c) => Number(p) + Number(c))
}

console.log(sumMix([9, 3, '7', '3']))