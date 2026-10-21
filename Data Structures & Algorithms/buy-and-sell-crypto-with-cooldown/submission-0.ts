class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        const memo = new Map();

        const dfs = (i: number, ableToBuy: boolean, curBuyPrice: number): number => {
            if (i >= prices.length) return 0;

            const key = `${i}-${ableToBuy}-${curBuyPrice}`;
            if (memo.has(key)) return memo.get(key);

            let max;

            const cur = prices[i];

            if (curBuyPrice !== null) {
                max = Math.max(
                    dfs(i + 1, false, null) + (cur - curBuyPrice),
                    dfs(i + 1, false, curBuyPrice)
                );
            } else {
                if (ableToBuy) {
                    max = Math.max(
                        dfs(i + 1, false, cur),
                        dfs(i + 1, true, null),
                    );
                } else {
                    max = dfs(i + 1, true, null)
                }
            }
            
            memo.set(key, max);

            return max;
        }

        return dfs(0, true, null);
    }
}
