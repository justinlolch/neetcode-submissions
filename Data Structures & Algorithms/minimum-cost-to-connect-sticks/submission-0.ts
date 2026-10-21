class Solution {
    /**
     * @param {number[]} sticks
     * @return {number}
     */
    connectSticks(sticks: number[]): number {
        const minHeap = new MinPriorityQueue();

        for (const stick of sticks)
            minHeap.enqueue(stick);

        let totalCost = 0;

        while (minHeap.size() > 1) {
            const next = minHeap.dequeue();
            const following = minHeap.dequeue();

            const curCost = next + following;
            minHeap.enqueue(curCost)
            totalCost += curCost;
        }

        return totalCost;
    }
}
