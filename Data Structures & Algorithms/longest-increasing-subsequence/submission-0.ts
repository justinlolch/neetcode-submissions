class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums: number[]): number {
        const memo = new Map();

        const dfs = (i: number, prev: number) => {
            const key = `${i}-${prev}`;
            if (memo.has(key)) return memo.get(key);

            if (i >= nums.length) return 0;

            const cur = nums[i];

            let ans;

            if (prev >= cur)
                ans = dfs(i+1, prev);
            else {
                ans = Math.max(
                    dfs(i+1, prev),
                    dfs(i+1, cur) + 1
                )
            }

            memo.set(key, ans);

            return ans;
        }

        return dfs(0, -Infinity);
    }
}
