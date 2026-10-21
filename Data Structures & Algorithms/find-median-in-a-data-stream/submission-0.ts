class MedianFinder {
    private maxHeap = new MaxPriorityQueue();
    private minHeap = new MinPriorityQueue();

    constructor() {}

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num: number): void {
        const maxFront = this.maxHeap.front();
        
        if (this.maxHeap.isEmpty() || num <= maxFront)
            this.maxHeap.enqueue(num);
        else this.minHeap.enqueue(num);

        this.balanceHeap();
    }

    /**
     * @return {number}
     */
    findMedian(): number {
        if (this.maxHeap.size() > this.minHeap.size()) 
            return this.maxHeap.front();
        else if (this.minHeap.size() > this.maxHeap.size())
            return this.minHeap.front();
        else
            return (this.maxHeap.front() + this.minHeap.front()) / 2;
    }

    balanceHeap() {
        if (this.maxHeap.size() - this.minHeap.size() > 1) {
            this.minHeap.enqueue(this.maxHeap.dequeue());
        }
        
        if (this.minHeap.size() - this.maxHeap.size() > 1) {
            this.maxHeap.enqueue(this.minHeap.dequeue())
        }
    }
}