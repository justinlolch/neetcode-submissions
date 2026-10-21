class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let l = 0; 
        let r = 1;
        let max = 0;

        while (r < prices.length) {
            if (prices[l] < prices[r])
                max = Math.max(max, prices[r] - prices[l])
            else l = r;
            r+=1;
        }

        return max;
    }
}
