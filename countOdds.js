// Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).

// Example 1:

// Input: low = 3, high = 7
// Output: 3
// Explanation: The odd numbers between 3 and 7 are [3,5,7].

var countOdds = function (low, high) {
  let answer = 0;
  for (let i = low; i <= high; i++) {
    if (i % 2 !== 0) {
      answer++;
    }
  }
  return answer;
};

console.log(countOdds(8, 10));
