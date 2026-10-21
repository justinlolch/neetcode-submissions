class Solution {
    /**
     * @param {number[]} days
     * @param {number[]} costs
     * @return {number}
     */
    mincostTickets(days: number[], costs: number[]): number {
        const memo = new Map();

        const dfs = (i: number, validUntil: number) => {
            const key = `${i}-${validUntil}`;

            if (memo.has(key))
                return memo.get(key);

            if (i >= days.length)
                return 0;
                
            if (validUntil >= days[i])
                return dfs(i+1, validUntil);

            const minCost = Math.min(
                dfs(i+1, days[i]) + costs[0],
                dfs(i+1, days[i] + 7 - 1) + costs[1],
                dfs(i+1, days[i] + 30 - 1) + costs[2],
            )
            
            memo.set(key, minCost);

            return minCost;
        }

        return dfs(0,0);
    }
}
