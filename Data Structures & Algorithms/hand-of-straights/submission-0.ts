class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand: number[], groupSize: number): boolean {
        const count = new Map();
        const minHeap = new MinPriorityQueue();

        for (let i = 0; i < hand.length; i++) {
            if (!count.has(hand[i])) minHeap.enqueue(hand[i]);
            count.set(hand[i], (count.get(hand[i]) ?? 0) + 1);
        }

        for (let i = 0; i < hand.length; i+=groupSize) {
            while (count.get(minHeap.front()) === 0) minHeap.dequeue();
            let required = minHeap.front();
            for (let j = 0; j < groupSize; j++) {
                if ((count.get(required) ?? 0) > 0)
                    count.set(required, count.get(required) - 1);
                else return false;

                required += 1;
            }
        }

        return true
    }
}
