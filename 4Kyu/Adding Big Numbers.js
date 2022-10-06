//https://www.codewars.com/kata/525f4206b73515bffb000b21

// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

// Example
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"
// Notes
// The input numbers are big.
// The input is a string of only digits
// The numbers are positives

// return (Number(a) + Number(b)).toString(); // Fix me!

//1 split input a into an array of stringified numbers.
//2 do the same with input B.
//3  check length of input a & b for which is larger.
//4 create a for loop with either the value of input a or b length (whicherever is larger) and add each similar index to eachother for a single value.
//5 Create a if statement for the value being greater than 9. Pass the remainder to the next index. (value - 9) =>> carried to next index.
//I need to push each value into a new array.
//Each value will be .join('') together.
// return final result.

function add(a, b) {
  const answer = [];
  let carriedValue;
  let inputA = a.split("");
  let inputB = b.split("");

  let loopAmount;
  if (inputB.length > inputA.length) {
    let switchArray = inputA;
    inputA = inputB;
    inputB = switchArray;
  }

  let j = inputB.length - 1;

  for (let i = inputA.length - 1; i > -1; i--) {
    let sum = Number(inputA[i]) + Number(inputB[j] ?? 0);
    console.log("answer", sum);

    j--;
    if (carriedValue) {
      sum += carriedValue;
      carriedValue = undefined;
    }

    if (sum > 9) {
      console.log("before", sum);
      let splitSum = sum.toString().split(""); //[1, 8]

      console.log("after", sum);
      answer.unshift(Number(splitSum[1])); // 8 ... moved into answer
      carriedValue = Number(splitSum[0]); // 1 .. moved into carried array.
    } else {
      answer.unshift(sum);
    }
  }

  if (carriedValue) {
    answer.unshift(carriedValue);
  }
  return answer.join("");
}

console.log(add("199", "2299"));
