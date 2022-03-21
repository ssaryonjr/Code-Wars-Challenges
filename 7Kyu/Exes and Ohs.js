// Exes and Ohs - 7 Kyu
// https://www.codewars.com/kata/55908aad6620c066bc00002a

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    str = str.toLowerCase().split('')
    let x = str.filter(x => x.includes('x')).length;
    let o = str.filter(o => o.includes('o')).length;
    return x === o ? true : false
}

console.log(XO("oXzxo"))