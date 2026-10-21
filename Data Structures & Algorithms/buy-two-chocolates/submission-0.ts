class Solution {
    /**
     * @param {number[]} prices
     * @param {number} money
     * @return {number}
     */
    buyChoco(prices: number[], money: number): number {
        prices.sort((a,b)=>a-b);

        const sum = prices[0] + prices[1];

        return (money - sum) >= 0 ? money - sum : money; 
    }
}
