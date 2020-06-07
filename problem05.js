var Solution = function(w) {
    this.resMap = [];
    w.forEach((a,index) => {
      this.resMap.push((this.resMap[this.resMap.length -1] || 0 ) + a );
    })
};

/**
 * @return {number}
 */
 
 Solution.prototype.pickIndex = function() {
  let key = Math.ceil(Math.random()*(this.resMap[this.resMap.length -1]));
  let left = 0, right = this.resMap.length -1;
  while (left <= right) {
    let mid = Math.floor((left + right )/ 2);
    if (this.resMap[mid] === key || (this.resMap[mid] > key && this.resMap[mid-1] < key)) return mid;
    if (this.resMap[mid] > key && mid === 0) return mid;
    if (this.resMap[mid] > key) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */

/**
 * Random Pick with Weight
 * 
 * Solution
 * Given an array w of positive integers, where w[i] describes the weight of index i, write a function pickIndex which randomly picks an index in proportion to its weight.
 * 
 * Note:
 * 
 * 1 <= w.length <= 10000
 * 1 <= w[i] <= 10^5
 * pickIndex will be called at most 10000 times.
 * Example 1:
 * 
 * Input: 
 * ["Solution","pickIndex"]
 * [[[1]],[]]
 * Output: [null,0]
 * Example 2:å
 * 
 * Input: 
 * ["Solution","pickIndex","pickIndex","pickIndex","pickIndex","pickIndex"]
 * [[[1,3]],[],[],[],[],[]]
 * Output: [null,0,1,1,1,0]
 * Explanation of Input Syntax:
 * 
 * The input is two lists: the subroutines called and their arguments. Solution's constructor has one argument, the array w. pickIndex has no arguments. Arguments are always wrapped with a list, even if there aren't any.
 * @param {number[]} w
 */

