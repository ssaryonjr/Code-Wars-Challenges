// Remove exclamation marks - 8 Kyu
// https://www.codewars.com/kata/57a0885cbb9944e24c00008e

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    return s.split('').filter(c => c != '!').join('')
  }

console.log(removeExclamationMarks('Hello World!!!!!!!!'))


//Grabbed the string and use split method to turn it into an array. From it being an array I can use the filter method to remove any element that is a excalmation mark. I then join back the string together and return it. 