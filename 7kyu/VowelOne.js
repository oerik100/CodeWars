// Problems
// Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

// All non-vowels including non alpha characters (spaces,commas etc.) should be included.

// Examples:

// vowelOne( "abceios" ) // "1001110"

// vowelOne( "aeiou, abc" ) // "1111100100"

// Solution
function vowelOne(s){
  let splitString = s.split('')
  let newArr = []
  for(let i = 0; i < splitString.length; i++){
    if(splitString[i].toLowerCase() == 'a' || splitString[i].toLowerCase() == 'e' || splitString[i].toLowerCase() == 'i' ||splitString[i].toLowerCase() == 'o' || splitString[i].toLowerCase() == 'u'){
      newArr.push('1')
    }else{
      newArr.push('0')
    }
    }
  return newArr.join('')
}