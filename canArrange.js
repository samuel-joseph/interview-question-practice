// Given an array of integers arr of even length n and an integer k.

// We want to divide the array into exactly n / 2 pairs such that the sum of each pair is divisible by k.

// Return True If you can find a way to do that or False otherwise.

// Example 1:

// Input: arr = [1,2,3,4,5,10,6,7,8,9], k = 5
// Output: true
// Explanation: Pairs are (1,9),(2,8),(3,7),(4,6) and (5,10).

var canArrange = function (arr, k) {
  let isDivisible = arr.length / 2;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; arr.length; j++) {
      if (arr[i] + arr[j] === k) {
        count++;
      }
    }
  }
  if (count >= isDivisible) {
    return true;
  }
  return false;
};
