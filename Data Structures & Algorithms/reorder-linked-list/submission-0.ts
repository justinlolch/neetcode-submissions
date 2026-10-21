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
     * @return {void}
     */
    reorderList(head: ListNode | null): void {
        let slow = head, fast = head;

        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let second = slow.next;
        slow.next = null;

        let prev = null;

        while (second !== null) {
            const next = second.next;
            second.next = prev;
            prev = second;
            second = next;
        }

        second = prev;
        
        let first = head;

        while (second !== null) {
            let firstTmp = first.next;
            let secondTmp = second.next;
            first.next = second;
            second.next = firstTmp;

            first = firstTmp;
            second = secondTmp;
        }
    }
}
