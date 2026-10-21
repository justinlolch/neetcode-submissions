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
     * @return {number[][]}
     */
    levelOrder(root: TreeNode | null): number[][] {
        const ans = [];
        if (!root) return ans;

        const stack = [root];

        while (stack.length > 0) {
            const l = stack.length;
            const level = [];
            for (let i = 0; i < l; i++) {
                const next = stack.shift();
                level.push(next.val);
                if (next.left) stack.push(next.left);
                if (next.right) stack.push(next.right);
            }
            ans.push(level);
        }

        return ans;
    }
}
