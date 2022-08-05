// Highest Scoring Word - 6 Kyu 
// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272

function high(x){
    const alphabet = [...' abcdefghijklmnopqrstuvwxyz'];
    const answer = []
    x = x.toLowerCase().split(' ')

    for (let i = 0; i < x.length; i++){
        let value = x[i].split('').map(n => n = alphabet.indexOf(n)).reduce((c,p) => c + p);
        answer.push(value)
    }

    const largest = answer.indexOf(Math.max(...answer))
    return x[largest]
}

console.log(high('man i need a taxi up to ubud'))


//P: alphabetical strings only.
//R: Return a single string back with the highest word number.
//E: 'bb a' => 'bb'  'hi hello' => 'hello'  'aa b' => 'aa' 


//Create an array that holds the string of alphabets.
//Add an empty value to the front so the alhpabets are indexed based off 1 and not 0.
//Take the argument string and split it by each word. 
//Evaluate each word in a for loop and split it again by each letter in the word and give it an integer value based off the index.
//Use reduce to accumlate that number to one value.
// OR use sort to get the UTF number.
//Return the highest number.


