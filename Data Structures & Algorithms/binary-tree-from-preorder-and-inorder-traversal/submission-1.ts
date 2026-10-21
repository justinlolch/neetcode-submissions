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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder: number[], inorder: number[]): TreeNode {
        const inorderIndex = new Map<number, number>();

        for (let i = 0; i < inorder.length; i++) {
            inorderIndex.set(inorder[i], i);
        }

        let preorderIndex = 0;

        const build = (
            left: number,
            right: number
        ): TreeNode | null => {
            if (left > right) {
                return null;
            }

            const rootValue = preorder[preorderIndex];
            preorderIndex++;

            const root = new TreeNode(rootValue);
            const middle = inorderIndex.get(rootValue)!;

            root.left = build(left, middle - 1);
            root.right = build(middle + 1, right);

            return root;
        };

        return build(0, inorder.length - 1);
    }
}
