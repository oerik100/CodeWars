// Problems
// An illustration of the iterative construction of a Menger sponge
// A method of constructing a Menger Sponge can be visualized as follows:

// Start from a cube (first part of image).
// Scale down the cube so that side length is 1/3 of its original, and make 20 copies of it.
// Place the copies so that they measure the same size as the original cube but without its central parts (next part of image)
// Repeat the process from step 2 for the new smaller cubes from the previous step.
// In each iteration (e.g. repeating the last three steps), the effect will be that parts of the cube will be removed, they'll never be added. Menger sponge will always consist of parts will never be removed, regardless of how many iterations you do.
// An alternative explanation:

// Start from a cube (first part of image).
// Devide each cube into 27 equal sized cubes.
// Remove the middle-cube and the six cubes on each side of the group of 27 cubes (second part of image).
// Repeat the process from step 2 for the smaller cubes (third and fourth part of image).
// Task
// In this kata you will create a function that takes non negative integers (from 0 to n) and return the amount of cubes that the Menger Sponge would have in that specific iteration.

// Solution
function calc_ms(n) {
  let total = 1
  for(let i = 1; i <= n; i++){
    total = total * 20
  }
  return total
}