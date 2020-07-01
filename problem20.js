var getPermutation = function(n, k) {
  let total = 1
  const nums = []
  let result = ''
  for ( let i = 1; i <= n; i++) {
    total *= i;
    nums.push(i);
  }
  let remainder = k % total 
  for (let i = n; i >= 1; i--) {
    total  /= i;
    let place = Math.ceil(k / total);
    //console.log(place)
    result += nums.splice(place -1, 1)
    k -= (place - 1) * total;
  }
  
  return result
};

/**
 * Permutation Sequence
 * 
 * Solution
 * The set [1,2,3,...,n] contains a total of n! unique permutations.
 * 
 * By listing and labeling all of the permutations in order, we get the following sequence for n = 3:
 * 
 * "123"
 * "132"
 * "213"
 * "231"
 * "312"
 * "321"
 * Given n and k, return the kth permutation sequence.
 * 
 * Note:
 * Given n will be between 1 and 9 inclusive.
 * Given k will be between 1 and n! inclusive.
 * 
 * Example 1:
 * Input: n = 3, k = 3
 * Output: "213"
 * 
 * Example 2:
 * Input: n = 4, k = 9
 * Output: "2314"
 * 
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
