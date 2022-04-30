//Total amount of points - 8 kyu
//https://www.codewars.com/kata/5bb904724c47249b10000131
// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point
// Notes:

// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4


function points(games) {
    // totalPoints will store the accumulated points
    let totalPoints = 0;
      
      // loop through the games array to get the scores
      for(i=0; i<games.length; i++) {
     
       // assign the scores, since games is an array of strings, we must use Number() to turn the string scores into numbers
        let xScore = Number(games[i].charAt(0)); 
        let yScore = Number(games[i].charAt(2));
        
        // Add points depending on the values of xScore compared to yScore
        if (xScore > yScore) { totalPoints += 3; }
        if (xScore < yScore) { totalPoints += 0; }
        if (xScore === yScore) { totalPoints += 1; }
      }
      
      return totalPoints;
}


points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"])




//first we create a variable to store the end value. 
//next we create a for loop that will iterate through each element in the array.
//As each element in the array is iterated we create a variable that will store the number on the left and the number on the right of the semi colon. This is done by first using Number() and wrapping the rest of the value into it so it converts into a number. We grab the first element in the first array. g