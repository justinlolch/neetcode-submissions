class Solution {
    /**
     * @param {number} k
     * @param {number} w
     * @param {number[]} profits
     * @param {number[]} capital
     * @return {number}
     */
    findMaximizedCapital(
        k: number,
        w: number,
        profits: number[],
        capital: number[],
    ) {
        const minHeap = new MaxPriorityQueue(({profit, c}) => profit);
        const tmp: {profit: number, c: number}[] = [];

        for (let i = 0; i < profits.length; i++) 
            minHeap.enqueue({profit: profits[i], c: capital[i]})
        
        for (let i = 0; i < k; i++) {
            let maxProfit = minHeap.dequeue();
            while (!minHeap.isEmpty() && maxProfit.c > w) {
                tmp.push(maxProfit);
                maxProfit = minHeap.dequeue();
            }
            if (maxProfit && maxProfit.c <= w)
                w += maxProfit.profit;
            while (tmp.length > 0)
                minHeap.enqueue(tmp.pop());
        }

        return w;
    }
}
