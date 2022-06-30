// Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence - 8 Kyu 
// https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed

// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

function replace(s){
    return s.split('').map(l => Array.from('aeiouAEIOU').includes(l) ? l = '!' : l).join('')
 }
 
 console.log(replace("ABCDE"))