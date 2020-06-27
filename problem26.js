var sumNumbers = function(root) {
  if (!root) return 0;
  let result = 0 ;
  root.digits = 0;
  let current = [root];
  for (let node of current) {
    if (!node.left && !node.right) {
      result += node.digits * 10 + node.val;
      continue;
    }
    [node.left, node.right].forEach(a => {
      if (a){
        a.digits = node.digits *10 + node.val;
        current.push(a);
      } 
    })
  }
  return result;
}

// recursive version:
// var sumNumbers = function(root, digits = 0) {
//   if (!root) return 0;
//   digits = digits * 10 + root.val;
//   if (!root.left && !root.right) return digits;
//   return sumNumbers(root.left, digits) + sumNumbers(root.right, digits);
// };

/**
 * Sum Root to Leaf Numbers
 * 
 * Given a binary tree containing digits from 0-9 only, each root-to-leaf path could represent a number.
 * An example is the root-to-leaf path 1->2->3 which represents the number 123.
 * Find the total sum of all root-to-leaf numbers.
 * Note: A leaf is a node with no children.
 * 
 * Example:
 * Input: [1,2,3]
 *     1
 *    / \
 *   2   3
 * Output: 25
 * Explanation:
 * The root-to-leaf path 1->2 represents the number 12.
 * The root-to-leaf path 1->3 represents the number 13.
 * Therefore, sum = 12 + 13 = 25.
 * 
 * Example 2:
 * Input: [4,9,0,5,1]
 *     4
 *    / \
 *   9   0
 *  / \
 * 5   1
 * Output: 1026
 * Explanation:
 * The root-to-leaf path 4->9->5 represents the number 495.
 * The root-to-leaf path 4->9->1 represents the number 491.
 * The root-to-leaf path 4->0 represents the number 40.
 * Therefore, sum = 495 + 491 + 40 = 1026.
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
