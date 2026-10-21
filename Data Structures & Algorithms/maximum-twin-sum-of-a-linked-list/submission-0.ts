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
     * @return {number}
     */
    pairSum(head: ListNode | null): number {
        const hash = new Map();

        let i = 0, cur = head;
        while (cur !== null) {
            const val = cur.val;
            hash.set(i, val);
            i++;
            cur = cur.next;
        }

        const n = i;
        let max = 0;
        for (let j = 0; j < n; j++) {
            const cur = hash.get(j);
            const twinNode = hash.get(this.twinNodeIndex(j, n));
            max = Math.max(max, cur + twinNode);
        }

        return max;
    }

    twinNodeIndex(curIndex: number, n: number) {
        return n - 1- curIndex;
    }
}
