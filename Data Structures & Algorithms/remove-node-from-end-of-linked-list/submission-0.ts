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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head: ListNode | null, n: number): ListNode {
        let dummy = new ListNode(0, head);
        let left = dummy;
        let right = head;

        while (n > 0 && right !== null) {
            right = right.next;
            n -= 1;
        }

        while (right !== null) {
            left = left.next;
            right = right.next;
        }

        // delete
        left.next = left.next.next;

        return dummy.next;
    }
}
