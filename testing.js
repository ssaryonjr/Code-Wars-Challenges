let numbers = [7, 21, 54, 32, 5];

function iterate(arr){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > 15){
            console.log(arr[i])
        } 
    }
}


// iterate(numbers)

function filter(arr){
    return arr.filter(num => num < 21)
}

console.log(filter(numbers))