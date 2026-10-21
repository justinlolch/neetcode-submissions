class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        const memo = new Map();

        const dfs = (i: number, maxLength: number) => {
            const key = `${i}-${maxLength}`;
            if (i >= maxLength)
                return 0;

            if (memo.has(key)) return memo.get(key);

            const ans = Math.max(
                dfs(i + 2, maxLength) + nums[i],
                dfs(i + 1, maxLength)
            )
            
            memo.set(key, ans);

            return ans;
        }

        return Math.max(
            dfs(2, nums.length - 1) + nums[0],
            dfs(1, nums.length)
        )
    }
}
