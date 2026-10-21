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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode {
        let dummy = new ListNode(0);

        let cur = dummy;
        let add = false;
        while (l1 !== null || l2 !== null || add) {
            let sum = add ? 1 : 0;
            add = false;
            if (l1 !== null && l2 !== null) {
                sum += l1.val + l2.val
                if (sum > 9) {
                    add = true;
                    sum -= 10;
                }
                l1 = l1.next;
                l2 = l2.next;
            }
            else if (l1 !== null) {
                sum += l1.val;
                if (sum > 9) {
                    add = true;
                    sum -= 10;
                }
                l1 = l1.next;
            }
            else if (l2 !== null) {
                sum += l2.val;
                if (sum > 9) {
                    add = true;
                    sum -= 10;
                }
                l2 = l2.next;
            }

            cur.next = new ListNode(sum);
            cur = cur.next;
        }

        return dummy.next;
    }
}
