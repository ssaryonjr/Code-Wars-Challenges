// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)



function isIsogram(str) {
    str = str.toLowerCase() //string is converted all to lower case for simplicity.
    
    for (var i = 0; i < str.length; i++) { //Grabbing the string's character length and iterating through it.
      if (str.indexOf(str.charAt(i), i + 1) >= 0) { //We are searching inside of the string's index to grab the strings first letter using charAt (which will reverse and grab the actual letter based on the number we put in. So 0 will grab the first letter, 1 will grab the second letter, etc.). After we grab the initial letter, we are searching to see if we can find it in the second letter or after.  To do this we take the i (in this first run it is 0) and we add an additional +1 so the search starts from the second index (becasue if it starts from the first index it will grab itself which wont actually check if it is duplicated) If the letter is found again, it will be greater than 0 which will trigger the condition to produce false (which means we did find a duplicate letter and achieved the goal of the question. HOWEVER, if it doesn't find a duplicate it will return -1 which means we did not find a duplicate. And then the for loop gets updated again since the first iteration around indexOf() could not find what it was looking for. And the iteration is updated from 0 to 1. Meaning we look from the second index, and then the indexOf() second parameter which tells us what index to start looking from is also updated +1. So we will then grab the second letter, and start searching if it is duplicated again through the third and beyond. If not the cycle continues until we checked every case in the string.)
        return false
      }
    }
    
    return true
  }


console.log(isIsogram('Mana'))


//Other answers: 
function isIsogram(str){
    return new Set(str.toUpperCase()).size == str.length;
  }

  //Explanation: 
  //new Set is a way  filter out any duplicate characters in a  string. (basically if the string characters match eachother then it will be filtered out only 1 will stay.) and .size is the same as using .length. It checks if the original string length matches the new Set string length (which again filters out duplicates). So if it remains the same that means that there was no duplicates, if they do not equal then there was duplicates.