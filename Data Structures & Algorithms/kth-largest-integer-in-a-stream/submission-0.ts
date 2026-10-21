class KthLargest {
    private minHeap = new MinPriorityQueue();
    private k: number;

    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k: number, nums: number[]) {
        this.k = k;
        for (const num of nums) {
            this.minHeap.enqueue(num);
        }
        this.maintainHeapSizeToK();
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val: number): number {
        this.minHeap.enqueue(val);
        this.maintainHeapSizeToK();
        return this.minHeap.front();
    }

    maintainHeapSizeToK() {
        while (this.minHeap.size() > this.k) {
            this.minHeap.dequeue();
        }
    }
}