// Problems
// Debug   function getSumOfDigits that takes positive integer to calculate sum of its digits. Assume that argument is an integer.

// Example
// 123  => 6
// 223  => 7
// 1337 => 14

// Solution
function getSumOfDigits(integer) {
  let sum = 0;
  let digits =  Array.from(integer.toString()).map(Number)
  for(var ix = 0; ix < digits.length; ix++) {
    sum = sum + digits[ix];
  }
  return sum;
}