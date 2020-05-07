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
  let longest = [];
  let longNew = [];
  let unique = true;
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < longest.length; j++) {
      if (longest[j] === s[i]) unique = false;
    }
    if (unique) longNew.push(s[i]);
    else {
      if (longNew.length >= longest.length) {
        longest = longNew;
      }
    }
  }
  return longest.length;
};

// console.log(lengthOfLongestSubstring("au"));
// console.log(lengthOfLongestSubstring("abcabcbb"));

var isPalindrome = function (x) {
  var digits = ("" + x).split("");
  let y = digits.length - 1;

  let isPalindrome = false;
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] === digits[y - i]) {
      isPalindrome = true;
    } else {
      isPalindrome = false;
      return isPalindrome;
    }
  }
  return isPalindrome;
};

var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = nums.length - 1; j >= 0; j--) {
      if (i != j && nums[i] === nums[j]) {
        nums.splice(nums.indexOf(nums[j]), 1);
      }
    }
  }
  return nums.length;
};

var romanToInt = function (s) {
  var romans = ("" + s).split("");
  let total = 0;
  let I = 1;
  let V = 5;
  let X = 10;
  let L = 50;
  let C = 100;
  let D = 500;
  let M = 1000;
  let prev = 0;
  let num = 0;

  for (let i = 0; i < romans.length; i++) {
    switch (romans[i]) {
      case "I":
        num += 1;
        break;
      case "V":
        num += 5;
        break;
      case "X":
        num += 10;
        break;
      case "L":
        num += 50;
        break;
      case "C":
        num += 100;
        break;
      case "D":
        num += 500;
        break;
      case "M":
        num += 1000;
        break;
      // code block
    }
    if (prev < num) {
      num -= prev;
      total -= prev;
      prev = num;
      total += num;
      num = 0;
    } else {
      prev = num;
      num = 0;
      total += prev;
    }
  }
  return total;
};

console.log(romanToInt("XIX"));