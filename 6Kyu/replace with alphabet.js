// Replace With Alphabet Position - 6 Kyu 
// https://www.codewars.com/kata/546f922b54af40e1e90001da/

// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )


function alphabetPosition(text) {
    text = text.toLowerCase().split('')
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    
    return text.map(letter => alphabet.indexOf(letter) + 1).filter(n => n > 0).join(' ')
    }
    
    console.log(alphabetPosition(`sam`))