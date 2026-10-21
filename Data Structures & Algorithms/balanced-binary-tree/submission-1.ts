/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root: TreeNode | null): boolean {
        if (root === null) return true;

        const diff = Math.abs(this.maxDepth(root.left) - this.maxDepth(root.right)) <= 1;

        return diff && this.isBalanced(root.left) && this.isBalanced(root.right);
    }

    maxDepth(node: TreeNode | null): number {
        if (node === null) return 0;

        return 1 + Math.max(this.maxDepth(node.left), this.maxDepth(node.right));
    }
}
