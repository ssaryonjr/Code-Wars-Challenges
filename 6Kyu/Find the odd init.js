
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


//If we want to find the number in the array that has an odd amount of times in the sequence and there will almost always be one the easiest approach is to find the first index (since theres only one anyways)... and then compare if that index is equal to the element with their lenght.. (or count) divided by 2 to be an odd number.