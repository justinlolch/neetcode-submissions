class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        const map = new Map();

        const dfs = (i: number, cost: number, hasStock: boolean) => {
            const key = `${i}-${cost}-${hasStock}`;

            if (map.has(key))
                return map.get(key);

            if (i === prices.length)
                return 0;

            let profit;

            if (hasStock) {
                profit = Math.max(
                    // sell
                    dfs(i+1, 0, false) + (prices[i] - cost),
                    // not sell
                    dfs(i+1, cost, hasStock)
                )
            } else {
                profit = Math.max(
                    // buy
                    dfs(i+1, prices[i], true),
                    // not buy
                    dfs(i+1, 0, false)
                )
            }

            map.set(key, profit);

            return profit;
        };

        return dfs(0, 0, false);
    }
}
