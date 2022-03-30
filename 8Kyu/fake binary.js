// Fake Binary - 8Kyu
// https://www.codewars.com/kata/57eae65a4321032ce000002d

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x){
    return x.split('').map(n => n < 5 ? n.replace(n,'0') : n.replace(n,'1')).join('')
  }
  console.log(fakeBin('45385593107843568'))