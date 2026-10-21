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
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head: ListNode | null, k: number): ListNode {
        let dummy = new ListNode(0);
        dummy.next = head;
        let groupPrev = dummy;

        while (true) {
            let kth = this.getKthNode(groupPrev, k);
            if (kth === null) break;

            // reverse
            const groupNext = kth.next;
            let prev = kth.next;
            let cur = groupPrev.next;

            while (cur !== groupNext) {
                let tmp = cur.next;
                cur.next = prev;
                prev = cur;
                cur = tmp;
            }

            const tmp = groupPrev.next;
            groupPrev.next = kth;
            groupPrev = tmp;
        }

        return dummy.next;
    }

    getKthNode(node: ListNode, k: number): ListNode {
        while (node && k > 0) {
            node = node.next;
            k--;
        }

        return node;
    }

}
