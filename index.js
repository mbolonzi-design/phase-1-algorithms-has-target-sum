function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i =0; i < array.length; i++){
    let num = target - array[i];
    for(let j = 0; j < array.length; j++){
      if(array[j] === num && i != j)
        return true;
    }
  }
    return false;
}

/* 
  Write the Big O time complexity of your function here
  Here the function uses the quadratic time complexity for the nested loop
*/

/* 
  Add your pseudocode here
  take two items from the array
  add them together
  if the results is equivalent to the target return true
  otherwise return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
