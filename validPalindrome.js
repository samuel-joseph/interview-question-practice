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
    let newString = [];

    for (let i = 0; i < string.length; i++) {
      for (let j = 0; j < string.length; j++) {
        if (i !== j) {
          newString.push(string[j]);
        }
      }
      console.log(newString);
      let check = newString.join("");
      let reverseCheck = newString.reverse().join("");
      if (check === reverseCheck) {
        return true;
      }
      newString = [];
    }
  }

  return false;
};

console.log(validPalindrome("abcaf"));
