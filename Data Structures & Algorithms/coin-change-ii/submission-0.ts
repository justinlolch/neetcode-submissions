class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount: number, coins: number[]): number {
        const memo = new Map();

        const dfs = (i: number, curAmount: number) => {
            const key = `${i}-${curAmount}`;

            if (memo.has(key))
                return memo.get(key);

            if (i >= coins.length || curAmount > amount)
                return 0;

            if (curAmount === amount)
                return 1;

            const ways = 
                dfs(i, curAmount + coins[i]) +
                dfs(i+1, curAmount)

            memo.set(key, ways);

            return ways;
        }

        return dfs(0, 0);
    }
}
