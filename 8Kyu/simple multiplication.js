// Simple multiplication - 8 MediaKeyStatusMap
// https://www.codewars.com/kata/583710ccaa6717322c000105

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
    return number % 2 ? number * 9 : number * 8
}

console.log(simpleMultiplication(5))