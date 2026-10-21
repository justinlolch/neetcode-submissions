/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node: Node | null): Node {
        if (!node) return null;

        const map = new Map<any, Node>();
        const queue = new Queue();
        map.set(node, new Node(node.val));
        queue.push(node);

        while (!queue.isEmpty()) {
            const cur = queue.pop();
            for (const nei of cur.neighbors) {
                if (!map.has(nei)) {
                    map.set(nei, new Node(nei.val));
                    queue.push(nei);
                }
                map.get(cur).neighbors.push(map.get(nei));
            }
        }

        return map.get(node);
    }
}
