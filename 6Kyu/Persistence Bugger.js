// Persistence Bugger - 6 Kyu

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)



//Passed in another variable named 'iterator' that will count everytime the function is called back. (Passing it inside the function body will ruin it so you have to do it where it cant be tampered)

function persistence(num, iteration = 1){
    //Grabbed the passed in value and split it into an array so I can multiple each one.Started the initial multiplication count from the first number in the created array.
    num = String(num).split('') 
    let count = num[0]; 
  
  //Checks if the value passed in is a single digit AND the current iteration is at the first one. If so we return 0 and stop the function because a single digit number cannot multiply.
    if ((num.length == 1) && (iteration = 1)){
      return 0
    } 
  
  //If the first value passed is NOT a single number we will multiply it by the first number which we declared earlier by however many numbers were passed in the value
    for(let i = 1; i < num.length; i++){
      count *= Number(num[i])
    }
  
    //If count isn't less than 10 (meaning we did what we needed) then we will use recursion to call the function back and do it again until the number is less than 10.
    return count < 10 ? iteration : persistence(count, iteration + 1)
    
  }
  
  console.log(persistence(22))