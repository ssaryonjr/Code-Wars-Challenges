//Removing Elements - 8 Kyu
//https://www.codewars.com/kata/5769b3802ae6f8e4890009d2

// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!


//Create an iteration that loops through every even number of the array. 
function removeEveryOther(arr){
    let Oddnumbers = [];

    arr.forEach((element, index) => {
        index % 2 == 0 ? Oddnumbers.push(element) : element;
        
    });
    return Oddnumbers
    
  }

  console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]))