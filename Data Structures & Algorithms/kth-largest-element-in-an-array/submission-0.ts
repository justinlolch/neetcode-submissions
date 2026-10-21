class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums: number[], k: number): number {
        const maxHeap = new MaxPriorityQueue();

        for (const num of nums)
            maxHeap.enqueue(num);

        for (let i = 1; i < k; i++)
            maxHeap.dequeue();

        return maxHeap.front();
    }
}
