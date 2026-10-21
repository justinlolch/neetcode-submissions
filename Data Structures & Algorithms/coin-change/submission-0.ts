class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins: number[], amount: number): number {
        const memo = new Map();

        const dfs = (i: number, curSum: number) => {
            const key = `${i}-${curSum}`;

            if (memo.has(key))
                return memo.get(key);

            if (curSum === amount)
                return 0;

            if (curSum > amount || i >= coins.length)
                return Infinity;

            const minCoin = Math.min(
                1 + dfs(i, curSum + coins[i]),
                dfs(i+1, curSum),
                1 + dfs(i+1, curSum + coins[i])
            );

            memo.set(key, minCoin);

            return minCoin;
        }

        return dfs(0,0) === Infinity ? -1 : dfs(0,0) ;
    }
}
