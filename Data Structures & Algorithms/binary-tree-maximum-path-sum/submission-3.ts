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
    private gMax: number = -Infinity;

    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxPathSum(root: TreeNode | null): number {
        this.dfs(root);

        return this.gMax;
    }

    dfs(node: TreeNode): number {
        if (node === null) return 0;

        const left = Math.max(0, this.dfs(node.left));
        const right = Math.max(0, this.dfs(node.right));

        const pathThroughCurrent = node.val + left + right;

        this.gMax = Math.max(this.gMax, pathThroughCurrent);

        return node.val + Math.max(left, right);
    }
}
