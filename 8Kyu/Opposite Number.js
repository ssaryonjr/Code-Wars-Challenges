//Opposite Number - 8 Kyu
// https://www.codewars.com/kata/56dec885c54a926dcd001095

// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

function opposite(n){
    return (n - n) - n
}

console.log(opposite(55))