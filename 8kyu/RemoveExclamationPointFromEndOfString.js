// Problems
// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// remove("Hi!") == "Hi"
// remove("Hi!!!") == "Hi!!"
// remove("!Hi") == "!Hi"
// remove("!Hi!") == "!Hi"
// remove("Hi! Hi!") == "Hi! Hi"
// remove("Hi") == "Hi"

// Solution
function remove (string) {
  let newArr = string.split('')
  let len = newArr.length
  if(newArr[len-1] == '!'){
    newArr.pop()
  }
  return newArr.join('');
}