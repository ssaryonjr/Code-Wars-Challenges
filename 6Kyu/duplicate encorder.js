// Duplicate Encoder - 6 Kyu
// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!


function duplicateEncode(word){
    return word
      .toLowerCase()
      .split('')
      .map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('');
  }

  //OR

  function duplicateEncode(word){
    let result = "";
    word = word.toLocaleLowerCase();
    for (var i = 0; i < word.length; i++) {
      word.split(word.charAt(i)).length > 2 ? result += ")" :result += "(";
    }
    return result;
}