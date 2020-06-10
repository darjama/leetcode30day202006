var searchInsert = function(nums, target) {
    var left = 0;
    var right = nums.length - 1;
    var i;
    while (left <= right) {
      i = Math.trunc((left + right)/2);
      //console.log(left, i, right)
      if (nums[i] === target) return i;
      if (nums[i] < target) {
          left = i + 1;
      } else {
          right = i - 1;
      }
    }
    return left;
};

/**
 * Search Insert Position
 * Given a sorted array and a target value, return the index if the target is found. If not, return the index where it 
 * would be if it were inserted in order.
 * 
 * You may assume no duplicates in the array.
 * 
 * Example 1:
 * 
 * Input: [1,3,5,6], 5
 * Output: 2
 * Example 2:
 * 
 * Input: [1,3,5,6], 2
 * Output: 1
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
