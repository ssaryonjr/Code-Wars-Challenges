// Testing 1-2-3 - 7 Kyu 
// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9

// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

var number=function(array){
    const answer = []
    for (let i = 1; i <= array.length; i++){
        answer.push(`${i}: ${array[i - 1]}`)
    }
    return answer
  }

  console.log(number(["a", "b", "c"]))