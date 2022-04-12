function filterRange(arr, a, b){
    let newArr = arr.filter(number => number >= a && number <= b)
  
    return newArr
  
  }
  
  console.log(filterRange([5, 3, 8, 1], 1,4))