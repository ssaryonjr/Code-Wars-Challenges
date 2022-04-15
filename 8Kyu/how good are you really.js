//How good are you really? - 8 Kyu
//https://www.codewars.com/kata/5601409514fc93442500010b/

// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

function betterThanAverage(classPoints, yourPoints) {
    //{Put class points into a reduce array and then divide by 5. 
    let totalClassP = classPoints.reduce((a, c) =>{
        return a + c
    })
    totalClassP = totalClassP / classPoints.length 
    return totalClassP > yourPoints ? false : true ;
  }
  
  console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75))