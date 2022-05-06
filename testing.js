function findOdd(nums){
    return nums.find(element => nums.filter(num => num == element).length % 2)
}

console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))