var isPowerOfTwo = function(n) {
   if(!n) return false;
   let logCheck = Math.log(n) / Math.log(2);
   return logCheck.toFixed(9) == Math.trunc(logCheck)
}

/**
 * Power of Two
 * Given an integer, write a function to determine if it is a power of two.
 * 
 * Example 1:
 * Input: 1
 * Output: true 
 * Explanation: 20 = 1
 * 
 * Example 2:
 * Input: 16
 * Output: true
 * Explanation: 24 = 16
 * 
 * @param {number} n
 * @return {boolean}
 */
