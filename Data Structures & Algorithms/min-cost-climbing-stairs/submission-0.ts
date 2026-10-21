class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost: number[]): number {
        const memo = new Map();

        const dfs = (i: number): number => {
            if (i >= cost.length)
                return 0;

            if (memo.has(i)) return memo.get(i);

            const min = Math.min(
                dfs(i + 1) + cost[i],
                dfs(i + 2) + cost[i]
            );

            memo.set(i, min);

            return min;
        }

        return Math.min(
            dfs(0),
            dfs(1)
        );
    }
}
