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
     * @return {number}
     */
    goodNodes(root: TreeNode | null): number {
        let ans = 0;

        const stack: {node: TreeNode, max: number}[] = [{node: root, max: -Infinity}];

        while (stack.length > 0) {
            const {node, max} = stack.shift();
            if (max <= node.val) {
                ans++;
            }
            if (node.left) stack.push({node: node.left, max: Math.max(max, node.val)});
            if (node.right) stack.push({node: node.right, max: Math.max(max, node.val)});
        }

        return ans;
    }
}
