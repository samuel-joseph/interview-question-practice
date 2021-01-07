// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

function isPalindrome(num) {
  var actual = num.toString();
  var expected = actual.split("").reverse().join("");

  if (actual === expected) {
    return true;
  }

  return false;
}

function isPalindrome2(num) {
  var expected = ("" + num).split("");
  var actual = [];

  for (let i = expected.length - 1; i >= 0; i--) {
    actual.push(expected[i]);
  }
  console.log(expected);
  console.log(actual);
  if (expected.join() === actual.join()) {
    return true;
  }

  return false;
}

// console.log(isPalindrome2(121));
console.log(isPalindrome("lol"));
