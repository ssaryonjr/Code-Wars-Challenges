//Multiples of 3 or 5 - 6 Kyu
//https://www.codewars.com/kata/514b92a657cdc65150000006

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.


function solution(number){
    let sum = []
  for(let i = 0; i < number; i++){
      if ((i % 3 === 0) && (i % 5 == 0)){sum.push(i)}
      else if (i % 3 === 0) {sum.push(i)}
      else if (i % 5 === 0) {sum.push(i)}
  }

  sum = sum.filter((c, index) => sum.indexOf(c) === index).reduce((prev,current) => prev + current, 0)
  return sum
}

console.log(solution(25))

//Create an empty array that will pass in the sum.
//Create a for loop that will iterate through every number as long as its below it.
//Within the for loop create an if statement that checks if the number is divisible by 3 & 5 and will equal 0. If that number is true we grab that number and push it into the array sum.
//We create another if statement that checks if the number is divisible by onyl 3.. or by only 5 individually.. and we also push those numbers into the array of sum.
//After we push all the numbers that are multiples of 3 and 5 we will have duplicates because every if statement will grab them seperately (meaning if they are divisible by 3 and 5 it will show up twice)
//We then grab the current array and we filter them by getting rid of any multiples. Refer to: https://www.javascripttutorial.net/array/javascript-remove-duplicates-from-array/

//After we get rid of any multiples we then use the reduce method to add them all up into a single digit. Then we return that for the answer.