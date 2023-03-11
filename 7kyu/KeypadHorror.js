// Problems
// Having two standards for a keypad layout is inconvenient!
// Computer keypad's layout:
// 7 8 9  \n
// 4 5 6  \n
// 1 2 3  \n
//   0 \n

// Cell phone keypad's layout:
// 1 2 3\n 
// 4 5 6\n  
// 7 8 9\n  
//   0\n

// Solve the horror of unstandardized keypads by providing a function that converts computer input to a number as if it was typed on a phone.

// Example:
// "789" -> "123"

// Solution
function computerToPhone(numbers){
    let splitString = numbers.split('')
    let newArr = []
    for(let i = 0; i < splitString.length; i++){
      if(splitString[i] == '7'){
        newArr.push('1')
      }else if(splitString[i] == '8'){
        newArr.push('2')
      }else if(splitString[i] == '9'){
        newArr.push('3')
      }else if(splitString[i] == '4'){
        newArr.push('4')
      }else if(splitString[i] == '5'){
        newArr.push('5')
      }else if(splitString[i] == '6'){
        newArr.push('6')
      }else if(splitString[i] == '1'){
        newArr.push('7')
      }else if(splitString[i] == '2'){
        newArr.push('8')
      }else if(splitString[i] == '3'){
        newArr.push('9')
      }else{
        newArr.push('0')
      }
    }
    return newArr.join('')
  }