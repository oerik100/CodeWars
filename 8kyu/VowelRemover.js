// Problem
// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"

// Solution
function shortcut (string) {
    return string.replace('a', '').replace('e', '').replace('i', '').replace('o', '').replace('u', '').replace('o', '').replace('o', '').replace('a', '').replace('e', '').replace('u', '').replace('i', '').replace('i', '').replace('i', '').replace('u', '').replace('a', '');
  }