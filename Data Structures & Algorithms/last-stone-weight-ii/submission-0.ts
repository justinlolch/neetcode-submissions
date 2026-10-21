class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeightII(stones: number[]): number {
        const sum = stones.reduce((acc,cur)=> acc+cur, 0);
        const target = Math.ceil(sum / 2);
        const memo = new Map();

        const dfs = (i: number, curSum: number) => {
            const key = `${i}-${curSum}`;
            
            if (memo.has(key))
                return memo.get(key);

            if (curSum >= target || i >= stones.length) {
                return Math.abs(curSum - (sum - curSum));
            }

            const min = Math.min(
                dfs(i+1, curSum + stones[i]),
                dfs(i+1, curSum)
            );

            memo.set(key, min);

            return min;
        }

        return dfs(0, 0);
    }
}
