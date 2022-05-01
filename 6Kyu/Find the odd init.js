
// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).



//Grab the array and itearte through each element in the array.
//As you iterate through count the numbers and how many times they appear in the array.
//If the number appears only one time Or an odd amount of times return that number to the user.

function findOdd(arr) {
    return arr.find(e => arr.filter(num => num == e).length % 2)

console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))


//Grab the array and use the method find to find the first element in the array based on the filter condition that length of it is divisible by 2 ending in an odd number. And whatever element meets that condition gets returned to the console