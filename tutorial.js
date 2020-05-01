// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        // let array = [];
        // array.push(i);
        // array.push(j);
        return [i, j];
      }
    }
  }
};

// console.log(twoSum([2, 11, 15, 7], 9));

var lengthOfLongestSubstring = function (s) {
  let longestString = [];
  let string = [];
  for (let i = 0; i < s.length; i++) {
    if (i === s.length - 1) {
      for (let j = 0; j < string.length; j++) {
        if (string[j] === s[i]) unique = false;
      }
      if (string.length > longestString.length) {
        longestString = string;
      }
      console.log(
        `The answer is "${longestString.join("")}", with the length of ${
          longestString.length
        }`
      );
      return longestString.length;
    } else if (string.length === 0) {
      string.push(s[i]);
    } else {
      let unique = true;
      for (let j = 0; j < string.length; j++) {
        if (string[j] === s[i]) unique = false;
      }
      if (unique) {
        string.push(s[i]);
      } else if (unique && s.length - 1 !== i) {
        longestString.push(string);
        string = [];
        string.push(s[i]);
      }
    }
  }
};

console.log(lengthOfLongestSubstring("abcabcbb"));
