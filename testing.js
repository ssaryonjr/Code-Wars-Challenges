//leetcode.com/problems/two-sum/
//Initial Solution: O(n^2)
https: var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; i++) {
      if (nums[i] + nums[j] === target) {
        return [nums.indexOf(nums[i]), nums.lastIndexOf(nums[j])];
      }
    }
  }
};

console.log(twoSum([2, 4, 5, 4], 9));

//Optimized Solution: O(n)
var twoSum = function (nums, target) {
  const hashMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const firstNum = nums[i];
    const secondNum = target - nums[i];
    if (hashMap.has(secondNum)) {
      return [i, hashMap.get(secondNum)];
    }
    hashMap.set(firstNum, i);
  }
};

//Steps:
//Initialized a new Map() into a variable.
//Iterate through each element with a for loop.
//Check if map already .has() number as a key that equals the targeted number minus the current number being iterated...
// If true => return the key of the index of that number and the current index of the value in the array we're iterating through (which is whatever i is currently equal to. (it would match the index of the array))
// If false => take the current value being checked and store it as the 'key' in the map and the (i) as the value. (i) is the current number the for loop is at and is also the index of that stored array value.
