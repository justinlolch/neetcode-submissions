/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists: ListNode[]): ListNode {
        if (lists.length === 0) return null;

        const minHeap = new MinPriorityQueue((e) => e.val);
        for (const list of lists)
            if (list !== null) minHeap.enqueue(list);

        let dummy = new ListNode();
        let cur = dummy;

        while (minHeap.size() > 0) {
            let node = minHeap.dequeue();
            cur.next = node;
            cur = cur.next;

            node = node.next;
            if (node !== null)
                minHeap.enqueue(node);
        }
        
        return dummy.next;
    }

}
