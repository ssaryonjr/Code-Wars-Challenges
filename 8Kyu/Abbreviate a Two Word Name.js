//Abbreviate a Two Word Name - 8 Kyu
//https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/solutions/javascript

// Description:
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){
    let firstLetters = name
    .split(' ')
    .map(word => word[0].toUpperCase())
    .join('.')
    return firstLetters
}

console.log(abbrevName('sam saryon'));