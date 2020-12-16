// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

function isPalindrome(num) {
  var actual = num.toString();
  var expected = actual.split("").reverse().join("");

  if (actual === expected) {
    return true;
  }

  return false;
}

console.log(isPalindrome(222));
