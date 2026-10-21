class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones: number[]): number {
        const maxHeap = new MaxPriorityQueue();

        for (const stone of stones)
            maxHeap.enqueue(stone);

        while (maxHeap.size() > 1) {
            const haviest = maxHeap.dequeue();
            const second = maxHeap.dequeue();
            const remaining = haviest - second;

            if (remaining > 0)
                maxHeap.enqueue(remaining);
        }

        return maxHeap.size() === 1 ? maxHeap.front() : 0;
    }
}
