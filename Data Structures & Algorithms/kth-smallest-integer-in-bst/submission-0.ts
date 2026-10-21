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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root: TreeNode | null, k: number): number {
        
        const stack: TreeNode[] = [];
        let count = 1;
        let cur = root;

        while (cur || stack.length > 0) {
            if (cur) {
                stack.push(cur);
                cur = cur.left;
            } else {
                cur = stack.pop();
                if (count === k) return cur.val
                else {
                    count++;
                }
                cur = cur.right;
            }
        }
    }
}
