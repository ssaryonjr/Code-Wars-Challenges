//What is between - 8 Kyu
//https://www.codewars.com/kata/55ecd718f46fba02e5000029/

// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example

// a = 1
// b = 4
// --> [1, 2, 3, 4]

function between(a, b) {
    let answer = [];
    for (let i = a; i <= b; i++){
       answer.push(i)
    }
    return answer
}

console.log(between(-2,2))