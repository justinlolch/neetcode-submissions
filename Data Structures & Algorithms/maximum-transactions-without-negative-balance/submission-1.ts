class Solution {
    /**
     * @param {number[]} transactions
     * @return {number}
     */
    maxTransactions(transactions: number[]): number {
        const minHeap = new MinPriorityQueue();
        let ans = 0;
        let balance = 0;

        for (let i = 0; i < transactions.length; i++) {
            const cur = transactions[i];
            if (cur >= 0) {
                balance += cur;
                ans++;
            } else {
                minHeap.enqueue(cur);
                balance += cur;
                if (balance >= 0) {
                    ans++;
                } else {
                    const mostNeg = minHeap.dequeue();
                    balance -= mostNeg;
                }
            }
        }
        
        return ans;
    }
}
