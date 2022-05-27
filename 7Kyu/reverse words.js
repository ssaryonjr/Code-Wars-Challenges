// Reverse words - 7Kyu
// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    return str.split(' ').map(word => word.split('').reverse().join('')).join(' ')
}

console.log(reverseWords("This is an example!"))