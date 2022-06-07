// If you can't sleep, just count sheep!! - 8 Kyu
// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.


const countSheep = function (num){
    let text = '';
    for (let i = 1; i <= num; i++){
        text += i + ' sheep...'
    }
    return text
}

console.log(countSheep(3))

