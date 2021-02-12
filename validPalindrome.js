// Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

// Example 1:
// Input: "aba"
// Output: True
// Example 2:
// Input: "abca"
// Output: True
// Explanation: You could delete the character 'c'.

var validPalindrome = function (s) {
  const string = s.split("");
  const flip = string.reverse().join("");

  if (s === flip) {
    return true;
  } else {
    for (let i = 0; i < string.length; i++) {
      
    }
  }

  return false;
};

console.log(validPalindrome("abca"));
