// Problems
// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

// Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
// --the order is: uppercase letters, lowercase, numbers and special characters.
// More examples in the test cases.

// Solution
function solve(s){
 let upperCase = 0
 let lowerCase = 0
 let numbers = 0
 let special = 0
 

s.split('').forEach(letter => {
  if(/[a-z]/.test(letter)){
    lowerCase++
  }else if(/[A-Z]/.test(letter)){
    upperCase++
  }else if(/[0-9]/.test(letter)){
    numbers++
  }else{
    special++
  }
})
  return [upperCase, lowerCase, numbers, special]
}