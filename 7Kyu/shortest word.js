// Shortest Word - 7 Kyu
// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

// // Simple, given a string of words, return the length of the shortest word(s).

// // String will never be empty and you do not need to account for different data types.

function findShort(s){
    s = s.split(' ').sort((p,c) => p.length - c.length)
    return s[0].length
  }
  
  console.log(findShort("bitcoin take over the world maybe who knows perhaps"))