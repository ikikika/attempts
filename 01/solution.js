/*
JAvascript version

Task: When given a pattern and an input string, check if the input string matches the pattern.

Assumption: each repeated substring are of the same length

Example:

pattern: xyx
inputstring: abcjklabc
output: true

pattern: xxy
inputstring: abcjklabc
output: false

To run this code, 
1. ensure node is installed
2. run `node solution.js` from the containing folder

*/

const pattern = "xyx";
const inputString = "abcjklabc";

function matchPattern(inputString, pattern) {
  const n = inputString.length;
  const m = pattern.length;

  // If n not divisible by m, automatically output false
  if (n % m) {
    return false;
  }

  // get length of each substring
  const p = n / m;

  // split inputString into substrings
  const substrings = inputString.match(new RegExp(".{1," + p + "}", "g"));

  // map pattern to substrings
  let mapping = [];
  for (let i = 0; i < m; i++) {
    mapping.push([pattern[i], substrings[i]]);
  }
  // remove duplicate substrings
  mapping = mapping.filter(((t = {}), (a) => !(t[a] = a in t)));

  // each character in pattern should correspond to only one substring
  let check = [];
  for (let j = 0; j < mapping.length; j++) {
    check.push(mapping[j][0]);
  }

  // if each character in pattern correspond to more than 1 substring,
  // means inputString not matching pattern
  return new Set(check).size === check.length;
}

console.log(matchPattern(inputString, pattern));
