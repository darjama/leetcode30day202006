var largestDivisibleSubset = function(nums) {
  if (nums.length <= 1) return nums;
  nums.sort((a,b) => a-b);
  let result = nums.map(a => [a]);
  let maxArray = Array(nums.length).fill(1);
  let solution = [];
  for (let i = 0; i < nums.length; i++) {
    let longestMatch = i;
    for (let j = 0; j < i; j++) {
      if (nums[i] % nums[j] === 0){
        if (maxArray[j] + 1 > maxArray[i]) {
          maxArray[i] = maxArray[j] + 1;
          longestMatch = j;
        }
      }
    }
    if (longestMatch !== i) result[i] = result[longestMatch].concat(nums[i]);
    if (result[i].length > solution.length) solution = result[i];
  }

  return solution;
}

/**
 * Largest Divisible Subset
 * Given a set of distinct positive integers, find the largest subset such that every pair (Si, Sj) of elements 
 * in this subset satisfies:
 * 
 * Si % Sj = 0 or Sj % Si = 0.
 * 
 * If there are multiple solutions, return any subset is fine.
 * 
 * Example 1:
 * Input: [1,2,3]
 * Output: [1,2] (of course, [1,3] will also be ok)
 * 
 * Example 2:
 * Input: [1,2,4,8]
 * Output: [1,2,4,8]
 * @param {number[]} nums
 * @return {number[]}
 */
