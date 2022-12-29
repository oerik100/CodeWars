// Problem
  // There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

  // Your task is to change the letters with diacritics:
  
  // ą -> a,
  // ć -> c,
  // ę -> e,
  // ł -> l,
  // ń -> n,
  // ó -> o,
  // ś -> s,
  // ź -> z,
  // ż -> z
  // and print out the string without the use of the Polish letters.
  
  // For example:
  
  // "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"



// Solution
function correctPolishLetters (string) {
  let newString = string.replace('ą', 'a').replace('ć', 'c').replace('ę', 'e').replace('ł', 'l').replace('ń','n').replace('ó','o').replace('ś','s').replace('ż','z').replace('ź', 'z').replace('ł', 'l').replace('ą', 'a')
  return newString
}

