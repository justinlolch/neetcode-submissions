class HitCounter {
    private queue;

    constructor() {
        this.queue = new Queue();
    }

    /**
     * @param {number} timestamp
     * @return {void}
     */
    hit(timestamp: number): void {
        this.queue.enqueue(timestamp);
    }

    /**
     * @param {number} timestamp
     * @return {number}
     */
    getHits(timestamp: number): number {
        while (!this.queue.isEmpty() && timestamp - this.queue.front() >= 300)
            this.queue.dequeue();
        return this.queue.size();
    }
}

/**
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */
