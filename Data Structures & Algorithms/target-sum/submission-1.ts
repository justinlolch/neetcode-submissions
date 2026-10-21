class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums: number[], target: number): number {
        const memo = new Map();

        const dfs = (i: number, curSum: number) => {
            const key = `${i}-${curSum}`;

            if (memo.has(key)) {
                return memo.get(key);
            } else if (i >= nums.length) {
                if (curSum === target)
                    return 1;
                else return 0;
            }

            const ways = dfs(i+1, curSum + nums[i]) + dfs(i+1, curSum - nums[i]);

            memo.set(key, ways);
            return ways;
        }

        return dfs(0, 0);
    }
}
