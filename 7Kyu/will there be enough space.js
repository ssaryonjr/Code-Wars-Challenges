// Will there be enough space? - 8 Kyu 
// https://www.codewars.com/kata/5875b200d520904a04000003/

// The Story:
// Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

// Task Overview:
// You have to write a function that accepts three parameters:

// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

// Usage Examples:
// cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
// cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting




function enough(cap, on, wait) {
    //Find total number of people who want to get on the bus.
     //Subtract cap from the total number of people. 

   let totalPeople = on + wait;

    //If end result is not zero, return the number of passengers he can't take.
    let sum =  cap - totalPeople;
   
    //If number is negative, convert to a positive number otherwise return 0.
    return sum < 0 ? Math.abs(sum) : 0
}

   console.log(enough(10,7,5))

//Test Cases:
// console.log((enough(10, 5, 5), 0))
// console.log((enough(5, 4, 2), 1))
// console.log((enough(10, 3, 6), 0))
//Return the amount of passengers that cannot be taken aboard. Otherwise return back 0 as the output. 