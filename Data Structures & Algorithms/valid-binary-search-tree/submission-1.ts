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
    isValidBST(root: TreeNode | null): boolean {
        return this.dfs(root, -Infinity, Infinity);
    }

    dfs(node: TreeNode, left: number, right: number): boolean {
        if (node === null) return true;
        if (left >= node.val || right <= node.val) return false;
        return this.dfs(node.left, left, node.val) && this.dfs(node.right, node.val, right);
    }
}
