class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        const memo = new Map();

        const dfs = (i: number) => {
            if (i >= nums.length) return 0;

            if (memo.has(i)) return memo.get(i);

            const max = Math.max(
                dfs(i + 2) + nums[i],
                dfs(i + 1)
            )

            memo.set(i, max);

            return max;
        }

        return dfs(0);
    }
}
