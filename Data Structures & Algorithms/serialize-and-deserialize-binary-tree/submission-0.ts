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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root: TreeNode | null): string {
        const vals = [];
        this.dfsSerialize(root, vals);
        return vals.join(',');
    }

    dfsSerialize(node: TreeNode | null, res: string[]) {
        if (node === null) {
            res.push("N");
            return;
        }
        res.push(node.val.toString());
        this.dfsSerialize(node.left, res);
        this.dfsSerialize(node.right, res);
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data: string): TreeNode | null {
        const vals = data.split(',');
        const i = {val : 0};
        return this.dfsDeserialize(vals, i);
    }

    dfsDeserialize(vals: string[], i: { val: number }): TreeNode | null {
        if (vals[i.val] === 'N') {
            i.val++;
            return null;
        }
        const node = new TreeNode(parseInt(vals[i.val]));
        i.val++;
        node.left = this.dfsDeserialize(vals, i);
        node.right = this.dfsDeserialize(vals, i);
        return node;
    }
}