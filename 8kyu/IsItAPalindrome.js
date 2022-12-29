// Problem
// Write a function that checks if a given string (case insensitive) is a palindrome.

// Solution

function isPalindrome(x) {
  let strLength = x.length
  if(x.length === 1 || x.length === 0){
    return true
  }else if (x.length === 2 && (x.charAt(0).toLowerCase() === x.charAt(x.length - 1).toLowerCase())){
            return true
  }else if (x.length === 3 && (x.charAt(0).toLowerCase() === x.charAt(x.length - 1).toLowerCase())) {
    return true
  }else if (x.length === 3 && (x.charAt(0).toLowerCase() != x.charAt(x.length - 1).toLowerCase())) {
    return false
  }else if (x.charAt(1).toLowerCase() === x.charAt(x.length - 2).toLowerCase()) {
    return true
  }else if (x.charAt(0).toLowerCase() != x.charAt(x.length - 1).toLowerCase()) {
    return false
  }else{
    return false
  }
  
}