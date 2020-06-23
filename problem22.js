var singleNumber = function(nums) {
  let ones = new Set()
  let twos = new Set()
  nums.forEach(a => {
      if (!twos.has(a)) {
        if (ones.has(a)) {
            ones.delete(a);
        twos.add(a)
            } else {
              ones.add(a)
            }
            }
  })
  return [...ones.values()][0];
};

/**
 *Single Number II
 *Given a non-empty array of integers, every element appears three times except for one, which appears exactly once.
 *Find that single one.
 *
 *Note:
 *Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
 *
 *Example 1:
 *Input: [2,2,3,2]
 *Output: 3
 *
 *Example 2:
 *Input: [0,1,0,1,0,1,99]
 *Output: 99
 *
 * @param {number[]} nums
 * @return {number}
 */
