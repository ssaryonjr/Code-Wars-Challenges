// Reversed sequence - 8 Kyu 
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d/

// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

// FUNDAMENTALS


const reverseSeq = n => {
    let count = [];
    for (let i = 1; i <= n; i++){
        count.push(i)
    }
    return count.sort((p,c) => c - p)
  };

console.log(reverseSeq(10))