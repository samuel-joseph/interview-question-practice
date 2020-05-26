// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
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
  s = s.toUpperCase();
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

// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

var isValid = function (s) {
  var brackets = ("" + s).split("");
  var bucket = [];
  if (brackets.length === 0) return true;
  bucket.push(brackets[0]);
  for (let i = 1; i < brackets.length; i++) {
    switch (bucket[bucket.length - 1]) {
      case "(":
        if (brackets[i] === ")") {
          bucket.pop();
        } else {
          bucket.push(brackets[i]);
        }
        break;
      case "{":
        if (brackets[i] === "}") {
          bucket.pop();
        } else {
          bucket.push(brackets[i]);
        }
        break;
      case "[":
        if (brackets[i] === "]") {
          bucket.pop();
        } else {
          bucket.push(brackets[i]);
        }
        break;
      default:
        bucket.push(brackets[i]);
        break;
    }
  }
  if (bucket.length === 0) return true;
  else return false;
};

// Given an array nums and a value val, remove all instances of that value in-place and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// The order of elements can be changed. It doesn't matter what you leave beyond the new length.

// Example 1:

// Given nums = [3,2,2,3], val = 3,

// Your function should return length = 2, with the first two elements of nums being 2.

// It doesn't matter what you leave beyond the returned length.

var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};

// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

var moveZeroes = function (nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.push(nums.splice(i, 1).pop());
    }
  }
  return nums;
};

//Create a function where you will make an array
//of strings into an object, name of the fruit
//as key and value will be the length of fruit
// Example:
// [banana, apple, banana, orange]
// {"banana":2,"apple":1,"orange":1}

var arrayToObj = function (a) {
  let obj = {};
  for (let i = 0; i < a.length; i++) {
    if (!obj[a[i]]) {
      obj[a[i]] = 1;
    } else if (obj[a[i]]) {
      obj[a[i]] = obj[a[i]] + 1;
    }
  }
  return obj;
};
// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Example 1:

// Input: [2,2,1]
// Output: 1
// Example 2:

// Input: [4,1,2,1,2]
// Output: 4

var rotate = function (nums, k) {
  let i = 0;
  while (i < k) {
    nums.unshift(nums.pop());
    i++;
  }
  return nums;
};

// Input: 38
// Output: 2
// Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2.
//              Since 2 has only one digit, return it.

var addDigits = function (num) {
  var newNum = ("" + num).split("");
  let answer = 0;
  while (newNum.length > 1) {
    answer = parseInt(newNum.shift()) + parseInt(newNum.pop());
    while (newNum.length !== 0) {
      answer += parseInt(newNum.pop());
    }
    newNum = ("" + answer).split("");
  }
  return newNum.pop();
};

// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Example 1:

// Input: [2,2,1]
// Output: 1
// Example 2:

// Input: [4,1,2,1,2]
// Output: 4

var singleNumber = function (nums) {
  let answer = [];
  let multiple = [];
  for (let i = 0; i < nums.length; i++) {
    if (answer.length === 0) {
      answer.push(nums[i]);
    } else {
      if (nums[i] === answer[answer.indexOf(nums[i])]) {
        multiple.push(nums[i]);
        answer.splice(answer.indexOf(nums[i]), 1);
      } else if (nums[i] !== multiple[multiple.indexOf(nums[i])]) {
        answer.push(nums[i]);
      }
    }
  }
  return answer;
};

// Given two strings s and t which consist of only lowercase letters.

// String t is generated by random shuffling string s and then add one more letter at a random position.

// Find the letter that was added in t.

// Example:

// Input:
// s = "abcd"
// t = "abcde"

// Output:
// e

// Explanation:
// 'e' is the letter that was added.

var findTheDifference = function (s, t) {
  let a = s.split("");
  let b = t.split("");
  a = a.sort();
  b = b.sort();
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      b.push(b.splice(i, 1));
    }
  }
  return b.pop().toString();
};

// console.log(findTheDifference("abcd", "aabcd"));

// Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word (last word means the last appearing word if we loop from left to right) in the string.

// If the last word does not exist, return 0.

// Note: A word is defined as a maximal substring consisting of non-space characters only.

// Example:

// Input: "Hello World"
// Output: 5

var lengthOfLastWord = function (s) {
  if (s.length === 0 || s === undefined) return 0;

  if ((s >= "a" && s <= "z") || (s >= "A" && s <= "Z")) {
    let ar = s.split(" ");
    while (ar[ar.length - 1].length === 0) {
      ar.pop();
    }
    return ar.pop().length;
  } else {
    return 0;
  }
};

// console.log(lengthOfLastWord("     A "));
