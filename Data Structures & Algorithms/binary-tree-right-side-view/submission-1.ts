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
     * @return {number[]}
     */
    rightSideView(root: TreeNode | null): number[] {
        const ans = [];

        let stack: TreeNode[] = [];

        if (root) stack.push(root);

        while (stack.length > 0) {
            const rightMost: number = stack[stack.length - 1].val;
            ans.push(rightMost);

            const count = stack.length;
            for (let i = 0; i < count; i++) {
                const left = stack.shift();
                if (left.left) stack.push(left.left);
                if (left.right) stack.push(left.right);
            }
        }

        return ans;
    }
}
