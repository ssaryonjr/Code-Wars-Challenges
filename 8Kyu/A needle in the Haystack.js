//A Needle in the Haystack - 8 Kyu
//https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/javascript

// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// should return "found the needle at position 5" (in COBOL "found the needle at position 6")

function findNeedle(haystack){
    let indexFound;

    haystack.forEach((e, i) =>{
        if (e === 'needle'){
            indexFound = i;
        }
    })
    return `found the needle at position ${indexFound}`
}

console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]))

//Best practice:
// function findNeedle(haystack) {
//     return "found the needle at position " + haystack.indexOf("needle");
//   }