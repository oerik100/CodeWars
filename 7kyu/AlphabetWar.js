// Problems
// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

// Task
// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1
// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1
// The other letters don't have power and are only victims.

// Example
// alphabetWar("z");        //=> Right side wins!
// alphabetWar("zdqmwpbs"); //=> Let's fight again!
// alphabetWar("zzzzs");    //=> Right side wins!
// alphabetWar("wwwwwwz");  //=> Left side wins!

// Solution
function alphabetWar(fight){
  let rightTotal = 0
  let leftTotal = 0
  let arr = fight.split('')
  
  
  for(let i = 0; i < arr.length; i++){
    if(arr[i] == 'w'){
      leftTotal += 4
    }else if(arr[i] == 'p'){
      leftTotal += 3
    }else if(arr[i] == 'b'){
      leftTotal += 2
    }else if(arr[i] == 's'){
      leftTotal += 1
    }else if(arr[i] == 'm'){
      rightTotal += 4
    }else if(arr[i] == 'q'){
      rightTotal += 3
    }else if(arr[i] == 'd'){
      rightTotal += 2
    }else if(arr[i] == 'z'){
      rightTotal += 1
    }
  }
  if(rightTotal > leftTotal){
    return "Right side wins!"
  }else if(leftTotal > rightTotal){
    return "Left side wins!"
  }else{
    return `Let's fight again!`
  }
}