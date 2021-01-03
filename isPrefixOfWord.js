// Given a sentence that consists of some words separated by a single space, and a searchWord.

// You have to check if searchWord is a prefix of any word in sentence.

// Return the index of the word in sentence where searchWord is a prefix of this word (1-indexed).

// If searchWord is a prefix of more than one word, return the index of the first word (minimum index). If there is no such word return -1.

// A prefix of a string S is any leading contiguous substring of S.

// Example 1:

// Input: sentence = "i love eating burger", searchWord = "burg"
// Output: 4
// Explanation: "burg" is prefix of "burger" which is the 4th word in the sentence.

function isPrefixOfWord(sentence, searchWord) {
  const arr = sentence.split(" ");
  let count = 0;
  let index = [];

  for (let i = 0; i < arr.length; i++) {
    let temp = "";
    for (let j = 0; j < arr[i].length; j++) {
      temp += arr[i][j];
      if (temp === searchWord) {
        count++;
        index.push(i);
      }
    }
  }

  if (index.length < 1) {
    return -1;
  }

  return index[0] + 1;
}

console.log(isPrefixOfWord("love errichto jonathan dumb ", "dumb"));
