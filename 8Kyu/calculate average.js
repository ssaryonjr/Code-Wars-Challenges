// Calculate average - 8 Kyu
// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.


function find_average(array) {
    return array.length == 0 ? 0 : array.reduce((prev,curr) => prev + curr) / array.length
   }
   
   console.log(find_average([1,2,3,4]))