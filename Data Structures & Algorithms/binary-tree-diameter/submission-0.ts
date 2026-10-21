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
    private diameter: number;
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root: TreeNode | null): number {
        this.diameter = 0;
        this.maxLength(root);
        return this.diameter;
    }

    maxLength(root: TreeNode | null): number {
        if (root === null) return 0;

        const left = this.maxLength(root.left);
        const right = this.maxLength(root.right);

        this.diameter = Math.max(this.diameter, left + right);

        return Math.max(left, right) + 1;
    }
}
