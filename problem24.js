var numTrees = function(n) {
  let cache = new Map();
  cache.set(0,1);
  cache.set(1,1);
  function recurse(num) {
    let result1 = [];
    if (cache.has(num)) return cache.get(num);
    for (let i = 1; i <= num; i++) {
      result1.push(recurse(i-1));
    }
    let result = result1.reduce((a,b,index) => {
      return a + b * result1[result1.length - index -1]
      },0);
    cache.set(num, result);
    return result;
  }
  return recurse(n);
};

/**
 * Unique Binary Search Trees
 * Given n, how many structurally unique BST's (binary search trees) that store values 1 ... n?
 * 
 * Example:
 * 
 * Input: 3
 * Output: 5
 * Explanation:
 * Given n = 3, there are a total of 5 unique BST's:
 * 
 *    1         3     3      2      1
 *     \       /     /      / \      \
 *      3     2     1      1   3      2
 *     /     /       \                 \
 *    2     1         2                 3
 * @param {number} n
 * @return {number}
 */
