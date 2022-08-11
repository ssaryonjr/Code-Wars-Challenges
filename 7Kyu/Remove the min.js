// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output= [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]


//P: Integers, multiple numbers of same int is possible, empty array is possible.
//R: The original array list without the lowest number. And if there is multiple, remove first one.
/*
    [2,1,4,3] => [2,4,3];
    [7,2,12,3,2,5] => [7,12,3,2,5]
 */


///Use find method and locate the Math.min of the first occurence. And remove it and return the original array list without it.

//Another way is 

function removeSmallest(numbers) {
    let indexOfMin = numbers.indexOf(Math.min(...numbers));
    return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}
console.log(removeSmallest([5,3,2,'1',7]))