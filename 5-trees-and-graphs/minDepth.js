/**
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
 *
 * Time: O(N)
 * Space: O(N)
 * 
 */
var minDepth = function(root) {
  const dfs = root => {
      if (root === null) return 0;
      if (root.left === null) {
          return 1 + dfs(root.right);
      } else if (root.right === null) {
          return 1 + dfs(root.left);
      }
      return 1 + Math.min(dfs(root.left), dfs(root.right));
  }
  return dfs(root);
};
