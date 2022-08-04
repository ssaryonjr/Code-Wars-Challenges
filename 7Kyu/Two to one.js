// Two to One - 7 Kyu 
// https://www.codewars.com/kata/5656b6906de340bd1b0000ac

//P: Two alphabetical strings passed in.
//R: One string with only with each unique string repeating once in alphabetical order.
/*E: a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"*/ 


//Concat both arrays into one.
//Put them into a new set and sort them.
//Lower case
//return it 

function longest(s1, s2) {
    let answer =  new Set(s1.concat(s2).split('').sort())
    return Array.from(answer).join('')
}
console.log(longest("aretheyhere", "yestheyarehere")) //"aehrsty"