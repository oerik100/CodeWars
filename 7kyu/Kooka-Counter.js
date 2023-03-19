// Problems
// A family of kookaburras are in my backyard.

// I can't see them all, but I can hear them!

// How many kookaburras are there?

// Hint
// The trick to counting kookaburras is to listen carefully

// The males sound like HaHaHa...

// The females sound like hahaha...

// And they always alternate male/female

// Examples
// ha = female => 1
// Ha = male => 1
// Haha = male + female => 2
// haHa = female + male => 2
// hahahahaha = female => 1
// hahahahahaHaHaHa = female + male => 2
// HaHaHahahaHaHa = male + female + male => 3

// Solution
var kookaCounter = function(laughing) {
    let male = 0
    let female = 0
    let total = 0
    let newArr = laughing.split('').filter(x => x == 'h' || x == 'H')
    console.log(newArr)
    
    
    for(let i = 0; i < newArr.length; i++){
      if(newArr[i] != newArr[i-1]){
        total += 1
      }
    }
    return total