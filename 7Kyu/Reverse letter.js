//https://www.codewars.com/kata/58b8c94b7df3f116eb00005b
//Reverse Letter - 7 Kyu

// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string


function reverseLetter(str) {
    return str
    .toLowerCase()
    .split('')
    .reverse()
    .filter(l => Array.from('abcdefghijklmnopqrstuvwxyz').includes(l))
    .join('')
    }
    
    console.log(reverseLetter("ultr53o?n")) //nortlu


