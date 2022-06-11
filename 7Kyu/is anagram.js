// Anagram Detection - 8 Kyu
// https://www.codewars.com/kata/529eef7a9194e0cbc1000255

// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

// write the function isAnagram

// var isAnagram = function(test, original) {
//     //turn both paramters into lower case. 
//     //filter out any words that are not in original from test.
//     //check if length if still the same, if so, return true else false.

//     test = test.toLowerCase().split('')
//     original = original.toLowerCase().split('')
//     return test.filter(l => original.includes(l)).length === original.length
// };

var isAnagram = function(test, original) {
    var t = test.toLowerCase().split('').sort().join('');
    var o = original.toLowerCase().split('').sort().join('');
    return [t, o]
  };



//Only strings passed in paramters for both. not case sensitive.
// expecting a boolean value return. 
// 

console.log(isAnagram("foefet", "toffee")) 
console.log(isAnagram("Buckethead", "DeathCubeK"))
console.log(isAnagram("ound", "round")) 
console.log(isAnagram("dumble", "bumble"))
