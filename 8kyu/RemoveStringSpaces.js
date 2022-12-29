// Problem
//Simple, remove the spaces from the string, then return the resultant string.

// Solution
function noSpace(x){
  let xnew = x.replace(/\s+/g, '')
  return xnew
}