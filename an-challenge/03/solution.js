/*
Given a string S consisting of lowercase English characters,
determine if you can make it a palindrome by removing at most 1 character

input: "abcdcba"
output: true

input: abc
output: false

*/

const S = "abcdcba";

function checkValidString(str, start, end) {
  for (let i = start; i <= Math.floor((start + end) / 2); i++) {
    if (str[i] !== str[end - (i - start)]) {
      return false;
    }
  }
  return true;
}

function checkValidPalindrome(str) {
  for (let i = 0; i <= Math.floor(str.length / 2); i++) {
    const end = str.length - 1 - i;
    if (str[i] !== str[end]) {
      return (
        checkValidString(str, i, end - 1) || checkValidString(str, i + 1, end)
      );
    }
  }
  return true;
}
console.log(checkValidPalindrome(S));
