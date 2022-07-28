function towerBuilder(nFloors) {
    const answer = [];
    for (let i = 0; i < nFloors; i++){
        let star = ' * '
        if (i == 0){
            answer.push(star)
        } else {
            answer.push(star.repeat(i + (1 + i))) 
        }
    }
    return answer
  }

  console.log(towerBuilder(4))


  //P: Positive integers only.
  /*R *
     ***
    ***** */
//E: Stated above. Wants only stars returned back. 

//Create a array literal storing it as answer. []
//Create a for loop, iterate +2 everytime. 
//Update stars with two more.
           

//real answer:
function towerBuilder(nFloors) {
    var tower = [];
    for (var i = 0; i < nFloors; i++) {
      tower.push(" ".repeat(nFloors - i - 1)
               + "*".repeat((i * 2)+ 1)
               + " ".repeat(nFloors - i - 1));
    }
    return tower;
  }