// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

var threeSum = function (nums) {
  let answer = [];
  for (let i = 0; i < nums.length; i++) {
    let x = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      let y = nums[j];
      for (let k = j + 1; k < nums.length; k++) {
        y += nums[k];
        if (-x === y) {
          let temp = [nums[i], nums[j], nums[k]];
          answer.push(temp);
          break;
        }
      }
    }
  }

  return answer;
};

console.log(threeSum([0, 0, 0, 0]));
