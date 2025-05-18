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
 * Time: O(N) - since visit all nodes once
 * Space: O(N) - due to stacks needed to do recursion + 
 *               max recursion depth is height of tree which is O(N)
 *.              in worst case and O(LogN) in best
 */
var maxAncestorDiff = function(root) {
    if (!root) return 0;

    let result = 0;

    const helper = (node, currMax, currMin) => {
        if (!node) return;
        result = Math.max(
            result, Math.abs(currMax - node.val), Math.abs(currMin - node.val)
        );
        currMax = Math.max(currMax, node.val);
        currMin = Math.min(currMin, node.val);
        helper(node.left, currMax, currMin);
        helper(node.right, currMax, currMin);
    };

    helper(root, root.val, root.val);
    return result;
};
