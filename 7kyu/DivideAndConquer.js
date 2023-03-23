// Problems
// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

// Solution
function divCon(x){
    let total = 0
    for(let i = 0; i < x.length; i++){
      if(x[i] !== Number(x[i])){
        total = total - Number(x[i])
      }else{
        total = total + Number(x[i])
      }
    }
    return total
  }