// This is the code...


//1. Let's say I want to multiply two numbers (single digits) from 6-10
// we should probably get them from command line

var left = process.argv[2];
var right = process.argv[3];

console.log('Left: ', left);
console.log('Right: ', right);


// 2. I use my fingers to represent each number in one hand...  with following mapping:
//   thumb - 6
//   index - 7
//   middle - 8
//   ringer - 9
//   pinky - 10
  
// 3. Join all the fingers that reprent the 2 numbers being multiplied
// 4. Then count how many fingers there are joined....    X 10
// 5. Lastly count roaming fingers from left hand and multiply by roaming fingers in right hand.
// 6. Final step: add step #4 with step #5